// Paper Cutout Style Prompt - Style Narrative Description
// 纸张剪贴风格 Prompt - 风格叙事描述

export const paperCutoutStylePrompt = {
  'zh-CN': `角色：你是一位专精于手工艺美学和拼贴艺术的 UI 设计师，擅长将真实世界的纸张、照片和装饰物的温度与质感转化为数字界面的情感体验。你的设计灵感来自于创意工作室的软木板墙、手工拼贴的旅行日记、布满便利贴的设计师工作台，以及充满童趣的剪贴画册。

场景定位：
该风格专为注重个性表达、创意展示和情感连接的数字产品设计，适用于创意作品集网站、设计师个人博客、手工艺品电商平台、儿童教育应用、旅行记录工具、生活方式品牌官网等场景。目标用户是热爱手工制作、珍视个性化表达、追求温暖人文关怀的创作者和生活家——他们不满足于千篇一律的数字模板，而是渴望通过设计传达独特的个人风格，就像在真实的软木板上钉上自己的便利贴、贴上珍藏的 Polaroid 照片、用彩色图钉固定重要的灵感卡片那样。

这种风格传达的品牌形象是：温暖、友好、有趣、充满创意、注重个性化和人文关怀。它告诉用户："这是一个欢迎你自由表达的空间，每一个细节都可以充满你的个人印记，就像你亲手制作的拼贴作品一样独特。"

视觉设计理念：
该风格融合了手工艺美学的真实感与数字界面的实用性，既保留了纸张、便利贴、Polaroid 照片等实物的视觉特征和触觉记忆，又通过现代化的布局和交互设计确保良好的用户体验。设计哲学核心是"温暖的个性化"——每一个界面元素都像是被精心挑选、亲手粘贴上去的，营造出"这是我的创意空间"的归属感。

设计语言平衡了手工感与数字化：便利贴的随意旋转角度和柔和的阴影再现了真实便利贴贴在墙上的状态；Polaroid 照片的白色边框和略微倾斜的角度唤起了拍立得照片的即时性和珍贵感；软木板的纹理背景提供了温暖的底色而不喧宾夺主；图钉的径向渐变和内外阴影精确模拟了真实图钉的立体感和金属光泽。

整体色调以温暖明亮的彩色为主：黄色便利贴带来阳光般的活力，粉色便利贴注入甜美的柔和感，蓝色和绿色便利贴提供清新的平衡，软木板的褐色背景则像大地一样托举起所有色彩，让整个界面既丰富多彩又不失协调统一。这种配色方案既激发创造力，又保持足够的视觉舒适度。

材质与质感：
便利贴是整个设计的核心元素：
- **黄色便利贴**：从亮黄 (#FFF59D) 到金黄 (#FFF176) 的渐变，模拟真实便利贴在光线下的颜色变化。轻微的 -2deg 旋转让它看起来像是随意贴上的，而不是刻意对齐的。
- **粉色便利贴**：从浅粉 (#F8BBD0) 到深粉 (#F48FB1) 的渐变，带有甜美温柔的气质。+2deg 的旋转与黄色便利贴形成对称的视觉节奏。
- **蓝色/绿色便利贴**：提供色彩的丰富性，模拟创意工作台上多种颜色便利贴混用的真实场景。
- **圆角与阴影**：4px 的轻微圆角保留便利贴的方正特征，双层阴影（近处深，远处浅）营造出纸张悬空于软木板上方的立体感。

Polaroid 照片再现即时摄影的独特美感：
- **白色边框**：#FFFFFF 纯白色边框，顶部和左右各 0.75rem，底部 2.5rem 的不对称内边距精确还原了 Polaroid 照片的标志性外观。
- **照片区域**：米黄色渐变 (#E8D4B0 → #D4C19E) 模拟老照片的泛黄质感，而不是使用纯白或灰色。
- **透明胶带**：半透明白色 (rgba(255,255,255,0.4)) 的细长条，5度倾斜粘贴在照片顶部，模拟用透明胶带将照片固定在墙上的真实状态。
- **手写标注**：使用 Caveat 手写字体在照片底部白边上书写，就像在真实 Polaroid 照片上用笔写下拍摄时刻的心情。

软木板背景提供温暖的基调：
- **主背景渐变**：从浅褐 (#D7CCC8) 到深褐 (#BCAAA4) 的 135 度渐变，模拟软木板在光线下的自然明暗变化。
- **纹理网格**：3px 间距的细密网格，使用 repeating-linear-gradient 创建，模拟软木板表面的纤维纹理。透明度设置为 0.05，确保纹理可见但不抢眼。
- **整体氛围**：软木板的褐色调既温暖又中性，为彩色便利贴提供了完美的衬托背景，就像真实的软木板墙一样包容各种颜色的纸张和照片。

图钉装饰增强手工真实感：
- **径向渐变**：从亮色中心到深色边缘的渐变模拟光线照射在球形图钉上的效果，红色图钉从 #EF5350 到 #E53935，蓝色从 #42A5F5 到 #1E88E5。
- **立体阴影**：外阴影模拟图钉投射在软木板上的影子，内高光模拟图钉表面的金属光泽，这种双重阴影系统让 20px 的小圆点看起来像真实的三维物体。
- **位置设计**：图钉位于便利贴顶部略微偏右（right: 30%），模拟人们习惯性用一个图钉固定便利贴上缘的真实行为。

装饰细节强化拼贴美学：
- **邮票锯齿边缘**：使用 repeating-linear-gradient 制作 12px 间距的规律齿孔，可用于特殊的卡片装饰，再现邮票撕扯后的锯齿边缘。
- **装订线**：红色虚线模拟手工缝制的痕迹，可用于连接多个内容区块，增强手工制作的视觉暗示。
- **手写字体的不完美**：Caveat 和 Patrick Hand 字体保留了手写的轻微不规则性，每个字母的粗细和角度略有差异，这种"不完美"正是手工美学的精髓。

交互体验：
该风格的交互设计遵循"温柔的物理反馈"原则——模拟在真实软木板上操作便利贴和照片的触觉体验，让数字交互带有物理世界的温度和质感。

**悬停反馈**：
- 便利贴悬停时轻微上浮 8px 并旋转归零，模拟用手指将便利贴从墙上轻轻拿起查看的动作。阴影同步扩大和加深，强化离开平面的空间感。过渡时间设置为 0.3 秒，既不拖沓也不仓促，恰好匹配人类的视觉预期。
- Polaroid 照片悬停时同样旋转归零但过渡时间为 0.4 秒，稍慢于便利贴，传达照片比纸张更厚重的质感。阴影增强的幅度也更大，强调照片的物理存在感。

**点击反馈**：
- 点击便利贴或照片时可能触发详情查看或编辑功能，此时元素会保持悬停状态，暗示"已被选中"。
- 如果使用便利贴样式的按钮，点击时会有轻微的下压效果 (translateY(-2px))，模拟按压真实按钮的触觉反馈。

**动画节奏**：
- 所有过渡动画使用 ease 缓动函数，营造柔和自然的节奏。
- 避免使用 bounce（弹跳）或 elastic（弹性）效果——这些夸张的动画会破坏手工纸张的真实物理特性，让界面显得过于"数字化"和玩具感。
- 页面加载时可以为便利贴添加轻微的淡入和上浮动画，模拟纸张被一张张贴上软木板的过程，但动画要克制，避免分散用户注意力。

**触觉暗示**：
- 所有可交互元素（便利贴、照片、按钮）都使用 cursor: pointer，并通过视觉变化（阴影、位移）提供即时反馈。
- 链接可以使用手写下划线样式，配合温暖的色彩（橙色、红色），呼应便利贴和图钉的视觉语言。
- 表单输入框可以设计成便利贴样式，让用户感觉像在真实便利贴上书写。

氛围营造：
整体界面营造的氛围是"创意工作室的灵感墙"——想象你走进一个充满创意能量的工作室，墙上的软木板贴满了彩色便利贴（记录着灵感闪现的片段）、Polaroid 照片（捕捉着珍贵的瞬间）、剪报和手绘草图（拼贴成独特的视觉故事）。每一张便利贴都略微倾斜，每一张照片都有手写的标注，每一个图钉都反射着温暖的光线。

光线设定为明亮柔和的自然光：想象阳光透过工作室的窗户洒在软木板上，便利贴的明亮色彩被照得更加鲜艳，软木板的褐色调显得温暖而舒适。阴影柔和而清晰，既营造立体感又不过分戏剧化。整个色调偏暖而明亮，唤起创作时的专注和愉悦。

视觉叙事通过细节展开：
- 便利贴的轻微旋转暗示"这是随性贴上的，不是刻意对齐的"
- 图钉的存在暗示"这些内容很重要，被精心固定保存"
- Polaroid 的手写标注暗示"每一刻都值得被记录和珍藏"
- 透明胶带的使用暗示"这是临时固定，可以随时调整和重新布置"
- 软木板的纹理暗示"这是一个开放的创意空间，欢迎任何形式的表达"

每一个设计元素都在讲述同一个故事：这不是冰冷的数字界面，而是一个充满温度和个性的创意空间。用户在使用产品时，不仅是在浏览信息，更是在"布置"自己的创意墙，"粘贴"自己的灵感片段，"固定"自己珍视的瞬间。

情感共鸣：
该风格激发的核心情感是创造力 (Creativity) 与归属感 (Belonging) 的结合——既鼓励自由创作和个性表达，又营造温暖包容的氛围让用户感到"这是我的空间"。设计通过纸张、照片等日常物品的数字化再现，在虚拟空间中创造了熟悉的触觉记忆，让每次交互都像是在真实的软木板上贴便利贴、翻看照片、重新布置灵感墙那样自然而愉悦。

设计细节的情感寓意：
- **彩色便利贴的多样性** 象征着创意的多样性和丰富性，鼓励用户不拘一格地表达
- **手写字体的不完美** 象征着真实和人性化，接纳不完美才是真正的个性
- **随意的旋转角度** 象征着自由和松弛，不必拘泥于刻板的对齐和秩序
- **Polaroid 的即时性** 象征着珍惜当下，每一个瞬间都值得被记录
- **软木板的包容性** 象征着开放和接纳，任何想法和表达都有容身之处

最终，这个设计传达的是一种生活态度：保持好奇心，勇于表达，珍惜创意的火花，用手工的温度对抗数字世界的冰冷——就像在真实的软木板上拼贴自己的灵感墙，用彩色便利贴记录每一个点子，用 Polaroid 照片定格每一个值得纪念的瞬间，让创意和生活都充满色彩和温度。`,

  'en-US': `Role: You are a UI designer specializing in handicraft aesthetics and collage art, skilled at transforming the warmth and texture of real-world paper, photos, and decorations into emotional experiences in digital interfaces. Your design inspiration comes from cork board walls in creative studios, handmade travel scrapbooks, designer workstations covered with sticky notes, and childlike scrapbook albums.

Scene Positioning:
This style is designed for digital products that emphasize personal expression, creative display, and emotional connection, suitable for creative portfolio websites, designer personal blogs, handmade craft e-commerce platforms, children's education apps, travel recording tools, lifestyle brand official sites, etc. The target users are makers and lifestyle enthusiasts who love handcrafting, value personalized expression, and pursue warm humanistic care—they are not satisfied with cookie-cutter digital templates, but desire to convey unique personal style through design, just like pinning their own sticky notes on a real cork board, posting cherished Polaroid photos, and using colorful push pins to secure important inspiration cards.

The brand image conveyed by this style is: warm, friendly, fun, full of creativity, emphasizing personalization and humanistic care. It tells users: "This is a space that welcomes your free expression, where every detail can be filled with your personal mark, as unique as your handmade collage works."

Visual Design Philosophy:
This style combines the realism of handicraft aesthetics with the practicality of digital interfaces, retaining the visual characteristics and tactile memories of physical objects like paper, sticky notes, and Polaroid photos, while ensuring a good user experience through modern layout and interaction design. The core design philosophy is "warm personalization"—every interface element looks like it was carefully selected and personally pasted, creating a sense of belonging "this is my creative space."

The design language balances handmade feel with digitalization: the random rotation angles and soft shadows of sticky notes reproduce the state of real sticky notes pasted on walls; the white borders and slightly tilted angles of Polaroid photos evoke the immediacy and preciousness of instant photos; the cork board texture background provides a warm base without overshadowing; the radial gradients and inner/outer shadows of push pins precisely simulate the three-dimensionality and metallic luster of real pins.

The overall color tone is dominated by warm and bright colors: yellow sticky notes bring sunshine-like vitality, pink sticky notes inject sweet softness, blue and green sticky notes provide fresh balance, while the brown cork board background holds up all colors like the earth, making the entire interface both colorful and harmoniously unified. This color scheme both stimulates creativity and maintains sufficient visual comfort.

Materials and Textures:
Sticky notes are the core element of the entire design:
- **Yellow sticky note**: Gradient from bright yellow (#FFF59D) to golden yellow (#FFF176), simulating the color change of real sticky notes under light. A slight -2deg rotation makes it look casually pasted rather than deliberately aligned.
- **Pink sticky note**: Gradient from light pink (#F8BBD0) to deep pink (#F48FB1), with a sweet and gentle temperament. The +2deg rotation forms a symmetrical visual rhythm with the yellow sticky note.
- **Blue/Green sticky notes**: Provide color richness, simulating the real scenario of using multiple color sticky notes on creative workstations.
- **Rounded corners and shadows**: 4px slight rounded corners retain the square characteristics of sticky notes, double-layer shadows (darker near, lighter far) create the three-dimensional feel of paper suspended above the cork board.

Polaroid photos reproduce the unique beauty of instant photography:
- **White border**: #FFFFFF pure white border, asymmetric padding of 0.75rem on top and sides, 2.5rem on bottom precisely restores the iconic appearance of Polaroid photos.
- **Photo area**: Beige gradient (#E8D4B0 → #D4C19E) simulates the yellowing texture of old photos, rather than using pure white or gray.
- **Transparent tape**: Semi-transparent white (rgba(255,255,255,0.4)) thin strip, tilted 5 degrees and pasted at the top of the photo, simulating the real state of using transparent tape to fix photos on the wall.
- **Handwritten annotation**: Uses Caveat handwritten font to write on the white edge at the bottom of the photo, just like writing down the mood of the shooting moment on a real Polaroid photo with a pen.

Cork board background provides a warm base:
- **Main background gradient**: 135-degree gradient from light brown (#D7CCC8) to dark brown (#BCAAA4), simulating the natural light-dark change of cork board under light.
- **Texture grid**: Fine grid with 3px spacing, created using repeating-linear-gradient, simulating the fiber texture on the cork board surface. Opacity set to 0.05 ensures the texture is visible but not eye-catching.
- **Overall atmosphere**: The brown tone of the cork board is both warm and neutral, providing a perfect backdrop for colorful sticky notes, just like a real cork board wall that accommodates papers and photos of all colors.

Push pin decoration enhances handmade realism:
- **Radial gradient**: Gradient from bright center to dark edge simulates the effect of light shining on spherical pins, red pins from #EF5350 to #E53935, blue from #42A5F5 to #1E88E5.
- **Three-dimensional shadow**: Outer shadow simulates the shadow cast by pins on the cork board, inner highlight simulates the metallic luster of pin surface, this double shadow system makes the 20px small circle look like a real three-dimensional object.
- **Position design**: Pin is located at the top of the sticky note slightly to the right (right: 30%), simulating people's habitual behavior of using one pin to fix the upper edge of the sticky note.

Decorative details reinforce collage aesthetics:
- **Stamp perforated edges**: Use repeating-linear-gradient to create regular perforations with 12px spacing, can be used for special card decoration, reproducing the serrated edges after stamp tearing.
- **Binding line**: Red dashed line simulates handmade stitching traces, can be used to connect multiple content blocks, enhancing the visual hint of handmade production.
- **Imperfection of handwritten fonts**: Caveat and Patrick Hand fonts retain the slight irregularity of handwriting, with slight differences in thickness and angle of each letter, this "imperfection" is the essence of handmade aesthetics.

Interaction Experience:
The interaction design of this style follows the principle of "gentle physical feedback"—simulating the tactile experience of operating sticky notes and photos on a real cork board, making digital interaction have the warmth and texture of the physical world.

**Hover Feedback**:
- Sticky notes hover slightly upward 8px and rotate to zero, simulating the action of gently picking up a sticky note from the wall with fingers to view. Shadows simultaneously expand and deepen, strengthening the sense of space leaving the plane. Transition time is set to 0.3 seconds, neither sluggish nor hasty, just matching human visual expectations.
- Polaroid photos also rotate to zero when hovering but with a transition time of 0.4 seconds, slightly slower than sticky notes, conveying the thicker texture of photos compared to paper. The shadow enhancement amplitude is also larger, emphasizing the physical presence of photos.

**Click Feedback**:
- Clicking sticky notes or photos may trigger detail viewing or editing functions, at which point the element will remain in the hover state, suggesting "selected."
- If using sticky note style buttons, there will be a slight press-down effect when clicked (translateY(-2px)), simulating the tactile feedback of pressing a real button.

**Animation Rhythm**:
- All transition animations use ease easing function, creating a soft and natural rhythm.
- Avoid bounce or elastic effects—these exaggerated animations break the real physical properties of handmade paper, making the interface appear too "digital" and toy-like.
- When the page loads, sticky notes can be added with slight fade-in and float-up animations, simulating the process of papers being posted on the cork board one by one, but animations should be restrained to avoid distracting users.

**Tactile Cues**:
- All interactive elements (sticky notes, photos, buttons) use cursor: pointer and provide instant feedback through visual changes (shadow, displacement).
- Links can use handwritten underline style, with warm colors (orange, red), echoing the visual language of sticky notes and pins.
- Form input boxes can be designed as sticky note style, making users feel like writing on real sticky notes.

Atmosphere Creation:
The overall interface creates the atmosphere of "a creative studio's inspiration wall"—imagine you walk into a studio full of creative energy, with a cork board wall covered with colorful sticky notes (recording flashes of inspiration), Polaroid photos (capturing precious moments), clippings and hand-drawn sketches (collaged into unique visual stories). Each sticky note is slightly tilted, each photo has handwritten annotations, and each pin reflects warm light.

The lighting is set to bright and soft natural light: imagine sunlight streaming through the studio window onto the cork board, making the bright colors of sticky notes even more vivid, and the brown tone of the cork board warm and comfortable. Shadows are soft and clear, creating a three-dimensional feel without being overly dramatic. The overall tone is warm and bright, evoking the focus and joy of creating.

Visual narrative unfolds through details:
- The slight rotation of sticky notes suggests "this was casually posted, not deliberately aligned"
- The presence of pins suggests "this content is important, carefully fixed and preserved"
- The handwritten annotations on Polaroids suggest "every moment deserves to be recorded and cherished"
- The use of transparent tape suggests "this is temporary fixing, can be adjusted and rearranged at any time"
- The texture of the cork board suggests "this is an open creative space, welcoming any form of expression"

Every design element tells the same story: this is not a cold digital interface, but a creative space full of warmth and personality. When using the product, users are not just browsing information, but "arranging" their own creative wall, "pasting" their own inspiration fragments, "fixing" their cherished moments.

Emotional Resonance:
The core emotion evoked by this style is a combination of Creativity and Belonging—both encouraging free creation and personal expression, while creating a warm and inclusive atmosphere that makes users feel "this is my space." The design creates familiar tactile memory in virtual space through digital reproduction of everyday objects like paper and photos, making each interaction as natural and pleasant as posting sticky notes, flipping through photos, and rearranging the inspiration wall on a real cork board.

Emotional meanings of design details:
- **Diversity of colorful sticky notes** symbolizes the diversity and richness of creativity, encouraging users to express unconventionally
- **Imperfection of handwritten fonts** symbolizes authenticity and humanity, accepting imperfection is true personality
- **Random rotation angles** symbolize freedom and relaxation, no need to stick to rigid alignment and order
- **Immediacy of Polaroid** symbolizes cherishing the present, every moment deserves to be recorded
- **Inclusiveness of cork board** symbolizes openness and acceptance, any idea and expression has a place

Ultimately, this design conveys a life attitude: stay curious, dare to express, cherish the spark of creativity, use the warmth of handmade to counter the coldness of the digital world—just like collaging your own inspiration wall on a real cork board, recording every idea with colorful sticky notes, freezing every memorable moment with Polaroid photos, making creativity and life full of color and warmth.`
};
