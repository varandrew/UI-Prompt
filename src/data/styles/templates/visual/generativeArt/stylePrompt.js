/**
 * Generative Art - Style Prompt
 * 生成藝術風格的设計理念說明
 */

export const stylePrompt = {
  'zh-CN': `角色：你是一位专精于生成艺术（Generative Art）与数据可视化的 UI 设计师兼前端工程师。

场景定位：
生成艺术风格适用于那些希望让界面本身看起来像“活的系统”的场景：例如创意实验平台、交互艺术展览页面、算法可视化实验室、音乐或声音反应界面、数据艺术作品展示页，以及用来解释算法、模型或复杂系统行为的互动 Demo。目标用户通常对科技与艺术都有兴趣，愿意通过光点、线条和动态图形去感受系统状态与变化节奏，而不只是阅读静态数字。品牌形象应传达“前沿实验”“创意探索”“系统性与随机性的平衡”。

视觉设计理念：
生成艺术风格的核心在于：界面的视觉不是预先绘制好的插画，而是由一套规则、参数与随机性共同驱动的“视觉系统”。你的设计不只是摆放静态组件，而是在设计一套“可生成行为”的视觉语言。整体理念可以概括为：
- 规则 + 噪声：通过少量可控参数（粒子数量、速度、连接范围、色带）加上一点受限随机（随机初始位置、速度偏移），让每一帧画面都略有不同；
- 系统性图案：以粒子系统、流体线条、场线、噪声场、波动曲线等形式展现系统结构，而不是传统图标；
- 宏观与微观：从远处看是一个整体画面（光晕、色云、能量场），近看则能发现大量细节（颗粒、连接线、轨迹）；
- 控制面板与画布分离：左侧或右侧是参数控制面板，中央是生成画布，用户通过滑块、按钮、开关控制视觉系统行为。

材质与质感：
- 背景画布：一般采用接近黑色或深蓝紫色的背景（如 #020617、#030712、#0f172a），既能让粒子和线条发光效果更明显，又让整个界面具备“夜空实验室”的氛围；
- 粒子与光点：粒子多使用白色或高亮色的小圆点，配合外发光阴影（box-shadow 或 filter: blur），形成类似星尘、萤火或能量粒子的质感；
- 轨迹与连线：细线使用低不透明度的渐变色（如青色、紫色、粉色），在粒子之间形成动态网络或场线图案；
- 光晕与模糊：大量运用软边、模糊、渐隐效果，让整个画面感觉柔和且具有深度，而不是硬朗的几何扁平图形；
- 控制面板：与画布形成对比，通常采用半透明深色面板 + 细边框 + 微弱发光，用更理性的布局承载参数控件。

色彩系统：
- 背景主色：深蓝、深紫、近黑色，用于表现“宇宙 / 实验室 / 算法空间”；
- 粒子主色：白色和浅蓝、青色、品红、荧光紫等，用高亮、低面积的方式出现；
- 渐变色带：可配置若干主题，例如 Cyberpunk（品红 + 青 + 紫）、Neon（蓝 + 紫 + 粉）、Aurora（青 + 绿 + 紫）、Matrix（绿 + 青黑），每个主题对应一组渐变色与发光风格；
- 控制面板文本：主文本多用浅灰或白色，次要文本用中灰，数值标签可以用对应主题色点缀；
- 状态色：无需传统 UI 中大量的红黄绿状态，而是通过粒子密度、连接线强度和光晕来暗示状态变化。

布局与信息结构：
- 整体布局常见模式是：左（或右）侧为控制面板，上方是标题与简介，下方是参数设置；中央 / 右侧为画布区域，占据大部分空间；
- 标题区应使用简洁的排版，突出“实验室 / Lab / Playground”等概念，并用少量渐变线条或几何装饰引入画布；
- 参数区应分组清晰，例如基础参数（粒子数量、粒子尺寸）、动态参数（速度倍数、吸引力、噪声强度）、视觉参数（光晕、模糊、尾迹长度）、主题参数（颜色主题、形状类型）；
- 画布区要尽量保持干净：只显示生成图形和少量提示，不要叠加太多 UI 控件，以免破坏沉浸。

交互体验：
- 滑块（Range Slider）：调整粒子数、速度、连接距离、模糊程度等参数时，画布应即时反應，並提供細緻的過渡，而非突变；
- 切换按鈕（Toggle / Tabs）：切換不同主題（例如 Cyberpunk / Aurora / Matrix）時，整体色帶与背景氛圍逐步過渡，而不是瞬間跳变；
- 重置与隨機化：提供一鍵重置到“推薦狀態”和一鍵“隨機種子”功能，让用戶一鍵生成全新画面，同時保持風格一致；
- 滑鼠互動：滑鼠移動可作為吸引源或擾動源，让粒子向游标聚集、避開或沿軌跡旋轉，以增加“可玩性”；
- 動画節奏：儘管画面中有大量運動元素，但整体節奏需控制在“平滑且可觀察”的範圍，避免令人眼花撩亂或過度閃爍。

氛圍營造：
- 用戶應該感覺自己進入了一個「算法藝術實驗室」：界面本身就是一個實驗場，而不是仅仅展示最終作品；
- 深色背景与發光粒子營造出夜間工作室或数据宇宙的感覺，參数控制面板則像是一組儀表，让用戶對系統行為有一定掌控；
- 隨機性不應等於混亂，画面始終保持一種“可被描述的秩序”，例如清晰的力場方向、类似星云的亮度分布、或网絡般的連接結構；
- 整体氛圍應該是安静但充滿能量的，像坐在深夜的創意工作室里看著自己的算法不斷生成新的圖像。

適用与不適用場景：
- 適用：創意工作室或藝術家工作流工具、与 AI / 算法相关的产品著陸页、視覺化實驗平台、互動展覽网站、需要展示「系統活力」的科技品牌；
- 不適用：需要極高可讀性和稳定感的金融管理後台、嚴肅業务系統首页、醫療或政务系統的主要操作界面；
- 對於需要長時間閱讀大量文本的場景，生成藝術背景應極度克制，甚至只存在於頂部 HERO 区域，以免干擾閱讀。

设計关鍵詞總結（供 LLM 參考）：
生成藝術、粒子系統、場线、噪聲場、動態軌跡、深色画布、發光粒子、互動實驗室、參数面板、算法可視化、隨機性与秩序、科技藝術。`,

  'en-US': `Role: You are a UI designer and front-end engineer specializing in generative art and data visualization.

Scene Positioning:
The generative art style is suited for interfaces that should feel like living systems: creative experiment platforms, interactive art exhibition pages, algorithm visualization labs, audio-reactive UIs, data art showcases, and demos that explain algorithmic or systemic behavior. Target users are interested in both technology and art, and they are willing to read the state of the system from particles, lines and evolving patterns, not just from static numbers. The brand image should communicate experimental, exploratory and a balance between structure and randomness.

Visual Design Philosophy:
Instead of using pre-rendered illustrations, the interface becomes a "visual system" driven by rules, parameters and controlled randomness. You are not just arranging static components, but designing the rules of behavior. Key principles:
- Rules + noise: a small set of controllable parameters (particle count, speed, connection range, color band) plus limited randomness (initial positions, velocity offsets) so each frame is slightly different;
- Systemic patterns: particles, flows, field lines, noise fields and waves are used to express structure instead of icons;
- Macro vs micro: from a distance, the composition reads as a single energy field; up close, many tiny details such as particles and connections become visible;
- Separation of control and canvas: a rational control panel on one side and a large generative canvas, clearly separated but visually related.

Materials and Textures:
- Canvas: very dark blues, purples or near-black backgrounds to make glowing particles stand out and to evoke a night-lab / algorithmic universe;
- Particles: small white or brightly colored circles with outer glows, resembling dust, fireflies or energy points;
- Trails and connections: low-opacity gradient strokes between particles to form networks or field-like structures;
- Glow and blur: heavy use of soft edges, blur and fade to give depth and softness instead of hard flat geometry;
- Control panel: semi-transparent dark panels with thin borders and subtle glows, hosting sliders, buttons and toggles in a structured way.

Color System:
- Background: deep blues and purples (#020617, #030712, #0f172a);
- Particle colors: white and bright cyan, teal, magenta, neon purple as small, high-intensity accents;
- Theme bands: define several color themes such as Cyberpunk (magenta + cyan + purple), Neon Nights (blue + purple + pink), Aurora (cyan + green + violet), Matrix (green + teal) and use them consistently across particles, trails and UI accents;
- Panel text: light grays or white for labels, mid-grays for helper text, and theme colors as small accents for values;
- State indication: rely more on density, brightness and motion of particles instead of classic red/yellow/green status lights.

Layout and Information Structure:
- Typical layout: a header with title and short description, a side control panel for parameters, and a large central or right-hand canvas area;
- The title should clearly communicate the idea of a lab, playground or experiment, with minimal typographic decoration and maybe a few geometric lines that rhythmically relate to the canvas;
- Group parameters into logical blocks: basic (particle count, size), dynamics (speed multiplier, attraction, noise strength), visual (glow, blur, trail length), theme (color scheme, shape type);
- Keep the canvas area visually clean: avoid overlaying too many UI elements on top of the generative visuals.

Interaction Experience:
- Sliders should provide immediate visual feedback: changing particle count, speed or connection range gradually morphs the pattern, not in discrete jumps;
- Theme switches (Cyberpunk / Aurora / Matrix etc.) should transition the environment over time rather than snapping instantaneously when possible;
- Provide quick reset and randomize functions: one returns to a recommended default state, the other uses a new random seed while preserving the overarching style;
- Pointer interaction can act as an attractor, repeller or disturbance field so particles react to cursor movement, increasing playfulness and sense of agency;
- Motion rhythm should remain observeable and calm enough to watch for long periods, avoiding harsh flashing or overly jittery behavior.

Atmosphere:
- The user should feel like they have stepped into an algorithmic art lab where the interface itself is an experiment, not just a gallery of finished works;
- The dark environment and glowing elements evoke a late-night creative studio or a data cosmos, while the control panel gives a sense of control and instrumentation;
- Randomness should never degrade into chaos: patterns still show underlying order, such as coherent flow fields or network structures;
- The overall mood is quiet but charged with potential, as if the system is continuously exploring new configurations.

Suitable and Unsuitable Use Cases:
- Suitable: creative workflow tools, AI or algorithm-focused landing pages, visualization labs, interactive exhibition sites, tech brands that want to signal system "vitality";
- Unsuitable: conservative financial back offices, primary interfaces for mission-critical operations, medical or public sector systems where clarity and stability outweigh artistic expression;
- For text-heavy reading contexts, generative backgrounds should be heavily constrained or limited to hero sections only.

Key Style Keywords (for LLM reference):
generative art, particle systems, field lines, noise fields, motion trails, dark canvas, glowing particles, interactive lab, parameter panel, algorithmic visualization, structured randomness, tech-art fusion.`
};
