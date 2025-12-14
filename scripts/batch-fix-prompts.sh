#!/bin/bash
#
# Batch fix Markdown prompt files
# Usage: ./batch-fix-prompts.sh [batch-number]
#
# batch-number:
#   1 - Most urgent (Ratio > 50): 5 files
#   2 - High priority (Ratio 40-50): 5 files
#   3 - Medium priority (Ratio 20-40): 23 files
#   4 - Low priority (Ratio 5-20): 5 files
#   all - All 38 files
#

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Base directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PROMPTS_DIR="$PROJECT_ROOT/public/data/prompts/styles"

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Markdown Prompt Batch Fixer${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Batch 1: Most urgent (Ratio > 50)
BATCH_1=(
    "visual/monochrome/portfolio-showcase/custom.md"
    "core/brutalism/modern-brutalism-project-mgmt/custom.md"
    "visual/monochrome/visual-monochrome/custom.md"
    "visual/antiDesign/visual-tech-anti-design/custom.md"
    "core/fluent2/fluent2-Notification/custom.md"
)

# Batch 2: High priority (Ratio 40-50)
BATCH_2=(
    "visual/leather/visual-texture-leather-vintage-journal/custom.md"
    "visual/vaporwave/visual-vaporwave-vaporwave-aesthetic/custom.md"
    "core/minimalism/core-minimalism-portfolio/custom.md"
    "core/fluent2/fluent2-settings/custom.md"
    "visual/memphis/visual-memphis-memphis-creative/custom.md"
)

# Batch 3: Medium priority (Ratio 20-40)
BATCH_3=(
    "core/brutalism/custom.md"
    "core/flatDesign/core-flat-design/custom.md"
    "core/flatDesign/core-flat-design-ecommerce-landing/custom.md"
    "core/memphis/core-memphis-memphis-creative/custom.md"
    "core/minimalism/core-minimalism-japanese-style/custom.md"
    "core/newspaper/modernEditorialTemplates/custom.md"
    "core/newspaper/vintageRetroTemplates/custom.md"
    "core/typography/kinetic/custom.md"
    "retro/frutigerAero/retro-frutiger-aero-os/custom.md"
    "retro/retroOS/retro-os-windows95/custom.md"
    "retro/swissDesign/retro-swiss-design/custom.md"
    "visual/bentoGrids/visual-tech-bento-grids/custom.md"
    "visual/darkMode/visual-darkMode-darkMode-dashboard/custom.md"
    "visual/generativeArt/visual-tech-generative-art/custom.md"
    "visual/glassmorphism/visual-glassmorphism-glassmorphism-landing/custom.md"
    "visual/scandi/visual-scandi-scandi-interior/custom.md"
    "visual/sciFiHud/visual-tech-sci-fi-hud/custom.md"
    "visual/utilityFirst/modern-utility-first/custom.md"
)

# Batch 4: Low priority (Ratio 5-20)
BATCH_4=(
    "core/brutalism/modern-brutalism-dev-workspace/custom.md"
    "visual/glow/visual-glow-luminous-cards/custom.md"
    "visual/newTrend/visual-newTrend-hyperMuseum/custom.md"
    "visual/y2k/visual-y2k/custom.md"
    "retro/artDeco/retro-art-deco-luxury/custom.md"
    "retro/darkAcademia/retro-dark-academia-library/custom.md"
    "retro/digitalRetro/pixelArt/custom.md"
    "retro/digitalRetro/terminal-cli/custom.md"
    "visual/holographic/visual-holographic-aurora-panel/custom.md"
    "visual/solarpunk/visual-nature-solarpunk/custom.md"
)

# Function to process a batch
process_batch() {
    local batch_name=$1
    shift
    local files=("$@")
    local total=${#files[@]}
    local success=0
    local failed=0

    echo -e "${YELLOW}Processing Batch: ${batch_name}${NC}"
    echo -e "Total files: ${total}"
    echo ""

    # Create temporary file list
    local file_list=""
    for file in "${files[@]}"; do
        local full_path="$PROMPTS_DIR/$file"
        if [ -f "$full_path" ]; then
            file_list="$file_list $full_path"
        else
            echo -e "${RED}⚠️  File not found: $file${NC}"
            ((failed++))
        fi
    done

    if [ -n "$file_list" ]; then
        # Run the fixer script
        if python3 "$SCRIPT_DIR/fix-prompt-simple.py" $file_list; then
            ((success+=$total-$failed))
            echo -e "${GREEN}✅ Batch completed successfully${NC}"
        else
            echo -e "${RED}❌ Batch failed${NC}"
            return 1
        fi
    fi

    echo ""
    echo -e "${GREEN}Success: $success${NC} / ${RED}Failed: $failed${NC}"
    echo ""
}

# Determine which batch to run
BATCH_NUM=${1:-""}

case "$BATCH_NUM" in
    1)
        echo -e "${BLUE}Running Batch 1: Most Urgent (Ratio > 50)${NC}"
        process_batch "Batch 1 - Most Urgent" "${BATCH_1[@]}"
        ;;
    2)
        echo -e "${BLUE}Running Batch 2: High Priority (Ratio 40-50)${NC}"
        process_batch "Batch 2 - High Priority" "${BATCH_2[@]}"
        ;;
    3)
        echo -e "${BLUE}Running Batch 3: Medium Priority (Ratio 20-40)${NC}"
        process_batch "Batch 3 - Medium Priority" "${BATCH_3[@]}"
        ;;
    4)
        echo -e "${BLUE}Running Batch 4: Low Priority (Ratio 5-20)${NC}"
        process_batch "Batch 4 - Low Priority" "${BATCH_4[@]}"
        ;;
    all)
        echo -e "${BLUE}Running ALL batches${NC}"
        echo ""
        process_batch "Batch 1 - Most Urgent" "${BATCH_1[@]}"
        process_batch "Batch 2 - High Priority" "${BATCH_2[@]}"
        process_batch "Batch 3 - Medium Priority" "${BATCH_3[@]}"
        process_batch "Batch 4 - Low Priority" "${BATCH_4[@]}"
        ;;
    *)
        echo -e "${RED}Error: Invalid batch number${NC}"
        echo ""
        echo "Usage: $0 [batch-number]"
        echo ""
        echo "Available batches:"
        echo "  1   - Most urgent (Ratio > 50): 5 files"
        echo "  2   - High priority (Ratio 40-50): 5 files"
        echo "  3   - Medium priority (Ratio 20-40): 18 files"
        echo "  4   - Low priority (Ratio 5-20): 10 files"
        echo "  all - Process all batches: 38 files"
        echo ""
        echo "Example:"
        echo "  $0 1      # Process batch 1 only"
        echo "  $0 all    # Process all batches"
        exit 1
        ;;
esac

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}  All requested batches completed!${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo "Next steps:"
echo "  1. Review the backup files (*.md.backup)"
echo "  2. Run: python3 scripts/analyze-prompts.py"
echo "  3. Commit the changes to git"
echo ""
