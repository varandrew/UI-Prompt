/**
 * Scroll Narrative - Custom Prompt
 * 滾動敘事風格的 AI Prompt 模板
 */

export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师,请使用 TailwindCSS 创建一个与当前「滚动叙事（Scroll Narrative）」风格高度接近的 UI。

**核心理念**
滚动叙事通过垂直滚动推进故事进度,使用视差效果和滚动交互讲述故事,创造沉浸式体验。内容按章节组织,每个章节都有独特的视觉标识和连接线串联。

**核心设计要求**

1. **进度条系统**
   - 顶部固定进度条:
     \`\`\`css
     .story-progress-bar {
       position: fixed;
       top: 0;
       left: 0;
       right: 0;
       height: 5px;
       background: rgba(0, 0, 0, 0.3);
       z-index: 100;
     }
     .story-progress {
       height: 100%;
       width: var(--progress-percent);
       background: linear-gradient(90deg, #a855f7, #f472b6, #22d3ee);
       box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
       transition: width 0.1s linear;
     }
     \`\`\`
   - JavaScript 计算:
     \`\`\`javascript
     window.addEventListener('scroll', () => {
       const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
       progressBar.style.width = progress + '%';
     }, { passive: true });
     \`\`\`

2. **章节滚动结构**
   - 垂直布局:
     \`\`\`css
     .story-container {
       overflow-y: auto;
       scroll-behavior: smooth;
       padding: 5rem 2rem;
       scrollbar-width: none; /* Firefox */
     }
     .story-container::-webkit-scrollbar {
       display: none; /* Chrome/Safari */
     }
     .story-section {
       min-height: 100vh;
       display: flex;
       flex-direction: column;
       justify-content: center;
       margin-bottom: 5rem;
     }
     \`\`\`

3. **连接线视觉**
   - 渐变连接线:
     \`\`\`css
     .story-line {
       width: 3px;
       height: 8rem;
       background: linear-gradient(180deg, #a855f7 0%, #f472b6 50%, #22d3ee 100%);
       box-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
       position: relative;
     }
     \`\`\`
   - 脉冲点:
     \`\`\`css
     .story-line::before {
       content: '';
       position: absolute;
       top: 0;
       left: 50%;
       transform: translateX(-50%);
       width: 12px;
       height: 12px;
       border-radius: 50%;
       background: #c084fc;
       box-shadow: 0 0 30px rgba(192, 132, 252, 1);
       animation: pulse-dot 2s ease-in-out infinite;
     }
     @keyframes pulse-dot {
       0%, 100% {
         transform: translateX(-50%) scale(1);
         box-shadow: 0 0 20px rgba(192, 132, 252, 1);
       }
       50% {
         transform: translateX(-50%) scale(1.5);
         box-shadow: 0 0 40px rgba(192, 132, 252, 1);
       }
     }
     \`\`\`
   - 箭头指示:
     \`\`\`css
     .story-line::after {
       content: '';
       position: absolute;
       bottom: -5px;
       left: 50%;
       transform: translateX(-50%);
       border-left: 8px solid transparent;
       border-right: 8px solid transparent;
       border-top: 12px solid #f472b6;
     }
     \`\`\`

4. **滚动触发动画**
   - Intersection Observer:
     \`\`\`javascript
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('active');
         }
       });
     }, { threshold: 0.5 });

     document.querySelectorAll('.story-section').forEach(section => {
       observer.observe(section);
     });
     \`\`\`
   - 入场效果:
     \`\`\`css
     .story-section {
       opacity: 0;
       transform: translateY(50px);
       transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
     }
     .story-section.active {
       opacity: 1;
       transform: translateY(0);
     }
     \`\`\`

5. **章节色彩系统**
   - Chapter 1 (绿到青):
     \`\`\`css
     background: linear-gradient(135deg, #14f195, #22d3ee);
     \`\`\`
   - Chapter 2 (青到紫):
     \`\`\`css
     background: linear-gradient(135deg, #22d3ee, #a855f7);
     \`\`\`
   - Chapter 3 (紫到粉):
     \`\`\`css
     background: linear-gradient(135deg, #a855f7, #f472b6);
     \`\`\`
   - Chapter 4 (粉到橙):
     \`\`\`css
     background: linear-gradient(135deg, #f472b6, #fb923c);
     \`\`\`
   - Chapter 5 (橙到黄):
     \`\`\`css
     background: linear-gradient(135deg, #fb923c, #fde047);
     \`\`\`

6. **深色背景设计**
   - 空间感渐变:
     \`\`\`css
     body {
       background: linear-gradient(180deg,
         #0a0e1a 0%,
         #050810 50%,
         #0d0a1f 100%
       );
     }
     \`\`\`
   - 星空效果 (可选):
     \`\`\`css
     background-image: radial-gradient(
       circle at 20% 30%,
       rgba(168, 85, 247, 0.1) 0%,
       transparent 50%
     );
     \`\`\`

7. **滚动提示 UI**
   - 提示文字:
     \`\`\`css
     .scroll-hint {
       position: fixed;
       bottom: 2rem;
       left: 50%;
       transform: translateX(-50%);
       font-size: 0.875rem;
       color: rgba(168, 85, 247, 0.9);
       z-index: 50;
     }
     \`\`\`
   - 箭头动画:
     \`\`\`css
     .hint-arrow {
       animation: hint-bounce 2s ease-in-out infinite;
     }
     @keyframes hint-bounce {
       0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
       40% { transform: translateY(-10px); }
       60% { transform: translateY(-5px); }
     }
     \`\`\`

**配色方案**

章节渐变（流动色彩叙事）:
- Chapter 1: #14f195 → #22d3ee (绿到青)
- Chapter 2: #22d3ee → #a855f7 (青到紫)
- Chapter 3: #a855f7 → #f472b6 (紫到粉)
- Chapter 4: #f472b6 → #fb923c (粉到橙)
- Chapter 5: #fb923c → #fde047 (橙到黄)

背景渐变（深色空间）:
- 起点: #0a0e1a (深蓝灰)
- 中点: #050810 (纯黑)
- 终点: #0d0a1f (深紫黑)

连接元素:
- 连接线渐变: #a855f7 → #f472b6 → #22d3ee
- 脉冲点: #c084fc + glow
- 进度条: #a855f7 → #f472b6 → #22d3ee

**关键 CSS 类示例**

\`\`\`css
/* 进度条容器 */
.story-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
}

/* 进度条填充 */
.story-progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #a855f7, #f472b6, #22d3ee);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
  transition: width 0.1s linear;
}

/* 章节容器 */
.story-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.story-section.active {
  opacity: 1;
  transform: translateY(0);
}

/* 章节编号 */
.story-number {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a855f7, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.8));
}

/* 连接线 */
.story-line {
  width: 3px;
  height: 8rem;
  background: linear-gradient(180deg, #a855f7 0%, #f472b6 50%, #22d3ee 100%);
  position: relative;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
  margin: 3rem 0;
}

.story-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #c084fc;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 20px rgba(192, 132, 252, 1);
  }
  50% {
    transform: translateX(-50%) scale(1.5);
    box-shadow: 0 0 40px rgba(192, 132, 252, 1);
  }
}

.story-line::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid #f472b6;
}
\`\`\`

**JavaScript 核心逻辑**

\`\`\`javascript
// 滚动进度更新
window.addEventListener('scroll', () => {
  const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.story-progress').style.width = progress + '%';
}, { passive: true });

// 章节入场动画
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.story-section').forEach(section => {
  observer.observe(section);
});

// 可选：平滑滚动到章节
function scrollToChapter(chapterNumber) {
  const chapter = document.querySelector(\`#chapter-\${chapterNumber}\`);
  chapter.scrollIntoView({ behavior: 'smooth' });
}
\`\`\`

**布局建议**
- 每个章节 \`min-height: 100vh\`,确保占满视窗
- 章节之间间距 \`margin-bottom: 5rem\`
- 使用 \`scroll-behavior: smooth\` 实现平滑滚动
- 章节内容居中: \`justify-content: center\` + \`align-items: center\`
- 响应式: 章节最小高度使用 \`min-height: 60vh\` (移动端)

**重要提示**
- ✅ 使用 \`scroll-behavior: smooth;\` 实现平滑滚动
- ✅ 隐藏滚动条: \`scrollbar-width: none;\` + \`::-webkit-scrollbar { display: none; }\`
- ✅ 进度条使用 \`passive\` event listeners 提升性能
- ✅ 章节入场使用 Intersection Observer,避免 scroll 事件过多计算
- ✅ 支持键盘导航 (Space/Arrow keys) 切换章节
- ✅ 每个章节应有独特的视觉标识（色彩/图形）
- ❌ 不要使用过多动画,保持叙事流畅
- ❌ 避免章节内容过长,每章 2-3 屏为宜`,

  'en-US': `You are now a senior UI designer and front-end engineer. Please use TailwindCSS to create a UI that closely matches the current "Scroll Narrative" style.

**Core Philosophy**
Scroll narrative advances story progress through vertical scrolling, using parallax effects and scroll interactions to tell stories and create immersive experiences. Content is organized by chapters, each with unique visual identity connected by lines.

**Core Design Requirements**

1. **Progress Bar System**
   - Fixed top progress bar:
     \`\`\`css
     .story-progress-bar {
       position: fixed;
       top: 0;
       left: 0;
       right: 0;
       height: 5px;
       background: rgba(0, 0, 0, 0.3);
       z-index: 100;
     }
     .story-progress {
       height: 100%;
       width: var(--progress-percent);
       background: linear-gradient(90deg, #a855f7, #f472b6, #22d3ee);
       box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
       transition: width 0.1s linear;
     }
     \`\`\`
   - JavaScript calculation:
     \`\`\`javascript
     window.addEventListener('scroll', () => {
       const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
       progressBar.style.width = progress + '%';
     }, { passive: true });
     \`\`\`

2. **Chapter Scroll Structure**
   - Vertical layout:
     \`\`\`css
     .story-container {
       overflow-y: auto;
       scroll-behavior: smooth;
       padding: 5rem 2rem;
       scrollbar-width: none; /* Firefox */
     }
     .story-container::-webkit-scrollbar {
       display: none; /* Chrome/Safari */
     }
     .story-section {
       min-height: 100vh;
       display: flex;
       flex-direction: column;
       justify-content: center;
       margin-bottom: 5rem;
     }
     \`\`\`

3. **Connection Line Visual**
   - Gradient line:
     \`\`\`css
     .story-line {
       width: 3px;
       height: 8rem;
       background: linear-gradient(180deg, #a855f7 0%, #f472b6 50%, #22d3ee 100%);
       box-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
       position: relative;
     }
     \`\`\`
   - Pulsing dot:
     \`\`\`css
     .story-line::before {
       content: '';
       position: absolute;
       top: 0;
       left: 50%;
       transform: translateX(-50%);
       width: 12px;
       height: 12px;
       border-radius: 50%;
       background: #c084fc;
       box-shadow: 0 0 30px rgba(192, 132, 252, 1);
       animation: pulse-dot 2s ease-in-out infinite;
     }
     @keyframes pulse-dot {
       0%, 100% {
         transform: translateX(-50%) scale(1);
         box-shadow: 0 0 20px rgba(192, 132, 252, 1);
       }
       50% {
         transform: translateX(-50%) scale(1.5);
         box-shadow: 0 0 40px rgba(192, 132, 252, 1);
       }
     }
     \`\`\`
   - Arrow indicator:
     \`\`\`css
     .story-line::after {
       content: '';
       position: absolute;
       bottom: -5px;
       left: 50%;
       transform: translateX(-50%);
       border-left: 8px solid transparent;
       border-right: 8px solid transparent;
       border-top: 12px solid #f472b6;
     }
     \`\`\`

4. **Scroll-triggered Animations**
   - Intersection Observer:
     \`\`\`javascript
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('active');
         }
       });
     }, { threshold: 0.5 });

     document.querySelectorAll('.story-section').forEach(section => {
       observer.observe(section);
     });
     \`\`\`
   - Entrance effect:
     \`\`\`css
     .story-section {
       opacity: 0;
       transform: translateY(50px);
       transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
     }
     .story-section.active {
       opacity: 1;
       transform: translateY(0);
     }
     \`\`\`

5. **Chapter Color System**
   - Chapter 1 (green to cyan):
     \`\`\`css
     background: linear-gradient(135deg, #14f195, #22d3ee);
     \`\`\`
   - Chapter 2 (cyan to purple):
     \`\`\`css
     background: linear-gradient(135deg, #22d3ee, #a855f7);
     \`\`\`
   - Chapter 3 (purple to pink):
     \`\`\`css
     background: linear-gradient(135deg, #a855f7, #f472b6);
     \`\`\`
   - Chapter 4 (pink to orange):
     \`\`\`css
     background: linear-gradient(135deg, #f472b6, #fb923c);
     \`\`\`
   - Chapter 5 (orange to yellow):
     \`\`\`css
     background: linear-gradient(135deg, #fb923c, #fde047);
     \`\`\`

6. **Dark Background Design**
   - Space gradient:
     \`\`\`css
     body {
       background: linear-gradient(180deg,
         #0a0e1a 0%,
         #050810 50%,
         #0d0a1f 100%
       );
     }
     \`\`\`
   - Starfield effect (optional):
     \`\`\`css
     background-image: radial-gradient(
       circle at 20% 30%,
       rgba(168, 85, 247, 0.1) 0%,
       transparent 50%
     );
     \`\`\`

7. **Scroll Hint UI**
   - Hint text:
     \`\`\`css
     .scroll-hint {
       position: fixed;
       bottom: 2rem;
       left: 50%;
       transform: translateX(-50%);
       font-size: 0.875rem;
       color: rgba(168, 85, 247, 0.9);
       z-index: 50;
     }
     \`\`\`
   - Arrow animation:
     \`\`\`css
     .hint-arrow {
       animation: hint-bounce 2s ease-in-out infinite;
     }
     @keyframes hint-bounce {
       0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
       40% { transform: translateY(-10px); }
       60% { transform: translateY(-5px); }
     }
     \`\`\`

**Color Scheme**

Chapter Gradients (flowing color narrative):
- Chapter 1: #14f195 → #22d3ee (green to cyan)
- Chapter 2: #22d3ee → #a855f7 (cyan to purple)
- Chapter 3: #a855f7 → #f472b6 (purple to pink)
- Chapter 4: #f472b6 → #fb923c (pink to orange)
- Chapter 5: #fb923c → #fde047 (orange to yellow)

Background Gradient (dark space):
- Start: #0a0e1a (deep blue-gray)
- Middle: #050810 (pure black)
- End: #0d0a1f (deep purple-black)

Connection Elements:
- Line gradient: #a855f7 → #f472b6 → #22d3ee
- Pulse dot: #c084fc + glow
- Progress bar: #a855f7 → #f472b6 → #22d3ee

**Key CSS Class Examples**

\`\`\`css
/* Progress bar container */
.story-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
}

/* Progress bar fill */
.story-progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #a855f7, #f472b6, #22d3ee);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
  transition: width 0.1s linear;
}

/* Chapter container */
.story-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.story-section.active {
  opacity: 1;
  transform: translateY(0);
}

/* Chapter number */
.story-number {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a855f7, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.8));
}

/* Connection line */
.story-line {
  width: 3px;
  height: 8rem;
  background: linear-gradient(180deg, #a855f7 0%, #f472b6 50%, #22d3ee 100%);
  position: relative;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
  margin: 3rem 0;
}

.story-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #c084fc;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 20px rgba(192, 132, 252, 1);
  }
  50% {
    transform: translateX(-50%) scale(1.5);
    box-shadow: 0 0 40px rgba(192, 132, 252, 1);
  }
}

.story-line::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid #f472b6;
}
\`\`\`

**JavaScript Core Logic**

\`\`\`javascript
// Update scroll progress
window.addEventListener('scroll', () => {
  const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.story-progress').style.width = progress + '%';
}, { passive: true });

// Chapter entrance animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.story-section').forEach(section => {
  observer.observe(section);
});

// Optional: Smooth scroll to chapter
function scrollToChapter(chapterNumber) {
  const chapter = document.querySelector(\`#chapter-\${chapterNumber}\`);
  chapter.scrollIntoView({ behavior: 'smooth' });
}
\`\`\`

**Layout Recommendations**
- Each chapter \`min-height: 100vh\` to fill viewport
- Chapter spacing \`margin-bottom: 5rem\`
- Use \`scroll-behavior: smooth\` for smooth scrolling
- Center chapter content: \`justify-content: center\` + \`align-items: center\`
- Responsive: minimum chapter height \`min-height: 60vh\` (mobile)

**Important Notes**
- ✅ Use \`scroll-behavior: smooth;\` for smooth scrolling
- ✅ Hide scrollbar: \`scrollbar-width: none;\` + \`::-webkit-scrollbar { display: none; }\`
- ✅ Progress bar uses \`passive\` event listeners for performance
- ✅ Chapter entrance uses Intersection Observer to avoid excessive scroll event calculations
- ✅ Support keyboard navigation (Space/Arrow keys) for chapter switching
- ✅ Each chapter should have unique visual identity (color/graphics)
- ❌ Don't use too many animations, keep narrative flow smooth
- ❌ Avoid overly long chapters, 2-3 screens per chapter is optimal`
};
