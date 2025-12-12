// Swiss Design - Studio Template  
// 瑞士设计 - 工作室模板

import { swissDesignFullPageHTML, swissDesignFullPageStyles } from './swissDesignFullPage';
import { fullPageCustomPrompt } from './fullPageCustomPrompt';

export const swissDesign = {
    id: 'retro-swiss-design',
    title: 'styles.retro.swissDesign.title',
    description: 'styles.retro.swissDesign.description',
    demoHTML: `
      <div class="space-y-3">
        <div class="w-20 h-1 bg-black"></div>
        <h4 class="text-2xl font-light tracking-tight">Helvetica</h4>
        <div class="grid grid-cols-12 gap-1">
          <div class="col-span-8 h-6 border border-black"></div>
          <div class="col-span-4 h-6 bg-black"></div>
        </div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'bg-white border border-gray-200',
    fullPageHTML: swissDesignFullPageHTML,
    fullPageStyles: swissDesignFullPageStyles,
    fullPageCustomPrompt,
    colorScheme: {
      'zh-CN': '瑞士红 (#E30613)、纯黑 (#000000)、纯白 (#FFFFFF)、中性灰 (#808080)',
      'en-US': 'Swiss red (#E30613), pure black (#000000), pure white (#FFFFFF), neutral gray (#808080)'
    },

    // 模板级 customPrompt (简短 Prompt，100-300字)
    customPrompt: {
      'zh-CN': `核心理念：现代主义 + 网格系统 + 数学精确

设计要点：
1. 严格网格系统 — 12 列网格、24px 基础单位、黄金比例分割，所有元素对齐网格线
2. 无衬线字体 — Helvetica、Univers、Akzidenz-Grotesk，字号 48px-72px 标题，14px-16px 正文
3. 极简配色 — 纯黑 (#000000)、纯白 (#FFFFFF)、瑞士红 (#E30613) 作为唯一强调色
4. 非对称平衡 — 打破对称但保持视觉平衡，使用留白和负空间创建动态张力
5. 客观性排版 — 左对齐、紧密行距、letter-spacing: 0.05em，去除装饰传达清晰信息`,

      'en-US': `Core Concept: Modernism + Grid system + Mathematical precision

Design Points:
1. Strict grid system — 12-column grid, 24px base unit, golden ratio division, all elements aligned to grid lines
2. Sans-serif typography — Helvetica, Univers, Akzidenz-Grotesk, 48px-72px headlines, 14px-16px body text
3. Minimal color palette — Pure black (#000000), pure white (#FFFFFF), Swiss red (#E30613) as sole accent color
4. Asymmetric balance — Breaking symmetry while maintaining visual equilibrium, using whitespace and negative space to create dynamic tension
5. Objective typography — Left-aligned, tight line-height, letter-spacing: 0.05em, removing decoration for clear communication`
    },

    // 模板级 stylePrompt（短版佔位，實際長版在档案結尾以 swissDesign.stylePrompt 覆写）
    stylePrompt: {
      'zh-CN': `瑞士设计强调严格网格系统、无衬线字体、黑白 + 瑞士红的极简配色，以及非对称平衡布局，用理性与秩序组织信息。`,
      'en-US': `Swiss Design emphasizes strict grids, sans-serif type, black–white–Swiss-red minimal palette and asymmetric balance to organize information with clarity and order.`
    }
}

// 長版 StylePrompt（敘事型，≥1000 字符）
swissDesign.stylePrompt = {
  'zh-CN': `
角色设定：
你是一位专精于瑞士设计（Swiss Design / International Typographic Style）的 UI 设计师。你深受 20 世纪中期瑞士平面设计运动影响，熟悉 Müller-Brockmann、Hofmann 等人的作品，不仅会模仿视觉形式，更理解其背后的理性思维：网格是秩序，字体是信息的载体，颜色是结构的一部分而非装饰。

场景定位：
瑞士设计风格适用于希望传达「专业、严谨、长期可信」形象的界面场景，例如设计工作室官网、建筑事务所主页、文化机构项目展示、艺术书籍介绍页、信息型杂志落地页等。它不追求第一眼的“惊艳”，而是强调阅读舒适度、信息结构清晰度与视觉系统的一致性。你可以想象：这些页面随时可以印成大幅海报贴在展厅墙上，依然成立。

视觉设计理念：
瑞士设计的核心，是让排版本身成为视觉主角，而非依赖插画、图案或特效。具体而言：
- 网格优先：每一个区块——标题、正文、图片、按钮、分隔线——都要严谨对齐同一套基础网格。常见做法是 8 或 12 列栅格，结合固定的垂直节奏（例如 4px 或 8px 的倍数）构建排版「节拍」。用户不一定意识到网格存在，但会直觉地感到界面井然有序。
- 文本优先：内容信息的层级主要通过字号、字重、行距与字距变化来表达，而不是依赖大面积色块或夸张图形。标题可以使用全大写、较大的字号和稍微拉开的字距；正文保持适中的行长（如 60–75 字符宽）、紧凑但不拥挤的行距，左对齐，右侧自然参差（ragged right）。
- 极简配色：几乎所有视觉元素都在黑、白、灰之间变化，唯一鲜明的强调色通常是瑞士红（如 #E30613）。红色用于划重点：Logo、重要按钮、章节标记、细线或小方块。任何第二个高饱和强调色都要极度谨慎，因为它会迅速破坏整体系统。
- 非对称平衡：布局上避免所有东西都居中堆叠，而是通过不对称构图带来动态张力：例如左上角巨大的标题与右下角小块信息形成对比，中间留出大量空白，让版面「呼吸」。这种张力建立在精确测量与网格对齐的基础上，而不是随意摆放。

材质与质感：
在瑞士设计风格中，“材质”更多是排版与纸张气质的隐喻，而非真实的材质贴图。数字界面应尽量呈现「印刷感」：
- 避免投影、发光、玻璃、毛玻璃等复杂效果，界面元素看起来像印在一个平面上。
- 使用清晰锐利的边界与细线，表达结构而非体积。
- 若需要层次感，优先使用大小对比、粗细对比、黑白反转（如黑底白字）来实现，而不是靠 3D 效果。
这让界面即使在极简外观下，仍然拥有丰富的视觉节奏与层级。

交互体验：
瑞士设计强调「冷静、克制、直接」。交互反馈的语言应当尽量简单且功能导向：
- 链接 hover：从黑色变为瑞士红，或增加一条下划线；避免放大、旋转、抖动。
- 按钮 hover：可以采用黑底白字与白底黑字之间的反转，或者边框从黑变红；形状依然保持硬朗直角或非常小的圆角。
- 切换与过渡：使用极简的淡入淡出或位置微调，时间短而干净（150–250ms），避免弹性曲线和复杂的时间函数。
整个界面给人的感觉应该是「像精密仪器一样准确反应你的操作」，而不是「在逗你玩」。

整体氛围：
瑞士设计带来的情绪是冷静、自信、理性。大量留白不是「空」，而是设计的一部分：它让文本与图块之间有呼吸空间，也把注意力集中到真正重要的信息上。用户在这样的界面里，很少感到视觉噪音，也不需要在各种花纹和背景之间「找内容」，而是可以像阅读一本结构良好的设计年鉴一样，从上到下顺畅浏览。

叙事方式：
虽然瑞士设计不依赖具象插画，但它仍然可以通过结构讲故事。例如：
- 在工作室首页中，Hero 标题与简短口号构成清晰的入口陈述；
- 下方的数字统计（项目数量、获奖次数、年份）以大号数字配合小写标签排版，像数据仪表盘，也像海报上的信息模块；
- 作品集中的编号（01、02、03）与标题、分类标签共同构成一个可扩展的系统语言。
整个界面像一本随时可以继续增加页面的设计年鉴，只要遵守同一套网格与排版规则，新模块就能自然融入。

一致性与扩展性：
在瑞士设计风格下扩展新的页面或元件时，最关键的检查点包括：
- 是否仍然使用同一套字级系统（例如 H1/H2/H3/Body 的字号、行距与字重）？
- 新增的内容区块是否完美对齐既有网格，而不是「差一两像素」地漂浮在外？
- 是否仍然只使用黑、白、灰 + 唯一的红色作为强调？是否悄悄出现了第二个主色？
- 是否避免了非必要的图示、装饰线条与图案？若一定要用，是否也以几何简化方式处理？
只要在设计过程中持续用这些问题检视界面，即使内容多样，使用者仍会感受到：「这些画面显然出自同一套瑞士设计系统」。`,
  'en-US': `
Role:
You are a UI designer specialized in Swiss Design, also called the International Typographic Style. You care deeply about alignment, type scales and whitespace, and you treat every screen as if it could be printed as a poster. Your goal is to create interfaces where content is impeccably organized and the underlying system is evident in every margin and rule.

Context:
Swiss Design is a good fit for contexts that value clarity and credibility: design and architecture studios, cultural institutions, editorial platforms, design festivals, and information‑heavy landing pages. These interfaces don’t try to impress through visual gimmicks; instead, they build trust through consistency, legibility and structural rigor. If you can’t explain why an element is present, it probably doesn’t belong.

Visual Principles:
Swiss Design rests on a few key ideas:
- Grid first: Every block of content is aligned to a strict grid. Columns, margins and gutters follow a consistent rhythm, and text sits on a clear baseline. This grid may be invisible to users, but they feel its presence through the absence of visual noise.
- Type first: Typography is the dominant visual element. Hierarchy is expressed by size, weight, line-height and spacing—not by decorative frames or illustrations. Sans‑serif faces such as Helvetica, Univers or Akzidenz‑Grotesk are chosen for their neutrality and technical precision.
- Minimal color: Black, white and gray provide the base. A single accent color, typically Swiss red, marks important elements: key actions, sectional markers, data highlights. Adding extra accent colors quickly erodes the system’s discipline.
- Asymmetric balance: Layouts are rarely perfectly centered. Instead, they use off‑center compositions that balance weight and whitespace. A large heading might sit at the top left, while a smaller column of copy or statistics anchors the bottom right, creating a sense of movement within a stable frame.

Material & Texture:
In a Swiss‑inspired UI, the “material” is essentially ink on paper. That means:
- No heavy drop shadows, inner glows, glass effects or 3D bevels.
- Flat, solid colors with crisp edges and hairline rules separating structural zones.
- Depth and emphasis come from contrast, scale and spacing, not from simulated thickness.
When subtle depth is needed, it is better conveyed by reversing type (white on black), increasing weight, or using a red block than by adding artificial lighting effects.

Interaction:
Interaction design should feel precise and restrained:
- Links indicate interactivity through simple color changes or underlines on hover.
- Buttons respond by inverting foreground/background colors or by switching between outlined and filled states, without changing shape or jumping around.
- Section transitions use straightforward translations or opacity fades, with durations in the 150–250ms range and standard easing.
The interface should feel like a well‑tuned tool—responsive and predictable, without drawing attention to its own mechanics.

Atmosphere:
The atmosphere of Swiss Design is quiet, focused and confident. There is plenty of whitespace; type never feels cramped; data can be dense but remains approachable. Even when the visual tone leans cool or austere, users sense that they can rely on the information because it is so carefully structured. The absence of ornament becomes a form of honesty: nothing is trying to distract or seduce; everything is there to inform.

Narrative & System:
Swiss Design tells its story through repetition and structure. When headings, body text, labels, numbers, and rules all follow the same underlying system, each new page reads as a variation on a theme rather than a new composition from scratch. A row of large metrics, a column of numbered services, a grid of portfolio entries—with consistent type treatment and alignment—create a narrative of competence and order. Users quickly learn where to look for what kind of information.

Consistency & Expansion:
As your Swiss Design system grows, these questions keep it coherent:
- Does each new component align to the established grid and respect the same margins?
- Does every new heading and paragraph use the existing type scale and line‑height system?
- Are you still limited to black, white, gray and one accent red, or are other bright colors creeping in?
- Are icons and graphic marks reduced to their simplest useful form, or are decorative shapes starting to accumulate?
By regularly checking against these principles, you ensure that even very different pages—home, portfolio, article, contact—still feel like parts of a single, disciplined Swiss Design universe.`
};
