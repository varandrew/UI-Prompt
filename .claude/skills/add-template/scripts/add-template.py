#!/usr/bin/env python3
"""
Add Template Script for ui-style-react project

This script automates the process of adding a new UI style template:
1. Creates the directory structure
2. Writes fullpage.html and fullpage.css files
3. Updates previewIdMapping in previewLoader.js
4. Updates styleTagsMapping in styleTagsMapping.js

Usage:
    python add-template.py --category visual --family grain --template-id visual-grain-film-noir \
        --html-file /path/to/template.html --css-file /path/to/template.css

    Or with inline content:
    python add-template.py --category visual --family grain --template-id visual-grain-film-noir \
        --html-content "<html>...</html>" --css-content "body { ... }"
"""

import argparse
import os
import re
import sys
from pathlib import Path


def get_project_root():
    """Find the project root (where package.json is located)"""
    current = Path(__file__).resolve().parent
    while current != current.parent:
        if (current / "package.json").exists():
            return current
        current = current.parent
    raise FileNotFoundError("Could not find project root (package.json)")


def validate_category(category: str) -> bool:
    """Validate category is one of the allowed values"""
    valid_categories = ["core", "visual", "retro", "interaction", "layout"]
    return category in valid_categories


def create_directory_structure(project_root: Path, category: str, family_id: str, template_id: str) -> Path:
    """Create the template directory structure"""
    template_dir = project_root / "public" / "data" / "content" / category / family_id / template_id
    template_dir.mkdir(parents=True, exist_ok=True)
    return template_dir


def write_template_files(template_dir: Path, html_content: str, css_content: str):
    """Write fullpage.html and fullpage.css files"""
    # Ensure HTML links to CSS file
    if 'href="fullpage.css"' not in html_content and "href='fullpage.css'" not in html_content:
        # Try to add CSS link in head
        if "</head>" in html_content:
            html_content = html_content.replace(
                "</head>",
                '  <link rel="stylesheet" href="fullpage.css">\n</head>'
            )

    # Write HTML
    html_path = template_dir / "fullpage.html"
    html_path.write_text(html_content, encoding="utf-8")
    print(f"✅ Created: {html_path}")

    # Write CSS
    css_path = template_dir / "fullpage.css"
    css_path.write_text(css_content, encoding="utf-8")
    print(f"✅ Created: {css_path}")


def update_preview_id_mapping(project_root: Path, category: str, family_id: str, template_id: str):
    """Update previewIdMapping in previewLoader.js"""
    loader_path = project_root / "src" / "utils" / "previewLoader.js"

    if not loader_path.exists():
        print(f"⚠️ Warning: {loader_path} not found, skipping previewIdMapping update")
        return False

    content = loader_path.read_text(encoding="utf-8")

    # Check if entry already exists
    if f"'{template_id}':" in content:
        print(f"ℹ️ Entry '{template_id}' already exists in previewIdMapping")
        return True

    # New entry to add
    new_entry = f"  '{template_id}': {{ category: '{category}', familyId: '{family_id}', templateId: '{template_id}' }},\n"

    # Find a good place to insert (after similar category entries)
    # Look for pattern like: // Grain or // Visual or category comment
    category_comment = f"// {category.capitalize()}"
    family_comment = f"// {family_id.capitalize()}"

    # Try to find family comment first
    if family_comment in content:
        # Insert after the family comment section
        pattern = rf"({family_comment}.*?\n)(.*?)(\n\s*//)"
        match = re.search(pattern, content, re.DOTALL)
        if match:
            insert_pos = match.end(2)
            content = content[:insert_pos] + "\n" + new_entry + content[insert_pos:]
    else:
        # Find the end of previewIdMapping object and insert before closing
        pattern = r"(const previewIdMapping = \{[\s\S]*?)(^\};)"
        match = re.search(pattern, content, re.MULTILINE)
        if match:
            insert_pos = match.start(2)
            content = content[:insert_pos] + new_entry + "\n" + content[insert_pos:]

    loader_path.write_text(content, encoding="utf-8")
    print(f"✅ Updated: {loader_path}")
    return True


def update_style_tags_mapping(project_root: Path, category: str, template_id: str):
    """Update styleTagsMapping in styleTagsMapping.js"""
    mapping_path = project_root / "src" / "data" / "metadata" / "styleTagsMapping.js"

    if not mapping_path.exists():
        print(f"⚠️ Warning: {mapping_path} not found, skipping styleTagsMapping update")
        return False

    content = mapping_path.read_text(encoding="utf-8")

    # Check if entry already exists
    if f"'{template_id}':" in content:
        print(f"ℹ️ Entry '{template_id}' already exists in styleTagsMapping")
        return True

    # New entry to add
    new_entry = f"""  '{template_id}': {{
    primaryCategory: '{category}',
    categories: ['{category}'],
    tags: ['contemporary'],
    relatedStyles: []
  }},
"""

    # Find the end of styleEnhancements object
    pattern = r"(export const styleEnhancements = \{[\s\S]*?)(^\};)"
    match = re.search(pattern, content, re.MULTILINE)
    if match:
        insert_pos = match.start(2)
        content = content[:insert_pos] + new_entry + "\n" + content[insert_pos:]

    mapping_path.write_text(content, encoding="utf-8")
    print(f"✅ Updated: {mapping_path}")
    return True


def main():
    parser = argparse.ArgumentParser(
        description="Add a new UI style template to ui-style-react project"
    )
    parser.add_argument("--category", "-c", required=True,
                        choices=["core", "visual", "retro", "interaction", "layout"],
                        help="Style category")
    parser.add_argument("--family", "-f", required=True,
                        help="Family/group name (e.g., grain, glassmorphism)")
    parser.add_argument("--template-id", "-t", required=True,
                        help="Unique template ID (e.g., visual-grain-film-noir)")

    # Content sources (either file or inline)
    parser.add_argument("--html-file", help="Path to HTML file")
    parser.add_argument("--css-file", help="Path to CSS file")
    parser.add_argument("--html-content", help="Inline HTML content")
    parser.add_argument("--css-content", help="Inline CSS content")

    args = parser.parse_args()

    # Validate inputs
    if not validate_category(args.category):
        print(f"❌ Error: Invalid category '{args.category}'")
        sys.exit(1)

    # Get HTML content
    html_content = ""
    if args.html_file:
        html_content = Path(args.html_file).read_text(encoding="utf-8")
    elif args.html_content:
        html_content = args.html_content
    else:
        print("❌ Error: Must provide either --html-file or --html-content")
        sys.exit(1)

    # Get CSS content
    css_content = ""
    if args.css_file:
        css_content = Path(args.css_file).read_text(encoding="utf-8")
    elif args.css_content:
        css_content = args.css_content
    else:
        # Try to extract CSS from HTML if inline styles exist
        style_match = re.search(r"<style[^>]*>([\s\S]*?)</style>", html_content)
        if style_match:
            css_content = style_match.group(1)
            print("ℹ️ Extracted CSS from inline <style> tag")
        else:
            print("❌ Error: Must provide either --css-file, --css-content, or HTML with inline <style>")
            sys.exit(1)

    try:
        project_root = get_project_root()
        print(f"📁 Project root: {project_root}")

        # Step 1: Create directory
        template_dir = create_directory_structure(
            project_root, args.category, args.family, args.template_id
        )
        print(f"📁 Template directory: {template_dir}")

        # Step 2: Write files
        write_template_files(template_dir, html_content, css_content)

        # Step 3: Update previewIdMapping
        update_preview_id_mapping(
            project_root, args.category, args.family, args.template_id
        )

        # Step 4: Update styleTagsMapping
        update_style_tags_mapping(project_root, args.category, args.template_id)

        # Success report
        print("\n" + "=" * 50)
        print("✅ Template created successfully!")
        print("=" * 50)
        print(f"\n📁 Files created:")
        print(f"   - {template_dir}/fullpage.html")
        print(f"   - {template_dir}/fullpage.css")
        print(f"\n📝 Registrations updated:")
        print(f"   - src/utils/previewLoader.js")
        print(f"   - src/data/metadata/styleTagsMapping.js")
        print(f"\n🌐 Preview URL: http://localhost:1000/styles/preview/{args.template_id}")
        print(f"\n⚠️ Next steps:")
        print(f"   1. Restart dev server: npm run dev")
        print(f"   2. Visit the preview URL to verify")
        print(f"   3. Update tags in styleTagsMapping.js for better discoverability")

    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
