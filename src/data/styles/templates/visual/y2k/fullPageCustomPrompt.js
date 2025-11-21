/**
 * Y2K / Frutiger Aero - FullPage Custom Prompt
 * Y2K 風格儀表板完整页面的 AI 指令（針對 y2kFullPageHTML）
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Y2K / Frutiger Aero Dashboard 全屏页面」界面风格高度接近的 UI。
要求：保持整体布局结构、色彩体系和玻璃泡泡质感基本不变，只允许替换文案、品牌名称、图示和具体数据内容。输出必须使用语义化 HTML 结构（header、main、section、aside、footer 等），并使用类似 TailwindCSS 的原子类（例如 flex、grid、gap-6、bg-gradient-to-br、from-cyan-50、via-blue-50、to-teal-50、backdrop-blur-xl、rounded-3xl 等）來描述佈局与樣式。

【使用场景】
- 场景：面向个人或小型团队的云端工作台 / Home Office Dashboard，结合日常任务、项目狀態与团队活動概覽；
- 氛围：温暖、明亮、略带童趣，像是 2000 年代的操作系统桌面升级版，充满玻璃按钮与气泡装饰；
- 用户：喜欢复古 Y2K / Frutiger Aero 风格的创意工作者、设计师、开发者，或希望自己的 Dashboard 看起来「清爽又可爱」的使用者。

【整体布局结构】
请保持以下全页布局结构：
1. 顶部玻璃导航栏（Header / Navbar）
2. 主内容区（Main Content）
   - 左上：Hero / 今日概览卡片
   - 中間：统计卡片区与项目卡片区
   - 右側：活动时间轴、通知或快速操作
3. 底部次要信息或轻量 Footer

1. 顶部导航栏（Glassmorphism Navbar）
- 使用 <nav> 包裹，置于画面顶部，sticky top-0，背景为半透明白色（例如 bg-white/70）搭配 backdrop-blur-xl，底部有细白色边框与柔和阴影；
- 左側：
  - 氣泡風格 Logo：一個圓角方形或圓形，填充青藍漸变，內有简潔字母或图示；
  - 品牌名称：例如 "AeroDesk" 或类似名稱，使用渐变文字（bg-clip-text + text-transparent）；
- 中間：
  - 导航链接（Dashboard、Projects、Schedule、Settings 等），以圆角胶囊按钮呈現，hover 時背景变为半透明白且增加阴影；
- 右側：
  - 搜尋輸入框或简化图示按鈕，一個通知图示（帶小藍點表示新通知）与使用者頭像；

2. 主背景与页面容器
- 整体页面背景：使用从 cyan-50 → blue-50 → teal-50 的平滑漸变，营造清新天空与清水混合的感觉；
- 在背景上可以叠加大型模糊泡泡（绝对定位的圆形 div，使用渐变 + blur），分布在左上、右下等位置，透明度低以避免抢走内容焦点；
- 内容容器：使用 max-w-7xl mx-auto px-6 py-8 包裹主要內容，保持宽度适中且留有足够留白。

3. Hero / 今日概览区块（Hero Overview Card）
- 位置：主内容区最上方，跨越 2–3 欄的寬度；
- 使用大尺寸玻璃卡片：
  - 背景：bg-white/80 + backdrop-blur-xl；
  - 边框：border-2 border-white/70；
  - 阴影：shadow-2xl 並可加入內阴影效果；
- 内容：
  - 左侧：用户头像（可为圆形图片或渐变圆形占位符）、欢迎标题（如 "Good morning, Alex"）、简短描述（今天的任务概览）；
  - 右侧：两个主操作按钮，例如 "New Task" 及 "Start Focus Session"，按钮使用青蓝渐变背景 + 白字 + 圆角、hover 时增强光感；
  - 背景 / 角落可加一两颗模糊气泡装饰。

4. 统计卡片区（Stats Cards）
- Hero 下方，用 grid 显示 3–4 個统计卡片：
  - 每张卡片为小型玻璃卡片，背景半透明白，带柔和阴影与圆角；
  - 内容包括：统计数字（如 "24 Tasks"）、小标题（"Today" / "This Week"）、简短标签（例如 "On Track"）；
  - 数字可采用青蓝渐变文字，以突出重点；
  - 在卡片角落放置小图示圓标（icon bubble）。

5. 项目与工作区卡片（Projects / Work Area）
- 使用 2–3 栏 grid 排列多张项目卡片：
  - 每张卡片：
    - 标题为项目名称，搭配颜色 chip 标注状态（Active / Planning / Review 等）；
    - 内含简短描述、成员头像群组（圆形头像重叠）、进度条（Progress bar）采用青蓝渐变填充；
    - 底部可放置快速操作按钮（如 "Open"、"Share"）；
  - 卡片外观延续玻璃态风格。

6. 右侧活动时间轴与提醒（Activity Timeline / Notifications）
- 使用 <section> 容器置于右侧栏：
  - 活动时间轴：
    - 垂直线条 + 节点圆点，每个节点包含时间（如 09:30）、事件标题（"Team Standup"）和简短描述；
    - 节点圆点可使用青蓝或翡翠绿实心圆，搭配外发光；
  - 通知卡片：
    - 若有未读通知，可使用小型玻璃卡片列出几条最新提醒；

7. 底部区域（Footer / Secondary Info）
- 使用 <footer>，背景為稍深的半透明白條；
- 左側显示版權或简短标語；
- 右側可以放 1–2 個次要連結（如 "Preferences"、"Help"）。

【色彩与樣式規範】
请在 Prompt 中明確規範以下 Y2K 色彩和樣式元素：
- 页面背景：bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50；
- 卡片背景：bg-white/70–90 + backdrop-blur-xl + 边框 border-white/60–80；
- 主色：cyan / blue / teal（#06B6D4, #3B82F6, #22D3EE, #2DD4BF）；
- 強調色：emerald (#10B981)，小面積用於成功狀態；
- 按鈕樣式：圓角、漸变背景、投影柔和，hover 狀態略微放大与加強光暈；
- 字体：現代無襯线，标題可使用稍大字距与粗体；
- 行距与間距：保持充足留白，避免擁擠。

【交互与動效设計】
- 卡片与按鈕 hover：
  - 使用 transition-all duration-200–300 的平滑過渡；
  - 視覺效果包含輕微位移（-translate-y-1）、阴影加强以及边框亮度提升；
- 动画装饰：
  - 大型背景泡泡可使用慢速上下浮动 animation（如 8s–12s 循環）；
  - 某些高光可以使用很轻微的 scale 或 opacity 呼吸動画；
- 请避免高频闪烁与强烈晃动，以免干扰长时间使用。

【输出格式要求】
1. 请输出完整 HTML 文档（含 <html>、<head>、<body> 結構），head 中可附上页面标题与一个 Google Fonts 或系统字体说明（文字即可，不必真的引入）；
2. 在 body 中使用 header、nav、main、section、aside、footer 等语义标签，并使用 Tailwind 风格原子类控制布局与样式；
3. 可在页面中加入 <style> 区块定义少量自定义动画（如泡泡浮動、高光呼吸），但请保持代码简洁；
4. 文案内容可以自由发挥，但语气建议保持温暖、专业且带一点轻松，不要太严肃也不要太搞笑；
5. 保证文字与背景对比度足够，避免将主要文案直接放在过亮的渐变区域上。

【额外提示与限制】
- 不要使用过暗或高对比的深色区块破坏整体清透感；
- 尽量保留 Y2K 风格的核心元素：玻璃卡片、气泡、高光、青蓝渐变；
- 在响应式布局中，窄视窗时优先显示 Hero 和最关键的统计与任务信息，其余区块可排在下方；
- 不要引入写实人物照片作为主视觉（除非以小头像形式出现）；主视觉应由渐变、气泡与玻璃卡片构成。

请根据以上说明，生成一个完整的 Y2K / Frutiger Aero 风格仪表板 HTML 页面，使其在布局结构、色彩与玻璃泡泡质感上与现有范例高度一致。`,

  'en-US': `You are a senior UI designer and front-end engineer. Please generate a full-page Y2K / Frutiger Aero dashboard interface whose visual style is highly similar to the existing Y2K full page demo.
Requirements: Keep the overall layout, glassy/bubbly texture and cyan-blue gradient system very close to the described design. You may change copy, brand name and point values, but the structural logic and visual language must remain consistent. Use semantic HTML (header, main, section, aside, footer) and Tailwind-like utility classes (flex, grid, gap-6, bg-gradient-to-br, from-cyan-50, via-blue-50, to-teal-50, backdrop-blur-xl, rounded-3xl, etc.).

[Use Case]
- A home office dashboard or personal/team workspace with a nostalgic Y2K aesthetic;
- Target users are creatives, designers and developers who enjoy soft, glassy, early-2000s-inspired UIs;
- The interface should feel like a modernized XP-era desktop: bright, optimistic and full of glass buttons and bubbles.

[Overall Layout]
Maintain a three-part structure:
1. Glassmorphism top navbar (header)
2. Main dashboard area (main)
   - Hero overview card
   - Stats cards grid
   - Project cards and activity timeline
3. Lightweight footer strip

1. Top Navbar
- <nav> at the top with backdrop blur and translucent white background, sticky positioning;
- Left: bubble-style logo (gradient-filled round or rounded-square shape) plus brand name in gradient text;
- Middle: navigation links (Dashboard, Projects, Schedule, Settings) as pill-shaped buttons with soft hover states;
- Right: search input or icon, notification bell with a small cyan dot for unread alerts, and a user avatar.

2. Background and Container
- Use bg-gradient-to-br from cyan-50 via blue-50 to teal-50 for the page background;
- Add large, blurred circular "bubble" shapes with low opacity as decorative elements in the corners;
- Wrap the main content in a centered container (e.g. max-w-7xl mx-auto px-6 py-8) with generous spacing.

3. Hero / Today Overview
- Place a large glass card near the top of the main area, spanning multiple columns.
- Card style: semi-transparent white background, backdrop blur, white border, outer shadow and optional inner glow;
- Content:
  - Left: user avatar, greeting (e.g. "Good morning"), a short description of today's focus;
  - Right: two primary CTAs (e.g. "New Task", "Start Focus Session") as gradient buttons;
  - Behind or around the card, include one or two decorative gradient bubbles.

4. Stats Cards
- Under the hero, provide a grid of 3–4 small glass cards showing key metrics (tasks today, active projects, focus sessions, etc.);
- Each card uses a light, glassy background, rounded corners and soft shadow;
- Include a large numeric value, label, and optional tag like "On track"; numeric values may use gradient text.

5. Projects and Work Area
- Use a two- or three-column grid for project cards:
  - Each card shows project name, status chip, short description, participant avatars and a gradient-filled progress bar;
  - Quick actions such as "Open" or "Share" can appear at the bottom of cards.

6. Activity Timeline and Notifications
- On the right column (desktop) or lower on mobile, include:
  - Activity timeline: vertical line with circular nodes, each showing time, event title and brief description;
  - Optional notifications card listing recent alerts in small glass cards.

7. Footer / Secondary Info
- A slim footer bar with a slightly darker translucent background;
- Left: copyright or a short brand message;
- Right: secondary links (Preferences, Help, etc.).

[Color and Style Guidelines]
- Page background: cyan-blue-teal gradient (from-cyan-50 via-blue-50 to-teal-50);
- Cards: semi-transparent white with blur and soft white borders;
- Primary colors: cyan, blue and teal (#06B6D4, #3B82F6, #22D3EE, #2DD4BF);
- Accent: emerald (#10B981) for success or positive states;
- Buttons: rounded, gradient-filled, soft shadows, with hover states that slightly enlarge and brighten;
- Typography: modern sans serif with clear hierarchy and comfortable line heights.

[Interaction and Motion]
- Hover:
  - Cards and buttons gently elevate (small negative translateY) with stronger shadows and brighter borders;
- Motion decorations:
  - Large background bubbles float slowly (8–12s cycles);
  - Subtle breathing animations for highlights are allowed but should not distract from content;
- Avoid fast flashing or aggressive movement.

[Output Requirements]
1. Output a complete HTML document (<html>, <head>, <body>). In <head>, include a sensible <title> and a note about using a modern sans-serif font;
2. Use header, nav, main, section, aside and footer elements appropriately;
3. Express layout and style through Tailwind-like utility classes. You may inline a <style> block for keyframes and special effects;
4. Copy should feel warm, professional and slightly playful; avoid overly serious or overly jokey tone;
5. Ensure sufficient contrast for text; do not place long paragraphs directly on top of very bright gradients.

[Additional Notes]
- Preserve core Y2K traits: glass cards, bubbles, cyan-blue gradients, inner shadows and outer glows;
- In responsive layouts, hero and key stats should stay near the top, with secondary sections flowing beneath;
- Do not rely on large photographic hero images; the main aesthetic should come from gradients, bubbles and glass surfaces.

Based on all the above, output a complete Y2K / Frutiger Aero dashboard HTML page that looks and feels like a close sibling of the existing Y2K demo.`
};
