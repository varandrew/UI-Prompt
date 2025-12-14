#!/usr/bin/env python3
"""
Fix Markdown prompt files with missing or incomplete Chinese translations.

This script:
1. Reads files with zh-CN/en-US sections
2. Extracts English content
3. Translates to Simplified Chinese using OpenAI API (or manual input)
4. Reconstructs the file with proper Markdown formatting
"""

import os
import re
import json
import sys
from pathlib import Path
from typing import Dict, Tuple, Optional
import argparse

# Optional: OpenAI API for translation
try:
    import openai
    HAS_OPENAI = True
except ImportError:
    HAS_OPENAI = False
    print("⚠️  OpenAI module not available. Will use manual translation mode.")


class PromptTranslationFixer:
    """Fix Markdown files with missing Chinese translations."""

    def __init__(self, use_api: bool = False, api_key: Optional[str] = None):
        self.use_api = use_api and HAS_OPENAI
        if self.use_api and api_key:
            openai.api_key = api_key

    def extract_sections(self, content: str) -> Tuple[str, str, str]:
        """
        Extract header, zh-CN section, and en-US section from markdown content.

        Returns:
            (header, zh_content, en_content)
        """
        # Extract header (everything before first ## heading)
        header_match = re.match(r'^(.*?)(?=##\s)', content, re.DOTALL)
        header = header_match.group(1).strip() if header_match else ""

        # Extract Chinese section
        zh_match = re.search(
            r'##\s*中文版本\s*\(zh-CN\)(.*?)(?=##\s*English Version\s*\(en-US\)|$)',
            content,
            re.DOTALL
        )
        zh_content = zh_match.group(1).strip() if zh_match else ""

        # Extract English section
        en_match = re.search(
            r'##\s*English Version\s*\(en-US\)(.*)',
            content,
            re.DOTALL
        )
        en_content = en_match.group(1).strip() if en_match else ""

        return header, zh_content, en_content

    def translate_text(self, text: str, preserve_code: bool = True) -> str:
        """
        Translate English text to Simplified Chinese.

        Args:
            text: English text to translate
            preserve_code: If True, preserve code blocks and technical terms

        Returns:
            Translated Simplified Chinese text
        """
        if not self.use_api:
            print("\n⚠️  API translation not available. Please provide translation manually.")
            return text

        # Extract and preserve code blocks
        code_blocks = []
        if preserve_code:
            def replace_code(match):
                code_blocks.append(match.group(0))
                return f"___CODE_BLOCK_{len(code_blocks) - 1}___"

            text = re.sub(r'```.*?```', replace_code, text, flags=re.DOTALL)

        try:
            # Use OpenAI API for translation
            response = openai.ChatCompletion.create(
                model="gpt-4",
                messages=[
                    {
                        "role": "system",
                        "content": (
                            "You are a professional translator specializing in technical documentation. "
                            "Translate English to Simplified Chinese (简体中文). "
                            "Preserve:\n"
                            "- Technical terms in English (e.g., Tailwind CSS, flexbox, React)\n"
                            "- Code variable names\n"
                            "- Markdown formatting\n"
                            "- File paths and URLs\n"
                            "- CSS property names\n"
                            "Translate:\n"
                            "- Descriptions, explanations, and instructions\n"
                            "- Comments in code blocks\n"
                            "Maintain natural, professional Chinese tone."
                        )
                    },
                    {
                        "role": "user",
                        "content": f"Translate this to Simplified Chinese:\n\n{text}"
                    }
                ],
                temperature=0.3,
                max_tokens=4000
            )

            translated = response.choices[0].message.content.strip()

            # Restore code blocks
            if preserve_code:
                for i, code in enumerate(code_blocks):
                    translated = translated.replace(f"___CODE_BLOCK_{i}___", code)

            return translated

        except Exception as e:
            print(f"❌ Translation error: {e}")
            return text

    def translate_content_chunks(self, content: str, chunk_size: int = 2000) -> str:
        """
        Translate long content by splitting into chunks.

        Args:
            content: English content to translate
            chunk_size: Max characters per chunk (to avoid API limits)

        Returns:
            Translated Simplified Chinese content
        """
        # Split by major sections (### headings)
        sections = re.split(r'(###[^\n]+\n)', content)

        translated_sections = []
        current_chunk = ""

        for section in sections:
            if len(current_chunk) + len(section) > chunk_size and current_chunk:
                # Translate current chunk
                translated = self.translate_text(current_chunk)
                translated_sections.append(translated)
                current_chunk = section
            else:
                current_chunk += section

        # Translate remaining chunk
        if current_chunk:
            translated = self.translate_text(current_chunk)
            translated_sections.append(translated)

        return "\n\n".join(translated_sections)

    def fix_file(self, filepath: Path, dry_run: bool = False) -> Dict:
        """
        Fix a single markdown file.

        Args:
            filepath: Path to markdown file
            dry_run: If True, don't write changes

        Returns:
            Dict with status information
        """
        print(f"\n{'='*80}")
        print(f"📝 Processing: {filepath.relative_to(filepath.parents[5])}")

        # Read file
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()

        # Extract sections
        header, zh_content, en_content = self.extract_sections(original_content)

        # Check if file needs fixing
        zh_len = len(re.sub(r'```.*?```', '', zh_content, flags=re.DOTALL).strip())
        en_len = len(re.sub(r'```.*?```', '', en_content, flags=re.DOTALL).strip())

        if en_len == 0:
            print("⚠️  No English content found. Skipping.")
            return {'status': 'skipped', 'reason': 'no_english'}

        ratio = en_len / zh_len if zh_len > 0 else float('inf')

        print(f"📊 Content analysis:")
        print(f"   - Chinese: {zh_len:,} chars")
        print(f"   - English: {en_len:,} chars")
        print(f"   - Ratio: {ratio:.1f}x")

        if ratio < 5.0:
            print("✅ File is already good. Skipping.")
            return {'status': 'skipped', 'reason': 'already_good'}

        # Need translation
        print(f"🔧 Translating English content to Chinese...")

        if not self.use_api:
            print("\n" + "="*80)
            print("ENGLISH CONTENT TO TRANSLATE:")
            print("="*80)
            print(en_content[:500] + "..." if len(en_content) > 500 else en_content)
            print("="*80)
            print("\n⚠️  Please translate manually and run with --zh-content option")
            return {'status': 'needs_manual', 'filepath': str(filepath)}

        # Translate using API
        try:
            translated_zh = self.translate_content_chunks(en_content)
        except Exception as e:
            print(f"❌ Translation failed: {e}")
            return {'status': 'error', 'error': str(e)}

        # Reconstruct file content
        new_content = self.reconstruct_markdown(header, translated_zh, en_content)

        if dry_run:
            print(f"🔍 DRY RUN - Would write {len(new_content)} characters")
            print(f"   Preview (first 300 chars):")
            print(f"   {new_content[:300]}...")
            return {'status': 'dry_run', 'new_length': len(new_content)}

        # Write file
        backup_path = filepath.with_suffix('.md.backup')
        filepath.rename(backup_path)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"✅ File fixed successfully!")
        print(f"   Backup saved: {backup_path.name}")

        return {
            'status': 'success',
            'original_zh_len': zh_len,
            'new_zh_len': len(re.sub(r'```.*?```', '', translated_zh, flags=re.DOTALL).strip()),
            'en_len': en_len
        }

    def reconstruct_markdown(self, header: str, zh_content: str, en_content: str) -> str:
        """
        Reconstruct markdown file with proper formatting.

        Args:
            header: File header content
            zh_content: Chinese content
            en_content: English content

        Returns:
            Formatted markdown content
        """
        parts = []

        if header:
            parts.append(header.strip())
            parts.append("")  # Empty line after header

        parts.append("## 中文版本 (zh-CN)")
        parts.append("")
        parts.append(zh_content.strip())
        parts.append("")
        parts.append("---")
        parts.append("")
        parts.append("## English Version (en-US)")
        parts.append("")
        parts.append(en_content.strip())
        parts.append("")  # Trailing newline

        return "\n".join(parts)


def main():
    parser = argparse.ArgumentParser(
        description="Fix Markdown prompt files with missing Chinese translations"
    )
    parser.add_argument(
        'files',
        nargs='*',
        help='Specific files to process (default: process all problematic files)'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be done without making changes'
    )
    parser.add_argument(
        '--use-api',
        action='store_true',
        help='Use OpenAI API for translation (requires OPENAI_API_KEY env var)'
    )
    parser.add_argument(
        '--api-key',
        help='OpenAI API key (or set OPENAI_API_KEY environment variable)'
    )
    parser.add_argument(
        '--top-n',
        type=int,
        default=10,
        help='Process only top N files with highest ratio (default: 10)'
    )

    args = parser.parse_args()

    # Get API key
    api_key = args.api_key or os.environ.get('OPENAI_API_KEY')

    if args.use_api and not api_key:
        print("❌ Error: --use-api requires OPENAI_API_KEY environment variable")
        return 1

    # Initialize fixer
    fixer = PromptTranslationFixer(use_api=args.use_api, api_key=api_key)

    # Determine files to process
    if args.files:
        files_to_process = [Path(f) for f in args.files]
    else:
        # Find all problematic files
        base_dir = Path(__file__).parent.parent / 'public' / 'data' / 'prompts' / 'styles'
        from analyze_prompts import analyze_markdown_file

        all_files = list(base_dir.rglob('custom.md'))
        problematic = []

        for filepath in all_files:
            result = analyze_markdown_file(filepath)
            if result['needs_fix'] and result['ratio'] > 5.0:
                problematic.append((filepath, result['ratio']))

        # Sort by ratio (worst first) and take top N
        problematic.sort(key=lambda x: x[1], reverse=True)
        files_to_process = [f[0] for f in problematic[:args.top_n]]

    print(f"🚀 Processing {len(files_to_process)} files...")
    print(f"   Mode: {'DRY RUN' if args.dry_run else 'LIVE'}")
    print(f"   Translation: {'API' if args.use_api else 'MANUAL'}")

    # Process files
    results = []
    for filepath in files_to_process:
        result = fixer.fix_file(filepath, dry_run=args.dry_run)
        results.append(result)

    # Print summary
    print("\n" + "="*80)
    print("📊 SUMMARY")
    print("="*80)

    success = sum(1 for r in results if r['status'] == 'success')
    skipped = sum(1 for r in results if r['status'] == 'skipped')
    errors = sum(1 for r in results if r['status'] == 'error')
    manual = sum(1 for r in results if r['status'] == 'needs_manual')

    print(f"✅ Success: {success}")
    print(f"⏭️  Skipped: {skipped}")
    print(f"❌ Errors: {errors}")
    print(f"⚠️  Needs manual: {manual}")

    return 0


if __name__ == '__main__':
    sys.exit(main())
