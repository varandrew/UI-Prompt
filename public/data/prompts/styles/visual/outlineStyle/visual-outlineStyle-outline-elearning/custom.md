# Custom Prompt

## 中文版本 (zh-CN)

创建**Outline E-learning（线框学习平台）**风格的友好教育网站，使用插画线框风格和温暖学习氛围。TailwindCSS 实现要点：

### 核心特征
- 友好线框插图，线宽 2-2.5px，手绘感
- 教育元素：书本、铅笔、灯泡、证书图标（stroke-only）
- 温暖配色：蓝色（#3b82f6）、橙色（#f97316）、绿色（#10b981）、紫色（#a855f7）
- 大圆角（rounded-2xl）创造亲和力
- 渐变点缀（from-blue-500 to-indigo-600）用于重要元素
- 简笔画人物角色

### 组件设计
**课程卡片**：rounded-2xl + border-2 border-blue-200 + 线框封面插图 + 进度条 + hover:-translate-y-2
**按钮**：主按钮用渐变（bg-gradient-to-r），次级按钮描边（border-2）
**进度条**：border border-gray-200 包裹，内部彩色填充（bg-blue-500）
**徽章**：圆形 + border-2 + 线框图标，已获得使用彩色填充

### 排版
- 字体：font-sans（Poppins, Inter）
- 课程标题：text-2xl font-semibold text-gray-800
- 描述：text-base text-gray-600 leading-relaxed
- 标签：text-sm bg-blue-100 text-blue-700 rounded-full px-3 py-1

### 交互
- hover 上浮：-translate-y-2 + shadow 增强
- 平滑过渡：transition-all duration-300
- 进度动画：宽度变化 + 百分比显示
- 成功反馈：绿色勾选图标（stroke）+ 动画

### 场景组件
1. **课程库**：grid-cols-3，卡片含封面插图、标题、讲师、评分、进度条
2. **进度仪表板**：SVG 圆形进度图 + 里程碑徽章 + 学习时长统计
3. **视频播放器**：大圆形播放按钮 + 进度条 + 线框控制图标
4. **互动测验**：问题编号圆圈 + 选项按钮（rounded-xl）+ 正确/错误图标反馈
5. **成就系统**：徽章网格，已获得彩色填充，未获得灰色线框


---

## English Version (en-US)

Create **Outline E-learning** style friendly educational website with illustration wireframe style and warm learning atmosphere. TailwindCSS implementation points:

### Core Features
- Friendly wireframe illustrations, 2-2.5px line width, hand-drawn feel
- Educational elements: books, pencils, light bulbs, certificates (stroke-only icons)
- Warm colors: blue (#3b82f6), orange (#f97316), green (#10b981), purple (#a855f7)
- Large rounded corners (rounded-2xl) for approachability
- Gradient accents (from-blue-500 to-indigo-600) for important elements
- Simple line-drawn character figures

### Component Design
**Course Cards**: rounded-2xl + border-2 border-blue-200 + wireframe cover + progress bar + hover:-translate-y-2
**Buttons**: Primary with gradient (bg-gradient-to-r), secondary outlined (border-2)
**Progress Bars**: border border-gray-200 wrapper, inner colored fill (bg-blue-500)
**Badges**: Circular + border-2 + wireframe icon, earned use colored fill

### Typography
- Font: font-sans (Poppins, Inter)
- Course title: text-2xl font-semibold text-gray-800
- Description: text-base text-gray-600 leading-relaxed
- Tags: text-sm bg-blue-100 text-blue-700 rounded-full px-3 py-1

### Interactions
- Hover float: -translate-y-2 + enhanced shadow
- Smooth transition: transition-all duration-300
- Progress animation: width change + percentage display
- Success feedback: green checkmark icon (stroke) + animation

### Scene Components
1. **Course Library**: grid-cols-3, cards with cover illustration, title, instructor, rating, progress bar
2. **Progress Dashboard**: SVG circular progress + milestone badges + study time stats
3. **Video Player**: Large circular play button + progress bar + wireframe control icons
4. **Interactive Quiz**: Question number circles + option buttons (rounded-xl) + correct/incorrect icon feedback
5. **Achievement System**: Badge grid, earned with color fill, unearned with gray wireframe
