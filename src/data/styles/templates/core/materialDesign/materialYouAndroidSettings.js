import { 
  materialYouAndroidSettingsStlye,
  materialYouAndroidSettingsFullPageHTML,
} from "./materialYouAndroidSettingsFullPage";

export const materialYouAndroidSettings = {
  id: 'core-materialYouAndroidSettings',
  title: 'styles.core.material-design.preview.materialYouAndroidSettings',
  description: 'styles.core.material-design.preview.materialYouAndroidSettingsDesc',

  // ✨ AI Prompt（用于生成与當前 Material You Android 设置页高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Material You Android 设置页面」界面风格高度接近的系統设置 UI。
要求：保持動態配色（跟隨壁紙）、柔和大圓角、大尺寸卡片和極少阴影的特徵，只允許替換具体设置項与文案。輸出為移動端优先的語義化 HTML 結構（或對應的 JSX）与 TailwindCSS 風格原子类。

【使用場景】
- 場景：Android 12+ 系統級设置页（如「显示」「通知」「聲音」设定）。
- 用戶：日常調整手機设置的普通用戶。
- 目标：營造溫暖、個性化且易操作的设置体驗，避免冰冷技術感。

【整体佈局結構】
1. App Bar / 标題区
   - 上方显示页面标題（如 Settings / Display），字体較大，左對齊。
   - 可包含返回箭頭圖标及简短描述。
2. 主內容区
   - 由多組「设定卡片」垂直堆疊構成，每個卡片代表一組设定类別或單一開关。
   - 每張卡片包含：
     - 左側圖标或标題；
     - 右側為切換開关、下拉選擇、文字描述等。
3. 分組标題
   - 大組之間可有简短的組标題（如「显示」「聲音」「通知」等），字体比正文稍大。

【色彩与動態主題】
1. 動態色彩系統
   - 主色系由用戶壁紙決定：柔和紫 / 粉 / 綠 / 藍系，飽和度中等偏低。
   - 背景為非常淺的暖色調（非純白），如 #f5f0f7 之类，帶一些色彩傾向。
2. 卡片与控件
   - 卡片背景使用主題色的淺階（如主色 50/100），与背景有輕微對比。
   - 按鈕与開关的「開啟」狀態使用主題主色，关閉狀態使用中性灰。

【圓角与卡片形態】
1. 大圓角设計
   - 卡片圓角 >= 16px，部分大型区塊甚至 24–28px。
   - 按鈕与開关也採用較大的圓角（膠囊形 / Pill 狀）。
2. 卡片尺寸
   - 每張设置卡片具有充足高度（例如 72px 起），提供大觸控区域。

【层次与阴影】
1. 阴影使用極少
   - 透過色彩深淺和 alpha 建立层次，不依賴傳統阴影。
   - 偶爾為浮层（底部抽屜、對話框）加入柔和阴影即可。

【交互与動效】
1. 切換与點擊
   - 開关滑動時應具有平滑動画，颜色与位置同時過渡。
   - 點擊卡片時，可短暫強調背景色或透明度，持續時間 150–250ms。
2. 佈局動效
   - 底部抽屜、對話框从底部滑入，配合透明度漸变。

【輸出要求】
- 使用適合移動端的結構与类名（可以假设為單欄布局）。
- 盡量使用 Tailwind 原子类描述排版，例如：max-w-md mx-auto px-4 py-6 space-y-4。
- 生成的 UI 必須保留「動態配色 + 大圓角卡片 + 少阴影 + 大尺寸控件」等 Material You 風格特徵，让人一眼看出是 Android 12+ 设置页。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a Material You style Android settings screen that looks very close to the current “Material You Android Settings” demo.
Keep dynamic color behaviour (derived from wallpaper), large rounded corners, big comfortable cards and the very light shadow usage essentially unchanged. You may alter concrete setting names and descriptions, but not the layout pattern or Material You design language. Output a mobile-first semantic HTML (or JSX-like) structure plus TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: system-level settings screen on Android 12 or later (for example Display, Notifications, Sound).
- Users: everyday phone users adjusting preferences and toggles.
- Goal: create a warm, personalised settings experience that feels coherent with the device theme rather than a cold technical panel.

[Layout]
1. Top app bar showing page title (for example Settings or Display) with optional back arrow and short description line.
2. Main content area as a vertical stack of large “setting cards”, each representing a category or a single setting row with icon, title, description and control (switch, dropdown, slider or navigation chevron).
3. Optional group headings between groups of cards (for example Display, Sound, Notifications) in slightly larger, bolder text.

[Visual style]
1. Use a dynamic color system where background and card colors come from the user’s wallpaper palette: soft tints of purple, green, blue or similar with low to medium saturation.
2. Page background is a very light warm-tinted color rather than pure white; cards use slightly stronger tints of the same palette so they separate from the background.
3. Corner radii are large: cards use at least 16px radius, large blocks can go up to around 24–28px; switches and buttons use pill-shaped rounded forms.
4. Shadows are minimal; hierarchy is mostly expressed through color depth and slight elevation differences, with stronger shadows reserved for drawers or dialogs only.

[Interaction]
1. Switches animate smoothly when toggled, with thumb position and track color changing in sync; “on” state uses the primary dynamic color, “off” uses neutral greys.
2. Tapping a card briefly emphasises its background color or opacity for 150–250ms to confirm interaction without feeling heavy.
3. Bottom sheets and dialogs slide up from the bottom with a paired opacity fade, following gentle Material motion curves.

[Output requirements]
- Assume a single-column, mobile-first layout with touch-friendly spacing and hit targets.
- Use Tailwind-style utility classes to describe layout, spacing and typography rather than custom component frameworks.
- The generated screen must clearly preserve the Material You characteristics of the current demo: wallpaper-driven dynamic colors, large rounded cards, minimal shadows and large, comfortable controls.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于 Material You (Material Design 3.0) 的 UI 设计师，深刻理解 Android 12+ 的动态配色系统和个性化设计理念。

场景定位：
为 Android 系统级应用打造符合 Material You 规范的设置界面，通过动态配色和柔和设计语言创造个性化的用户体验。目标用户为 Android 12 及以上版本的用户，需要在视觉上体现系统的现代化和个性化特征。界面要求跟随用户壁纸自动调整配色，让每个用户的设置页面都拥有独特的色彩主题。这是一个强调个性化和亲和力的系统级界面，需要在功能性和美观性之间找到完美平衡。

视觉设计理念：
采用动态配色系统，从用户壁纸中提取主色调并生成和谐的配色方案。设计强调柔和圆润的视觉语言，使用比传统 Material Design 更大的圆角，营造温暖亲和的氛围。整体风格追求现代而不失温度，通过柔和的色调和大尺寸元素提升移动端的可操作性和舒适感。界面减少对阴影的依赖，转而通过色彩的深浅变化和透明度来建立视觉层次。运用三级色彩系统，主色、次要色、第三色都从用户的个性化主题中提取，确保视觉的和谐统一。

材质与质感：
所有元素都呈现出柔和圆润的形态，完全不同于传统的硬朗设计。卡片使用较大的圆角处理，小卡片使用十二像素圆角，常规卡片使用十六像素圆角，大卡片甚至使用二十八像素的超大圆角。背景使用极浅的暖色调而非纯白，营造温暖的视觉基调。设置项卡片具有较大的触摸区域，最小高度达到七十二像素，确保移动端的易操作性。按钮使用柔和的主色调填充，圆角处理同样偏大，表面无阴影或仅有极轻微的阴影。开关控件采用圆润的胶囊形状，比传统设计更加饱满柔和。图标使用较大的尺寸，从二十四到四十八像素不等，确保清晰度和可辨识度。整体色彩使用中低饱和度的柔和色调，避免过于鲜艳刺眼，主色调根据用户壁纸动态生成，可能是柔和的紫色、粉色、蓝色或绿色。

交互体验：
所有交互都强调柔和流畅的视觉反馈。设置项点击时产生细微的背景色变化，从基础色过渡到稍深的容器色。开关拨动时使用流畅的动画，开关滑块平滑移动并伴随颜色的渐变。列表滚动使用柔和的弹性效果，过度滚动时会有轻微的回弹。页面切换采用共享元素过渡，相关元素在页面间保持连续性。对话框和底部抽屉使用大圆角设计，从屏幕边缘滑入时伴随透明度的渐变。所有动画都使用柔和的缓动曲线，避免突兀的运动。色彩主题切换时，整个界面的颜色平滑过渡，展现动态配色系统的魅力。

氛围营造：
界面营造出温暖个性化的系统设置氛围，完全不同于传统冰冷的设置页面。柔和的主色调贯穿整个界面，从导航栏到按钮到高亮元素，形成统一的视觉主题。大圆角的卡片设计让界面显得柔和友好，减少了硬朗的科技感。设置项使用大尺寸的图标和清晰的文字，提升可读性和可操作性。色彩层次通过不同明度的同色系建立，表面色从最浅到稍深分为多个层级，而非传统的阴影系统。文字使用深色但非纯黑，保持足够对比度的同时避免过于刺眼。次要文字使用更浅的色调，建立清晰的信息层次。功能色保持语义化，但都经过柔和化处理，错误红色、成功绿色都比传统设计更加柔和。整体设计遵循 Android 12+ 的设计规范，大量使用透明度和色彩叠加，营造出现代而温暖的视觉体验。`,

    'en-US': `Role: You are a UI designer specializing in Material You (Material Design 3.0), deeply understanding Android 12+ dynamic color system and personalized design philosophy.

Scenario Positioning:
Create Android system-level application interfaces conforming to Material You specifications, creating personalized user experiences through dynamic colors and soft design language. Target users are Android 12 and above version users who need interfaces visually reflecting system modernization and personalization features. The interface must automatically adjust colors following user wallpapers, giving each user's settings page unique color themes. This is a system-level interface emphasizing personalization and affinity, needing to find perfect balance between functionality and aesthetics.

Visual Design Philosophy:
Adopt dynamic color system, extracting primary colors from user wallpapers and generating harmonious color schemes. Design emphasizes soft rounded visual language, using larger corner radius than traditional Material Design, creating warm affinity atmosphere. The overall style pursues modernity without losing warmth, improving mobile operability and comfort through soft tones and large-sized elements. The interface reduces reliance on shadows, instead establishing visual hierarchy through color depth variations and transparency. Employing three-tier color system, primary, secondary, and tertiary colors all extracted from user's personalized theme, ensuring visual harmony and unity.

Materials & Textures:
All elements present soft rounded forms, completely different from traditional rigid design. Cards use large corner radius treatment, small cards using twelve-pixel radius, regular cards sixteen-pixel radius, large cards even twenty-eight-pixel super large radius. Backgrounds use extremely light warm tones rather than pure white, creating warm visual foundation. Settings item cards have large touch areas, minimum height reaching seventy-two pixels, ensuring mobile ease of operation. Buttons use soft primary color fills, corner radius treatment similarly large, surfaces without shadows or only extremely light shadows. Switch controls adopt rounded capsule shapes, more plump and soft than traditional design. Icons use larger sizes, from twenty-four to forty-eight pixels, ensuring clarity and recognizability. Overall colors use medium-low saturation soft tones, avoiding excessive vividness, primary colors dynamically generated from user wallpapers, possibly soft purple, pink, blue, or green.

Interaction Experience:
All interactions emphasize soft smooth visual feedback. Settings items show subtle background color changes on tap, transitioning from base color to slightly deeper container color. Switch toggles use smooth animations, switch sliders moving smoothly with color gradients. List scrolling uses soft elastic effects, over-scrolling with slight bounce back. Page transitions adopt shared element transitions, related elements maintaining continuity between pages. Dialogs and bottom drawers use large corner radius design, sliding in from screen edges with transparency gradients. All animations use soft easing curves, avoiding abrupt motions. Color theme switching sees entire interface colors smoothly transitioning, showcasing dynamic color system charm.

Atmosphere Creation:
The interface creates warm personalized system settings atmosphere, completely different from traditional cold settings pages. Soft primary colors run throughout interface, from navigation bars to buttons to highlight elements, forming unified visual theme. Large corner radius card design makes interface appear soft and friendly, reducing rigid tech feel. Settings items use large-sized icons and clear text, improving readability and operability. Color hierarchy established through different brightness levels of same color family, surface colors from lightest to slightly deeper divided into multiple levels, rather than traditional shadow systems. Text uses dark but not pure black, maintaining sufficient contrast while avoiding excessive glare. Secondary text uses lighter tones, establishing clear information hierarchy. Functional colors maintain semantics but all softened, error red and success green softer than traditional design. Overall design follows Android 12+ design specifications, extensively using transparency and color layering, creating modern yet warm visual experiences.`
  },

  fullPageHTML: materialYouAndroidSettingsFullPageHTML,
  fullPageStyles: materialYouAndroidSettingsStlye,
}
