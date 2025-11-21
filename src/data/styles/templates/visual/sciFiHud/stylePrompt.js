/**
 * Sci-Fi HUD - Style Prompt
 * 科幻 HUD 風格的设計理念說明
 */

export const stylePrompt = {
  'zh-CN': `角色：你是一位专精于科幻 HUD（Heads-Up Display，抬头显示器）风格的 UI 设计师与前端工程师。

场景定位：
这种风格适用于需要强调「高科技感」「数据可视化」「实时状态监控」的界面场景，例如：AI 控制面板、网络安全监控大屏、科幻主题产品官网、星舰控制台模拟界面、数据指挥中心仪表板等。目标用户通常对科技有较高认知，对界面信息密度和可视化能力有更高要求，希望在一眼之间获取关键状态、风险预警和系统健康度。品牌形象应传达「未来科技」「精准控制」「专业可靠」「冷静克制」等特质。

视觉设计理念：
Sci-Fi HUD 风格的核心在于「信息即界面，界面即仪表」。整个页面好像是一块巨大的透明战术玻璃屏或舰桥前的全息投影层，所有元素都围绕信息读取效率与科技质感设计。设计哲学强调：
- 分层的信息结构（主控区 / 子系统区 / 辅助状态区）
- 可快速扫视的高对比配色（深色背景 + 高亮青色 / 蓝绿色描边）
- 几何化的 HUD 元素（雷达圈、网格、扇形进度、模块化卡片）
- 有节奏但不过度喧宾夺主的动效（扫描、脉冲、闪烁、扫线）
整个界面应给人「正在实时运作的系统」之感，而不是静态宣传页。

材质与质感：
- **深空背景层**：使用冷色调深色背景（#020617 ~ #020617 / #020617 → #0f172a 的渐变），营造类似星舰驾驶舱或地下作战室的暗环境，使 HUD 元素以发光方式浮于其上。
- **半透明玻璃面板**：核心信息区域采用带轻微模糊和透明度的矩形 / 多边形面板，背景色可为 rgba(15, 23, 42, 0.85) 或 rgba(15, 23, 42, 0.7)，辅以内外边框线条，模拟透明玻璃或强化塑料材质。
- **高亮描边与分割线**：使用青色 / 蓝绿色描边（#0EA5E9、#22D3EE）或微发光线条划分模块边界，常见形式包括折角矩形、截角面板、L 型角标、水平扫描线等。
- **网格与扫描线**：在背景或局部区域叠加低透明度网格（1px 线条）与水平扫描线，色值可为 rgba(148, 163, 184, 0.15)，加强 HUD 的技术感和空间感。
- **光点与粒子**：少量细粒度光点、粒子或星屑缓慢漂浮（opacity 与 translateY 轻微变化），让界面保持「活着」的状态，但粒子密度需控制，避免干扰阅读。

色彩系统：
- 背景主色：深蓝灰 / 深海军蓝（#020617、#020617、#020617 → #0f172a 渐变）
- 核心强调色：高亮青色 / 蓝绿（#06B6D4、#0EA5E9、#22D3EE）用于边框、标签、主按钮和关键状态指示
- 辅助强调色：危险 / 警告用荧光红橙（#F97316、#EF4444），成功 / 安全状态用荧光绿（#22C55E、#10B981），禁用或离线状态用暗灰 / 暗蓝灰
- 文本色：高对比度主文本 #E5F2FF、次级文字 #94A3B8、说明文字 #6B7280
- 状态色与图例：同一类型数据在图表、标签和徽章中使用一致色彩，保证「一眼识别」

布局与信息层次：
- **顶栏状态带**：界面顶部通常有一条细长状态栏，包含系统名称、当前模式（如 LIVE / SIMULATION）、时间同步状态、全球时间 / 舰桥时间、连接状态指示灯等。背景可为更深的半透明条，配合 1px 底部发光线。
- **主控制面板**：中央主区域为核心 HUD 面板，用于显示最重要的几个数据模块，例如：系统总览、任务进度、威胁等级、资源使用率等。布局多为 2~3 列模块化卡片或中央大图 + 两侧信息支撑。
- **左右子系统面板**：左右两侧可布局子系统状态卡，例如：通信、能量、冷却、网络、子系统节点等，以纵向堆叠方式呈现，并以细线与主体区域连接，模拟线缆或数据通道。
- **底部时间轴 / 日志区**：页面底部区域可以展示事件日志、指令历史或告警时间轴，以细行列表 + 状态点形式呈现，让用户感知事件顺序。

交互体验：
- **悬停反馈（Hover）**：卡片和按钮在 hover 时应出现轻微的发光增强、描边亮度提升、背景透明度稍微变化，并可能伴随 2px 上浮（translateY(-2px)），营造「实体面板被触碰」的感觉。
- **按压反馈（Active）**：点击按钮时可短暂降低发光强度并轻微下压（translateY(1px)）、缩小（scale(0.98)），模拟机械按键或电容触控反馈。
- **扫描与脉冲动画**：雷达、进度环、关键指示灯可以使用循环扫描动画（rotate / sweep）、呼吸脉冲动画（scale + box-shadow），但是频率需要控制（1.5s~3s），避免造成疲劳。
- **状态变化过渡**：当数值或状态变化时，使用淡入淡出或轻微放大缩小动画提示变化位置，而不是瞬间闪烁，既保留科技感又避免干扰。

氛围与体验：
整体氛围应像是在高维度指挥中心或科幻宇宙舰桥上操作复杂系统：
- 环境较暗，光源来自 HUD 面板本身的发光与数据流
- 用户仿佛戴着 AR 头显，在透明屏幕前快速浏览多层信息
- 界面给人冷静、专业、可靠的印象，而不是娱乐化的炫技
- 所有细节都服务于「任务执行」与「决策支持」，而非单纯视觉效果

适用与不适用场景：
- 适用：科技品牌官网、AI 平台控制台、科幻主题产品、运维监控大屏、IoT 控制中心、网络安全态势感知界面
- 不适用：亲子 / 童趣 / 温馨家居类品牌、需要高度情感化与手绘质感的场景、需要极简留白的禅意风格

设计关键字总结（供 LLM 参考）：
科幻 HUD、深色背景、蓝绿发光、透明玻璃面板、雷达、扫描线、网格、数据卡片、状态指示灯、实时监控、指挥中心、舰桥、冷静、专业、未来感。`,

  'en-US': `Role: You are a UI designer and front-end engineer specializing in Sci-Fi HUD (Heads-Up Display) interfaces.

Scene Positioning:
This style is suitable for interfaces that need to emphasize "high-tech feeling", "data visualization" and "real-time status monitoring", such as AI control panels, cybersecurity dashboards, sci-fi themed product landing pages, starship bridge control consoles, and command center views. Target users are usually tech-savvy, comfortable with higher information density and complex visualizations. They expect to capture key status, risk alerts, and system health at a glance. The brand image should convey "futuristic", "precise control", "professional" and "reliable" qualities.

Visual Design Philosophy:
The core of Sci-Fi HUD style is that "information is the interface, and the interface is an instrument panel". The whole page feels like a large transparent tactical glass screen or a holographic projection surface in front of a starship bridge. Every element is designed around information readability and technological aesthetics. The design philosophy emphasizes:
- Layered information structure (primary control area / subsystem area / auxiliary status area)
- High-contrast color scheme for quick scanning (dark background + bright cyan / teal accents)
- Geometric HUD elements (radar circles, grids, sector gauges, modular cards)
- Rhythmic but not overwhelming motion (scanning, pulses, sweeps, soft glows)
The interface should feel like a living, running system rather than a static poster.

Materials and Textures:
- **Deep space background layer**: Use cold, dark tones (#020617 ~ #0f172a) to simulate a command room or starship cockpit in low light, so HUD elements appear to glow above it.
- **Semi-transparent glass panels**: Core information areas use rectangles or clipped polygons with subtle blur and transparency (e.g. rgba(15, 23, 42, 0.85)), combined with inner/outer border lines to mimic hardened glass or reinforced plastic.
- **Glowing outlines and dividers**: Thin cyan/teal lines (#0EA5E9, #22D3EE) are used to divide modules, often in cut-corner rectangles, stepped panels, or L-shaped corners.
- **Grids and scanlines**: Low-opacity 1px grids and horizontal scanlines (rgba(148, 163, 184, 0.15)) add technical structure and depth.
- **Particles and light points**: Sparse, subtle particles or light dots drift slowly (small opacity and translate animations) to suggest ambient systems activity.

Color System:
- Background: deep navy / slate (#020617, #020617 → #0f172a gradient)
- Primary accents: bright cyan / teal (#06B6D4, #0EA5E9, #22D3EE) for borders, labels, primary buttons and key statuses
- Secondary accents: warning / danger in vivid red or orange (#F97316, #EF4444); success / safe in bright green (#22C55E, #10B981); disabled / offline in muted gray or desaturated blue-gray
- Typography: main text #E5F2FF, secondary text #94A3B8, helper text #6B7280
- Status legend: consistent colors across charts, badges and labels so categories are recognizable at a glance.

Layout and Information Hierarchy:
- **Top status bar**: A slim bar at the top holds system name, mode (LIVE / SIMULATION), time sync, world / ship time and connection indicators. Background is slightly darker with a thin glowing bottom border.
- **Primary control panel**: The central area displays the most critical data modules: system overview, mission progress, threat level, resource utilization, etc. Layout is typically 2-3 columns of modular cards or a large central visualization with supporting side panels.
- **Side subsystem panels**: Left and right columns show subsystem cards such as communications, power, cooling, network and nodes, stacked vertically and visually linked to the main area with connecting lines.
- **Bottom timeline / log**: A lower strip shows event logs, command history or alert timelines, using compact rows with small status dots and timestamps.

Interaction and Motion:
- **Hover feedback**: Cards and buttons slightly increase glow, brighten outlines and move up by 1-2px on hover, suggesting a tangible glass surface being touched.
- **Active feedback**: Pressing buttons slightly reduces glow, compresses them down by 1px and scales them to about 0.98 for a mechanical / capacitive feel.
- **Scanning and pulse animations**: Radar visuals, rings, and key indicators use slow rotations, sweeping gradients or breathing pulses (1.5–3s) to indicate continuous monitoring without overwhelming the user.
- **State transitions**: When values or statuses change, use soft fades or subtle scale animations instead of harsh flashes, to clearly show change while preserving legibility.

Atmosphere and Experience:
The overall atmosphere should feel like operating a complex system in a futuristic command center or on a starship bridge:
- The room is dark, with light mainly coming from HUD panels.
- The user feels as if wearing an AR headset, interacting with floating holographic layers.
- The interface feels calm, professional and trustworthy instead of flashy or playful.
- Every detail serves "mission execution" and "decision support" rather than pure decoration.

Suitable and Unsuitable Use Cases:
- Suitable: tech brand landing pages, AI platforms, monitoring dashboards, IoT control centers, cybersecurity visualization, sci-fi themed products.
- Unsuitable: family / kids / cozy home brands, hand-drawn or naive illustration heavy sites, ultra-minimal zen-style layouts.

Key Style Keywords (for LLM reference):
Sci-Fi HUD, dark background, cyan glow, glass panels, radar, scanlines, grid overlays, data cards, status indicators, real-time monitoring, command center, starship bridge, calm, professional, futuristic.`
};
