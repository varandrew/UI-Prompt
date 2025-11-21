// Retro OS 95 - Windows 95/98 Style
// 复古操作系统 95 - Windows 95/98 风格

import { retroOS95FullPageHTML, retroOS95FullPageStyles } from './retroOS95FullPage';

export const retroOS95 = {
  id: 'retro-os-windows95',
  title: 'styles.retro.retroOS.retroOS95.title',
  description: 'styles.retro.retroOS.retroOS95.description',
  demoHTML: `
    <div class="flex flex-col gap-3 p-4 bg-teal-700">
      <div class="bg-gray-300 border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 p-2">
        <div class="bg-blue-900 text-white px-2 py-1 text-sm font-bold mb-2">
          My Computer
        </div>
        <div class="flex gap-4 p-2">
          <div class="text-center text-xs">
            <div class="text-2xl mb-1">💾</div>
            <div>Drive C:</div>
          </div>
          <div class="text-center text-xs">
            <div class="text-2xl mb-1">📁</div>
            <div>Documents</div>
          </div>
        </div>
      </div>
      <div class="bg-gray-300 border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 px-2 py-1 inline-flex items-center gap-2 text-sm font-bold w-24">
        <span class="text-base">❖</span> Start
      </div>
    </div>
  `,
  customStyles: '',
  demoBoxClass: 'bg-teal-700',
  fullPageHTML: retroOS95FullPageHTML,
  fullPageStyles: retroOS95FullPageStyles,
  colorScheme: {
    'zh-CN': 'Teal 青色 (#008080)、灰色窗口 (#C0C0C0)、蓝色标题栏 (#000080)、白色 (#FFFFFF)',
    'en-US': 'Teal (#008080), gray window (#C0C0C0), blue title bar (#000080), white (#FFFFFF)'
  },

  // 模板级 customPrompt (简短 Prompt，100-300字)
  customPrompt: {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Retro OS 95」界面风格高度接近的 Windows 95/98 风格桌面 UI。
要求：保持当前示例中「青色桌面背景 + 灰色窗口 + 蓝色标题栏 + Start 按钮」的整体布局与视觉语言，只允许替换窗口标题、图标文字与部分内容模块。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案），整体偏向单个窗口 + 任务栏的经典桌面布局。

【使用场景】
- 场景：复古主题 Landing、操作系统模拟器入口页、游戏启动器、创意作品集封面。
- 用户：对 90 年代桌面系统有情怀的玩家、开发者与设计爱好者。
- 目标：精准重现 Windows 95/98 桌面 UI 的空间感与 3D 边框质感，让用户一眼认出是 95/98 时代界面。

【整体布局结构】
1. 桌面背景
   - 使用 Teal 青色 (#008080) 纯色背景，可选少量噪点或浅纹理，但整体保持简洁。
2. 主窗口
   - 一个灰色窗口 (#C0C0C0)，带蓝色标题栏 (#000080)，左上角为小图标，右上角为最小化/最大化/关闭按钮。
   - 窗口边框使用 2px outset/inset 组合营造典型 Win95 立体效果。
3. 窗口内容
   - 内部可以显示「My Computer」「Drive C:」「Documents」等图标和标签，采用小图标 + 文本组合。
4. 任务栏与 Start 按钮
   - 底部为一条任务栏区域，包含 Start 按钮（❖ Start）、若干任务按钮与系统托盘/时钟。

【色彩与材质】
1. 主配色
   - 桌面背景：Teal (#008080)
   - 窗口背景：灰色 (#C0C0C0)
   - 标题栏：蓝色 (#000080) 搭配白色文字 (#FFFFFF)
2. 3D 边框
   - 使用浅灰/白色作为上/左高光，深灰作为下/右阴影，构成立体按鈕与窗口框架。

【阴影与拟物效果】
1. 窗口与按钮
   - 利用 border-style: outset/inset 模拟凸起/按下状态；按下时改为 inset 表现被按进的感觉。
2. 桌面层次
   - 窗口通常略高于桌面背景，但整体阴影很克制，保持「平面 + 微 3D」的 90 年代质感。

【交互与动效】
1. 按钮按压
   - 按钮 active 状态使用 inset 边框，無需額外動画即可表達按壓感。
2. Hover 反馈
   - 鼠标悬停在图标或任务栏按钮上时，可略微改变背景色或边框颜色即可，避免現代感過強的動效。

【输出要求】
- 使用语义化 HTML 分出桌面背景、主窗口与任务栏结构；
- 使用 TailwindCSS 原子类（或自定义 class）实现 2px outset/inset 边框、标题栏渐变、图标网格布局；
- 生成的界面在「青色桌面 + 灰色窗口 + 蓝色标题栏 + Start 按钮 + 3D 边框」这些特征上，应与当前 Retro OS 95 示例高度接近。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a Windows 95/98-style desktop UI that looks very close to the current “Retro OS 95” demo.
Keep the teal desktop background, gray window, blue title bar and Start button as the core layout. You may change window titles, icon labels and some inner content, but not the classic arrangement or visual language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: retro landing pages, OS simulator entry screens, game launchers and portfolio covers.
- Users: players, developers and designers nostalgic for 1990s desktop systems.
- Goal: faithfully evoke the spatial feel and 3D borders of Windows 95/98 so the interface is instantly recognisable.

[Layout structure]
1. Desktop background
   - A flat teal (#008080) desktop; optional light noise or pattern, but overall simple.
2. Main window
   - A gray (#C0C0C0) window with a blue title bar (#000080), icon on the left and control buttons on the right.
   - Borders use 2px outset/inset combinations to create the classic Win95 3D frame.
3. Window content
   - Inside, show icons such as “My Computer”, “Drive C:” and “Documents” using small pixel-style graphics and labels.
4. Taskbar and Start button
   - A taskbar along the bottom with a ❖ Start button, task buttons and a simple system tray/clock.

[Color and materials]
1. Core palette
   - Desktop: Teal (#008080)
   - Window background: Gray (#C0C0C0)
   - Title bar: Blue (#000080) with white text (#FFFFFF)
2. 3D borders
   - Use light greys/white for top/left edges and darker greys for bottom/right edges to form bevelled frames.

[Shadows and skeuomorphism]
1. Windows and buttons
   - Use outset borders for normal state and inset borders for pressed state to simulate physical elevation and depression.
2. Desktop layers
   - Keep shadows subtle so the UI feels mostly flat with a hint of 3D, in line with 1990s aesthetics.

[Interaction and motion]
1. Button presses
   - Active buttons simply switch to inset borders; no extra animation is required.
2. Hover feedback
   - Icons and taskbar buttons may slightly change background or border color on hover; avoid modern, large-scale animations.

[Output requirements]
- Use semantic HTML to separate desktop, main window and taskbar structure;
- Use Tailwind-style utilities (or small custom classes) to implement 2px outset/inset borders, title bar gradients and icon grids;
- The generated UI must preserve the key traits of this Retro OS 95 demo: teal desktop, gray window, blue title bar, Start button and bevelled 3D borders.`
  },

  // 模板级 stylePrompt (详细 Prompt，1000-3000字)
  stylePrompt: {
    'zh-CN': `角色：你是专精于 Windows 95/98 操作系统风格的 UI 设计师，专注于 1990 年代桌面 UI 美学和 CRT 显示器效果。

场景定位：为怀旧主题网站、复古游戏平台或创意作品集打造 Windows 95/98 风格界面，通过经典桌面 UI 元素和 CRT 显示器效果传达 90 年代计算机美学。

核心设计语言：

1. **窗口系统**：
   \`\`\`css
   .win95-window {
     background: #c0c0c0;
     border: 2px outset #dfdfdf;
   }
   .win95-title-bar {
     background: linear-gradient(90deg, #000080 0%, #1084d0 100%);
     color: #ffffff;
     padding: 2px 4px;
     font-weight: bold;
   }
   \`\`\`

2. **按钮样式**：
   \`\`\`css
   .win95-button {
     background: #c0c0c0;
     border: 2px outset #dfdfdf;
     padding: 2px 8px;
   }
   .win95-button:active {
     border-style: inset;
   }
   \`\`\`

配色方案：
- Teal 青色：#008080（桌面背景）
- 灰色窗口：#C0C0C0（窗口背景）
- 蓝色标题栏：#000080（窗口标题）
- 白色文字：#FFFFFF（标题栏文字）
- 黑色文字：#000000（窗口内容）

技术实现要点：
- 使用 border outset/inset 创建 3D 效果
- 使用 image-rendering: pixelated 保持像素字体清晰度
- 使用 repeating-linear-gradient 创建扫描线效果

重要提示：
- 所有边框必须使用 2px outset/inset 样式
- 按钮必须有按下效果（active 时 border-style: inset）
- 字体必须使用 MS Sans Serif 或 Tahoma
- 桌面背景必须使用 Teal 青色 (#008080)`,

    'en-US': `Role: You are a UI designer specializing in Windows 95/98 operating system style, deeply familiar with 1990s desktop UI aesthetics and CRT monitor behavior.

Scenario Positioning:
Design a nostalgic Windows 95/98 style desktop interface for retro-themed sites, OS simulators or game launchers. The target users are people who grew up with 90s PCs or enjoy retro computing culture. The interface should immediately evoke the feeling of sitting in front of a beige CRT monitor with the classic teal desktop.

Visual Design Philosophy:
Prioritize clarity, rigid structure and functional simplicity over decoration. The visual language is based on flat fills, beveled edges and minimal use of gradients. Depth is created through 2px 3D borders rather than complex shadows. Typography is small, compact and pixel-crisp, emphasizing utility and information density.

Materials & Textures:
Use teal desktop background, solid gray window surfaces and a deep blue title bar as the primary materials. The 3D effect is expressed through light and dark border edges rather than modern soft shadows. The surface should feel like painted metal and plastic, with almost no translucency or blur effects. Screen texture can be hinted by subtle scanline patterns or slight color noise, suggesting CRT output.

Interaction Experience:
Interactions should feel mechanical and immediate. Buttons and windows visually "press in" by switching from outset to inset borders when active. Hover feedback is minimal—slight color changes or border emphasis rather than smooth animations. There are no easing curves or long transitions; state changes appear almost instantly, matching the snappy, discrete behavior of classic desktop systems.

Atmosphere Creation:
Overall, the interface should feel like a small, self-contained operating system world: teal desktop, gray windows, blue title bars and pixel icons arranged with strict alignment. The mood is nostalgic, slightly utilitarian and comforting, inviting users to explore files, launch programs or play retro games as if they were back in front of a 90s PC.`
  }
};
