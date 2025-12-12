/**
 * Y2K / Frutiger Aero - Style Prompt
 * Y2K 千禧年美學風格的设計理念說明
 */

export const stylePrompt = {
  'zh-CN': `角色：你是一位专精于 Y2K / Frutiger Aero 风格的 UI 设计师兼前端工程师。

场景定位：
Y2K / Frutiger Aero 风格源于 1998–2005 年左右的数位視覺美學，常見於早期网路服务、系統工具、作業系統桌面和企業形象页。這種風格在當代的再演繹，適用於：懷舊科技主題著陸页、产品 Dashboard、個人工作台、与「90s/00s 网路文化」相关的應用、以及希望傳達「樂觀科技」「早期网路夢」氛圍的品牌。目标用戶多半對早期 Windows / XP / 玻璃泡泡桌布有情感連結，或是喜愛復古＋未來混搭的視覺風格。

视觉设计理念：
Y2K 不是單純的「彩色＋漸变」，而是一套以「玻璃质感、青藍色天空、肥厚圓角、泡泡与反光」為核心的樂觀科技美學。设計哲學可概括為：
- 如同操作系統桌面的儀表盤，而非極简扁平的控制台；
- 集中展現「乾淨、明亮、略帶塑料感」的 UI 元素，而不是阴鬱或工業感；
- 使用大量光暈、高光与柔焦，而非銳利阴影与深色塊；
- 介面整体應該看起來“柔软而可愛”，但仍然保持理性的資訊結構。

材质与质感：
- 背景：典型為从非常淺的青色 / 藍色 / 綠色漸变而成的「天空」背景（例如 #ECFEFF、#EFF6FF、#CCFBF1），可搭配柔和云层或模糊光斑；
- 玻璃卡片：內容区域使用半透明白色卡片（如 rgba(255,255,255,0.7)），帶有內阴影与外阴影，同時保留一圈較亮的边框，模擬玻璃或塑膠材质；
- 泡泡与高光：以圓形或不規則圓角形狀呈現大氣泡和小高光點，疊加在背景或卡片角落，營造立体“水珠”效果；
- 反光与漸变：使用从青色到藍色再到翡翠綠的漸变填充 Logo、按鈕、标題文字，配合內外發光让界面表面看起來光滑而濕潤；
- 边界与分隔：多使用柔和边界与細白线分隔区塊，避免沉重的深色描边。

色彩系统：
- 主背景色：極淺的青藍漸变 (#ECFEFF、#EFF6FF、#CCFBF1)，給人晴朗天空或水面的联想；
- 主品牌色：明亮青色与藍色（#06B6D4 / Cyan-500、#3B82F6 / Blue-500、#22D3EE 等），用於 Logo、主按鈕、重要标題；
- 輔助色：翡翠綠 (#10B981 / Emerald-500) 強化「清新自然」感，小面積用於狀態与标籤；
- 高光色：純白或接近白色的高光塊，用於泡泡和玻璃高光区域；
- 文字色：深灰藍 (#0F172A、#1E293B) 作為主文案颜色，次級文字使用中灰，避免黑色過於生硬。

布局与信息层次：
- 頂部导航欄：
  - 使用玻璃態导覽列（backdrop-blur-xl + 半透明白），內含 Logo 氣泡、品牌名稱和导航連結；
  - 导航按鈕可採用圓角 pill 形狀，hover 時增加光暈与边框亮度；
- Hero / 概覽区：
  - 上方可有一個主卡片展示「今日概覽 / 工作台名稱」，背景為玻璃卡片，內含用戶頭像、歡迎文案与一兩個主動作按鈕；
  - Hero 內可擺放一兩顆較大的漸变氣泡作為背景裝飾；
- 中心內容区：
  - 採用 2–3 欄栅格佈局的卡片集合，例如統計卡、专案卡、待辦列表、活動時間軸；
  - 每張卡片皆帶玻璃效果，四角圓潤，內有柔和阴影与边框；
- 底部 / 次要区塊：
  - 可以使用一條略深的玻璃條展示系統狀態、版權資訊或次要 CTA。

交互体验：
- 懸停（Hover）：
  - 卡片与按鈕在 hover 時略微上浮（例如 translateY(-2px)）、增強外發光与边框亮度，營造柔软、可觸摸的感覺；
  - 文字或圖示的阴影可在 hover 時稍微加強，让元素更醒目；
- 按壓（Active）：
  - 按下按鈕時整体略微縮小（scale(0.97)）並降低光感，營造「按下去」的視覺回饋；
- 動態效果：
  - 泡泡裝飾可使用緩慢的上下浮動動效（类似睡眠螢幕保護程式），節奏在 6–10 秒一個周期，避免让人感到浮躁；
  - 某些背景光斑可以輕微移動或閃爍，以增添呼吸感；
- 滑動与切換：
  - 對於多 Tab 区域，可以使用柔和的滑動過渡，而不是突兀切換。

氛围营造：
- 整体氛圍應該是「樂觀、乾淨、略帶童趣的科技感」：像是 Windows XP 時代的桌布＋玻璃按鈕，卻用現代的版面与字体規範重新整理；
- 用戶進入页面時應感到輕鬆愉快，而不是被高對比或暗色風格壓迫；
- 色彩与光感應該让人联想到「晴朗早晨」「清澈水面」或「玻璃裝飾品櫃」；
- 儘管視覺偏可愛与輕量，資訊本身仍需要清晰、有條理，不應被過量裝飾淹沒。

适用与不适用场景：
- 适用：
  - 個人工作台、創意和设計相关产品的 Dashboard；
  - 需要表達「友好、親近、略帶懷舊」的科技品牌；
  - 与 Y2K / 早期网路文化相关的活動页与社群平台；
- 不适用：
  - 嚴肅金融 / 政府 / 醫療等需要高度權威感与稳定感的主系統；
  - 強調極简禪意、冷淡風的品牌；
  - 需要長時間閱讀大量嚴肅文字的产品（建議仅在 Hero 使用此風格）。

设计关键词总结（供 LLM 参考）：
Y2K、Frutiger Aero、氣泡、玻璃態、青藍漸变、玻璃卡片、半透明白、內阴影、外發光、儀表板、早期网路、樂觀科技、懷舊 UI。`,

  'en-US': `Role: You are a UI designer and front-end engineer specializing in Y2K / Frutiger Aero aesthetics.

Scene Positioning:
The Y2K / Frutiger Aero style is rooted in late 1990s to early 2000s visual culture: bright skies, glassy bubbles, soft gradients and optimistic tech branding. In modern reinterpretations, this style fits nostalgic tech landing pages, dashboards, personal workspaces, apps referencing early web culture, and brands that want to evoke "optimistic technology" and "early internet dream" vibes. Typical users may feel nostalgic about early Windows / XP era desktops or simply enjoy soft, bubbly interfaces.

Visual Design Philosophy:
Y2K is not just "colorful gradients". It is a visual language built around glassy surfaces, cyan-blue skies, thick rounded corners and light reflections. Key principles:
- The interface feels like an operating system desktop or control center rather than a flat, ultra-minimal console;
- Surfaces appear clean, bright and slightly plastic rather than dark or industrial;
- Heavy use of glow, highlights and soft focus instead of sharp shadows and heavy outlines;
- Everything should feel soft and touchable while still maintaining clear information hierarchy.

Materials and Textures:
- Background: very light cyan/blue/teal gradients (e.g. #ECFEFF, #EFF6FF, #CCFBF1), evoking sky, water and glass;
- Glass cards: semi-transparent white cards (rgba(255,255,255,0.7)) with inner and outer shadows and a bright border, simulating glass or polished plastic;
- Bubbles and highlights: round or blobby shapes with bright highlights placed behind or around content, adding a "soap bubble" or "water droplet" feel;
- Gradient fills: cyan-blue-emerald gradients for logos, buttons and key text, sometimes combined with gentle glow to suggest wet, glossy surfaces;
- Dividers: subtle white lines or faint gradients to separate sections without harsh rules.

Color System:
- Background: soft cyan-blue gradients (#ECFEFF, #EFF6FF, #CCFBF1);
- Primary colors: bright cyan and blue (#06B6D4 / Cyan-500, #3B82F6 / Blue-500, #22D3EE);
- Accent colors: emerald greens (#10B981 / Emerald-500) for success, freshness and nature cues;
- Highlights: pure or near-white highlights for bubbles and shine;
- Text: dark blue-grays (#0F172A, #1E293B) for primary copy, mid-grays for secondary text.

Layout and Information Hierarchy:
- Top navigation bar:
  - Glassmorphism navbar (backdrop blur + translucent white) with a bubble-style logo, brand name and navigation links;
  - Navigation items as rounded pills with soft hover glows;
- Hero / overview section:
  - A main glass card showing the workspace name, user avatar, welcome message and primary CTAs;
  - One or two large gradient bubbles behind the card for decoration;
- Main content grid:
  - 2–3 column layout of glass cards: stats cards, project cards, to-do lists, activity timelines;
  - Each card uses rounded corners, inner/outer shadows and clear typographic hierarchy;
- Footer / secondary strip:
  - A slightly darker, still translucent strip for status info, copyright or secondary actions.

Interaction Experience:
- Hover:
  - Cards and buttons gently lift (e.g. translateY(-2px)), with stronger glow and border brightness, emphasizing soft tactility;
  - Text shadows or icon glows become slightly more pronounced on hover;
- Active:
  - Pressed buttons shrink a bit (scale ~0.97) and dim slightly, creating a physical button feel;
- Motion:
  - Decorative bubbles can drift slowly up and down with long animation durations (6–10 seconds) to avoid feeling jittery;
  - Background light spots or halos may pulse softly to add breathing motion;
- Transitions:
  - Tab changes and panel transitions should be smooth and soft rather than abrupt.

Atmosphere:
The overall mood should be optimistic, clean and slightly playful: like a refreshed Windows XP desktop reimagined with modern typography and layout. Users should feel welcomed and energized instead of overwhelmed by contrast or darkness. Colors and light should evoke clear mornings, water surfaces and glass ornaments. Despite the playful tone, information layout must remain structured and easy to scan.

Suitable and Unsuitable Use Cases:
- Suitable:
  - Personal dashboards and workspaces for creatives or knowledge workers;
  - Tech brands wanting a friendly, nostalgic or "early internet" aura;
  - Campaigns, landing pages or communities referencing Y2K aesthetics;
- Unsuitable:
  - Serious financial, governmental or medical systems that rely on authority and restraint;
  - Brands built on ultra-minimal, monochrome or zen-like aesthetics;
  - Very text-heavy reading experiences (limit Y2K visuals to the hero in such cases).

Key Style Keywords (for LLM reference):
Y2K, Frutiger Aero, bubbles, glassmorphism, cyan-blue gradients, glass cards, semi-transparent white, inner shadow, outer glow, dashboard, early internet, optimistic tech, nostalgic UI.`
};
