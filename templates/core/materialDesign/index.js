// Aggregator for Material Design templates
// Note: Material Design Landing has been merged into Flat Design
import { materialDesignDemo } from './Demo'
import { materialDesign } from './materialDesign'
import { materialYouAndroidSettings } from './materialYouAndroidSettings'

export const name = 'styles.core.material-design.title'

// Demo UI for style card display (from materialDesignDemo)
export const demoUI = materialDesignDemo.demoHTML

// Custom styles for demo UI
export const customStyles = materialDesignDemo.customStyles

// Description for style card
export const description = 'styles.core.material-design.description'

// Custom Prompt for style card "Get Prompt" button
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Material Design」核心样式卡展示界面风格高度接近的 Material 风格 UI。
请使用 TailwindCSS 创建一个 Material Design 风格的界面，使用纸片隐喻（Paper Metaphor）和层级阴影（Elevation）系统模拟现实世界的纸张层叠。

**核心设计要求**

1. **层级阴影系统（Elevation）**
   - 1dp (静止表面): box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
   - 2dp (凸起按钮): box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
   - 4dp (卡片): box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
   - 8dp (菜单、对话框): box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
   - 16dp (FAB 浮动按钮): box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20);
   - 24dp (最高层级): box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);

2. **触摸涟漪效果（Ripple）**
   - 涟漪动画: 从触点扩散的圆形波纹（300-600ms 动画时长）
   - 涟漪颜色: rgba(主色, 0.2) 或 rgba(255,255,255,0.3)
   - CSS 实现:
     background: radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 50%);
     animation: ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1);

3. **大胆色彩体系（Material Design 色板）**
   - Primary 主色: #6200ee（主要操作、品牌元素）
   - Secondary 次要色: #03dac6（次要操作、点缀）
   - Accent 强调色: #ff0266（错误、警告、高亮）
   - Surface 表面色: #ffffff（卡片、对话框）
   - Background 背景色: #fafafa（页面背景）
   - 文字颜色: rgba(0,0,0,0.87) 主要文字, rgba(0,0,0,0.60) 次要文字

4. **FAB 浮动按钮（Floating Action Button）**
   - 圆形按钮: width: 56px; height: 56px; border-radius: 50%;
   - 最高阴影层级: 使用 16dp 阴影
   - 固定位置: position: fixed; bottom: 24px; right: 24px;
   - 悬停提升: 阴影提升至 24dp
   - 图标居中: display: flex; align-items: center; justify-content: center;

5. **卡片式布局（Card）**
   - 白色背景: background: #ffffff;
   - 圆角: border-radius: 4px;
   - 4dp 阴影: 使用 Elevation 4 阴影
   - 内边距: padding: 16px 或 24px;
   - 悬停效果: 阴影提升至 8dp

**配色方案（Material Design 标准色板）**

主色调（Primary）:
- 主紫色: #6200ee
- 深紫色: #3700b3
- 浅紫色: #bb86fc

次要色（Secondary / Accent）:
- 青色: #03dac6
- 深青色: #018786
- 浅青色: #03dac5

功能色:
- 错误红: #b00020, #cf6679
- 成功绿: #4caf50
- 警告橙: #ff9800

中性色:
- 背景白: #ffffff
- 表面白: #ffffff
- 深色背景: #121212
- 文字黑: rgba(0,0,0,0.87)
- 次要文字: rgba(0,0,0,0.60)
- 禁用文字: rgba(0,0,0,0.38)

**关键 CSS 类示例**

\`\`\`css
/* Material Design 卡片 */
.md-card {
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),
              0 1px 10px 0 rgba(0,0,0,0.12),
              0 2px 4px -1px rgba(0,0,0,0.20);
  padding: 16px;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.md-card:hover {
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14),
              0 3px 14px 2px rgba(0,0,0,0.12),
              0 5px 5px -3px rgba(0,0,0,0.20);
}

/* FAB 浮动按钮 */
.md-fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #6200ee;
  color: #ffffff;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14),
              0 6px 30px 5px rgba(0,0,0,0.12),
              0 8px 10px -5px rgba(0,0,0,0.20);
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.md-fab:hover {
  box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14),
              0 9px 46px 8px rgba(0,0,0,0.12),
              0 11px 15px -7px rgba(0,0,0,0.20);
  transform: scale(1.05);
}

/* 触摸涟漪效果 */
.md-ripple {
  position: relative;
  overflow: hidden;
}

.md-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(98, 0, 238, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.md-ripple:active::after {
  width: 300px;
  height: 300px;
}

/* Material Design 按钮 */
.md-button {
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.md-button-primary {
  background: #6200ee;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.12),
              0 1px 5px 0 rgba(0,0,0,0.20);
}

.md-button-primary:hover {
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),
              0 1px 10px 0 rgba(0,0,0,0.12),
              0 2px 4px -1px rgba(0,0,0,0.20);
}
\`\`\`

**动效规范**
- 快速动效: 100ms - 200ms（小元素）
- 中等动效: 280ms - 300ms（常规元素）
- 慢速动效: 400ms - 600ms（大元素）
- 缓动函数: cubic-bezier(0.4, 0, 0.2, 1)（标准 Material Design 缓动）

**重要提示**
- 遵循 Google Material Design Guidelines (material.io/design)
- 使用精确的 Elevation 阴影值，不要自定义阴影
- 确保触摸目标至少 48x48dp
- 所有交互必须有涟漪反馈
- 色彩对比度符合 WCAG AA 标准（文字至少 4.5:1）`,
  'en-US': `Please create a Material Design style interface using TailwindCSS, using paper metaphor and elevation shadow system to simulate real-world paper stacking.

**Core Design Requirements**

1. **Elevation Shadow System**
   - 1dp (resting): box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
   - 2dp (raised button): box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
   - 4dp (card): box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
   - 8dp (menu, dialog): box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
   - 16dp (FAB): box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20);
   - 24dp (highest): box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);

2. **Touch Ripple Effect**
   - Ripple animation: Circular wave expanding from touch point (300-600ms duration)
   - Ripple color: rgba(primary, 0.2) or rgba(255,255,255,0.3)
   - CSS implementation:
     background: radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 50%);
     animation: ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1);

3. **Bold Color System (Material Design Palette)**
   - Primary: #6200ee (main actions, brand elements)
   - Secondary: #03dac6 (secondary actions, accents)
   - Accent: #ff0266 (errors, warnings, highlights)
   - Surface: #ffffff (cards, dialogs)
   - Background: #fafafa (page background)
   - Text: rgba(0,0,0,0.87) primary, rgba(0,0,0,0.60) secondary

4. **FAB Floating Action Button**
   - Circular button: width: 56px; height: 56px; border-radius: 50%;
   - Highest shadow: Use 16dp elevation
   - Fixed position: position: fixed; bottom: 24px; right: 24px;
   - Hover elevation: Shadow lifts to 24dp
   - Center icon: display: flex; align-items: center; justify-content: center;

5. **Card Layout**
   - White background: background: #ffffff;
   - Border radius: border-radius: 4px;
   - 4dp shadow: Use Elevation 4
   - Padding: padding: 16px or 24px;
   - Hover effect: Shadow lifts to 8dp

**Color Scheme (Material Design Standard Palette)**

Primary colors:
- Primary Purple: #6200ee
- Dark Purple: #3700b3
- Light Purple: #bb86fc

Secondary / Accent colors:
- Teal: #03dac6
- Dark Teal: #018786
- Light Teal: #03dac5

Functional colors:
- Error Red: #b00020, #cf6679
- Success Green: #4caf50
- Warning Orange: #ff9800

Neutral colors:
- Background White: #ffffff
- Surface White: #ffffff
- Dark Background: #121212
- Text Black: rgba(0,0,0,0.87)
- Secondary Text: rgba(0,0,0,0.60)
- Disabled Text: rgba(0,0,0,0.38)

**Key CSS Class Examples**

\`\`\`css
/* Material Design Card */
.md-card {
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),
              0 1px 10px 0 rgba(0,0,0,0.12),
              0 2px 4px -1px rgba(0,0,0,0.20);
  padding: 16px;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.md-card:hover {
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14),
              0 3px 14px 2px rgba(0,0,0,0.12),
              0 5px 5px -3px rgba(0,0,0,0.20);
}

/* FAB Floating Button */
.md-fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #6200ee;
  color: #ffffff;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14),
              0 6px 30px 5px rgba(0,0,0,0.12),
              0 8px 10px -5px rgba(0,0,0,0.20);
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.md-fab:hover {
  box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14),
              0 9px 46px 8px rgba(0,0,0,0.12),
              0 11px 15px -7px rgba(0,0,0,0.20);
  transform: scale(1.05);
}

/* Touch Ripple Effect */
.md-ripple {
  position: relative;
  overflow: hidden;
}

.md-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(98, 0, 238, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.md-ripple:active::after {
  width: 300px;
  height: 300px;
}

/* Material Design Button */
.md-button {
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.md-button-primary {
  background: #6200ee;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.12),
              0 1px 5px 0 rgba(0,0,0,0.20);
}

.md-button-primary:hover {
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),
              0 1px 10px 0 rgba(0,0,0,0.12),
              0 2px 4px -1px rgba(0,0,0,0.20);
}
\`\`\`

**Animation Timing**
- Fast: 100ms - 200ms (small elements)
- Medium: 280ms - 300ms (regular elements)
- Slow: 400ms - 600ms (large elements)
- Easing: cubic-bezier(0.4, 0, 0.2, 1) (standard Material Design easing)

**Important Notes**
- Follow Google Material Design Guidelines (material.io/design)
- Use precise Elevation shadow values, don't customize shadows
- Ensure touch targets at least 48x48dp
- All interactions must have ripple feedback
- Color contrast meets WCAG AA standard (text at least 4.5:1)`
}

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名熟悉 Google Material Design 规范的界面设计师，需要向团队解释 Material Design 家族在本项目中的视觉定位与体验特征，让不看规范文档的人也能理解「这类界面应该长什么样」。

场景定位：Material Design 家族适用于需要在多个平台上保持一致体验的产品，例如跨端应用、管理后台、生产力工具和内容型产品。它强调可用性与一致性，适合有较多组件和复杂信息层级的系统，让用户通过熟悉的卡片、按钮和浮动操作按钮（FAB）快速建立心理模型。

视觉设计理念：Material 的核心理念是「纸张隐喻 + 层级阴影」。界面由多张「纸片」组成，每一张都有自己的高度（Elevation），可以重叠、滑动和浮起。不同层级的阴影代表不同的重要性和交互状态：底层背景几乎没有阴影，卡片有中等阴影，对话框和菜单有更高的阴影，而 FAB 浮动按钮处在最高层级。这种「拟物但抽象」的纸片世界，让界面既有层次感又避免过度真实。

材质与质感：在 Material 家族中，表面颜色多为白色或浅灰，搭配高饱和的主色和强调色。卡片、按钮和菜单都像干净的纸张，边缘圆角小而克制，阴影柔和、略微模糊，不会抢走内容的注意力。色彩系统遵循主色 / 次色 / 功能色的结构：例如主紫、辅青、错误红等，搭配明确的文字不透明度规则，让不同层级的信息在「纸片」上清晰分布。

交互体验：交互强调「触摸反馈」和「层级变化」。点击主按钮或卡片时，会看到典型的涟漪动画从触点扩散，告诉用户「点击已生效」；卡片和菜单在出现与消失时，有轻微的缩放与透明度变化，像纸片在空中略微移动。不同 Elevation 的组件在交互中会暂时提升阴影层级，例如卡片悬停时阴影加深，强调它与背景的分离。整体动效节奏遵循 Material 的缓动曲线，感觉自然而稳定。

整体氛围：Material Design 家族营造的是一种「现代、友好、略带系统感」的氛围。用户进入界面时，会看到一层层有秩序的卡片、清晰的主色按钮和舒适的留白与阴影关系，感觉像在使用一套熟悉的应用生态。它既不像传统拟物那样厚重，也不像极简扁平那样完全无质感，而是在「有纸张、有光影但仍然抽象」的平衡点上，为复杂产品提供可靠的视觉基底。`,
  'en-US': `Role: You are a UI designer well-versed in Google’s Material Design guidelines, and you need to explain how the Material Design family should look and behave in this project, in a way that teammates can understand without reading the spec.

Scene: The Material family is suited for multi-platform products that require consistency and clear structure: cross-device apps, admin consoles, productivity tools and content-heavy systems. It works best where there are many components and layers of information, giving users familiar cards, buttons and FABs so they can quickly recognise patterns and affordances.

Visual philosophy: Material is built on the idea of “paper surfaces + elevation shadows.” The interface is composed of abstract sheets of paper, each with its own elevation level. Different levels of shadow reflect different roles and interaction states: backgrounds are nearly flat; cards sit above them with moderate shadows; menus and dialogs float even higher; FABs occupy the topmost layer. This creates a world that is slightly skeuomorphic—there is depth and layering—but still abstract and minimal enough to feel like a UI system rather than a literal physical scene.

Material and texture: Surfaces are typically white or very light neutrals, with bold primary and secondary colors used for key accents. Cards, buttons and menus resemble clean pieces of card stock: small, consistent corner radii, soft blurred shadows and no visible noise or texture. Color follows a defined palette of primary, secondary and functional hues—such as deep purple, teal and red—paired with clear rules for text opacity so hierarchy is visible at a glance.

Interaction experience: Interaction focuses on touch feedback and elevation changes. When users tap a button or card, a ripple effect expands from the touch point, signalling that the action has been registered. Cards and menus appear and disappear with gentle scale and opacity transitions, as if sheets of paper were lifting off or settling back onto the stack. Components temporarily increase their elevation on hover or focus, deepening shadows to emphasise separation from the background. All motions follow Material’s easing curves, feeling smooth, responsive and consistent across the system.

Overall mood: The Material Design family creates a modern, friendly and system-like atmosphere. Users see layers of well-ordered cards, clear primary actions and comfortable spacing tied together by consistent light and shadow. It feels like operating within a coherent ecosystem rather than a one-off website: not as heavy as full skeuomorphism, but richer and more tactile than pure flat design, striking a balance where complex products can remain approachable and legible.`}

// Material Design Landing merged into Flat Design)
export const materialDesignTemplates = [
    materialDesign,
    materialYouAndroidSettings,
]

export default materialDesignTemplates
