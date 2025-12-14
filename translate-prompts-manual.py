#!/usr/bin/env python3
"""
Manual translation helper for ui-style-react prompt files.

This script extracts English content from custom.md files and presents them
for manual translation. It provides utilities to help organize the translation
workflow.

Usage:
    python translate-prompts-manual.py list            # List all files to translate
    python translate-prompts-manual.py extract N       # Extract English content from file N
    python translate-prompts-manual.py update N FILE   # Update file N with translated content
    python translate-prompts-manual.py status          # Show translation progress
"""

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Optional, Tuple


@dataclass
class FileInfo:
    """File information for tracking."""
    index: int
    relative_path: str
    absolute_path: Path
    exists: bool
    has_translation: bool = False
    char_count: int = 0


class ManualTranslationHelper:
    """Helper for manual translation workflow."""

    # File paths organized by priority batches
    FILE_BATCHES = {
        1: [  # Ratio > 50
            "visual/monochrome/portfolio-showcase",
            "core/brutalism/modern-brutalism-project-mgmt",
            "visual/monochrome/visual-monochrome",
            "visual/antiDesign/visual-tech-anti-design",
            "core/fluent2/fluent2-Notification",
        ],
        2: [  # Ratio 40-50
            "visual/leather/visual-texture-leather-vintage-journal",
            "core/fluent2/fluent2-settings",
            "core/minimalism/core-minimalism-portfolio",
            "visual/vaporwave/visual-vaporwave-vaporwave-aesthetic",
            "core/newspaper/modernEditorialTemplates",
        ],
        3: [  # Ratio 20-40
            "visual/darkMode/visual-darkMode-darkMode-dashboard",
            "visual/memphis/visual-memphis-memphis-creative",
            "visual/sciFiHud/visual-tech-sci-fi-hud",
            "retro/swissDesign/retro-swiss-design",
            "core/newspaper/vintageRetroTemplates",
            "visual/generativeArt/visual-tech-generative-art",
            "core/typography/kinetic",
            "core/minimalism/core-minimalism-japanese-style",
            "visual/scandi/visual-scandi-scandi-interior",
            "visual/bentoGrids/visual-tech-bento-grids",
            "visual/glassmorphism/visual-glassmorphism-glassmorphism-landing",
            "retro/retroOS/retro-os-windows95",
            "visual/utilityFirst/modern-utility-first",
            "retro/frutigerAero/retro-frutiger-aero-os",
            "visual/neonCyberpunk",
            "core/brutalism",
            "core/flatDesign/core-flat-design",
            "core/flatDesign/core-flat-design-ecommerce-landing",
        ],
        4: [  # Ratio 5-20
            "visual/glow/visual-glow-luminous-cards",
            "visual/newTrend/visual-newTrend-hyperMuseum",
            "core/memphis/core-memphis-memphis-creative",
            "core/brutalism/modern-brutalism-dev-workspace",
            "visual/y2k/visual-y2k",
            "visual/scandi",
            "visual/corporate",
            "visual/industrial",
            "core/typography/typographyFirst",
            "visual/holographic/visual-holographic-aurora-panel",
        ],
    }

    def __init__(self):
        """Initialize helper."""
        self.base_path = Path(__file__).parent / "public" / "data" / "prompts" / "styles"

    def get_all_files(self) -> list[str]:
        """Get flattened list of all files in priority order."""
        files = []
        for batch_num in sorted(self.FILE_BATCHES.keys()):
            files.extend(self.FILE_BATCHES[batch_num])
        return files

    def get_file_info(self, index: int) -> Optional[FileInfo]:
        """Get file information by index (1-based)."""
        files = self.get_all_files()
        if index < 1 or index > len(files):
            return None

        relative_path = files[index - 1]
        absolute_path = self.base_path / relative_path / "custom.md"
        exists = absolute_path.exists()

        info = FileInfo(
            index=index,
            relative_path=relative_path,
            absolute_path=absolute_path,
            exists=exists
        )

        if exists:
            try:
                content = absolute_path.read_text(encoding='utf-8')
                _, zh_content, en_content = self.parse_markdown_sections(content)

                # Check if zh section has substantial content (more than placeholder)
                zh_lines = [line.strip() for line in zh_content.split('\n') if line.strip() and not line.startswith('#')]
                info.has_translation = len('\n'.join(zh_lines)) > 200  # Arbitrary threshold
                info.char_count = len(en_content)
            except Exception:
                pass

        return info

    def parse_markdown_sections(self, content: str) -> Tuple[str, str, str]:
        """
        Parse markdown file into three sections: header, zh-CN content, and en-US content.

        Returns:
            Tuple of (header, zh_content, en_content)
        """
        zh_pattern = r'## 中文版本 \(zh-CN\)'
        en_pattern = r'## English Version \(en-US\)'

        zh_match = re.search(zh_pattern, content)
        en_match = re.search(en_pattern, content)

        if not zh_match or not en_match:
            raise ValueError("Could not find language section headers in file")

        zh_start = zh_match.start()
        en_start = en_match.start()

        header = content[:zh_start].strip()
        zh_full_section = content[zh_start:en_start].strip()
        en_full_section = content[en_start:].strip()

        # Extract content after headers
        zh_content_match = re.search(r'## 中文版本 \(zh-CN\)\s*\n\n(.+?)(?=\n## |$)', content, re.DOTALL)
        zh_content = zh_content_match.group(1).strip() if zh_content_match else ""

        en_content_match = re.search(r'## English Version \(en-US\)\s*\n\n(.+)', en_full_section, re.DOTALL)
        en_content = en_content_match.group(1).strip() if en_content_match else ""

        return header, zh_content, en_content

    def list_files(self):
        """List all files with translation status."""
        files = self.get_all_files()

        print(f"\n{'='*80}")
        print(f"📋 Translation File List ({len(files)} files)")
        print(f"{'='*80}\n")

        batch_names = {1: "Batch 1 (Ratio > 50)", 2: "Batch 2 (Ratio 40-50)",
                      3: "Batch 3 (Ratio 20-40)", 4: "Batch 4 (Ratio 5-20)"}

        current_idx = 1
        for batch_num in sorted(self.FILE_BATCHES.keys()):
            print(f"\n{batch_names[batch_num]}")
            print("-" * 80)

            for rel_path in self.FILE_BATCHES[batch_num]:
                info = self.get_file_info(current_idx)
                status = "✓" if info.has_translation else "○"
                exists = "✓" if info.exists else "✗"

                print(f"{status} [{current_idx:2d}] {rel_path:60s} (exists: {exists}, {info.char_count:,} chars)")
                current_idx += 1

        print(f"\n{'='*80}")

    def extract_english(self, index: int, output_file: Optional[str] = None):
        """Extract English content from file."""
        info = self.get_file_info(index)

        if not info:
            print(f"❌ Invalid index: {index}")
            return

        if not info.exists:
            print(f"❌ File not found: {info.absolute_path}")
            return

        try:
            content = info.absolute_path.read_text(encoding='utf-8')
            _, zh_content, en_content = self.parse_markdown_sections(content)

            print(f"\n{'='*80}")
            print(f"📄 File [{index}]: {info.relative_path}")
            print(f"{'='*80}")
            print(f"English content ({len(en_content):,} characters):\n")
            print(en_content)
            print(f"\n{'='*80}")

            if output_file:
                output_path = Path(output_file)
                output_path.write_text(en_content, encoding='utf-8')
                print(f"\n✓ English content saved to: {output_file}")

        except Exception as e:
            print(f"❌ Error: {e}")

    def update_translation(self, index: int, translation_file: str):
        """Update file with translated content from file."""
        info = self.get_file_info(index)

        if not info:
            print(f"❌ Invalid index: {index}")
            return

        if not info.exists:
            print(f"❌ File not found: {info.absolute_path}")
            return

        trans_path = Path(translation_file)
        if not trans_path.exists():
            print(f"❌ Translation file not found: {translation_file}")
            return

        try:
            # Read original file
            original_content = info.absolute_path.read_text(encoding='utf-8')
            header, zh_content, en_content = self.parse_markdown_sections(original_content)

            # Read translation
            new_zh_content = trans_path.read_text(encoding='utf-8').strip()

            # Rebuild file
            new_content = f"{header}\n\n## 中文版本 (zh-CN)\n\n{new_zh_content}\n\n## English Version (en-US)\n\n{en_content}"

            # Backup original
            backup_path = info.absolute_path.with_suffix('.md.backup-auto')
            backup_path.write_text(original_content, encoding='utf-8')

            # Write new content
            info.absolute_path.write_text(new_content, encoding='utf-8')

            print(f"✓ File updated: {info.absolute_path}")
            print(f"✓ Backup created: {backup_path}")

        except Exception as e:
            print(f"❌ Error: {e}")

    def show_status(self):
        """Show translation progress status."""
        files = self.get_all_files()
        total = len(files)

        translated_count = 0
        missing_count = 0

        for i in range(1, total + 1):
            info = self.get_file_info(i)
            if info.has_translation:
                translated_count += 1
            if not info.exists:
                missing_count += 1

        pending_count = total - translated_count - missing_count

        print(f"\n{'='*80}")
        print(f"📊 Translation Progress")
        print(f"{'='*80}")
        print(f"Total files:       {total}")
        print(f"✓ Translated:      {translated_count} ({translated_count/total*100:.1f}%)")
        print(f"○ Pending:         {pending_count} ({pending_count/total*100:.1f}%)")
        print(f"✗ Missing:         {missing_count} ({missing_count/total*100:.1f}%)")
        print(f"{'='*80}\n")


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="Manual translation helper for UI style prompt files",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )

    subparsers = parser.add_subparsers(dest='command', help='Command to run')

    # List command
    subparsers.add_parser('list', help='List all files with status')

    # Extract command
    extract_parser = subparsers.add_parser('extract', help='Extract English content')
    extract_parser.add_argument('index', type=int, help='File index (1-38)')
    extract_parser.add_argument('-o', '--output', help='Save to file')

    # Update command
    update_parser = subparsers.add_parser('update', help='Update with translation')
    update_parser.add_argument('index', type=int, help='File index (1-38)')
    update_parser.add_argument('translation', help='Translation file path')

    # Status command
    subparsers.add_parser('status', help='Show translation progress')

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        return

    helper = ManualTranslationHelper()

    if args.command == 'list':
        helper.list_files()
    elif args.command == 'extract':
        helper.extract_english(args.index, args.output)
    elif args.command == 'update':
        helper.update_translation(args.index, args.translation)
    elif args.command == 'status':
        helper.show_status()


if __name__ == "__main__":
    main()
