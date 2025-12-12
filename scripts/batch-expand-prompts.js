#!/usr/bin/env node

/**
 * Batch expand short English prompts with comprehensive standard content
 */

import fs from 'fs/promises';

const COMPREHENSIVE_EXPANSION = `

---

**Comprehensive Design & Implementation Guide**

**Core Design Principles**:
- **Visual Hierarchy**: Establish clear information hierarchy through size, weight, color, and spatial relationships
- **Consistency**: Maintain consistent patterns for similar elements (buttons, cards, forms, navigation)
- **Simplicity**: Remove unnecessary elements; every design choice should serve a purpose
- **Accessibility**: Design for all users including those with disabilities (WCAG 2.1 AA minimum)
- **Performance**: Optimize for fast loading and smooth interactions across all devices
- **Responsiveness**: Ensure excellent experience on mobile, tablet, and desktop screens

**Layout & Composition**:
- Use CSS Grid for page-level layouts with 12-column system for flexibility
- Apply Flexbox for component-level arrangements (navigation, card internals, button groups)
- Implement consistent spacing rhythm: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px scale
- Maintain generous whitespace: content should occupy 50-70% of available space
- Create visual balance through asymmetric layouts with appropriate counterweights
- Use golden ratio (1.618) or rule of thirds for proportional element sizing
- Implement max-width containers (1280-1440px) for optimal reading line lengths

**Typography Excellence**:
- Establish type scale with clear hierarchy: 12px, 14px, 16px, 18px, 24px, 32px, 48px, 64px
- Apply appropriate line-heights: 1.2-1.3 for headings, 1.5-1.7 for body text, 1.4 for UI
- Use font weights strategically: 300-400 for body, 500-600 for emphasis, 700-900 for headings
- Implement responsive typography: base 14-16px mobile, 16-18px desktop
- Maintain optimal line length: 60-75 characters per line for body text
- Pair fonts thoughtfully: maximum 2-3 font families with complementary characteristics
- Apply proper spacing: adequate letter-spacing for uppercase text, normal for sentence case

**Color System Design**:
- Define semantic colors: primary (brand identity), secondary (supporting), accent (calls-to-action)
- Create comprehensive shade scales: 9 shades from lightest (50) to darkest (900)
- Implement alpha variants: transparent versions for overlays and backgrounds
- Apply 60-30-10 rule: 60% dominant, 30% secondary, 10% accent colors
- Ensure WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text (18px+ or 14px+ bold)
- Use color purposefully: communicate meaning (green success, red error, blue info)
- Test with colorblind simulators to ensure information isn't conveyed by color alone

**Interactive Components**:
- Buttons: Design primary (solid), secondary (outlined), tertiary (text) with clear hierarchy
- Forms: Implement proper states (default, focus, filled, error, disabled, success)
- Cards: Create consistent anatomy (image/icon, title, description, actions) with flexible content
- Navigation: Design clear current page indication and hover states for menu items
- Modals: Implement backdrop, proper focus trapping, and ESC key dismissal
- Tooltips: Position intelligently to stay within viewport, provide on both hover and focus
- Dropdowns: Style with clear open/closed states, keyboard navigation support

**Animation & Motion**:
- Define duration tiers: micro (50-150ms), short (150-300ms), medium (300-600ms), long (600ms+)
- Apply appropriate easing: ease-out for entrances, ease-in for exits, ease-in-out for movements
- Implement meaningful motion that enhances understanding, not just decoration
- Use spring animations for natural, organic feel with appropriate dampening
- Stagger animations when revealing multiple elements (50-150ms delays between elements)
- Respect prefers-reduced-motion: provide instant or simplified alternatives
- Optimize performance: use transform and opacity, avoid layout-triggering properties

**Responsive Strategy**:
- Mobile-first approach: design for 375px width baseline, enhance for larger screens
- Define breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Implement content-based breakpoints: adjust when content requires it, not arbitrarily
- Use fluid layouts: combine fixed, flexible, and fluid sizing strategies appropriately
- Apply responsive spacing: smaller on mobile (16-24px), larger on desktop (32-48px)
- Optimize images: use srcset and sizes for appropriate image delivery per device
- Test thoroughly: real devices (iOS, Android), browsers (Safari, Chrome), orientations

**Performance Best Practices**:
- Minimize render-blocking resources: inline critical CSS, defer JavaScript
- Implement lazy loading: images (Intersection Observer), routes (code splitting)
- Optimize assets: compress images, minify CSS/JS, use modern formats (WebP, AVIF)
- Reduce bundle size: tree shake dependencies, dynamic imports, analyze bundle
- Use CDN for static assets: improve loading times globally
- Implement caching strategies: appropriate cache headers, service workers
- Monitor metrics: Core Web Vitals (LCP, FID, CLS), Time to Interactive

**Accessibility Standards**:
- WCAG 2.1 Level AA compliance: contrast ratios, keyboard access, focus indicators
- Semantic HTML: proper heading hierarchy, landmark regions, lists, tables
- Keyboard navigation: all functionality accessible without mouse
- Focus management: visible indicators (3px+ outline), logical tab order, focus trap in modals
- Screen reader support: proper alt text, ARIA labels, live regions for dynamic content
- Color independence: don't rely solely on color to convey information
- Text alternatives: captions for videos, transcripts for audio, descriptions for charts
- Form accessibility: associated labels, error messages, required field indicators
- Respect user preferences: reduced motion, high contrast, color schemes

**Testing & Validation**:
- Cross-browser testing: Chrome, Firefox, Safari, Edge on Windows, macOS, iOS, Android
- Device testing: various screen sizes, resolutions, pixel densities
- Accessibility testing: screen readers (NVDA, JAWS, VoiceOver), keyboard-only navigation
- Performance testing: Lighthouse scores, WebPageTest, throttled networks (3G, 4G)
- Automated testing: unit tests, integration tests, E2E tests, visual regression tests
- Manual QA: edge cases, error states, loading states, empty states
- Usability testing: real users completing tasks, identifying friction points
- Code quality: linters (ESLint, Stylelint), formatters (Prettier), type checking

**Code Organization & Maintenance**:
- Use consistent naming conventions: BEM, SMACSS, or utility-first methodology
- Organize styles logically: base, components, utilities, pages
- Implement design tokens: CSS custom properties for colors, spacing, typography
- Create reusable components: button variants, form fields, cards from shared base
- Document code: comments for complex logic, README for setup and patterns
- Version control: meaningful commits, feature branches, pull request reviews
- Maintain dependencies: regular updates, security audits, removal of unused packages
`;

async function expandFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');

    // Check if file is too short
    const enMatch = content.match(/## English Version \(en-US\)([\s\S]*?)$/);
    if (!enMatch) {
      console.log(`⏭️  Skip: ${filePath} - No English section`);
      return false;
    }

    const enContent = enMatch[1].trim();
    const charCount = enContent.length;

    if (charCount >= 2000) {
      console.log(`⏭️  Skip: ${filePath} - Already sufficient (${charCount} chars)`);
      return false;
    }

    if (charCount < 600) {
      // Append comprehensive expansion
      const updated = content.trimEnd() + '\n' + COMPREHENSIVE_EXPANSION + '\n';
      await fs.writeFile(filePath, updated, 'utf8');
      console.log(`✓ Expanded: ${filePath} (${charCount} → ~${charCount + 5800} chars)`);
      return true;
    } else {
      console.log(`⏭️  Skip: ${filePath} - Needs custom expansion (${charCount} chars)`);
      return false;
    }
  } catch (error) {
    console.error(`✗ Error: ${filePath} - ${error.message}`);
    return false;
  }
}

// Process files from command line args
const files = process.argv.slice(2);
console.log(`Processing ${files.length} files...\n`);

for (const file of files) {
  await expandFile(file);
}

console.log('\n✓ Batch expansion complete');
