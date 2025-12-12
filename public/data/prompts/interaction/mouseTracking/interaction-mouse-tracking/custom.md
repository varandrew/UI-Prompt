# Custom Prompt

## 中文版本 (zh-CN)

创建一个鼠标追踪（Mouse Tracking）风格的网页设计，通过鼠标移动驱动元素响应与交互效果。

**核心特征**

交互类型：
- **视差效果**：元素随鼠标移动而轻微移位
- **光标跟随**：高光、光晕或元素跟随鼠标位置
- **倾斜效果**：卡片或元素根据鼠标位置倾斜旋转
- **粒子轨迹**：鼠标移动留下粒子或线条轨迹
- **聚光效果**：光斑跟随鼠标，照亮周围区域
- **磁吸效果**：鼠标靠近时元素被吸引或推开

色彩与视觉：
- **深色背景**：突出光效，如深灰 (#0f0f0f, #1a1a1a)、深蓝 (#0a1f2e)
- **亮色光效**：白色、浅蓝、霓虹色作为跟随元素
- **半透明遮罩**：rgba 或 hsla 实现渐变光晕
- **发光效果**：box-shadow 或 filter: drop-shadow 模拟光晕

**视差效果**

基础视差：
- **多层深度**：背景、中景、前景移动速度不同
- **移动比例**：背景移动 10-20%，中景 30-50%，前景 50-80%
- **平滑过渡**：使用 transform: translate3d() 和 will-change
- **边界限制**：限制移动范围，避免元素飞出视口

卡片视差：
- **悬停触发**：鼠标进入卡片区域时激活
- **3D 倾斜**：根据鼠标位置计算 rotateX 和 rotateY
- **内部元素**：卡片内元素也可独立视差
- **阴影跟随**：阴影方向与鼠标位置相反

实现示例：
```javascript
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  const rotateX = y * 20; // 调整倾斜度
  const rotateY = -x * 20;
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
```

**光标跟随**

光标效果：
- **自定义光标**：替换默认光标，使用 CSS cursor: none
- **跟随圆圈**：一个或多个圆圈跟随鼠标
- **延迟跟随**：使用缓动函数制造延迟效果
- **大小变化**：悬停在链接或按钮上时放大

光晕效果：
- **径向渐变**：radial-gradient 制造光晕
- **跟随移动**：通过 CSS 变量动态更新位置
- **混合模式**：使用 mix-blend-mode: screen 或 lighten
- **多层叠加**：多个光晕叠加增强效果

实现示例：
```javascript
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});
```

```css
.spotlight {
  position: fixed;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.15), transparent);
  pointer-events: none;
  transform: translate(-50%, -50%);
  left: var(--mouse-x);
  top: var(--mouse-y);
}
```

**倾斜效果**

卡片倾斜：
- **perspective**：设置透视距离，如 1000px
- **rotateX / rotateY**：根据鼠标位置计算旋转角度
- **边界处理**：鼠标离开时平滑复原
- **内容对齐**：倾斜时保持内容可读

计算公式：
```javascript
// 鼠标位置标准化（-0.5 到 0.5）
const normalizedX = (mouseX - elementCenterX) / elementWidth;
const normalizedY = (mouseY - elementCenterY) / elementHeight;

// 计算旋转角度
const rotateY = normalizedX * maxRotation; // 如 20deg
const rotateX = -normalizedY * maxRotation; // 负号使倾斜方向符合直觉
```

增强效果：
- **阴影跟随**：阴影位置与鼠标位置相反
- **高光移动**：在卡片上添加移动的高光层
- **边缘光**：卡片边缘添加发光效果

**粒子轨迹**

粒子系统：
- **canvas 渲染**：使用 canvas 绘制粒子
- **粒子属性**：位置、速度、大小、颜色、透明度、生命周期
- **生成机制**：鼠标移动时生成新粒子
- **更新逻辑**：每帧更新粒子位置和状态

粒子类型：
- **圆形粒子**：简单圆点，淡出消失
- **星形粒子**：小星星，旋转飘散
- **线条轨迹**：连接最近粒子，形成网络
- **图片粒子**：使用小图片如爱心、雪花

性能优化：
- **限制数量**：最多 100-200 个粒子
- **对象池**：复用粒子对象，避免频繁创建销毁
- **requestAnimationFrame**：使用 RAF 而非 setInterval
- **节流**：限制粒子生成频率

**磁吸效果**

元素吸引：
- **距离检测**：计算鼠标与元素的距离
- **移动比例**：距离越近，移动越多
- **平滑过渡**：使用缓动函数，避免突兀
- **边界限制**：限制移动范围

实现示例：
```javascript
elements.forEach(el => {
  const rect = el.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distanceX = e.clientX - centerX;
  const distanceY = e.clientY - centerY;
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  if (distance < 200) { // 吸引半径
    const strength = (200 - distance) / 200; // 0 到 1
    const moveX = distanceX * strength * 0.3; // 调整强度
    const moveY = distanceY * strength * 0.3;
    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  } else {
    el.style.transform = 'translate(0, 0)';
  }
});
```

**布局与构图**

页面结构：
- **深色背景**：衬托光效，使用深灰或深蓝
- **明确区块**：卡片或区块边界清晰
- **留白充足**：避免元素过密，影响交互
- **容器最大宽度**：1200-1400px

响应式考虑：
- **桌面优先**：鼠标追踪效果主要针对桌面
- **移动端降级**：触摸设备禁用或简化效果
- **触摸检测**：使用 @media (pointer: coarse) 或 matchMedia
- **性能监控**：低性能设备自动降级

**性能优化**

关键技术：
- **transform + opacity**：只修改这两个属性，避免重排重绘
- **will-change**：提前告知浏览器哪些属性会变化
- **节流 / 防抖**：限制事件触发频率
- **requestAnimationFrame**：同步浏览器刷新率
- **GPU 加速**：使用 transform3d 触发硬件加速

节流示例：
```javascript
let ticking = false;
document.addEventListener('mousemove', (e) => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateElements(e.clientX, e.clientY);
      ticking = false;
    });
    ticking = true;
  }
});
```

**无障碍考虑**

键盘替代：
- **键盘导航**：确保所有功能可用 Tab 访问
- **禁用效果**：提供禁用鼠标追踪的选项
- **prefers-reduced-motion**：检测并禁用动画
- **焦点指示**：清晰的焦点状态，不依赖鼠标效果

性能考虑：
- **移动端降级**：触摸设备自动禁用
- **低性能设备**：检测性能，自动简化效果
- **用户控制**：提供开关按钮

实现示例：
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (prefersReducedMotion || isTouchDevice) {
  // 禁用鼠标追踪效果
  disableMouseTracking();
}
```

**技术实现**

基础监听：
```javascript
// 全局监听
document.addEventListener('mousemove', handleMouseMove);

// 特定元素监听
element.addEventListener('mouseenter', handleMouseEnter);
element.addEventListener('mouseleave', handleMouseLeave);
element.addEventListener('mousemove', handleMouseMove);
```

CSS 变量：
```javascript
// 更新 CSS 变量
document.documentElement.style.setProperty('--mouse-x', x + 'px');
document.documentElement.style.setProperty('--mouse-y', y + 'px');
```

```css
/* 使用 CSS 变量 */
.element {
  transform: translate(
    calc(var(--mouse-x) * 0.1),
    calc(var(--mouse-y) * 0.1)
  );
}
```

canvas 实现：
```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawParticle(x, y, size, opacity) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
  ctx.fill();
}
```

**使用场景**

- 创意作品集网站
- 交互艺术展示
- 产品发布页
- 游戏官网
- 科技公司官网
- 设计工作室
- 个人简历页面
- 沉浸式体验网站

---

## English Version (en-US)

Create a Mouse Tracking web design where mouse movement drives element responses and interactive effects.

**Core Characteristics**

Interaction Types:
- **Parallax effect**: elements shift slightly with mouse movement
- **Cursor following**: highlights, halos, or elements follow cursor position
- **Tilt effect**: cards or elements tilt/rotate based on mouse position
- **Particle trails**: mouse movement leaves particle or line trails
- **Spotlight effect**: light spot follows mouse, illuminating surrounding area
- **Magnetic effect**: mouse proximity attracts or repels elements

Color & Visual:
- **Dark backgrounds**: highlight light effects, like dark gray (#0f0f0f, #1a1a1a), dark blue (#0a1f2e)
- **Bright light effects**: white, light blue, neon colors as following elements
- **Semi-transparent masks**: rgba or hsla for gradient halos
- **Glow effects**: box-shadow or filter: drop-shadow simulate halos

**Parallax Effect**

Basic Parallax:
- **Multi-layer depth**: background, midground, foreground move at different speeds
- **Movement ratio**: background 10-20%, midground 30-50%, foreground 50-80%
- **Smooth transitions**: use transform: translate3d() and will-change
- **Boundary limits**: restrict movement range, prevent elements flying out of viewport

Card Parallax:
- **Hover trigger**: activate when mouse enters card area
- **3D tilt**: calculate rotateX and rotateY based on mouse position
- **Internal elements**: card internal elements can also have independent parallax
- **Shadow following**: shadow direction opposite to mouse position

Implementation Example:
```javascript
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  const rotateX = y * 20; // adjust tilt degree
  const rotateY = -x * 20;
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
```

**Cursor Following**

Cursor Effects:
- **Custom cursor**: replace default cursor, use CSS cursor: none
- **Following circles**: one or multiple circles follow mouse
- **Delayed following**: use easing function for delayed effect
- **Size change**: enlarge when hovering over links or buttons

Halo Effects:
- **Radial gradient**: radial-gradient creates halos
- **Follow movement**: dynamically update position via CSS variables
- **Blend modes**: use mix-blend-mode: screen or lighten
- **Multi-layer overlay**: multiple halos overlaid for enhanced effect

Implementation Example:
```javascript
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});
```

```css
.spotlight {
  position: fixed;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.15), transparent);
  pointer-events: none;
  transform: translate(-50%, -50%);
  left: var(--mouse-x);
  top: var(--mouse-y);
}
```

**Tilt Effect**

Card Tilt:
- **perspective**: set perspective distance like 1000px
- **rotateX / rotateY**: calculate rotation angle based on mouse position
- **Boundary handling**: smoothly restore when mouse leaves
- **Content alignment**: maintain content readability during tilt

Calculation Formula:
```javascript
// Normalize mouse position (-0.5 to 0.5)
const normalizedX = (mouseX - elementCenterX) / elementWidth;
const normalizedY = (mouseY - elementCenterY) / elementHeight;

// Calculate rotation angle
const rotateY = normalizedX * maxRotation; // e.g., 20deg
const rotateX = -normalizedY * maxRotation; // negative for intuitive direction
```

Enhanced Effects:
- **Shadow following**: shadow position opposite to mouse
- **Highlight movement**: add moving highlight layer on card
- **Edge glow**: add glow effect to card edges

**Particle Trails**

Particle System:
- **Canvas rendering**: use canvas to draw particles
- **Particle properties**: position, velocity, size, color, opacity, lifecycle
- **Generation mechanism**: generate new particles on mouse movement
- **Update logic**: update particle position and state each frame

Particle Types:
- **Circular particles**: simple dots that fade out
- **Star particles**: small stars that rotate and disperse
- **Line trails**: connect nearest particles forming network
- **Image particles**: use small images like hearts, snowflakes

Performance Optimization:
- **Limit quantity**: maximum 100-200 particles
- **Object pooling**: reuse particle objects, avoid frequent creation/destruction
- **requestAnimationFrame**: use RAF instead of setInterval
- **Throttling**: limit particle generation frequency

**Magnetic Effect**

Element Attraction:
- **Distance detection**: calculate distance between mouse and element
- **Movement ratio**: closer distance, more movement
- **Smooth transition**: use easing function, avoid abruptness
- **Boundary limits**: restrict movement range

Implementation Example:
```javascript
elements.forEach(el => {
  const rect = el.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distanceX = e.clientX - centerX;
  const distanceY = e.clientY - centerY;
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  if (distance < 200) { // attraction radius
    const strength = (200 - distance) / 200; // 0 to 1
    const moveX = distanceX * strength * 0.3; // adjust strength
    const moveY = distanceY * strength * 0.3;
    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  } else {
    el.style.transform = 'translate(0, 0)';
  }
});
```

**Layout & Composition**

Page Structure:
- **Dark background**: highlight light effects, use dark gray or dark blue
- **Clear blocks**: cards or block boundaries clear
- **Ample whitespace**: avoid dense elements affecting interaction
- **Max container width**: 1200-1400px

Responsive Considerations:
- **Desktop-first**: mouse tracking effects primarily for desktop
- **Mobile degradation**: disable or simplify effects on touch devices
- **Touch detection**: use @media (pointer: coarse) or matchMedia
- **Performance monitoring**: auto-degrade on low-performance devices

**Performance Optimization**

Key Techniques:
- **transform + opacity**: modify only these properties, avoid reflow/repaint
- **will-change**: inform browser ahead which properties will change
- **Throttle / Debounce**: limit event trigger frequency
- **requestAnimationFrame**: sync with browser refresh rate
- **GPU acceleration**: use transform3d to trigger hardware acceleration

Throttling Example:
```javascript
let ticking = false;
document.addEventListener('mousemove', (e) => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateElements(e.clientX, e.clientY);
      ticking = false;
    });
    ticking = true;
  }
});
```

**Accessibility Considerations**

Keyboard Alternatives:
- **Keyboard navigation**: ensure all functionality accessible via Tab
- **Disable effects**: provide option to disable mouse tracking
- **prefers-reduced-motion**: detect and disable animations
- **Focus indicators**: clear focus states, don't rely on mouse effects

Performance Considerations:
- **Mobile degradation**: auto-disable on touch devices
- **Low-performance devices**: detect performance, auto-simplify effects
- **User control**: provide toggle button

Implementation Example:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (prefersReducedMotion || isTouchDevice) {
  // Disable mouse tracking effects
  disableMouseTracking();
}
```

**Technical Implementation**

Basic Listeners:
```javascript
// Global listener
document.addEventListener('mousemove', handleMouseMove);

// Specific element listener
element.addEventListener('mouseenter', handleMouseEnter);
element.addEventListener('mouseleave', handleMouseLeave);
element.addEventListener('mousemove', handleMouseMove);
```

CSS Variables:
```javascript
// Update CSS variables
document.documentElement.style.setProperty('--mouse-x', x + 'px');
document.documentElement.style.setProperty('--mouse-y', y + 'px');
```

```css
/* Use CSS variables */
.element {
  transform: translate(
    calc(var(--mouse-x) * 0.1),
    calc(var(--mouse-y) * 0.1)
  );
}
```

Canvas Implementation:
```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawParticle(x, y, size, opacity) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
  ctx.fill();
}
```

**Use Cases**

- Creative portfolio websites
- Interactive art showcases
- Product launch pages
- Game official sites
- Tech company websites
- Design studios
- Personal resume pages
- Immersive experience websites
