# Custom Prompt

## 中文版本 (zh-CN)

创建**Liminal Space - Vacant Space（阈限空间-虚空空间）**风格网站，营造诡异空荡、废弃美学和不安宁静氛围。TailwindCSS 实现：

### 核心特征
- 极度空旷：超大留白（py-40, py-48），稀疏内容分布
- 诡异配色：发黄白色（#fffef0）、病态绿（#d9f99d）、褪色蓝（#bfdbfe）
- 荧光灯效果：使用微弱绿色色调（bg-green-50/20）模拟廉价照明
- 低对比度：文字使用 text-gray-400, text-gray-500 创造模糊感
- 重复元素：相同组件重复排列创造单调感
- 轻微失真：使用 blur-sm 或轻微倾斜（rotate-0.5）

### 废弃空间元素
- 空房间感：使用 border-dashed border-gray-300 勾勒空间边界
- 荧光灯闪烁：animate-pulse opacity-80 → opacity-100
- 褪色标志：text-gray-400 opacity-60，使用 monospace 字体
- 地毯纹理：使用重复的小点图案（bg-[image:repeating-linear-gradient]）
- 出口指示：使用模糊的绿色发光文字（text-green-400 blur-[1px]）

### 组件设计
**空白面板**：min-h-[400px] bg-yellow-50/30 border border-gray-200，内容极少
**诡异按钮**：px-12 py-4 bg-green-100 text-gray-600 border border-green-200，hover 时轻微发光
**走廊布局**：长方形容器垂直排列，使用 gap-0 无间隙紧贴
**标识牌**：text-xs text-gray-400 font-mono uppercase，模拟褪色标牌

### 排版
- 字体：font-mono（Courier New, monospace）
- 标题：text-xl font-normal text-gray-500 tracking-widest uppercase
- 正文：text-sm text-gray-400 leading-loose
- 错位感：使用 -translate-x-0.5 或 translate-y-0.5 创造微妙不适

### 配色（废弃系）
- 发黄白（bg-yellow-50/50, #fffef0）
- 病态绿（bg-green-100/30, #dcfce7）
- 褪色蓝（bg-blue-100/20, #dbeafe）
- 灰尘灰（text-gray-400, #9ca3af）
- 荧光绿（text-green-400, #4ade80）
- 污渍棕（bg-amber-100/10, #fef3c7）

### 诡异氛围技巧
- 无限走廊：重复的门框元素向远处缩小（scale-90, scale-80, scale-70）
- 闪烁文字：animate-pulse + opacity-40 → opacity-100
- 静默空间：大面积单色背景，零装饰
- 单一光源：使用 vignette effect（径向渐变从中心亮到边缘暗）
- 数字故障：使用 text-glitch 动画或随机字符替换

### 交互
- 极慢过渡：transition-all duration-[2000ms] 创造拖沓感
- 微妙反馈：hover 时仅 opacity-90 → opacity-100
- 延迟响应：使用 delay-300 创造迟钝感
- 无声动画：避免明显的移动，仅透明度变化

### 实现示例
```html
<div class="min-h-screen bg-yellow-50/50 py-48">
  <div class="max-w-2xl mx-auto px-16">
    <!-- Vacant Room -->
    <div class="min-h-[500px] bg-white/30 border border-dashed border-gray-300 flex items-center justify-center">
      <p class="text-xs text-gray-400 font-mono uppercase tracking-widest opacity-60">
        VACANT_SPACE.EXE
      </p>
    </div>

    <!-- Flickering Exit Sign -->
    <div class="mt-20 text-center">
      <p class="text-sm text-green-400 font-mono uppercase tracking-wider animate-pulse blur-[0.5px]">
        → EXIT →
      </p>
    </div>

    <!-- Endless Corridor Effect -->
    <div class="mt-32 flex flex-col items-center gap-8">
      <div class="w-64 h-32 border-2 border-gray-300 scale-100 opacity-80"></div>
      <div class="w-56 h-28 border-2 border-gray-300 scale-90 opacity-60"></div>
      <div class="w-48 h-24 border-2 border-gray-300 scale-80 opacity-40"></div>
      <div class="w-40 h-20 border-2 border-gray-300 scale-70 opacity-20"></div>
    </div>
  </div>
</div>
```

---

## English Version (en-US)

Create **Liminal Space - Vacant Space** style website creating eerie emptiness, abandoned aesthetic, and unsettling calm atmosphere. TailwindCSS implementation:

### Core Features
- Extreme emptiness: massive whitespace (py-40, py-48), sparse content distribution
- Eerie colors: yellowed white (#fffef0), sickly green (#d9f99d), faded blue (#bfdbfe)
- Fluorescent effect: weak green tint (bg-green-50/20) simulating cheap lighting
- Low contrast: text using text-gray-400, text-gray-500 creating blurred feel
- Repeating elements: identical components arranged repetitively creating monotony
- Slight distortion: blur-sm or slight tilt (rotate-0.5)

### Abandoned Space Elements
- Empty room feel: border-dashed border-gray-300 outlining space boundaries
- Flickering fluorescent: animate-pulse opacity-80 → opacity-100
- Faded signage: text-gray-400 opacity-60, monospace font
- Carpet texture: repeating dot patterns (bg-[image:repeating-linear-gradient])
- Exit signs: blurred green glowing text (text-green-400 blur-[1px])

### Component Design
**Empty Panels**: min-h-[400px] bg-yellow-50/30 border border-gray-200, minimal content
**Eerie Buttons**: px-12 py-4 bg-green-100 text-gray-600 border border-green-200, slight glow on hover
**Corridor Layout**: rectangular containers stacked vertically, gap-0 no spacing
**Signage**: text-xs text-gray-400 font-mono uppercase, simulating faded signs

### Typography
- Font: font-mono (Courier New, monospace)
- Headings: text-xl font-normal text-gray-500 tracking-widest uppercase
- Body: text-sm text-gray-400 leading-loose
- Off-kilter feel: -translate-x-0.5 or translate-y-0.5 creating subtle discomfort

### Color Palette (Abandoned)
- Yellowed white (bg-yellow-50/50, #fffef0)
- Sickly green (bg-green-100/30, #dcfce7)
- Faded blue (bg-blue-100/20, #dbeafe)
- Dust gray (text-gray-400, #9ca3af)
- Fluorescent green (text-green-400, #4ade80)
- Stain brown (bg-amber-100/10, #fef3c7)

### Eerie Atmosphere Techniques
- Endless corridor: repeating doorframe elements shrinking into distance (scale-90, scale-80, scale-70)
- Flickering text: animate-pulse + opacity-40 → opacity-100
- Silent spaces: large single-color backgrounds, zero decoration
- Single light source: vignette effect (radial gradient bright center to dark edges)
- Digital glitch: text-glitch animation or random character replacement

### Interactions
- Extremely slow transitions: transition-all duration-[2000ms] creating sluggish feel
- Subtle feedback: hover only opacity-90 → opacity-100
- Delayed response: delay-300 creating sluggish feel
- Silent animations: avoid obvious movement, only opacity changes

### Implementation Example
```html
<div class="min-h-screen bg-yellow-50/50 py-48">
  <div class="max-w-2xl mx-auto px-16">
    <!-- Vacant Room -->
    <div class="min-h-[500px] bg-white/30 border border-dashed border-gray-300 flex items-center justify-center">
      <p class="text-xs text-gray-400 font-mono uppercase tracking-widest opacity-60">
        VACANT_SPACE.EXE
      </p>
    </div>

    <!-- Flickering Exit Sign -->
    <div class="mt-20 text-center">
      <p class="text-sm text-green-400 font-mono uppercase tracking-wider animate-pulse blur-[0.5px]">
        → EXIT →
      </p>
    </div>

    <!-- Endless Corridor Effect -->
    <div class="mt-32 flex flex-col items-center gap-8">
      <div class="w-64 h-32 border-2 border-gray-300 scale-100 opacity-80"></div>
      <div class="w-56 h-28 border-2 border-gray-300 scale-90 opacity-60"></div>
      <div class="w-48 h-24 border-2 border-gray-300 scale-80 opacity-40"></div>
      <div class="w-40 h-20 border-2 border-gray-300 scale-70 opacity-20"></div>
    </div>
  </div>
</div>
```
