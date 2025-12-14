#!/usr/bin/env python3
"""
Automated translation script for ui-style-react prompt files.

This script translates English content in custom.md files to Simplified Chinese
using Claude API, while preserving all Markdown formatting and code blocks.

Usage:
    python translate-all-prompts.py                    # Translate all files
    python translate-all-prompts.py --dry-run          # Preview without writing
    python translate-all-prompts.py --limit 5          # Translate first 5 files
    python translate-all-prompts.py --batch 1          # Translate specific batch
"""

import argparse
import os
import re
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional, Tuple

try:
    import anthropic
except ImportError:
    print("Error: 'anthropic' package not installed.")
    print("Please install it with: pip install anthropic")
    sys.exit(1)


@dataclass
class TranslationResult:
    """Translation result data class."""
    file_path: str
    success: bool
    error: Optional[str] = None
    char_count: int = 0
    duration: float = 0.0


class PromptTranslator:
    """Handles translation of prompt files using Claude API."""

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

    TRANSLATION_PROMPT = """You are a professional technical translator. Translate the following English technical documentation to Simplified Chinese (简体中文).

CRITICAL REQUIREMENTS:
1. Translate to **Simplified Chinese** (简体中文), NOT Traditional Chinese (繁体中文)
2. Preserve ALL Markdown formatting (headers, lists, code blocks, etc.)
3. Keep ALL code blocks unchanged (HTML, CSS, JavaScript)
4. Keep technical terms in English (e.g., TailwindCSS, Hero, CTA, Skeuomorphism, HUD)
5. Keep ALL numbers and measurements unchanged (e.g., 38-52px, 4.5:1, 120-180ms)
6. Keep HTML attributes and CSS class names unchanged
7. Translate naturally using professional Chinese technical documentation style
8. Preserve all line breaks and spacing

TRANSLATION GUIDELINES:
- Use 简体中文 characters (e.g., "颜色" not "顏色", "设计" not "設計")
- Use Chinese punctuation (，。：；) for Chinese text
- Use English punctuation for code and technical terms
- Keep brand names in English (Material Design, Fluent 2, etc.)
- Translate UI element descriptions naturally

Here is the English content to translate:

---
{english_content}
---

Output ONLY the Simplified Chinese translation, preserving the exact Markdown structure."""

    def __init__(self, api_key: Optional[str] = None, dry_run: bool = False):
        """Initialize translator with API key."""
        self.api_key = api_key or os.environ.get("ANTHROPIC_API_KEY")
        if not self.api_key:
            raise ValueError(
                "ANTHROPIC_API_KEY not found. Set it as environment variable or pass as argument."
            )

        self.client = anthropic.Anthropic(api_key=self.api_key)
        self.dry_run = dry_run
        self.base_path = Path(__file__).parent / "public" / "data" / "prompts" / "styles"

    def get_file_list(self, batch: Optional[int] = None, limit: Optional[int] = None) -> list[str]:
        """Get list of files to translate based on batch and limit."""
        if batch:
            if batch not in self.FILE_BATCHES:
                raise ValueError(f"Invalid batch number. Choose from {list(self.FILE_BATCHES.keys())}")
            files = self.FILE_BATCHES[batch]
        else:
            # Flatten all batches in order
            files = []
            for batch_num in sorted(self.FILE_BATCHES.keys()):
                files.extend(self.FILE_BATCHES[batch_num])

        if limit:
            files = files[:limit]

        return files

    def parse_markdown_sections(self, content: str) -> Tuple[str, str, str]:
        """
        Parse markdown file into three sections: header, zh-CN, and en-US.

        Returns:
            Tuple of (header_section, zh_cn_section, en_us_section)
        """
        # Split by language section headers
        zh_pattern = r'## 中文版本 \(zh-CN\)'
        en_pattern = r'## English Version \(en-US\)'

        # Find positions
        zh_match = re.search(zh_pattern, content)
        en_match = re.search(en_pattern, content)

        if not zh_match or not en_match:
            raise ValueError("Could not find language section headers in file")

        zh_start = zh_match.start()
        en_start = en_match.start()

        # Extract sections
        header = content[:zh_start].strip()
        zh_section = content[zh_start:en_start].strip()
        en_section = content[en_start:].strip()

        # Extract English content (everything after the header)
        en_content_match = re.search(r'## English Version \(en-US\)\s*\n\n(.+)', en_section, re.DOTALL)
        if not en_content_match:
            raise ValueError("Could not extract English content")

        en_content = en_content_match.group(1).strip()

        return header, zh_section, en_content

    def translate_with_retry(self, english_content: str, max_retries: int = 3) -> str:
        """
        Translate English content to Simplified Chinese with retry logic.

        Args:
            english_content: English text to translate
            max_retries: Maximum number of retry attempts

        Returns:
            Translated Simplified Chinese text
        """
        for attempt in range(max_retries):
            try:
                message = self.client.messages.create(
                    model="claude-sonnet-4-20250514",
                    max_tokens=8000,
                    temperature=0.3,
                    messages=[{
                        "role": "user",
                        "content": self.TRANSLATION_PROMPT.format(english_content=english_content)
                    }]
                )

                translated = message.content[0].text.strip()
                return translated

            except anthropic.RateLimitError as e:
                if attempt < max_retries - 1:
                    wait_time = (2 ** attempt) * 2  # Exponential backoff: 2s, 4s, 8s
                    print(f"  ⚠️  Rate limit hit, waiting {wait_time}s before retry...")
                    time.sleep(wait_time)
                else:
                    raise
            except Exception as e:
                if attempt < max_retries - 1:
                    wait_time = 2 ** attempt
                    print(f"  ⚠️  Error: {str(e)}, retrying in {wait_time}s...")
                    time.sleep(wait_time)
                else:
                    raise

    def rebuild_markdown(self, header: str, translated_zh: str, en_section: str) -> str:
        """Rebuild the complete markdown file with translated content."""
        zh_section = f"## 中文版本 (zh-CN)\n\n{translated_zh}"

        return f"{header}\n\n{zh_section}\n\n{en_section}"

    def translate_file(self, relative_path: str) -> TranslationResult:
        """
        Translate a single prompt file.

        Args:
            relative_path: Relative path from prompts directory (e.g., "core/brutalism")

        Returns:
            TranslationResult with success/failure information
        """
        file_path = self.base_path / relative_path / "custom.md"

        if not file_path.exists():
            return TranslationResult(
                file_path=str(file_path),
                success=False,
                error=f"File not found: {file_path}"
            )

        start_time = time.time()

        try:
            # Read file
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Parse sections
            header, zh_section, en_content = self.parse_markdown_sections(content)

            char_count = len(en_content)

            if self.dry_run:
                print(f"  [DRY RUN] Would translate {char_count} characters")
                return TranslationResult(
                    file_path=str(file_path),
                    success=True,
                    char_count=char_count,
                    duration=0.0
                )

            # Translate
            translated_zh = self.translate_with_retry(en_content)

            # Rebuild markdown
            new_content = self.rebuild_markdown(header, translated_zh,
                                               f"## English Version (en-US)\n\n{en_content}")

            # Write back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)

            duration = time.time() - start_time

            return TranslationResult(
                file_path=str(file_path),
                success=True,
                char_count=char_count,
                duration=duration
            )

        except Exception as e:
            duration = time.time() - start_time
            return TranslationResult(
                file_path=str(file_path),
                success=False,
                error=str(e),
                duration=duration
            )

    def translate_all(self, batch: Optional[int] = None, limit: Optional[int] = None) -> list[TranslationResult]:
        """
        Translate all files or a subset based on parameters.

        Args:
            batch: Specific batch number to translate (1-4)
            limit: Maximum number of files to translate

        Returns:
            List of TranslationResult objects
        """
        files = self.get_file_list(batch=batch, limit=limit)
        total = len(files)
        results = []

        print(f"\n{'='*70}")
        print(f"🌐 Translation Task Started")
        print(f"{'='*70}")
        print(f"Mode: {'DRY RUN (Preview Only)' if self.dry_run else 'LIVE (Writing Files)'}")
        print(f"Files to process: {total}")
        if batch:
            print(f"Batch: {batch}")
        if limit:
            print(f"Limit: {limit}")
        print(f"{'='*70}\n")

        for idx, file_path in enumerate(files, 1):
            print(f"[{idx}/{total}] Processing: {file_path}")

            result = self.translate_file(file_path)
            results.append(result)

            if result.success:
                if self.dry_run:
                    print(f"  ✓ Would translate {result.char_count} chars")
                else:
                    print(f"  ✓ Translated {result.char_count} chars in {result.duration:.1f}s")
            else:
                print(f"  ✗ Failed: {result.error}")

            # Rate limiting: wait between requests (except on dry-run)
            if not self.dry_run and idx < total:
                time.sleep(1)  # 1 second between requests

        return results

    def print_report(self, results: list[TranslationResult]):
        """Print summary report of translation results."""
        successful = [r for r in results if r.success]
        failed = [r for r in results if not r.success]

        total_chars = sum(r.char_count for r in successful)
        total_time = sum(r.duration for r in successful)

        print(f"\n{'='*70}")
        print(f"📊 Translation Report")
        print(f"{'='*70}")
        print(f"Total files: {len(results)}")
        print(f"✓ Successful: {len(successful)}")
        print(f"✗ Failed: {len(failed)}")

        if successful:
            print(f"\nTranslation Statistics:")
            print(f"  Total characters: {total_chars:,}")
            print(f"  Total time: {total_time:.1f}s")
            if total_time > 0:
                print(f"  Average speed: {total_chars/total_time:.0f} chars/sec")

        if failed:
            print(f"\n❌ Failed Files:")
            for result in failed:
                print(f"  - {result.file_path}")
                print(f"    Error: {result.error}")

        print(f"{'='*70}\n")


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="Translate UI style prompt files to Simplified Chinese using Claude API",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s                    # Translate all 38 files
  %(prog)s --dry-run          # Preview without writing
  %(prog)s --limit 5          # Translate first 5 files
  %(prog)s --batch 1          # Translate batch 1 only (highest priority)
  %(prog)s --batch 1 --limit 2  # Translate first 2 files from batch 1
        """
    )

    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview translation without writing to files"
    )

    parser.add_argument(
        "--limit",
        type=int,
        metavar="N",
        help="Limit number of files to translate (for testing)"
    )

    parser.add_argument(
        "--batch",
        type=int,
        choices=[1, 2, 3, 4],
        metavar="N",
        help="Translate specific batch (1=highest priority, 4=lowest)"
    )

    parser.add_argument(
        "--api-key",
        type=str,
        metavar="KEY",
        help="Anthropic API key (or set ANTHROPIC_API_KEY env var)"
    )

    args = parser.parse_args()

    try:
        translator = PromptTranslator(api_key=args.api_key, dry_run=args.dry_run)
        results = translator.translate_all(batch=args.batch, limit=args.limit)
        translator.print_report(results)

        # Exit with error code if any translations failed
        failed_count = sum(1 for r in results if not r.success)
        sys.exit(1 if failed_count > 0 else 0)

    except KeyboardInterrupt:
        print("\n\n⚠️  Translation interrupted by user")
        sys.exit(130)
    except Exception as e:
        print(f"\n❌ Fatal error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
