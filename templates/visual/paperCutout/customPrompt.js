// Paper Cutout Custom Prompt - Technical Implementation Guide
// 纸张剪贴风格自定义 Prompt - 技术实现指南

export const paperCutoutCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个纸张剪贴风格（Paper Cutout）的界面。该风格通过便利贴、Polaroid 相片、图钉、手写字体等元素，营造出手工拼贴的温馨质感，适用于创意工作室、个人博客、手工艺品网站等强调个性化和人文关怀的场景。

**使用场景**
- 创意作品集、设计师个人网站、手工艺品平台
- 旅行博客、生活方式品牌、儿童教育应用
- 任何需要传达温暖、手工感、个性化的产品

**整体布局结构**

1. 主容器 - 软木板背景
   - 背景：从 #D7CCC8 到 #BCAAA4 的线性渐变，模拟软木板的自然色调
   - 纹理叠加：使用 repeating-linear-gradient 创建细密网格，模拟软木板纤维
   - 内边距：至少 2rem，为便利贴和照片留出充足空间

2. 便利贴网格 - 主要内容承载
   - 布局：3 列响应式网格（移动端单列）
   - 间距：1.5rem 确保便利贴之间有清晰的视觉分隔
   - 数量：建议 2-4 张便利贴，每张代表一个功能或信息卡片

3. Polaroid 相片墙（可选）
   - 4 列网格，每张照片略微旋转（-3deg 到 3deg）
   - 使用透明胶带装饰固定，增强手工感
   - 照片底部预留 2.5rem 空间用于手写标注

**色彩与材质**

主色调（背景与装饰）：
- 软木板背景: #D7CCC8 → #BCAAA4（温暖的灰褐色渐变）
- 羊皮纸: #F4E8C1（用于邮票样式卡片）
- 纸张白: #FFFFFF（Polaroid 相片边框）

便利贴色彩（彩色漸變）：
- 黄色便利贴: #FFF59D → #FFF176
- 粉色便利贴: #F8BBD0 → #F48FB1
- 蓝色便利贴: #BBDEFB → #90CAF9
- 绿色便利贴: #C5E1A5 → #AED581

装饰元素色彩：
- 图钉红: #EF5350 → #E53935（径向渐变）
- 图钉蓝: #42A5F5 → #1E88E5
- 图钉黄: #FFEB3B → #FDD835
- 图钉绿: #66BB6A → #43A047

文字颜色：
- 标题深色: #2C3E50
- 正文深灰: #37474F
- 手写标注: #2C2416

**关键 CSS 实现**

\`\`\`css
/* 软木板背景与纹理 */
.paper-demo-container {
  position: relative;
  background: linear-gradient(135deg, #D7CCC8 0%, #BCAAA4 100%);
  padding: 2rem;
  border-radius: 8px;
  overflow: hidden;
}

/* 软木板网格纹理叠加 */
.cork-bg {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent, transparent 3px,
      rgba(139, 69, 19, 0.05) 3px,
      rgba(139, 69, 19, 0.05) 6px
    ),
    repeating-linear-gradient(
      90deg,
      transparent, transparent 3px,
      rgba(139, 69, 19, 0.05) 3px,
      rgba(139, 69, 19, 0.05) 6px
    );
  opacity: 0.6;
  pointer-events: none;
}

/* 便利贴基础样式 */
.sticky-note {
  position: relative;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow:
    3px 3px 8px rgba(0,0,0,0.15),
    6px 6px 16px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  z-index: 10;
}

/* 便利贴颜色变体 */
.sticky-yellow {
  background: linear-gradient(135deg, #FFF59D 0%, #FFF176 100%);
  transform: rotate(-2deg);  /* 轻微旋转增加手工感 */
}

.sticky-pink {
  background: linear-gradient(135deg, #F8BBD0 0%, #F48FB1 100%);
  transform: rotate(2deg);
}

/* 便利贴悬停效果 */
.sticky-note:hover {
  transform: translateY(-8px) rotate(0deg);  /* 悬停时旋转归零 */
  box-shadow:
    4px 4px 12px rgba(0,0,0,0.2),
    8px 8px 24px rgba(0,0,0,0.12);
}

/* 图钉装饰（使用径向渐变模拟立体感）*/
.pin {
  position: absolute;
  top: -10px;
  right: 30%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.3),
    inset 0 1px 2px rgba(255,255,255,0.4);
}

.pin-red {
  background: radial-gradient(circle, #EF5350 0%, #E53935 100%);
}

/* Polaroid 相片 */
.polaroid-card {
  position: relative;
  background: #FFF;
  padding: 0.75rem;
  padding-bottom: 2.5rem;  /* 底部留空间给手写标注 */
  box-shadow: 4px 4px 12px rgba(0,0,0,0.2);
  transform: rotate(-3deg);
  transition: all 0.4s ease;
}

.polaroid-card:hover {
  transform: rotate(0deg);  /* 悬停时旋转归零 */
  box-shadow: 6px 6px 18px rgba(0,0,0,0.3);
}

/* 照片图像区域 */
.polar-img {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #E8D4B0 0%, #D4C19E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

/* 手写标注 */
.polar-caption {
  font-family: 'Caveat', cursive;
  font-size: 1.2rem;
  color: #2C2416;
  text-align: center;
  font-weight: 600;
}

/* 透明胶带装饰 */
.tape-deco {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(5deg);
  width: 60px;
  height: 20px;
  background: rgba(255,255,255,0.4);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

/* 邮票锯齿边缘（可选装饰）*/
.stamp-perforation {
  background:
    repeating-linear-gradient(
      0deg,
      transparent 0px, transparent 12px,
      rgba(0,0,0,0.15) 12px, rgba(0,0,0,0.15) 14px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0px, transparent 12px,
      rgba(0,0,0,0.15) 12px, rgba(0,0,0,0.15) 14px
    );
}
\`\`\`

**字体系统**

主要字体（导入 Google Fonts）：
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&display=swap');
\`\`\`

字体应用：
- 标题/手写文字: 'Caveat', cursive（手写草书风格）
- 正文: 'Patrick Hand', cursive（手写印刷体）
- 装饰签名: 'Dancing Script', cursive（可选）

字号建议：
- 便利贴标题: 1.8rem（粗体 700）
- 便利贴正文: 0.95rem
- Polaroid 标注: 1.2rem
- 图标/emoji: 3-4rem

**阴影与立体效果**

1. 便利贴立体感
   - 外阴影（双层）：
     - 第一层: 3px 3px 8px rgba(0,0,0,0.15)
     - 第二层: 6px 6px 16px rgba(0,0,0,0.08)
   - 悬停增强: 4px 4px 12px + 8px 8px 24px

2. 图钉立体感
   - 外阴影: 0 2px 4px rgba(0,0,0,0.3)
   - 内高光: inset 0 1px 2px rgba(255,255,255,0.4)
   - 径向渐变营造球形质感

3. Polaroid 相片
   - 基础阴影: 4px 4px 12px rgba(0,0,0,0.2)
   - 悬停阴影: 6px 6px 18px rgba(0,0,0,0.3)
   - 白色边框自带厚度感

**交互与动效**

1. 便利贴悬停
   - 上浮: translateY(-8px)
   - 旋转归零: rotate(0deg)
   - 阴影扩大加深
   - 过渡时间: 0.3s

2. Polaroid 相片悬停
   - 旋转归零: rotate(0deg)（从 -3deg）
   - 阴影扩大
   - 过渡时间: 0.4s（稍慢营造厚重感）

3. 按钮/链接（可选）
   - 使用便利贴样式按钮
   - Hover: 轻微上浮 + 阴影加深
   - Active: 下压效果（translateY(-2px)）

4. 动画节奏
   - 缓动函数: ease（柔和自然）
   - 避免使用 bounce 或 elastic（破坏手工质感）

**装饰元素详解**

1. 图钉（Push Pin）
   - 位置: 便利贴顶部，略微偏右（right: 30%）
   - 大小: 20px × 20px
   - 颜色: 红、蓝、黄、绿随机分配
   - 效果: 径向渐变 + 内外阴影

2. 透明胶带（Transparent Tape）
   - 位置: Polaroid 顶部居中，略微旋转（5deg）
   - 大小: 60px × 20px
   - 颜色: rgba(255,255,255,0.4)
   - 效果: 轻微阴影模拟厚度

3. 邮戳（Postmark，可选）
   - SVG 圆形轮廓
   - 半透明红色: rgba(220, 20, 60, 0.4)
   - 旋转角度: 8-12deg
   - 位置: 便利贴右上角

4. 软木板纹理
   - 细密网格: 3px 间距
   - 透明度: 0.05（非常淡）
   - 叠加在主背景上

**响应式设计**

移动端适配（max-width: 768px）：
\`\`\`css
@media (max-width: 768px) {
  .paper-demo-container {
    grid-template-columns: 1fr;  /* 改为单列布局 */
    padding: 1rem;  /* 减少内边距 */
  }

  .sticky-note {
    transform: rotate(0deg);  /* 移动端不旋转 */
  }

  .polaroid-card {
    max-width: 300px;
    margin: 0 auto;
  }
}
\`\`\`

**输出要求**

1. HTML 结构
   - 使用语义化标签（div 可接受）
   - 类名使用描述性命名（如 sticky-note, polaroid-card）
   - 每张便利贴包含: 图钉、图标、标题、正文

2. CSS 样式
   - 导入 Google Fonts（Caveat, Patrick Hand）
   - 使用 CSS 变量管理颜色（可选）
   - 确保 z-index 正确（便利贴和照片应在纹理层之上）

3. 视觉一致性
   - 所有便利贴保持相同的内边距和圆角
   - 所有图钉使用统一大小
   - 阴影系统保持一致

4. 可访问性
   - 确保文字颜色与背景对比度足够（至少 4.5:1）
   - 所有链接使用 href="javascript:void(0)"
   - 图标/emoji 使用 aria-label（如需）

5. 性能优化
   - 避免过多盒阴影叠加
   - 使用 transform 而非 position 做动画
   - 纹理使用 CSS gradient 而非图片

生成的界面应一眼看出"手工拼贴"主题，营造温馨、个性化的视觉氛围。`,

  'en-US': `You are a senior UI designer and front-end engineer. Please create a Paper Cutout style interface. This style uses sticky notes, Polaroid photos, push pins, and handwritten fonts to create a warm, handcrafted collage aesthetic, suitable for creative studios, personal blogs, handmade craft websites, and other scenarios emphasizing personalization and human care.

**Use Cases**
- Creative portfolios, designer personal websites, handmade craft platforms
- Travel blogs, lifestyle brands, children's education apps
- Any product needing to convey warmth, handmade feel, and personalization

**Overall Layout Structure**

1. Main Container - Cork Board Background
   - Background: Linear gradient from #D7CCC8 to #BCAAA4, simulating cork board natural tones
   - Texture overlay: Use repeating-linear-gradient to create fine grid, simulating cork board fibers
   - Padding: At least 2rem, leaving ample space for sticky notes and photos

2. Sticky Notes Grid - Main Content Carrier
   - Layout: 3-column responsive grid (single column on mobile)
   - Gap: 1.5rem ensures clear visual separation between notes
   - Quantity: Suggest 2-4 sticky notes, each representing a function or info card

3. Polaroid Photo Wall (Optional)
   - 4-column grid, each photo slightly rotated (-3deg to 3deg)
   - Decorated with transparent tape, enhancing handmade feel
   - Bottom of photo reserves 2.5rem space for handwritten captions

**Colors and Materials**

Main Colors (Background & Decoration):
- Cork board background: #D7CCC8 → #BCAAA4 (warm gray-brown gradient)
- Parchment: #F4E8C1 (for stamp-style cards)
- Paper white: #FFFFFF (Polaroid photo borders)

Sticky Note Colors (Gradient):
- Yellow note: #FFF59D → #FFF176
- Pink note: #F8BBD0 → #F48FB1
- Blue note: #BBDEFB → #90CAF9
- Green note: #C5E1A5 → #AED581

Decorative Element Colors:
- Red pin: #EF5350 → #E53935 (radial gradient)
- Blue pin: #42A5F5 → #1E88E5
- Yellow pin: #FFEB3B → #FDD835
- Green pin: #66BB6A → #43A047

Text Colors:
- Title dark: #2C3E50
- Body dark gray: #37474F
- Handwritten annotation: #2C2416

**Key CSS Implementation**

\`\`\`css
/* Cork board background and texture */
.paper-demo-container {
  position: relative;
  background: linear-gradient(135deg, #D7CCC8 0%, #BCAAA4 100%);
  padding: 2rem;
  border-radius: 8px;
  overflow: hidden;
}

/* Cork board grid texture overlay */
.cork-bg {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent, transparent 3px,
      rgba(139, 69, 19, 0.05) 3px,
      rgba(139, 69, 19, 0.05) 6px
    ),
    repeating-linear-gradient(
      90deg,
      transparent, transparent 3px,
      rgba(139, 69, 19, 0.05) 3px,
      rgba(139, 69, 19, 0.05) 6px
    );
  opacity: 0.6;
  pointer-events: none;
}

/* Sticky note base */
.sticky-note {
  position: relative;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow:
    3px 3px 8px rgba(0,0,0,0.15),
    6px 6px 16px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  z-index: 10;
}

/* Sticky note color variants */
.sticky-yellow {
  background: linear-gradient(135deg, #FFF59D 0%, #FFF176 100%);
  transform: rotate(-2deg);  /* Slight rotation adds handmade feel */
}

.sticky-pink {
  background: linear-gradient(135deg, #F8BBD0 0%, #F48FB1 100%);
  transform: rotate(2deg);
}

/* Sticky note hover effect */
.sticky-note:hover {
  transform: translateY(-8px) rotate(0deg);  /* Rotation to zero on hover */
  box-shadow:
    4px 4px 12px rgba(0,0,0,0.2),
    8px 8px 24px rgba(0,0,0,0.12);
}

/* Push pin decoration (radial gradient simulates 3D) */
.pin {
  position: absolute;
  top: -10px;
  right: 30%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.3),
    inset 0 1px 2px rgba(255,255,255,0.4);
}

.pin-red {
  background: radial-gradient(circle, #EF5350 0%, #E53935 100%);
}

/* Polaroid photo */
.polaroid-card {
  position: relative;
  background: #FFF;
  padding: 0.75rem;
  padding-bottom: 2.5rem;  /* Reserve bottom space for handwritten caption */
  box-shadow: 4px 4px 12px rgba(0,0,0,0.2);
  transform: rotate(-3deg);
  transition: all 0.4s ease;
}

.polaroid-card:hover {
  transform: rotate(0deg);  /* Rotation to zero on hover */
  box-shadow: 6px 6px 18px rgba(0,0,0,0.3);
}

/* Photo image area */
.polar-img {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #E8D4B0 0%, #D4C19E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

/* Handwritten caption */
.polar-caption {
  font-family: 'Caveat', cursive;
  font-size: 1.2rem;
  color: #2C2416;
  text-align: center;
  font-weight: 600;
}

/* Transparent tape decoration */
.tape-deco {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(5deg);
  width: 60px;
  height: 20px;
  background: rgba(255,255,255,0.4);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

/* Stamp perforated edges (optional decoration) */
.stamp-perforation {
  background:
    repeating-linear-gradient(
      0deg,
      transparent 0px, transparent 12px,
      rgba(0,0,0,0.15) 12px, rgba(0,0,0,0.15) 14px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0px, transparent 12px,
      rgba(0,0,0,0.15) 12px, rgba(0,0,0,0.15) 14px
    );
}
\`\`\`

**Font System**

Main Fonts (Import Google Fonts):
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&display=swap');
\`\`\`

Font Application:
- Titles/Handwritten text: 'Caveat', cursive (handwritten script style)
- Body text: 'Patrick Hand', cursive (handwritten print style)
- Decorative signatures: 'Dancing Script', cursive (optional)

Font Size Suggestions:
- Sticky note titles: 1.8rem (bold 700)
- Sticky note body: 0.95rem
- Polaroid captions: 1.2rem
- Icons/emoji: 3-4rem

**Shadows and 3D Effects**

1. Sticky Note 3D Feel
   - Outer shadow (double layer):
     - First layer: 3px 3px 8px rgba(0,0,0,0.15)
     - Second layer: 6px 6px 16px rgba(0,0,0,0.08)
   - Hover enhancement: 4px 4px 12px + 8px 8px 24px

2. Push Pin 3D Feel
   - Outer shadow: 0 2px 4px rgba(0,0,0,0.3)
   - Inner highlight: inset 0 1px 2px rgba(255,255,255,0.4)
   - Radial gradient creates spherical texture

3. Polaroid Photo
   - Base shadow: 4px 4px 12px rgba(0,0,0,0.2)
   - Hover shadow: 6px 6px 18px rgba(0,0,0,0.3)
   - White border has built-in thickness feel

**Interaction and Animation**

1. Sticky Note Hover
   - Lift up: translateY(-8px)
   - Rotation to zero: rotate(0deg)
   - Shadow expands and deepens
   - Transition time: 0.3s

2. Polaroid Photo Hover
   - Rotation to zero: rotate(0deg) (from -3deg)
   - Shadow expands
   - Transition time: 0.4s (slightly slower creates heavier feel)

3. Buttons/Links (Optional)
   - Use sticky note style buttons
   - Hover: Slight lift + shadow deepening
   - Active: Press down effect (translateY(-2px))

4. Animation Rhythm
   - Easing function: ease (soft and natural)
   - Avoid bounce or elastic (breaks handmade feel)

**Decorative Elements Details**

1. Push Pin
   - Position: Top of sticky note, slightly right (right: 30%)
   - Size: 20px × 20px
   - Colors: Red, blue, yellow, green randomly assigned
   - Effect: Radial gradient + inner/outer shadows

2. Transparent Tape
   - Position: Top center of Polaroid, slightly rotated (5deg)
   - Size: 60px × 20px
   - Color: rgba(255,255,255,0.4)
   - Effect: Slight shadow simulates thickness

3. Postmark (Optional)
   - SVG circular outline
   - Semi-transparent red: rgba(220, 20, 60, 0.4)
   - Rotation angle: 8-12deg
   - Position: Top-right corner of sticky note

4. Cork Board Texture
   - Fine grid: 3px spacing
   - Opacity: 0.05 (very faint)
   - Overlaid on main background

**Responsive Design**

Mobile Adaptation (max-width: 768px):
\`\`\`css
@media (max-width: 768px) {
  .paper-demo-container {
    grid-template-columns: 1fr;  /* Change to single column */
    padding: 1rem;  /* Reduce padding */
  }

  .sticky-note {
    transform: rotate(0deg);  /* No rotation on mobile */
  }

  .polaroid-card {
    max-width: 300px;
    margin: 0 auto;
  }
}
\`\`\`

**Output Requirements**

1. HTML Structure
   - Use semantic tags (div acceptable)
   - Use descriptive class names (e.g., sticky-note, polaroid-card)
   - Each sticky note includes: pin, icon, title, body text

2. CSS Styles
   - Import Google Fonts (Caveat, Patrick Hand)
   - Use CSS variables for color management (optional)
   - Ensure correct z-index (notes and photos above texture layer)

3. Visual Consistency
   - All sticky notes maintain same padding and border-radius
   - All pins use uniform size
   - Shadow system remains consistent

4. Accessibility
   - Ensure text color has sufficient contrast with background (at least 4.5:1)
   - All links use href="javascript:void(0)"
   - Icons/emoji use aria-label (if needed)

5. Performance Optimization
   - Avoid excessive box-shadow stacking
   - Use transform instead of position for animations
   - Use CSS gradients instead of images for textures

The generated interface should immediately convey a "handmade collage" theme, creating a warm, personalized visual atmosphere.`
};
