// ✅ Simplified: fullPage content now loaded from public/data/content/

export const fluent2Notification = {
  id: 'fluent2-Notification',
  title: 'styles.core.fluent2-Notification.title',
  description: 'styles.core.fluent2-Notification.description',

  // ✨ AI Prompt（用于生成与当前 Fluent 2 通知中心界面高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Fluent 2 通知中心 / 通知卡片」界面风格高度接近的 Fluent Design 2.0 风格通知界面。
要求：保持通知卡片的结构、色彩层次和光影 / 材质质感基本不变，只允许替换通知内容文本、图标和应用名称。输出使用语义化 HTML 结构和 TailwindCSS 风格的原子类（或等价的工具类方案）。

【使用场景】
- 场景：应用内通知中心 / 操作系统通知面板，展示多条来自不同应用的通知。
- 用户：需要在不中断当前任务的前提下，快速浏览和处理通知的用户。
- 目标：让重要通知被清晰感知，但整体氛围保持克制，不产生过度打扰。

【整体布局结构】
1. 容器布局
   - 通知区域通常位于页面右侧或独立面板中，可为固定宽度的垂直列表。
   - 顶部可包含「通知中心」标题、筛选 / 清除全部按钮。
2. 通知列表
   - 列表按时间倒序排列，新通知在上，已读通知在下。
   - 每条通知为一张卡片，结构包含：
     - 左侧：应用图标或类型图标（圆形或圆角方形容器）。
     - 中间：标题、正文摘要、时间戳。
     - 右侧：操作按钮（如「查看」「忽略」）或关闭图标。
   - 不同类型通知（信息 / 成功 / 警告 / 错误）通过细微背景色或侧边条颜色区分。

【色彩与材质】
1. 背景与卡片
   - 通知区域背景：半透明浅色亚克力或极浅灰色，保证长列表下的可读性。
   - 通知卡片：浅色亚克力或白色面板，带少量模糊和柔和阴影，营造漂浮感。
2. 状态与类型颜色
   - 信息通知：使用微软蓝或接近色作为点缀（图标 / 左侧条）。
   - 成功通知：使用柔和绿色。
   - 警告通知：使用暖黄色 / 橙色。
   - 错误通知：使用柔和红色，但面积不宜过大。
3. 文本颜色
   - 标题：深灰 #111827 / #0f172a。
   - 正文：中灰 #4b5563。
   - 时间戳 / 次要信息：更浅灰 #6b7280。

【光影、圆角与动效】
1. 圆角与阴影
   - 通知卡片统一使用 8px 圆角，阴影柔和（shadow-md），避免强烈「浮层」压迫感。
2. 动效与出现方式
   - 新通知出现：从右侧轻微滑入 + 淡入动画，时长约 300–400ms，使用 Fluent 曲线。
   - 删除 / 清除：向右滑出或向上收起，并伴随淡出。
3. 悬停与按压反馈
   - Hover：卡片背景亮度略提升或出现细微高光，阴影略加深。
   - Active：按钮或卡片局部轻微缩放或颜色加深，反馈点击。

【交互逻辑建议】
- 支持点击整张通知卡片打开详情，同时在右侧保留轻量关闭按钮。
- 支持滑动手势（在触摸设备）快速移除单条通知。
- 批量清除通知时，卡片依次淡出，给出操作反馈而非瞬间消失。

【输出要求】
- 使用语义化 HTML：列表可用 <section> + <article> 组合表达通知集合与单条通知。
- 使用 TailwindCSS 类或类似原子类控制尺寸、间距和布局（flex 列表、gap 等）。
- 生成的通知中心界面，应在「浅色亚克力背景 + 柔和圆角通知卡片 + Fluent 式光影动效」这些方面，与当前 Fluent 2 通知 UI 保持高度接近。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a Fluent Design 2.0 notification center or notification list that looks very close to the current “Fluent 2 Notification Center” demo.
Keep the notification card structure, color hierarchy and Fluent-style materials essentially unchanged. You may replace notification text, icons and app names, but not the way cards are arranged or how they look and move. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: in-app notification center or operating system notification panel showing multiple notifications from different apps.
- Users: people who want to quickly scan and act on notifications without being pulled out of their current task.
- Goal: make important notifications clearly visible while keeping the overall atmosphere calm and non-intrusive.

[Layout]
1. Notification area appears as a right-side panel or standalone block with fixed width, containing a vertical list of cards.
2. Top section includes a “Notification center” title and actions such as filters or “Clear all”.
3. Each notification is a card with:
   - Left side: app or type icon in a rounded container.
   - Middle: title, short body text and timestamp.
   - Right side: action buttons (for example View, Dismiss) or a close icon.
4. Different notification types (information, success, warning, error) can be distinguished via subtle background tints or colored side accents.

[Visual style]
1. The notification panel background is a very light acrylic or neutral surface that supports long lists without eye strain.
2. Individual notification cards use light acrylic or white surfaces with small blur and soft shadows to create floating depth.
3. Information notifications use Fluent blue accents, success uses soft green, warnings use warm yellow or orange and errors use soft red, all in limited areas.
4. Card corners are rounded (around 8px) and spacing between cards is consistent, keeping the list orderly and easy to scan.

[Interaction]
1. New notifications slide in from the side and fade in with a 300–400ms Fluent-style easing curve.
2. Dismissing notifications slides them out or collapses them smoothly with a fade, rather than instantly disappearing.
3. Hovering over a card slightly brightens the background or adds a small highlight and deeper shadow; clicking actions gives light press feedback via color or subtle scale changes.

[Output requirements]
- Use semantic HTML: wrap the notification area in a section and each notification in an article-like container.
- Use Tailwind-style utilities to define layout (flex row for each card), spacing, borders, colors and shadows.
- The generated notification UI must preserve the key characteristics of the current Fluent 2 notification center: light acrylic background, soft rounded cards, state-based accent colors and smooth, unobtrusive animations.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于 Fluent Design System 的 UI 设计师，擅长为通知和提醒场景设计简洁、清晰的界面元素。

场景定位：
为通知中心和系统提醒场景打造符合 Fluent 2 设计规范的界面，通过清晰的信息层级、适度的视觉强调和优雅的动画帮助用户及时了解重要信息而不被打扰。目标用户为需要接收各类应用通知的用户，界面需要在传递信息的同时保持克制，避免过度干扰用户的主要任务。这是一个强调信息清晰度和交互流畅性的设计系统，需要让通知既引人注目又不令人反感。

视觉设计理念：
采用微软 Fluent Design 的设计语言，以清晰的信息呈现和优雅的视觉层次为核心。设计强调通知的可读性和可操作性，通过合理的尺寸、间距和视觉权重让用户快速理解通知内容和紧迫程度。整体视觉追求简洁、现代、友好的品质，如同 Windows 通知中心般清爽而功能完整。界面运用柔和的中性色作为基础，不同类型的通知使用细微的色彩差异来区分，重要通知会有更明显的视觉强调但仍保持整体的和谐统一。所有通知卡片采用柔和的圆角和细腻的阴影，营造出轻盈漂浮的视觉效果。

材质与质感：
通知卡片使用浅色亚克力材质，在白色或浅灰背景上呈现半透明的毛玻璃质感，既保持视觉现代感又不影响通知内容的可读性。不同优先级的通知可能使用不同的背景深度，重要通知使用更不透明的背景以增强存在感，普通通知使用更透明的背景以减少视觉干扰。通知卡片边缘使用细微的阴影，营造出从背景浮起的感觉。图标区域使用圆形或圆角方形容器，配以相应的品牌色或功能色。文字使用清晰的层级，标题使用稍大稍重的字体，正文使用适中字号，时间戳使用较小较浅的字体。操作按钮通常使用线框样式或文字样式，避免在通知中使用过于醒目的填充按钮。所有元素的圆角统一使用八像素，与整体设计语言保持一致。

交互体验：
交互设计追求流畅和非侵入性。新通知出现时使用从屏幕边缘滑入的动画，通常从右上角或右下角进入，时长约三百至四百毫秒，使用 Fluent 的标准缓动曲线确保动作优雅自然。鼠标悬停在通知上时，卡片可能展现细微的高光效果或阴影加深，暗示可以进行交互。点击通知会执行相应操作，如打开关联应用或展开更多详情，过渡流畅不突兀。滑动手势支持快速关闭通知，向右滑动通知卡片会伴随渐隐效果，时长约两百毫秒。批量清除通知时使用渐进式动画，通知卡片依次淡出，而不是同时消失，给用户清晰的操作反馈。悬停在操作按钮上时展现细微的背景色变化，点击时有轻微的缩放反馈。所有动画都控制在合理时长内，既提供流畅体验又不拖沓延迟。

氛围营造：
界面营造出现代通知中心的清爽氛围，信息传递清晰而不嘈杂。通知按时间倒序排列，最新的通知位于最上方，已读和未读通知可能有细微的视觉区别。不同应用的通知通过应用图标快速识别，图标使用圆形或圆角方形裁切，与整体设计风格统一。通知标题使用中等字重，简洁明了地概括通知内容。正文文字行距适中，保证多行文字的可读性。时间戳使用较浅的灰色，通常显示为相对时间如"刚刚"、"五分钟前"。功能性色彩使用克制，系统通知使用微软蓝，错误和警告通知使用红色或黄色的左侧边线或图标，成功通知使用绿色。操作按钮通常显示为文字链接或线框按钮，常见操作包括"查看详情"、"关闭"、"稍后提醒"等。间距统一规整，通知之间通常有八像素或十二像素的间隔。整体设计如同 Windows 11 通知中心或 Windows 10 行动中心，在传递大量信息的同时保持视觉整洁，让用户能够快速浏览、理解并处理各类通知，提供高效而不扰民的通知体验。`,

    'en-US': `Role: You are a UI designer specializing in Fluent Design System, skilled at designing concise and clear interface elements for notification and reminder scenarios.

Scenario Positioning:
Create Fluent 2 compliant interfaces for notification center and system reminder scenarios, helping users stay informed of important information without being disturbed through clear information hierarchy, moderate visual emphasis, and elegant animations. Target users are users who need to receive various application notifications, requiring interfaces that deliver information while remaining restrained, avoiding excessive interference with users' primary tasks. This is a design system emphasizing information clarity and interaction fluidity, needing to make notifications both eye-catching and not annoying.

Visual Design Philosophy:
Adopt Microsoft Fluent Design language, with clear information presentation and elegant visual hierarchy as core. Design emphasizes notification readability and operability, helping users quickly understand notification content and urgency through reasonable size, spacing, and visual weight. Overall visual pursuit of simple, modern, friendly quality, as fresh and fully functional as Windows Notification Center. Interface employs soft neutral colors as foundation, different notification types using subtle color differences for distinction, important notifications having more obvious visual emphasis while maintaining overall harmony. All notification cards use soft rounded corners and delicate shadows, creating light floating visual effect.

Materials & Textures:
Notification cards use light acrylic material, presenting semi-transparent frosted glass texture on white or light gray backgrounds, maintaining visual modernity without affecting notification content readability. Different priority notifications may use different background depths, important notifications using more opaque backgrounds for enhanced presence, ordinary notifications using more transparent backgrounds to reduce visual interference. Notification card edges use subtle shadows, creating sensation of floating from background. Icon areas use circular or rounded square containers with corresponding brand or functional colors. Text uses clear hierarchy, titles using slightly larger and heavier fonts, body using moderate font sizes, timestamps using smaller and lighter fonts. Action buttons typically use outline or text styles, avoiding overly prominent filled buttons in notifications. All elements' border radius uniformly uses eight pixels, maintaining consistency with overall design language.

Interaction Experience:
Interaction design pursues fluidity and non-intrusiveness. New notifications appear with slide-in animations from screen edges, typically entering from top-right or bottom-right, duration about three hundred to four hundred milliseconds, using Fluent's standard easing curves ensuring elegant natural motion. Mouse hover over notifications may show subtle highlight effects or deepened shadows, hinting at interaction possibility. Clicking notifications executes corresponding actions like opening associated apps or expanding more details, transitions smooth and not abrupt. Swipe gestures support quick notification dismissal, swiping notification cards right accompanies fade effects, duration about two hundred milliseconds. Batch clearing notifications uses progressive animations, notification cards fading out sequentially rather than simultaneously, giving clear operation feedback. Hover over action buttons shows subtle background color changes, clicks have slight scaling feedback. All animations controlled within reasonable durations, providing fluid experience without sluggishness.

Atmosphere Creation:
Interface creates fresh atmosphere of modern notification center, information delivery clear without noise. Notifications arranged in reverse chronological order, newest notifications at top, read and unread notifications possibly having subtle visual differences. Different app notifications quickly identified through app icons, icons using circular or rounded square cropping, unified with overall design style. Notification titles use medium weights, concisely summarizing notification content. Body text line spacing moderate, ensuring multi-line text readability. Timestamps use lighter gray, typically displayed as relative time like "just now", "five minutes ago". Functional colors used restrainedly, system notifications using Microsoft blue, error and warning notifications using red or yellow left borders or icons, success notifications using green. Action buttons typically displayed as text links or outline buttons, common actions including "view details", "dismiss", "remind later", etc. Spacing uniform and regular, notifications typically having eight or twelve pixel intervals. Overall design like Windows 11 Notification Center or Windows 10 Action Center, maintaining visual tidiness while delivering large amounts of information, allowing users to quickly browse, understand, and process various notifications, providing efficient and non-disruptive notification experience.`
  },

  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'notification',
      name: 'styles.core.fluent2-Notification.preview',
      type: 'fullpage'
    }
  ]
}
