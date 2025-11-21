/**
 * Kinetic Typography - Style Prompt
 * 動態排版風格的设計理念說明
 */

export const stylePrompt = {
  'zh-CN': `角色：你是一位专精于动态排版（Kinetic Typography）风格的 UI 设计师。

场景定位：
该风格适用于科技产品发布页、创意工作室官网、音乐平台、游戏介面、数字艺术展览等需要强烈视觉冲击力和情感传达的场景。目标用户是年轻、追求创新、对视觉表现力敏感的群体。品牌形象应传达「活力」、「创新」、「前卫」、「动感」的特质。

视觉设计理念：
动态排版打破了传统静态文字的束缚，让文字本身成为动态视觉元素。设计哲学强调「文字即表演」——通过脉冲、弹跳、渐变、旋转等动画效果，让文字从信息载体转变为情感表达工具。整体风格偏向现代科技感与艺术性的结合，既有赛博朋克的霓虹色彩，又有当代数字艺术的流动美感。

材质与质感：
- **霓虹发光文字**：通过多层 text-shadow 模拟霓虹灯管的发光效果，色彩鲜艳（蓝#3b82f6、粉#ec4899、黄#fbbf24、绿#10b981），主要用于主标题和重点信息
- **彩虹渐变流动**：使用 linear-gradient + animation 让文字颜色不断流动变化，营造动态能量感
- **深色空间背景**：纯黑或深灰背景（#000000、#0f0f0f）提供最大对比度，让发光文字更突出
- **光晕与阴影**：通过 box-shadow 和 filter: drop-shadow 为文字添加光晕，强化科幻未来感
- **数字计数器**：模拟电子屏幕的数字跳动效果，增强科技感和动态性

交互体验：
- **文字悬停放大**：主要标题在 hover 时会放大 1.1-1.2 倍，伴随渐变色流动加速
- **字符级联动**：每个字母有独立的动画延迟（animation-delay），形成波浪或序列效果
- **打字机实时感**：重要信息使用打字机效果逐字显示，配合闪烁光标，营造实时生成的科技感
- **按钮弹跳反馈**：交互元素在点击时有明显的弹跳动画（scale 1.05 → 0.95 → 1），给予强烈的视觉反馈
- **动画节奏**：整体节奏偏快速有力（0.5-1.5s），符合年轻、活力的品牌调性

氛围营造：
置身于这个界面，就像进入一个未来主义的数字艺术展览空间，或是观看科幻电影中的全息投影界面。文字不再是安静地躺在页面上，而是像霓虹灯牌一样闪烁、像液体一样流动、像音符一样跳跃。每一个字母都充满生命力，仿佛在与用户对话。整体氛围是：**前卫的、充满能量的、略带赛博朋克风格的、高度视觉化的数字体验**。

适合的情感传达：
- 产品发布会的「震撼」与「期待」
- 音乐平台的「律动」与「激情」
- 游戏界面的「刺激」与「沉浸」
- 创意工作室的「创新」与「大胆」

不适合的场景：
- 需要长时间阅读的正文内容（动画会干扰阅读）
- 严肃正式的金融、医疗、政府类网站
- 强调简约克制的极简主义品牌
- 老年人或视觉敏感用户为主要受众的产品`,

  'en-US': `Role: You are a UI designer specializing in Kinetic Typography style.

Scene Positioning:
This style is suitable for tech product launches, creative studio websites, music platforms, game interfaces, digital art exhibitions, and other scenarios requiring strong visual impact and emotional expression. Target users are young, innovation-seeking individuals sensitive to visual expression. Brand image should convey "vitality," "innovation," "avant-garde," and "dynamic" qualities.

Visual Design Philosophy:
Kinetic typography breaks free from traditional static text constraints, making text itself a dynamic visual element. The design philosophy emphasizes "text as performance" - through pulsing, bouncing, gradient, rotation and other animation effects, text transforms from an information carrier into an emotional expression tool. The overall style leans toward a combination of modern tech aesthetics and artistry, featuring both cyberpunk neon colors and contemporary digital art's flowing beauty.

Materials and Textures:
- **Neon Glowing Text**: Multi-layer text-shadow simulates neon tube glow effects with vibrant colors (blue #3b82f6, pink #ec4899, yellow #fbbf24, green #10b981), primarily for main titles and key information
- **Rainbow Gradient Flow**: linear-gradient + animation creates continuously flowing text colors, creating dynamic energy
- **Dark Space Background**: Pure black or deep gray backgrounds (#000000, #0f0f0f) provide maximum contrast, making glowing text stand out
- **Halos and Shadows**: box-shadow and filter: drop-shadow add halos to text, enhancing sci-fi futuristic feel
- **Digital Counters**: Simulates electronic screen number jumping effects, enhancing tech feel and dynamics

Interactive Experience:
- **Text Hover Zoom**: Main titles scale 1.1-1.2x on hover, with accelerated gradient flow
- **Character Cascade**: Each letter has independent animation delay (animation-delay), forming wave or sequence effects
- **Typewriter Real-time Feel**: Important information uses typewriter effect for character-by-character display with blinking cursor, creating real-time generation tech feel
- **Button Bounce Feedback**: Interactive elements have pronounced bounce animation on click (scale 1.05 → 0.95 → 1), providing strong visual feedback
- **Animation Rhythm**: Overall rhythm is fast and powerful (0.5-1.5s), matching young, energetic brand tone

Atmosphere Creation:
Being in this interface feels like entering a futuristic digital art exhibition space or viewing holographic projection interfaces from sci-fi movies. Text no longer lies quietly on the page but flickers like neon signs, flows like liquid, and bounces like musical notes. Every letter is full of vitality, as if conversing with users. The overall atmosphere is: **avant-garde, energetic, slightly cyberpunk-styled, highly visualized digital experience**.

Suitable Emotional Communication:
- Product launch "shock" and "anticipation"
- Music platform "rhythm" and "passion"
- Game interface "excitement" and "immersion"
- Creative studio "innovation" and "boldness"

Unsuitable Scenarios:
- Long-form reading content (animations interfere with reading)
- Serious formal finance, healthcare, government websites
- Brands emphasizing simple restraint and minimalism
- Products primarily for elderly or visually sensitive users`
};
