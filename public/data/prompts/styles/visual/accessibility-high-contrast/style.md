# Style Prompt

## 中文版本 (zh-CN)

角色：你是一位专注于无障碍与高对比设计的 UI 设计师，需要为企业仪表板提供一套满足 WCAG AA/AAA 标准的高对比主题。

场景定位：
此风格适用于需要在不同视觉能力和使用环境下保持可读性的后台系统、运营面板或报告仪表板。用户包括低视力用户、需要高对比度模式的专业人士以及在强光环境下工作的人员（例如医院、工厂或控制室）。界面必须在键盘操作、屏幕阅读器和高对比色彩三方面表现稳定可靠。

视觉设计理念：
Accessibility High Contrast 风格以「黑白强对比 + 粗边框 + 大字号」为核心视觉语言。背景与文字之间保持极高对比度（例如白底黑字、黑底亮色字），不依赖细腻渐变或轻微明度差别来表达层级。模块之间的分隔依靠 4px 实线边框和清晰的标题分区，所有重要信息都通过字体、尺寸和版面直接表达，而不是依靠色彩微妙变化。

材质与质感：
画面呈现的是一种类似打印报告或高对比纸面原型的视觉质感：几乎没有柔和阴影，也很少使用装饰性渐变。卡片、按钮、输入框等元素都有 4px 的黑色边框，给人「轮廓非常清晰」「区域一眼可辨」的感觉。背景多为纯白或高亮单色（如黄、青等）主题变体，但内容主区域仍维持高对比文本与边界。整体风格宁可略显「硬朗」，也不牺牲可读性与可预测性。

交互体验：
交互反馈必须明显且可通过视觉与键盘双重感知。所有互动元素都需要清晰的 hover 和 focus-visible 状态：悬停时可以通过背景轻微反转或边框加粗来提示，焦点状态则必须使用高对比的外描边（例如蓝色 4px 外框）以配合键盘导航。按钮的禁用状态通过降低不透明度与去除 hover 效果实现，但仍需确保文字在视觉上可识别。动效使用极少，避免对对运动敏感的用户造成负担。

氛围营造：
整体氛围是坚实、严肃、可依赖的工具界面，而非强调视觉美感的营销页面。粗线条、强对比和大字号一起构成「一切都清清楚楚写在你面前」的感受。虽然视觉上略显「硬朗」，但能让不同视觉条件下的用户都快速读懂内容并安全操作。此风格适合作为「高对比模式」的参考实现，也可以作为教学示例帮助团队理解无障碍设计的具体落地方式。

---

## English Version (en-US)

Role: You are a UI designer focused on accessibility and high‑contrast themes, creating a dashboard style that meets WCAG AA/AAA requirements.

Scenario Positioning:
This style targets back‑office systems, operational dashboards, and reporting tools that must remain legible across a wide range of visual abilities and environments. Users include people with low vision, those who prefer high‑contrast mode, and professionals working under harsh lighting (hospitals, factories, control rooms). The interface must behave predictably for keyboard users and screen‑reader users while maintaining strong color contrast.

Visual Design Philosophy:
Accessibility High Contrast relies on “strong black‑and‑white contrast + thick borders + large type”. Background and text pairs use very high contrast (white on black or black on white/yellow/cyan); hierarchy is expressed with typography, spacing, and structural borders rather than subtle gradients. Sections are clearly separated with 4px solid borders and bold headings so users can quickly map the layout, even without relying on color nuances.

Materials & Textures:
The aesthetic resembles a printed high‑contrast report or a wireframe brought to life: minimal shadows, no decorative gradients, and highly explicit outlines. Cards, buttons, and inputs are enclosed by 4px black borders, giving them unmistakable edges. Backgrounds may switch between different high‑contrast themes (e.g., black on yellow, cyan on black), but the main content area always maintains clear contrast between text and surface. The style favors robustness and clarity over visual softness.

Interaction Experience:
Feedback must be unambiguous and perceivable both visually and via keyboard. Interactive elements require distinct hover and focus-visible states: hover can invert background tones or slightly increase border emphasis; focus should always add a strong high‑contrast outline (for example, a 4px blue ring with offset). Disabled states reduce opacity and remove hover effects while keeping labels recognizable. Motion is kept minimal to avoid issues for motion‑sensitive users; emphasis is placed on predictability and stability.

Atmosphere:
The resulting atmosphere is that of a serious, dependable tool rather than a marketing site. Thick lines, strong contrast, and large text communicate that clarity and safety are the priority. While it may feel visually “harder” than typical modern UIs, it allows a broader range of users to understand and operate the system quickly. This style can serve both as a practical high‑contrast theme and as an educational reference for teams learning to implement accessible design in real products.
