# Custom Prompt

## 中文版本 (zh-CN)

你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Split Screen（左右分屏）」示例界面布局风格高度接近的页面。
要求：保持左右各占 50% 的硬分割结构，一侧为深色背景浅色文字，另一侧为浅色背景深色文字，只允许替换文案、品牌元素和具体配色，不允许改变「强对比双区域」这一核心布局思路。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 方案对比页：例如「个人版 / 企业版」「基础版 / 高级版」。
- 双入口页：例如「我是新用户 / 我是已有用户」「设计师入口 / 开发者入口」。
- 品牌叙事：左侧为视觉故事，右侧为关键信息与行动按钮。

【整体布局结构】
1. 外层容器
   - 使用一个全宽容器包裹左右两侧区域：\`<main class='w-full h-screen flex'>\`。
   - 高度可为视窗高度（h-screen）或至少铺满首屏。
2. 左右面板
   - 左面板与右面板在桌面端使用固定 50/50 宽度：\`w-1/2\` + \`flex items-center justify-center\`。
   - 主要内容（标题、副标题、按钮）在各自面板内垂直水平居中，文本尽可能简洁有力（例如单字母 A/B 或简洁短句）。
3. 分隔线
   - 在两个面板之间使用清晰的分界：如中间 1px 灰色边线（\`border-l border-gray-200\`）或轻微投影。

【色彩与对比】
1. 左右对比
   - 一侧使用深色背景（如 \`bg-black\`、\`bg-slate-900\`）+ 白色或浅灰文字；
   - 另一侧使用白色或浅灰背景（如 \`bg-white\`、\`bg-gray-50\`）+ 深灰或黑色文字。
2. 品牌色应用
   - 可在两侧标题或按钮上统一使用品牌色（如蓝/紫）作为强调，但不要破坏左右反差的整体印象。
3. 字号与字重
   - 主文本建议在 \`text-3xl\`–\`text-5xl\` 之间，\`font-bold\` 或 \`font-extrabold\`，确保结构一眼可见。

【响应式行为】
1. 桌面端（≥1024px）
   - 保持 50/50 横向分屏，内容居中显示。
2. 平板与手机端
   - 可将两个区域调整为上下堆叠（如 \`flex-col\`），但应保留色调对比与内容层级；
   - 参数建议：上方区域仍为深色，下方为浅色，并保留清晰的分割线（如 \`border-t\`）。

【交互与动效】
1. 悬停反馈
   - 若面板可点击，可在 hover 时略微提高亮度或增加轻微阴影，暗示「可进入」；
   - 若只是静态对比，交互反馈可保持极简，避免喧宾夺主。
2. 按钮交互
   - 若面板内部有按钮，保持常规 CTA 交互（背景色微调、阴影轻微变化），避免与整体分屏对比冲突。

【输出要求】
- 使用语义化结构（\`<main>\` / \`<section>\`）包裹左右面板；
- 使用 TailwindCSS 风格原子类描述布局（\`flex\`、\`w-1/2\`、\`items-center\`、\`justify-center\` 等）与配色；
- 生成结果必须保留「50/50 横向分屏 + 明确中线 + 强色彩对比」这些关键特征，让人一眼看出这是一个用于对比或双入口的 Split Screen 布局变体。

---

## English Version (en-US)

You are a senior UI designer and front-end engineer. Generate a Split Screen layout that looks very close to the current “Split Screen” demo.
Keep the strict 50/50 horizontal split: one side uses a dark background with light text, the other uses a light background with dark text. You may change copy, brand elements and exact colors, but you must preserve the core idea of a high-contrast dual-panel layout. Output semantic HTML plus TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Comparison pages: “Personal vs Business”, “Basic vs Pro”, etc.
- Dual-entry pages: “New user vs Existing user”, “Designer vs Developer”.
- Brand storytelling: one side visual narrative, the other side key information and actions.

[Layout structure]
1. Outer container
   - Use a full-width flex container, for example \`<main class='w-full h-screen flex'>\`.
   - Height can be viewport height or at least a full hero section.
2. Left and right panels
   - On desktop, each panel takes 50% width (\`w-1/2\`) and centers its content with \`flex items-center justify-center\`.
   - Inside each panel, place a concise headline (letter, word, or short phrase) and optional supporting text or button.
3. Divider
   - Add a clear divider between the panels via a 1px border (\`border-l border-gray-200\`) or a subtle shadow so the split is unambiguous.

[Color and contrast]
1. Panel palettes
   - One panel uses a dark theme (e.g. \`bg-black\`, \`bg-slate-900\`) with light text;
   - The other uses a light theme (e.g. \`bg-white\`, \`bg-gray-50\`) with dark text.
2. Brand accent
   - A single accent color (e.g. blue or purple) may be used for headings or buttons on both sides, as long as the overall light/dark contrast remains strong.
3. Type scale
   - Use large, bold type (\`text-3xl\`–\`text-5xl\`, \`font-bold\`/\`font-extrabold\`) so the split-screen structure is immediately obvious.

[Responsive behaviour]
1. Desktop (≥1024px)
   - Maintain the 50/50 horizontal split with centered content in each panel.
2. Tablet and mobile
   - Stack panels vertically (e.g. via \`flex-col\`) while preserving their contrasting roles and a clear dividing line (e.g. \`border-t\`).

[Interaction and motion]
1. Hover
   - If panels are clickable, you may slightly brighten the background or increase shadow on hover to imply interactivity.
   - If they are static, keep hover states minimal so structure remains the main visual focus.
2. Buttons
   - Buttons within panels should follow standard CTA interactions (subtle background/shadow shifts) without undermining the overall split contrast.

[Output requirements]
- Use semantic HTML structure (\`<main>\`, \`<section>\`) to wrap the split-screen panels.
- Use Tailwind-style utilities for layout (\`flex\`, \`w-1/2\`, \`items-center\`, \`justify-center\`) and color.
- The resulting UI must retain “50/50 split + clear central divider + strong color contrast” as key cues so it is instantly recognisable as a split-screen layout designed for comparison or dual entry.
