# Custom Prompt

## 中文版本 (zh-CN)

请根据以下工业风作品集模板设计一个作品展示页面：

### 设计要求

**视觉风格**：
- 采用深色背景（#1a1a1a, #262626），营造工业车间氛围
- 使用工业橙色（#ff6b35）作为强调色，模拟警示标识
- 添加混凝土噪点纹理和金属拉丝效果
- 装饰性铆钉位于面板四角
- 警示条纹作为视觉分隔

**字体系统**：
- 标题使用 Rajdhani 或 Impact，粗体大写，几何感强
- 技术文本使用 Roboto Mono 或等宽字体
- 正文使用 Saira Condensed 或压缩字体
- 所有标题必须大写（text-transform: uppercase）

**布局结构**：
1. **Hero 区域**：
   - 金属面板背景，四角铆钉装饰
   - 顶部警示条纹（橙黑斜纹）
   - 主标题使用技术化命名（如 "IRON & CODE"）
   - 副标题描述职业（如 "Industrial Designer | Developer"）
   - CTA 按钮使用系统化标签（如 "View Projects PROTO_01"）
   - 背景网格线（50px x 50px）

2. **作品展示区**：
   - CSS Grid 布局，3 列响应式网格
   - 每个项目卡片包含：
     - 图片占位符（带扫描线效果）
     - 项目标题（橙色）
     - 简短描述
     - 链接按钮（如 "ACCESS DATA >"）
   - 卡片 hover 时上浮 5px，阴影加深

3. **关于区域**：
   - 深灰色背景分隔
   - Flex 布局：左侧文字介绍（flex: 2），右侧技能标签（flex: 1）
   - 技能标签：灰色边框，hover 时变为橙色

4. **联系表单**：
   - 铆钉装饰的金属面板
   - 表单标签使用技术化命名：
     - IDENTIFIER（姓名）
     - FREQUENCY（邮箱）
     - DATA PACKET（消息）
   - 输入框：深色背景，focus 时橙色发光
   - 提交按钮："INITIATE SEND"

**交互效果**：
- 按钮：hover 时填充橙色，光泽扫过动画
- 卡片：hover 时 translateY(-5px)，边框变橙色
- 统一过渡时间：0.3s

**技术要求**：
- 纯 HTML + CSS，不使用 JavaScript
- CSS 自定义属性管理颜色和字体
- Google Fonts 加载：Rajdhani, Roboto Mono, Saira Condensed
- 响应式设计（移动端字号缩小）

请生成完整的 HTML 和 CSS 代码。

---

## English Version (en-US)

Please design a portfolio showcase page based on the following industrial style template:

### Design Requirements

**Visual Style**:
- Use dark backgrounds (#1a1a1a, #262626) to create an industrial workshop atmosphere
- Use industrial orange (#ff6b35) as accent color, mimicking warning signs
- Add concrete noise texture and brushed metal effects
- Decorative rivets at panel corners
- Hazard stripes as visual separators

**Typography System**:
- Headings use Rajdhani or Impact, bold uppercase, geometric feel
- Technical text uses Roboto Mono or monospace fonts
- Body text uses Saira Condensed or condensed fonts
- All headings must be uppercase (text-transform: uppercase)

**Layout Structure**:
1. **Hero Section**:
   - Metal panel background with corner rivet decorations
   - Top hazard stripe (orange-black diagonal)
   - Main title uses technical naming (e.g., "IRON & CODE")
   - Subtitle describes profession (e.g., "Industrial Designer | Developer")
   - CTA button uses systematic labels (e.g., "View Projects PROTO_01")
   - Background grid lines (50px x 50px)

2. **Portfolio Grid**:
   - CSS Grid layout, 3-column responsive grid
   - Each project card contains:
     - Image placeholder (with scanline effect)
     - Project title (orange)
     - Brief description
     - Link button (e.g., "ACCESS DATA >")
   - Card hover: lift 5px, deepen shadow

3. **About Section**:
   - Dark gray background separator
   - Flex layout: left text intro (flex: 2), right skill tags (flex: 1)
   - Skill tags: gray border, turn orange on hover

4. **Contact Form**:
   - Rivet-decorated metal panel
   - Form labels use technical naming:
     - IDENTIFIER (name)
     - FREQUENCY (email)
     - DATA PACKET (message)
   - Input fields: dark background, orange glow on focus
   - Submit button: "INITIATE SEND"

**Interaction Effects**:
- Buttons: fill with orange on hover, gloss sweep animation
- Cards: translateY(-5px) on hover, border turns orange
- Uniform transition time: 0.3s

**Technical Requirements**:
- Pure HTML + CSS, no JavaScript
- CSS custom properties for color and font management
- Load Google Fonts: Rajdhani, Roboto Mono, Saira Condensed
- Responsive design (smaller font sizes on mobile)

Please generate complete HTML and CSS code.
