#!/usr/bin/env python3
"""
Analyze prompt markdown files to identify formatting issues.
Checks for:
1. Proper zh-CN and en-US section headers
2. Content length discrepancies between languages
3. Mixed language content in wrong sections
"""

import os
import re
from pathlib import Path
from typing import Dict, Tuple

def analyze_markdown_file(filepath: Path) -> Dict:
    """Analyze a single markdown file for formatting issues."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for proper section markers
    has_zh_cn_header = bool(re.search(r'##\s*中文版本\s*\(zh-CN\)', content))
    has_en_us_header = bool(re.search(r'##\s*English Version\s*\(en-US\)', content))

    # Try to split content by language sections
    zh_content = ""
    en_content = ""

    if has_zh_cn_header and has_en_us_header:
        # Extract sections properly
        zh_match = re.search(r'##\s*中文版本\s*\(zh-CN\)(.*?)(?=##\s*English Version\s*\(en-US\)|$)', content, re.DOTALL)
        en_match = re.search(r'##\s*English Version\s*\(en-US\)(.*)', content, re.DOTALL)

        if zh_match:
            zh_content = zh_match.group(1).strip()
        if en_match:
            en_content = en_match.group(1).strip()
    else:
        # File doesn't have proper headers
        zh_content = content
        en_content = ""

    # Count actual content (excluding code blocks and whitespace)
    zh_len = len(re.sub(r'```.*?```', '', zh_content, flags=re.DOTALL).strip())
    en_len = len(re.sub(r'```.*?```', '', en_content, flags=re.DOTALL).strip())

    # Calculate ratio
    ratio = en_len / zh_len if zh_len > 0 else 0

    return {
        'path': str(filepath),
        'has_zh_header': has_zh_cn_header,
        'has_en_header': has_en_us_header,
        'zh_length': zh_len,
        'en_length': en_len,
        'ratio': ratio,
        'total_length': len(content),
        'needs_fix': not (has_zh_cn_header and has_en_us_header) or ratio > 5.0
    }

def main():
    base_dir = Path('/Users/tomleung/Downloads/mcp/ui-style/ui-style-react/public/data/prompts/styles')

    if not base_dir.exists():
        print(f"Error: Directory not found: {base_dir}")
        return

    # Find all custom.md files
    custom_files = list(base_dir.rglob('custom.md'))

    print(f"Found {len(custom_files)} custom.md files\n")
    print("=" * 100)

    issues = []

    for filepath in sorted(custom_files):
        result = analyze_markdown_file(filepath)

        if result['needs_fix']:
            issues.append(result)

            # Get relative path for readability
            rel_path = filepath.relative_to(base_dir.parent.parent.parent)

            status = []
            if not result['has_zh_header']:
                status.append("Missing zh-CN header")
            if not result['has_en_header']:
                status.append("Missing en-US header")
            if result['ratio'] > 5.0:
                status.append(f"Length ratio: {result['ratio']:.1f}x")

            print(f"\n📝 {rel_path}")
            print(f"   Issues: {', '.join(status)}")
            print(f"   中文: {result['zh_length']:,} chars | 英文: {result['en_length']:,} chars")

    print("\n" + "=" * 100)
    print(f"\n✨ Summary: {len(issues)} files need fixing out of {len(custom_files)} total")

    # Sort by ratio (worst first)
    issues_sorted = sorted(issues, key=lambda x: x['ratio'], reverse=True)

    print("\n🔥 Top 10 files with largest EN/ZH ratio:")
    print("-" * 100)
    for i, issue in enumerate(issues_sorted[:10], 1):
        rel_path = Path(issue['path']).relative_to(base_dir.parent.parent.parent)
        print(f"{i:2d}. {issue['ratio']:6.1f}x - {rel_path}")

if __name__ == '__main__':
    main()
