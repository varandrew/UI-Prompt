# Style Prompt

## 中文版本 (zh-CN)

角色：你是一位专精于拟物化设计和复古美学的 UI 设计师，擅长通过数字媒介重现真实世界的材质质感和情感温度。你的设计灵感来自于旅行者手中泛黄的皮革笔记本、布满邮戳的护照和充满故事的 Polaroid 相片。

场景定位：
该风格专为注重情感叙事和个人表达的数字产品设计，适用于旅行博客平台、摄影作品集网站、生活方式品牌官网、手工艺品市场、创意工作室、个人日记应用等场景。目标用户是热爱冒险、珍视回忆、追求真实质感的探索者——他们不满足于冰冷的数字界面，而是渴望通过设计唤起触摸真实物品的记忆：翻开皮革笔记本的沙沙声、抚摸照片边缘的温度、在日记本上书写的仪式感。

这种风格传达的品牌形象是：真诚、怀旧、富有人文关怀、注重细节和手工艺精神。它告诉用户："每一段旅程都值得被精心记录，每一个故事都应该被温柔对待。"

视觉设计理念：
该风格融合了拟物化设计的真实感与复古美学的情怀，既不追求扁平化的极简主义，也不沉溺于过度装饰的繁复。设计哲学核心是"有温度的真实感"——通过对真实材质的精确模拟（皮革的纹理、纸张的磨损、金属的光泽），让用户在数字空间中体验到物理世界的触感和情感连接。

设计语言平衡了现代化的可用性与复古的氛围营造：导航清晰易用但采用皮革标签的视觉隐喻；按钮符合现代交互规范但带有黄铜金属的厚重质感；布局遵循响应式设计原则但保留手工装帧的不完美美感（轻微的旋转、不规则的边缘）。

整体色调以温暖的大地色系为主：深浅不一的褐色模拟皮革的自然变化，羊皮纸的米黄色带来柔和的阅读体验，邮票的深红色作为点睛之笔注入活力。这种配色方案既体现了岁月的沉淀感，又保持了足够的对比度确保内容可读性。

材质与质感：
皮革材质是整个设计的核心：
- **主背景皮革**：采用从浅棕 (#8B6F47) 到深棕 (#5D4E37) 的渐变，模拟光线在皮革表面的自然过渡。通过 SVG 噪点纹理叠加，再现皮革表面的天然颗粒感和微妙的不规则性。
- **导航栏皮革**：使用更深的色调 (#4A3C2F → #3A2F24)，通过多层阴影系统（外阴影模拟厚度、内高光模拟表面光泽、底部深色内阴影模拟边缘磨损）营造立体的书脊效果。
- **卡片皮革**：中等深度的褐色 (#6B5644 → #5A4837)，配合 3px 深色边框模拟皮革的切边厚度，内部高光模拟表面蜡质处理的反光。

纸张材质用于内容承载：
- **羊皮纸背景** (#F4E8C1)：用于邮票卡片和日记页面，带有轻微的纹理和不均匀的色调，模拟手工纸张的质感。
- **Polaroid 白边**：纯白色 (#FFF) 配合阴影，再现即时照片的独特边框和略带塑料感的光泽。

金属装饰用于强调重点：
- **黄铜徽章和按钮**：径向渐变从亮金 (#B8860B) 到暗金 (#8B6914)，内高光模拟金属抛光表面的反射，厚重的阴影传达金属的重量感。
- **邮戳和印章**：半透明的深红色 (rgba(220, 20, 60, 0.4))，配合 SVG 圆形轮廓，模拟橡皮图章在纸面留下的印痕。

装饰细节增强真实感：
- **邮票锯齿边缘**：使用 repeating-linear-gradient 制作规律的齿孔效果，精确再现邮票撕扯后的边缘。
- **装订线**：红色虚线模拟手工缝制的线迹，间距和粗细都经过精心调整以符合真实装订本的比例。
- **透明胶带**：半透明白色带有轻微阴影，捕捉胶带粘贴在照片上的真实状态。
- **磨损痕迹**：通过不规则的阴影和边缘处理，模拟皮革笔记本经过多次翻阅后的自然磨损。

交互体验：
该风格的交互设计遵循"温柔的物理反馈"原则——既要让用户感受到操作的实在性，又要避免过于夸张的动效破坏沉浸式体验。

**悬停反馈**：
- 卡片悬停时轻微上浮 (translateY(-8px)) 并伴随 2 度旋转，模拟从桌面拿起一张照片或邮票的动作。阴影同步扩大和加深，强化离开平面的空间感。
- 按钮悬停时向上擡起 3px，内部高光增强，模拟按压真实金属按钮前的准备状态。

**点击反馈**：
- 按钮点击时下压至 -1px 位置，外阴影缩小，内阴影加深，精确模拟机械按键的按压行程和回弹感。
- Polaroid 相片点击时旋转归零，阴影加深，暗示被固定查看的状态。

**动画节奏**：
- 所有过渡动画采用 0.3-0.4 秒的中等时长，配合 cubic-bezier(0.4, 0.0, 0.2, 1) 缓动曲线，营造柔和而不拖沓的节奏。
- 避免使用弹跳或弹性动画——这类效果与皮革和纸张的物理特性不符，会破坏真实感。
- 页面滚动平滑但不添加视差效果，保持阅读日记时的专注感。

**触觉暗示**：
- 所有可点击元素都使用 cursor: pointer，并通过轻微的视觉变化（阴影、位移、色彩）提供即时反馈。
- 链接使用下划线或箭头符号，配合温暖的红色或金色，呼应邮票和金属的视觉语言。

氛围营造：
整体界面营造的氛围是"探险者的私人藏书室"——想象你走进一间充满旅行纪念品的书房，桌面上散落着皮革装帧的日记本、贴满邮票的明信片、Polaroid 相机拍摄的即时照片、泛黄的地图和手写的旅行笔记。

光线设定为温暖的黄昏时刻：柔和的金色光线洒在皮革表面，产生自然的明暗过渡和高光。阴影柔和而明确，既营造立体感又不过分戏剧化。整个色调偏暖，唤起壁炉旁阅读、咖啡馆里书写的舒适记忆。

视觉叙事通过细节展开：
- 邮戳的旋转角度和半透明效果暗示"这是真实使用过的护照"
- Polaroid 照片的轻微倾斜暗示"这是随意贴在墙上的回忆"
- 手写字体的使用暗示"这是亲笔记录的心情"
- 皮革的磨损痕迹暗示"这是珍藏多年的宝物"

每一个设计元素都在讲述同一个故事：这不是冰冷的数字界面，而是承载情感和记忆的个人物品。用户在使用产品时，不仅是在浏览信息，更是在"翻阅"自己的旅行日志，"触摸"过去的美好时光。

情感共鸣：
该风格激发的核心情感是怀旧 (Nostalgia) 与期待 (Anticipation) 的结合——既怀念过去的旅程，又期待未来的冒险。设计通过物理材质的数字化再现，在虚拟空间中创造了触觉记忆，让每次点击都像是在翻开日记本的下一页，每次悬停都像是在抚摸照片的边缘。

最终，这个设计传达的是一种生活态度：慢下来，用心记录，珍惜每一个瞬间——就像旅行者在皮革笔记本上认真书写每一行文字、小心翼翼地粘贴每一张邮票那样。

---

## English Version (en-US)

Role: You are a UI designer specializing in skeuomorphic design and vintage aesthetics, skilled at recreating the material texture and emotional warmth of the real world through digital media. Your design inspiration comes from the yellowed leather notebooks in travelers' hands, passports covered with stamps, and Polaroid photos full of stories.

Scene Positioning:
This style is designed for digital products that emphasize emotional narrative and personal expression, suitable for travel blog platforms, photography portfolio websites, lifestyle brand official sites, handmade craft markets, creative studios, personal diary applications, etc. The target users are adventurers who love exploration, cherish memories, and pursue authentic texture—they are not satisfied with cold digital interfaces, but desire to evoke the memory of touching real objects through design: the rustling sound of opening a leather notebook, the temperature of touching the edge of a photo, the ritual of writing in a diary.

The brand image conveyed by this style is: sincere, nostalgic, humanistic, detail-oriented, and craftsmanship-spirited. It tells users: "Every journey deserves to be carefully recorded, and every story should be treated gently."

Visual Design Philosophy:
This style combines the realism of skeuomorphic design with the sentiment of vintage aesthetics, neither pursuing the minimalism of flat design nor indulging in over-decorated complexity. The core design philosophy is "warm realism"—through precise simulation of real materials (leather texture, paper wear, metal luster), users can experience the tactile and emotional connection of the physical world in digital space.

The design language balances modern usability with vintage atmosphere creation: navigation is clear and easy to use but uses visual metaphors of leather tabs; buttons comply with modern interaction standards but have the heavy texture of brass metal; the layout follows responsive design principles but retains the imperfect beauty of handmade binding (slight rotation, irregular edges).

The overall color tone is dominated by warm earth tones: varying shades of brown simulate the natural changes of leather, the beige of parchment brings a soft reading experience, and the deep red of stamps injects vitality as a finishing touch. This color scheme not only reflects the sense of time's precipitation but also maintains sufficient contrast to ensure content readability.

Materials and Textures:
Leather material is the core of the entire design:
- **Main background leather**: Uses a gradient from light brown (#8B6F47) to dark brown (#5D4E37), simulating the natural transition of light on the leather surface. Through SVG noise texture overlay, it reproduces the natural graininess and subtle irregularity of the leather surface.
- **Navigation bar leather**: Uses deeper tones (#4A3C2F → #3A2F24), creating a three-dimensional book spine effect through a multi-layer shadow system (outer shadow simulates thickness, inner highlight simulates surface luster, bottom dark inner shadow simulates edge wear).
- **Card leather**: Medium-depth brown (#6B5644 → #5A4837), with a 3px dark border simulating the thickness of leather edges, inner highlight simulating the reflection of surface wax treatment.

Paper material for content bearing:
- **Parchment background** (#F4E8C1): Used for stamp cards and diary pages, with slight texture and uneven tone, simulating the texture of handmade paper.
- **Polaroid white border**: Pure white (#FFF) with shadow, reproducing the unique border and slightly plastic-like luster of instant photos.

Metal decoration for emphasis:
- **Brass badges and buttons**: Radial gradient from bright gold (#B8860B) to dark gold (#8B6914), inner highlight simulates the reflection of polished metal surfaces, heavy shadow conveys the weight of metal.
- **Postmarks and stamps**: Semi-transparent deep red (rgba(220, 20, 60, 0.4)), with SVG circular outline, simulating the imprint left by rubber stamps on paper.

Decorative details enhance realism:
- **Stamp serrated edges**: Use repeating-linear-gradient to create regular perforation effects, precisely reproducing the edges after stamp tearing.
- **Binding line**: Red dashed line simulates hand-stitched thread traces, spacing and thickness carefully adjusted to match the proportions of real bound books.
- **Transparent tape**: Semi-transparent white with slight shadow, capturing the real state of tape stuck on photos.
- **Wear marks**: Through irregular shadows and edge processing, simulating the natural wear of leather notebooks after multiple readings.

Interaction Experience:
The interaction design of this style follows the principle of "gentle physical feedback"—users should feel the solidity of operation while avoiding overly exaggerated animations that break the immersive experience.

**Hover Feedback**:
- Cards hover slightly upward (translateY(-8px)) with a 2-degree rotation, simulating the action of picking up a photo or stamp from the desktop. Shadows simultaneously expand and deepen, strengthening the sense of space leaving the plane.
- Buttons hover upward 3px, inner highlight enhances, simulating the preparation state before pressing a real metal button.

**Click Feedback**:
- Button clicks press down to -1px position, outer shadow shrinks, inner shadow deepens, precisely simulating the press stroke and rebound of mechanical keys.
- Polaroid photos rotate to zero when clicked, shadow deepens, suggesting a fixed viewing state.

**Animation Rhythm**:
- All transition animations use a moderate duration of 0.3-0.4 seconds, with cubic-bezier(0.4, 0.0, 0.2, 1) easing curve, creating a soft but not sluggish rhythm.
- Avoid bounce or elastic animations—these effects do not match the physical properties of leather and paper and would break the realism.
- Page scrolling is smooth but does not add parallax effects, maintaining the focus when reading a diary.

**Tactile Cues**:
- All clickable elements use cursor: pointer and provide instant feedback through slight visual changes (shadow, displacement, color).
- Links use underlines or arrow symbols, with warm red or gold, echoing the visual language of stamps and metals.

Atmosphere Creation:
The overall interface creates the atmosphere of "an adventurer's private library"—imagine you walk into a study full of travel souvenirs, with leather-bound diaries, postcards covered with stamps, instant photos taken with Polaroid cameras, yellowed maps, and handwritten travel notes scattered on the desktop.

The lighting is set to a warm dusk moment: soft golden light falls on the leather surface, producing natural light-dark transitions and highlights. Shadows are soft and clear, creating a three-dimensional feel without being overly dramatic. The overall tone is warm, evoking comfortable memories of reading by the fireplace and writing in a cafe.

Visual narrative unfolds through details:
- The rotation angle and semi-transparent effect of postmarks suggest "this is a passport that has been actually used"
- The slight tilt of Polaroid photos suggests "these are memories casually posted on the wall"
- The use of handwritten fonts suggests "this is a personal record of mood"
- The wear marks on leather suggest "this is a treasure cherished for many years"

Every design element tells the same story: this is not a cold digital interface, but a personal item that carries emotions and memories. When using the product, users are not just browsing information, but "flipping through" their own travel journals, "touching" the beautiful times of the past.

Emotional Resonance:
The core emotion evoked by this style is a combination of Nostalgia and Anticipation—both missing past journeys and looking forward to future adventures. The design creates tactile memory in virtual space through digital reproduction of physical materials, making each click like turning to the next page of a diary, each hover like touching the edge of a photo.

Ultimately, this design conveys a life attitude: slow down, record carefully, cherish every moment—just like travelers carefully write every line in their leather notebooks and carefully paste every stamp.
