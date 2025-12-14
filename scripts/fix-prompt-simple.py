#!/usr/bin/env python3
"""
Simple script to fix Markdown formatting and prepare files for translation.
No API calls - extracts content and reformats properly.
"""

import re
import sys
from pathlib import Path
from typing import Tuple


def extract_sections(content: str) -> Tuple[str, str, str]:
    """Extract header, zh-CN, and en-US sections."""
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


def create_chinese_from_english_structure(en_content: str, original_zh: str) -> str:
    """
    Create Chinese content by preserving English structure but adding placeholders.
    Keeps the original short Chinese intro if it exists.
    """
    # Keep the original short Chinese description if it exists
    intro_lines = []
    if original_zh:
        # Keep first few lines (usually the design overview)
        lines = original_zh.strip().split('\n')
        for line in lines[:10]:  # Keep first 10 lines max
            if line.strip() and not line.strip().startswith('#'):
                intro_lines.append(line)
            if line.strip().startswith('###'):  # Stop at first h3
                break

    # Start building new Chinese content
    chinese_parts = []

    if intro_lines:
        chinese_parts.append('\n'.join(intro_lines))
        chinese_parts.append('')

    # Add a note about structure
    chinese_parts.append('---')
    chinese_parts.append('')

    # Parse English content structure
    lines = en_content.split('\n')
    for line in lines:
        # Preserve headings but translate common terms
        if line.startswith('###'):
            # Common heading translations
            heading = line.replace('### ', '')
            translations = {
                'Core Design Requirements': '核心設計要求',
                'Design Overview': '設計概述',
                'Color Palette': '配色方案',
                'Complete Color Palette': '完整配色方案',
                'Typography': '字體系統',
                'Typography System': '字體系統',
                'Spacing System': '間距系統',
                'Components': '組件',
                'Button': '按鈕',
                'Button Design': '按鈕設計',
                'Input': '輸入框',
                'Form Elements': '表單元素',
                'Navigation': '導航',
                'Navigation Bar': '導航欄',
                'Card': '卡片',
                'Important Notes': '重要事項',
                'Things to Avoid': '禁止事項',
                'Configuration': '配置',
                'Tailwind CSS Configuration': 'Tailwind CSS 配置',
                'Complete Tailwind Configuration': '完整 Tailwind 配置',
            }

            for en, zh in translations.items():
                if en.lower() in heading.lower():
                    heading = zh
                    break

            chinese_parts.append(f'### {heading}')
        elif line.startswith('##') and 'English Version' not in line:
            # Secondary headings
            chinese_parts.append(line)
        elif line.strip().startswith('```'):
            # Preserve code blocks
            chinese_parts.append(line)
        elif line.strip():
            # Regular content line
            chinese_parts.append(line)
        else:
            # Empty line
            chinese_parts.append('')

    return '\n'.join(chinese_parts)


def reconstruct_markdown(header: str, zh_content: str, en_content: str) -> str:
    """Reconstruct markdown with proper sections."""
    parts = []

    if header:
        parts.append(header.strip())
        parts.append("")

    parts.append("## 中文版本 (zh-CN)")
    parts.append("")
    parts.append(zh_content.strip())
    parts.append("")
    parts.append("---")
    parts.append("")
    parts.append("## English Version (en-US)")
    parts.append("")
    parts.append(en_content.strip())
    parts.append("")

    return "\n".join(parts)


def fix_file(filepath: Path, dry_run: bool = False) -> dict:
    """Fix a single file."""
    print(f"\n{'='*80}")
    print(f"📝 Processing: {filepath.name}")

    # Read original content
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract sections
    header, zh_content, en_content = extract_sections(content)

    # Calculate lengths
    zh_len = len(re.sub(r'```.*?```', '', zh_content, flags=re.DOTALL).strip())
    en_len = len(re.sub(r'```.*?```', '', en_content, flags=re.DOTALL).strip())

    print(f"📊 Original lengths:")
    print(f"   Chinese: {zh_len:,} chars")
    print(f"   English: {en_len:,} chars")
    print(f"   Ratio: {en_len/zh_len:.1f}x" if zh_len > 0 else "   Ratio: ∞")

    if en_len == 0:
        print("⚠️  No English content found. Skipping.")
        return {'status': 'skipped', 'reason': 'no_english'}

    # Create new Chinese content from English structure
    new_zh_content = create_chinese_from_english_structure(en_content, zh_content)

    # Reconstruct file
    new_content = reconstruct_markdown(header, new_zh_content, en_content)

    new_zh_len = len(re.sub(r'```.*?```', '', new_zh_content, flags=re.DOTALL).strip())

    print(f"✨ New lengths:")
    print(f"   Chinese: {new_zh_len:,} chars")
    print(f"   English: {en_len:,} chars")
    print(f"   Ratio: {en_len/new_zh_len:.1f}x")

    if dry_run:
        print("🔍 DRY RUN - No changes written")
        return {'status': 'dry_run'}

    # Backup original
    backup_path = filepath.with_suffix('.md.backup')
    if backup_path.exists():
        backup_path = filepath.with_suffix(f'.md.backup.{Path.cwd()}.suffix')

    filepath.rename(backup_path)
    print(f"💾 Backup: {backup_path.name}")

    # Write new content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"✅ Fixed successfully!")

    return {
        'status': 'success',
        'original_zh': zh_len,
        'new_zh': new_zh_len,
        'en': en_len
    }


def main():
    import argparse

    parser = argparse.ArgumentParser(description='Fix Markdown prompt formatting')
    parser.add_argument('files', nargs='+', help='Files to process')
    parser.add_argument('--dry-run', action='store_true', help='Preview changes without writing')

    args = parser.parse_args()

    files = [Path(f) for f in args.files]

    print(f"🚀 Processing {len(files)} file(s)...")
    print(f"   Mode: {'DRY RUN' if args.dry_run else 'LIVE'}")

    results = []
    for filepath in files:
        if not filepath.exists():
            print(f"\n❌ File not found: {filepath}")
            continue

        result = fix_file(filepath, dry_run=args.dry_run)
        results.append(result)

    # Summary
    print("\n" + "="*80)
    print("📊 SUMMARY")
    print("="*80)

    success = sum(1 for r in results if r['status'] == 'success')
    skipped = sum(1 for r in results if r['status'] == 'skipped')

    print(f"✅ Success: {success}")
    print(f"⏭️  Skipped: {skipped}")
    print(f"📝 Total: {len(results)}")

    if not args.dry_run and success > 0:
        print("\n⚠️  Note: Files now have English content in Chinese section.")
        print("    Use a translation tool or service to translate the content.")

    return 0


if __name__ == '__main__':
    sys.exit(main())
