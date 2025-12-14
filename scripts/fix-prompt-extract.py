#!/usr/bin/env python3
"""
Ultimate Markdown Prompt Fixer - Phase 1: Extract and Prepare
This script extracts English content and prepares it for translation.
Outputs JSON files that can be translated externally or via API.
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple


class PromptExtractor:
    """Extract and structure content for translation."""

    def __init__(self, base_dir: Path):
        self.base_dir = base_dir
        self.output_dir = base_dir / 'translation_batch'
        self.output_dir.mkdir(exist_ok=True)

    def extract_sections(self, content: str) -> Dict:
        """Extract all sections from markdown."""
        # Header
        header_match = re.match(r'^(.*?)(?=##\s)', content, re.DOTALL)
        header = header_match.group(1).strip() if header_match else ""

        # Chinese section
        zh_match = re.search(
            r'##\s*中文版本\s*\(zh-CN\)(.*?)(?=---|\n##\s*English Version)',
            content,
            re.DOTALL | re.IGNORECASE
        )
        zh_content = zh_match.group(1).strip() if zh_match else ""

        # English section
        en_match = re.search(
            r'##\s*English Version\s*\(en-US\)(.*)',
            content,
            re.DOTALL | re.IGNORECASE
        )
        en_content = en_match.group(1).strip() if en_match else ""

        return {
            'header': header,
            'zh_original': zh_content,
            'en_content': en_content
        }

    def split_into_chunks(self, content: str, max_chunk_size: int = 1500) -> List[Dict]:
        """
        Split content into translatable chunks while preserving structure.

        Returns list of dicts with:
          - type: 'text' | 'code' | 'heading'
          - content: the actual content
          - level: heading level (for headings)
        """
        chunks = []
        current_text = []
        lines = content.split('\n')

        i = 0
        while i < len(lines):
            line = lines[i]

            # Code block
            if line.strip().startswith('```'):
                # Save accumulated text first
                if current_text:
                    chunks.append({
                        'type': 'text',
                        'content': '\n'.join(current_text)
                    })
                    current_text = []

                # Extract full code block
                code_lines = [line]
                i += 1
                while i < len(lines) and not lines[i].strip().startswith('```'):
                    code_lines.append(lines[i])
                    i += 1
                if i < len(lines):  # Closing ```
                    code_lines.append(lines[i])

                chunks.append({
                    'type': 'code',
                    'content': '\n'.join(code_lines)
                })

            # Heading
            elif line.strip().startswith('#'):
                # Save accumulated text first
                if current_text:
                    chunks.append({
                        'type': 'text',
                        'content': '\n'.join(current_text)
                    })
                    current_text = []

                # Count heading level
                level = len(re.match(r'^#+', line.strip()).group())
                heading_text = line.strip().lstrip('#').strip()

                chunks.append({
                    'type': 'heading',
                    'level': level,
                    'content': heading_text
                })

            # Regular text
            else:
                current_text.append(line)

                # Check if we should chunk
                if '\n'.join(current_text).count('\n') > 20:  # ~20 lines per chunk
                    chunks.append({
                        'type': 'text',
                        'content': '\n'.join(current_text)
                    })
                    current_text = []

            i += 1

        # Add remaining text
        if current_text:
            chunks.append({
                'type': 'text',
                'content': '\n'.join(current_text)
            })

        return chunks

    def create_translation_job(self, filepath: Path) -> Dict:
        """Create a translation job file for a given markdown file."""
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        sections = self.extract_sections(content)

        # Calculate stats
        zh_len = len(re.sub(r'```.*?```', '', sections['zh_original'], flags=re.DOTALL).strip())
        en_len = len(re.sub(r'```.*?```', '', sections['en_content'], flags=re.DOTALL).strip())

        if en_len == 0:
            return None

        # Split English content into chunks
        chunks = self.split_into_chunks(sections['en_content'])

        job = {
            'source_file': str(filepath.relative_to(self.base_dir.parent.parent.parent)),
            'header': sections['header'],
            'zh_original': sections['zh_original'],
            'zh_original_length': zh_len,
            'en_length': en_len,
            'ratio': en_len / zh_len if zh_len > 0 else float('inf'),
            'chunks': chunks,
            'translated_chunks': []  # To be filled by translation
        }

        return job

    def process_all_files(self, file_list: List[Path]) -> List[Dict]:
        """Process multiple files and create translation jobs."""
        jobs = []

        for filepath in file_list:
            print(f"📝 Processing: {filepath.relative_to(self.base_dir.parent.parent.parent)}")

            job = self.create_translation_job(filepath)
            if job:
                jobs.append(job)
                print(f"   ✅ Created job: {len(job['chunks'])} chunks, {job['en_length']:,} chars")
            else:
                print(f"   ⏭️  Skipped (no content)")

        return jobs

    def save_jobs(self, jobs: List[Dict], output_file: str = 'translation_jobs.json'):
        """Save translation jobs to JSON file."""
        output_path = self.output_dir / output_file

        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(jobs, f, ensure_ascii=False, indent=2)

        print(f"\n💾 Saved {len(jobs)} jobs to: {output_path}")

        # Also create a simplified version for manual translation
        simple_jobs = []
        for job in jobs:
            simple_jobs.append({
                'file': job['source_file'],
                'ratio': f"{job['ratio']:.1f}x",
                'en_text': job['en_content'] if 'en_content' in job else '',
                'zh_original': job['zh_original']
            })

        simple_path = self.output_dir / 'translation_jobs_simple.json'
        with open(simple_path, 'w', encoding='utf-8') as f:
            json.dump(simple_jobs, f, ensure_ascii=False, indent=2)

        print(f"💾 Saved simplified version to: {simple_path}")

        return output_path


def main():
    import argparse

    parser = argparse.ArgumentParser(
        description='Extract English content from Markdown files for translation'
    )
    parser.add_argument(
        '--top-n',
        type=int,
        default=10,
        help='Number of worst files to process (default: 10)'
    )
    parser.add_argument(
        '--all',
        action='store_true',
        help='Process all problematic files (ignores --top-n)'
    )

    args = parser.parse_args()

    # Setup
    base_dir = Path(__file__).parent.parent / 'public' / 'data' / 'prompts' / 'styles'
    extractor = PromptExtractor(base_dir)

    print("🔍 Finding problematic files...")

    # Find all files that need fixing
    from pathlib import Path
    sys.path.insert(0, str(Path(__file__).parent))

    # Import the analyzer
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        "analyze_prompts",
        Path(__file__).parent / "analyze-prompts.py"
    )
    analyze_module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(analyze_module)

    # Get all files
    all_files = list(base_dir.rglob('custom.md'))
    problematic = []

    for filepath in all_files:
        result = analyze_module.analyze_markdown_file(filepath)
        if result['needs_fix'] and result['ratio'] > 5.0:
            problematic.append((filepath, result['ratio']))

    # Sort by ratio
    problematic.sort(key=lambda x: x[1], reverse=True)

    # Select files to process
    if args.all:
        files_to_process = [f[0] for f in problematic]
    else:
        files_to_process = [f[0] for f in problematic[:args.top_n]]

    print(f"📊 Found {len(problematic)} problematic files")
    print(f"🎯 Processing {len(files_to_process)} files")
    print()

    # Process files
    jobs = extractor.process_all_files(files_to_process)

    # Save jobs
    output_path = extractor.save_jobs(jobs)

    # Print instructions
    print("\n" + "="*80)
    print("✅ EXTRACTION COMPLETE")
    print("="*80)
    print(f"\n📁 Translation jobs saved to: {output_path}")
    print("\n📖 Next steps:")
    print("   1. Use translation_jobs.json for API-based translation")
    print("   2. Use translation_jobs_simple.json for manual translation")
    print("   3. Run fix-prompt-apply.py to apply translations back to files")
    print()

    return 0


if __name__ == '__main__':
    sys.exit(main())
