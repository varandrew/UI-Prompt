#!/bin/bash
# Generate PWA icons from source icon
# Usage: ./scripts/generate-pwa-icons.sh

set -e

SOURCE_ICON="src/assets/icon.png"
OUTPUT_DIR="public/icons"
APPLE_TOUCH_ICON="public/apple-touch-icon.png"
OG_IMAGE="public/og-image.png"

# Check if source icon exists
if [ ! -f "$SOURCE_ICON" ]; then
    echo "Error: Source icon not found at $SOURCE_ICON"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Icon sizes for PWA manifest
SIZES="72 96 128 144 152 192 384 512"

echo "Generating PWA icons from $SOURCE_ICON..."

# Generate each size using sips (macOS built-in)
for SIZE in $SIZES; do
    OUTPUT_FILE="$OUTPUT_DIR/icon-$SIZE.png"
    echo "  Creating $OUTPUT_FILE ($SIZE x $SIZE)"
    sips -z $SIZE $SIZE "$SOURCE_ICON" --out "$OUTPUT_FILE" > /dev/null 2>&1
done

# Generate Apple Touch Icon (180x180)
echo "  Creating $APPLE_TOUCH_ICON (180x180)"
sips -z 180 180 "$SOURCE_ICON" --out "$APPLE_TOUCH_ICON" > /dev/null 2>&1

# Generate OG Image (1200x630) - this needs special handling
# For now, create a placeholder by scaling the icon
echo "  Creating $OG_IMAGE (1200x630)"
# First create a 1200x1200 version
TEMP_SQUARE="/tmp/og-temp-square.png"
sips -z 1200 1200 "$SOURCE_ICON" --out "$TEMP_SQUARE" > /dev/null 2>&1
# Then crop/pad to 1200x630 - using sips pad
sips -p 1200 1200 "$TEMP_SQUARE" --out "$TEMP_SQUARE" > /dev/null 2>&1
# For proper OG image, manually create or use design tool
# This creates a simple centered version
cp "$TEMP_SQUARE" "$OG_IMAGE"
rm -f "$TEMP_SQUARE"

echo ""
echo "✅ Generated icons:"
ls -la "$OUTPUT_DIR"/
echo ""
ls -la "$APPLE_TOUCH_ICON" 2>/dev/null || echo "Apple touch icon needs manual creation"
ls -la "$OG_IMAGE" 2>/dev/null || echo "OG image needs manual creation"
echo ""
echo "⚠️  Note: OG image should be designed as 1200x630 with proper branding"
echo "    Consider creating a proper OG image using design tools"
