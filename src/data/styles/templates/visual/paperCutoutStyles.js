// Paper/Cutout Style Data
// 纸张剪贴风格数据

// ✨ 稳定的空数組引用（防止 useMemo 無限循環）
const EMPTY_PREVIEWS = [];

export const paperCutoutStyles = [
  {
    id: 'paperCutout',
    title: 'styles.visual.paperCutout.title',
    description: 'styles.visual.paperCutout.description',
    demoHTML: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet">
      </head>
      <body>
        <!-- Paper/Cutout Style Demo -->
        <div class="paper-cutout-demo">
          <!-- Sticky Note Card -->
          <div class="sticky-note">
            <div class="sticky-pin"></div>
            <h4 class="sticky-title">Daily Task</h4>
            <p class="sticky-text">Design review at 2pm</p>
          </div>

          <!-- Paper Card -->
          <div class="paper-card">
            <div class="paper-clip"></div>
            <h4 class="paper-heading">Meeting Notes</h4>
            <p class="paper-body">Q4 planning discussion</p>
          </div>

          <!-- Collage Tags -->
          <div class="collage-group">
            <div class="collage-tag tag-pink">Ideas</div>
            <div class="collage-tag tag-blue">Tasks</div>
            <div class="collage-tag tag-green">Done</div>
          </div>
        </div>
      </body>
      </html>
    `,
    customStyles: `
      /* 演示容器 */
      .paper-cutout-demo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 16px;
        padding: 24px 16px;
        background: #FAF0E6;
        position: relative;
      }

      /* 便利贴样式 */
      .sticky-note {
        position: relative;
        padding: 18px 14px;
        background: linear-gradient(135deg, #FFF59D, #FFF176);
        border-radius: 2px;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.15);
        transform: rotate(-2deg);
        transition: all 0.3s ease;
        font-family: 'Caveat', cursive;
      }

      .sticky-note:hover {
        transform: rotate(0deg) translateY(-4px);
        box-shadow: 3px 3px 8px rgba(0,0,0,0.2);
      }

      /* 图钉装饰 */
      .sticky-pin {
        position: absolute;
        top: -6px;
        right: 16px;
        width: 14px;
        height: 14px;
        background: #E57373;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }

      .sticky-pin::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5px;
        height: 5px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
      }

      .sticky-title {
        margin: 0 0 6px 0;
        font-size: 17px;
        font-weight: 700;
        color: #2C3E50;
      }

      .sticky-text {
        margin: 0;
        font-size: 13px;
        color: #34495E;
        line-height: 1.4;
      }

      /* 纸张卡片样式 */
      .paper-card {
        position: relative;
        padding: 18px 14px;
        background: #FFFAF0;
        border-radius: 2px;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.15);
        transform: rotate(1deg);
        transition: all 0.3s ease;
        border-top: 3px dashed rgba(0,0,0,0.1);
      }

      .paper-card:hover {
        transform: rotate(0deg) translateY(-4px);
        box-shadow: 3px 3px 8px rgba(0,0,0,0.2);
      }

      /* 回形针装饰 */
      .paper-clip {
        position: absolute;
        top: 8px;
        right: 10px;
        width: 20px;
        height: 6px;
        background: #90A4AE;
        border: 2px solid #78909C;
        border-radius: 3px;
        transform: rotate(15deg);
        box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
      }

      .paper-heading {
        margin: 0 0 6px 0;
        font-size: 16px;
        font-weight: 600;
        color: #2C3E50;
        font-family: 'Caveat', cursive;
      }

      .paper-body {
        margin: 0;
        font-size: 12px;
        color: #546E7A;
        line-height: 1.5;
      }

      /* 拼贴标签组 */
      .collage-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: flex-start;
      }

      .collage-tag {
        padding: 8px 14px;
        font-size: 12px;
        font-weight: 600;
        color: #2C3E50;
        border-radius: 2px;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.12);
        transition: all 0.2s ease;
        cursor: pointer;
        font-family: 'Caveat', cursive;
      }

      .collage-tag:hover {
        transform: translateX(3px);
        box-shadow: 3px 3px 6px rgba(0,0,0,0.18);
      }

      .tag-pink {
        background: #F8BBD0;
        transform: rotate(-2deg);
      }

      .tag-blue {
        background: #90CAF9;
        transform: rotate(1deg);
      }

      .tag-green {
        background: #AED581;
        transform: rotate(-1deg);
      }
    `,
    // 透過預覽加載器動態載入完整页面（避免首屏打包過大）
    fullPagePreviewId: 'paper-cutout',
    previews: EMPTY_PREVIEWS,  // ✨ 使用稳定的空数組引用
    // Paper Cutout 風格 StylePrompt（較長版敘事）
    stylePrompt: {
      'zh-CN': `角色：你是一位擅长纸张剪贴与手帐视觉语言的 UI 设计师，需要为灵感板、任务墙或个人记录工具设计一套 Paper/Cutout 风格界面。

场景定位：
界面好像一块被贴满便利贴、纸条和标签的软木板或书桌背景，适合做灵感收集、任务分类、日常计划或创意 Moodboard。用户希望在这个界面上快速记录想法、标记优先级、移动卡片，就像在实体笔记本或墙面上贴纸条一样自然。

视觉设计理念：
Paper/Cutout 风格的核心是「让界面看起来像由真实纸片拼贴而成」。模块不再是标准化的扁平卡片，而是略微错位、角度不同、质感各异的纸张组合。布局上依然需要清晰的层次和信息结构，但允许一定程度的不对齐、旋转和重叠，以营造真实桌面或灵感板的随意感。整体色彩偏向暖色和文具色（浅黄、浅粉、浅蓝、牛皮纸色等），避免冷硬电子感。

材质与质感：
每一种元素都对应一种纸质：便利贴像荧光便签纸，略透明、边缘有轻微卷起；纸卡像会议记录或打印纸条，表面偏白或米色，有轻微阴影与虚线装饰；拼贴标签则像手帐贴纸，颜色更饱和、形状更自由。所有纸张都有适度的投影（2–4 像素偏移），并通过 1–2 度的小角度旋转打破「像素完美对齐」带来的生硬感。局部可以加入回形针、图钉、胶带等装饰，进一步强化物理感。

交互体验：
交互应模拟真实纸片操作的感受。悬停时，便利贴和标签可以稍微抬起一点、阴影加深，好像被手指轻轻托起；点击或拖拽时，元素略微放大或加深阴影，让用户感觉自己正在「拿起这张纸」。动效节奏不宜过快，以 180–260ms 的平滑过渡为主，避免与简洁文具风格冲突。选中状态可通过在纸张下方加一层浅色「胶带」或高亮描边来表示，而不是传统的高亮背景条。

氛围营造：
整体氛围像是创意工作者的桌面或灵感墙：略微凌乱但有秩序，充满手写标注和颜色标签，但又不会淹没内容本身。局部的手写字体、曲线图标和不完全对齐的标签，营造出「这是我的私人空间」的亲密感。用户在使用这个界面时，应感到自己是在「动手整理纸张」而不是在操作冷冰冰的数字面板。`,
      'en-US': `Role: You are a UI designer specializing in paper collage and scrapbook‑inspired interfaces, designing a Paper/Cutout style board for ideas, tasks, or personal notes.

Scenario Positioning:
The interface behaves like a cork board or desk covered with sticky notes, index cards, and labels. It is ideal for inspiration boards, lightweight project walls, day‑to‑day planning, or personal journaling. Users expect to jot down thoughts quickly, group and rearrange notes, and visually mark priorities as if working with physical paper.

Visual Design Philosophy:
The core idea is to make the UI look as if it is composed of real paper pieces. Modules are not perfectly aligned boxes but slightly rotated, offset cards with varied sizes and colors. The information hierarchy remains clear, yet the overall composition embraces imperfection and layering, just like a real moodboard. Colors lean toward stationery tones—pale yellows, pinks, blues, and kraft browns—rather than cold digital hues.

Materials & Textures:
Each element maps to a different “paper type”: sticky notes resemble fluorescent note paper with soft gradients; main cards feel like memo sheets with dashed headers; collage tags act like stickers with stronger colors and bolder typography. Shadows are small but visible, giving the illusion that pieces are lifted off the background. Slight rotation and overlapping edges keep the layout lively and tactile. Decorative details such as pins, clips, or tape strips can be used sparingly to strengthen the physical metaphor.

Interaction Experience:
Interactions should mimic handling paper. On hover, notes and tags lift subtly with deeper shadows, as if a finger is about to pick them up. On click or drag, elements can scale up a bit or shift position to suggest grabbing and moving. Animations are smooth and moderate in speed (around 180–260ms), supporting the cozy stationery feeling rather than a high‑tech vibe. Selection can be indicated by an extra highlight border or a “taped” effect under the card instead of the usual solid highlight bar.

Atmosphere:
The overall mood is that of a creative person’s desk or wall: slightly messy but intentional, with many small handwritten cues and colored labels. The interface should feel like a personal space where ideas are collected and rearranged, not a rigid enterprise dashboard. Users should feel as though they are actually shuffling pieces of paper around, even though everything is digital.`
    },
    // Paper Cutout CustomPrompt（模板級 AI 指令）
    customPrompt: {
      'zh-CN': `
你现在是一名非常熟悉「纸张剪裁 / paper cutout」风格的资深 UI 设计师兼前端工程师，需要为一个全新页面生成一套与当前样式 /styles/preview/paperCutout 高度一致的界面。

你的任务是：编写一段可以直接复制给 LLM 使用的完整指令，让它生成一个新的 HTML 全页面界面。这个界面在布局逻辑、配色方向、纸张层次、阴影风格上，要与当前 paperCutout 示例高度相似，但承载的业务内容和文案可以完全不同。

请严格遵守以下约束：
- 不要照抄现有示例的具体文字内容、标题或图标文案。
- 必须延续纸张剪裁的视觉语言：多层纸片、便利贴、拼贴标签、柔和阴影。
- 生成结果应当在第一眼就能被识别为 paperCutout 家族的同系列页面。
- 输出格式固定为语义化 HTML + 近似 TailwindCSS 的原子化类名，不要输出伪代码。

【使用场景设定】
- 新页面的主题是「创意项目与灵感整理工作台」。
- 用户是自由职业设计师、插画师、写作者、内容创作者，他们习惯把想法写在纸上、贴在墙上或桌面上。
- 这个页面主要用来浏览每日任务、正在推进的创意项目、临时灵感便签、收藏素材以及简易日程。
- 整体氛围要像一个被认真整理过的纸质灵感板：色彩丰富但不过度喧闹，结构有条理但保留一点随性。

【整体布局结构要求】
1. 顶部区域（Header）
   - 顶部采用左右布局：左侧是品牌标识或页面标题区域，右侧放置用户头像、简单设置入口或模式切换按钮。
   - 标题使用带纸质标签感的矩形条，带轻微圆角和柔和投影，就像一条贴在页面顶部的纸带。
   - 顶部区块的背景颜色与主背景略有差异，可以是稍微更浅或略偏暖/偏冷的纸张色块，用以分层。

2. 主体区域（Main）
   - 主体采用二到三列的栅格布局，每个功能模块都包装成一张独立的纸片或卡片。
   - 左侧可以以「今日任务」「待办优先级」为主体，中间放置「创意项目看板」，右侧用于「灵感便签墙」「收藏灵感列表」。
   - 每张纸片之间要留出明确间距，使用户能感受到各模块之间的分隔，同时保留被刻意排布在桌面上的错落感。
   - 可以适度使用轻微旋转、错位与叠加，让某些小标签压在大卡片的角落上，增强纸张叠放的真实感。

3. 辅助区域（Sidebar / Footer）
   - 可以设计一个窄侧边栏，用纸条或竖向卡片展示「今日心情」「番茄钟」「专注模式入口」等信息。
   - 底部可以加入一条细长纸带作为 footer，用于显示版权、快捷键提示或一句激励文案。
   - 所有这些辅助区域仍然使用纸片造型，与主卡片保持统一的材质与光影语言。

【布局结构细化说明】
为了帮助 LLM 更好地生成结构，请在页面中至少包含以下几个模块（名称可调整，但功能要类似）：
- 「Today overview」：位于上方或左上，是一个稍大的纸片，汇总日期、今日任务数量、当前专注项目。
- 「Projects board」：使用两到三列纸卡表示不同项目，每张卡片上有项目名、进度标签以及一到两行说明。
- 「Inspiration notes」：一组颜色各异的小便利贴卡片，每张包含简短手写风格标题和两三行描述。
- 「Pinned references」：表现为水平排列的细长纸条或标签，展示用户固定置顶的资源链接或关键词。
- 「Schedule strip」：可以是一条细长的时间条或列表样式纸片，用于记录当日重要时段的安排。

【色彩体系与纸张质感】
1. 背景与基底
   - 整体背景应使用非常浅、接近真实纸张的中性色，例如略带暖调的浅米色或略带冷调的浅灰蓝。
   - 可以在说明中点出 2～3 个推荐色值，用于帮助 LLM 理解色彩明度和氛围（例如一组用于背景、一组用于卡片、一组用于标签）。
   - 背景可以加入极轻微的噪点或纹理效果描述，让界面避免过于光滑、塑料感太重。

2. 卡片与便利贴配色
   - 主卡片使用比背景略深一点的柔和色块，例如浅米黄、浅奶茶棕、柔和的灰蓝等，保持低饱和。
   - 便利贴可以更活潑一些，例如淡黃、淡粉、淡綠、淡藍，但仍然避免刺眼的霓虹色。
   - 为标签型元素（例如狀態标籤、类別标籤）預留一組飽和度略高的紙色，用於強調但不搶佔主視覺。

3. 描边与阴影
   - 卡片可以有極細的边框线，以淺灰或接近背景的颜色繪製，營造紙張边緣。
   - 阴影應該柔和且略大，方向一致（例如向右下），模糊半徑較大、不透明度較低，让紙片像浮在背景上。
   - 在說明中強調上下层关係：上层紙片的阴影會落在下层卡片的一角，以此表達明確层次。

【交互与動效设計】
1. 悬停（hover）
   - 當鼠标悬停在卡片或便利貼上時，紙片輕微向上移動 2～4 像素，阴影略微变深、变窄，營造被手指輕輕撩起的感覺。
   - 對於主要操作按鈕（例如「新增靈感」「新增任务」），悬停時可以增加亮度或加入一圈柔和描边，提示可點擊性。

2. 按下（active）
   - 在按下狀態下，紙片或按鈕可以輕微下沉 1～2 像素，阴影变小或稍稍移動，模擬紙质按鍵被壓下的觸感。
   - 避免使用強烈縮放或彈跳動画，以免破壞紙張風格的柔和氛圍。

3. 動画節奏
   - 所有過渡時間控制在約 150～220 毫秒之間，使用 ease-out 或 ease-in-out 曲线。
   - 動画类型以透明度变化、位置小幅移動和阴影強度調整為主，不使用大幅度旋轉或彈性動画。

【文字与圖标風格】
1. 字体与层級
   - 标題建議使用帶一點手写感的字体（或在說明中描述其風格），搭配清晰的無襯线正文字体。
   - 标題、子标題、正文、輔助說明需要有明確层級差異，透過字重、字號和颜色實現。
   - 在 CustomPrompt 中提示 LLM 避免使用過於正式的企業風字体，而是偏向個人筆記本的氣质。

2. 圖标与裝飾
   - 圖标可以简潔扁平，线條略圓潤，颜色与紙張保持協調。
   - 可加入像膠帶、紙夾、圖釘等裝飾元素，這些元素也應該遵从紙張色系与柔和阴影。

【輸出技術要求】
- 使用语义化 HTML5 結構，應包含 header、main、section、aside 和 footer 等标籤，並正確嵌套。
- 使用近似 TailwindCSS 的原子类名描述布局与間距，例如 flex、grid、gap-6、px-6、py-4、rounded-xl、shadow-lg、bg-amber-50、text-slate-800 等。
- 不需要引入真實的 Tailwind 配置，只需在 class 屬性中使用這类语义清晰的工具类名稱。
- 生成結果必須是一個完整、可獨立渲染的 HTML 页面，而不是片段或偽代碼。

【质量校驗要求】
當 LLM 生成完成页面後，你應當能在以下幾個方面明显感受到 paperCutout 風格：
1. 布局：整体使用紙片模組堆疊，而不是純色分区或玻璃卡片。
2. 色彩：主色溫和、低飽和，以紙張和文具颜色為主，避免高對比科技藍或霓虹色。
3. 材质：透過阴影、描边和細節，让人联想到真實紙張、便利貼与手帳。
4. 交互：悬停与按下的反饋像在觸碰實体紙張，而不是按機械按鈕。

请将以上说明完整内嵌到最終 CustomPrompt 中，確保 LLM 仅憑這段文字就能重建与 paperCutout 示例高度一致的風格与結構，同時生成一個全新的、內容不同的創意工作台界面。
`,
      'en-US': `
You are a senior UI designer and front-end engineer who deeply understands the "paper cutout" visual style. Your task is to generate a brand new HTML page that looks like a sibling of the existing /styles/preview/paperCutout layout, without copying its content verbatim.

Your goal is to write a single, self-contained instruction that can be pasted into an LLM so that it can produce a full-page HTML interface. The new page must follow the same layout logic, color palette direction, paper layering, and shadow language as the current paperCutout demo, while using a different scenario, copy, and data.

[Scenario]
- The page is a "creative projects and inspiration workspace" for freelancers: designers, illustrators, writers, and content creators.
- Users come here to scan their tasks for the day, track progress on active projects, review inspiration notes, and keep a small schedule overview.
- The atmosphere should resemble a carefully arranged desk or wall covered with paper cards, sticky notes, and tags: visually rich yet controlled, playful yet structured.

[Overall Layout]
1. Header
   - Use a left-right split: brand or page title on the left, lightweight user controls on the right (avatar, settings icon, theme toggle, etc.).
   - The title sits on a paper-tag-like strip with rounded corners and a soft drop shadow, as if taped to the top edge.
   - The header background uses a light paper tone slightly different from the main background to carve out a clear layer.

2. Main Content
   - Use a 2–3 column grid to place paper cards. Each functional block is represented as an individual sheet of paper.
   - Place a "Today overview" card in a prominent position, then boards for "Active Projects", an "Inspiration Notes" wall, and a "Pinned References" area.
   - Reserve comfortable gaps between cards so that each sheet feels separate but still part of the same arrangement.
   - Allow mild offset and overlapping, such as small labels pinned over the corners of larger cards, to reinforce the collage feeling.

3. Secondary Areas
   - Add a narrow sidebar or a bottom strip for lightweight elements like "Today's mood", a simple Pomodoro indicator, or quick shortcuts.
   - These secondary elements are also paper pieces: narrow strips, mini cards, or folded tabs that visually belong to the same paper system.

[Color & Paper Texture]
1. Background & Canvas
   - The main background should be a very light, paper-like tone instead of flat pure white, for example a warm cream or a cool chalky blue-gray.
   - Mention a small set of example colors that communicate the intended brightness and warmth, and explain that saturation should remain low to keep the interface gentle on the eyes.
   - Describe any subtle grain, noise, or paper texture that should be implied in the design.

2. Cards & Sticky Notes
   - Main cards use slightly darker or warmer tones than the background, like soft beige, tea brown, or muted blue.
   - Sticky notes are more playful: pale yellow, pink, green, or blue, but still far from neon. They should read as stationery rather than UI chrome.
   - Accent tags (for status or categories) use somewhat higher saturation within the same palette family but remain small in area so they do not dominate the page.

3. Borders & Shadows
   - Light, subtle borders may be used to define paper edges. In many cases, the shadow alone is enough to separate layers.
   - Shadows are soft and slightly oversized with low opacity and a consistent direction, suggesting sheets of paper hovering just above the desk.
   - The stacking order is clear: shadows from higher cards fall onto lower ones, reinforcing the sense of depth.

[Interaction & Motion]
1. Hover
   - On hover, cards and notes gently move up by a few pixels, while their shadows become a bit darker and crisper, as if you are about to pick them up.
   - Primary call-to-action buttons like "Add Inspiration" or "New Task" brighten slightly and may gain a subtle outline.

2. Active
   - On press, interactive elements sink down slightly and their shadows shrink or shift, imitating the feel of pressing a piece of cardstock.
   - Avoid exaggerated scale or bounce effects that would break the calm paper metaphor.

3. Timing
   - Transitions should be short and smooth, typically between 150 and 220 milliseconds, with ease-out or ease-in-out timing.
   - Favor opacity changes, position shifts, and shadow adjustments over complex transforms.

[Typography & Icons]
1. Typography
   - Use a friendly, slightly rounded sans-serif for both body text and headings, and optionally hint at a hand-written accent for titles or note headings.
   - Maintain a clear hierarchy with noticeable differences between headings, subheadings, body, and meta text.
   - The voice of the copy can be casual and personal, but the information structure must remain clear and scannable.

2. Icons & Decorations
   - Icons should be simple and approachable, sometimes placed on small rounded rectangles that echo paper tags.
   - Decorative elements like tape strips, clips, or pins should follow the same color and shadow language as the rest of the paper pieces.

[Output Requirements]
- Output a complete HTML5 page using header, main, section, aside, and footer tags.
- Use TailwindCSS-like utility classes (flex, grid, gap-6, px-6, py-4, rounded-xl, shadow-lg, bg-..., text-...) to describe layout and spacing.
- Do not output pseudocode or explanations; only output the final HTML structure with class names that clearly express the paper cutout aesthetic.
- The final layout must clearly read as a sibling of the existing paperCutout demo in terms of density, card size, depth, and overall brightness, even though the textual content and labels are different.
`
    }
  }
];

export default paperCutoutStyles;
