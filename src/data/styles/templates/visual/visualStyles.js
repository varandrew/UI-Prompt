// 视觉风格库数据 - Visual Style Library
// ✅ 階段 3.1 優化: 移除所有靜態 import，改用動態加載
// 這將大幅減少 visualStyles chunk 的大小（從 630 KB 降至 ~100 KB）

// ✅ Phase 2 批次 4 遷移完成 (2025-11-13)
// 已遷移到 templates/visual/ 的風格:
//   - retroFuture → templates/visual/retroFuture/ (visual-retro-future)
//   - neonCyberpunk → templates/visual/neonCyberpunk/ (visual-neon-cyberpunk)
//   - neonNoir → templates/visual/neonNoir/ (visual-neon-noir)
// 文件大小: 5,851 行 → 4,871 行 (減少 980 行)

// ✅ Phase 2 批次 5 遷移完成 (2025-11-13)
// 已遷移到 templates/visual/ 的風格:
//   - aurora → templates/visual/aurora/ (visual-aurora) [完全遷移]
//   - clay → templates/visual/clay/ (visual-clay) [簡化模板]
// 文件大小: 4,878 行 → 1,743 行 (減少 3,135 行, 64%)
//
// 📊 Phase 2 總計優化:
// 原始: 5,851 行 → 最終: 1,743 行
// 總減少: 4,108 行 (70% 體積優化) ✨
//
// Note: Clay 的完整 fullPageHTML 保留在此文件中。
// Natural 風格已合併，使用 visual-natural-default 的預覽頁面內容。

import {
  naturalDefaultFullPageHTML,
  naturalDefaultFullPageStyles,
} from './natural/naturalDefaultFullPage';

export const visualStyles = [
  {
    id: 'natural',
    title: 'styles.visual.natural.title',
    description: 'styles.visual.natural.description',
    demoHTML: `
      <div class="w-full h-full flex flex-col items-center justify-center p-6 gap-4">
        <div class="relative group">
          <div class="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-gray-200/40 shadow-2xl transform transition-all duration-500 group-hover:scale-105">
            <div class="w-40 h-24 bg-gradient-to-br from-emerald-200 via-teal-100 to-blue-200 rounded-2xl mb-4 relative overflow-hidden">
              <div class="absolute inset-0 opacity-40">
                <div class="absolute top-2 left-2 w-12 h-10 bg-gradient-to-br from-emerald-300/50 to-transparent rounded-full blur-xl transform rotate-45"></div>
                <div class="absolute bottom-2 right-2 w-10 h-8 bg-gradient-to-br from-blue-300/50 to-transparent rounded-full blur-lg transform -rotate-45"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="h-2 bg-gradient-to-r from-stone-200 to-neutral-300 rounded-full w-3/4"></div>
              <div class="h-2 bg-gradient-to-r from-neutral-100 to-stone-200 rounded-full w-full"></div>
              <div class="h-2 bg-gradient-to-r from-neutral-100 to-stone-200 rounded-full w-2/3"></div>
            </div>
          </div>
          <div class="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-emerald-300 to-teal-200 rounded-full opacity-60 blur-lg"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-200 rounded-full opacity-50 blur-xl"></div>
        </div>
        <button class="px-8 py-3 bg-gradient-to-br from-stone-100/80 to-neutral-200/80 backdrop-blur-md border border-neutral-300/40 rounded-2xl font-semibold text-gray-700 shadow-lg text-sm hover:scale-105 transition-transform">
          Natural Organic
        </button>
      </div>
    `,
    customStyles: '',
    fullPageHTML: naturalDefaultFullPageHTML,
    fullPageStyles: naturalDefaultFullPageStyles,
    colorScheme: {
      'zh-CN': '背景自然渐变石橙色 (Stone-50 / Amber-50 / Orange-50)、主色翠绿蓝绿 (Emerald-200/300 / Teal-100)、蓝色 (Blue-200)、辅助石灰中性色 (Stone-200/600 / Neutral-100/200/300)、琥珀橙色 (Amber-500/700 / Orange-600)、白色半透明 (rgba(255,255,255,0.6-0.9))',
      'en-US': 'Background natural gradient stone-amber-orange (Stone-50 / Amber-50 / Orange-50), primary emerald-teal (Emerald-200/300 / Teal-100), blue (Blue-200), secondary stone-neutral (Stone-200/600 / Neutral-100/200/300), amber-orange (Amber-500/700 / Orange-600), white semi-transparent (rgba(255,255,255,0.6-0.9))'
    },
    // 自然有機風格的 StylePrompt（較長版敘事，用於說明設計理念）
    stylePrompt: {
      'zh-CN': `角色：你是一位擅长自然有机风格的 UI 设计师，需要为知识管理、写作工具或专注面板设计一套「像在木桌旁工作」的界面。

场景定位：
界面被设定在一个安静、明亮的居家或工作室环境中：木质桌面、植物、笔记本与咖啡杯都在画面之外，但界面本身要继承这种氛围。用户是需要长时间阅读、写作、组织知识或规划任务的知识工作者，他们希望界面能帮助沉淀思考，而不是制造刺激和噪音。

视觉设计理念：
Natural / Organic 风格强调「柔和、自然、可呼吸」的视觉体验。整体配色以浅色自然渐变为背景，搭配石质/木质灵感的中性色卡片与少量绿色、蓝色点缀。版式追求清晰有序，但不会使用生硬的工业化线条，而是通过圆角、柔和阴影与适度留白，让界面看起来像放在木桌上的一组实体卡片与纸张。所有元素应服务于「长期使用时视线不会疲惫」这一原则。

材质与质感：
背景可以被理解为柔焦的自然景象或石质墙面：大面积浅米白、石灰色与极浅暖色的渐变，局部叠加轻微光斑或模糊色块，模拟光线被墙面或布料反射的效果。卡片与模块表面偏向哑光纸张或磨砂塑料质感，不使用高光金属或镜面反射；边缘通过 16–24px 的圆角与低透明度的多层阴影营造出柔和的立体感。局部绿色/蓝色点缀则像叶片、玻璃杯或文具带来的小块颜色，强调重点但不破坏整体宁静感。

交互体验：
交互反馈应安静、克制但清晰。悬停时的变化主要体现在阴影与边框色的细微调整，以及背景色轻微提亮，而不是大幅位移或强烈缩放。按钮和标签在交互时给人「轻按软垫」的感觉：按下时略微下沉、阴影收缩，松开后回到原位。滚动和内容切换应平滑自然，不使用剧烈的弹簧动画。所有动效应围绕「减少干扰、帮助专注」来设计。

氛围营造：
整体氛围像是一张被阳光照亮的工作桌：内容被温柔地承托在柔和背景之上，界面四周有足够留白让视线可以「休息」。细小的自然细节——如圆形色块、渐变光斑、柔和的边框颜色——让用户隐约联想到植物、石头或布料，而不会直观看见写实插画。最终目标是让用户感觉这是一个可以长期停留、安静思考、缓慢构建内容的数字空间，而不是一次性浏览的营销页面。`,
      'en-US': `Role: You are a UI designer specializing in Natural / Organic aesthetics, designing a workspace UI that feels like working beside a wooden desk in soft daylight.

Scenario Positioning:
The interface belongs in a quiet, bright home office or studio. Physical objects like plants, notebooks, and coffee mugs stay off‑screen, but the UI should inherit their warmth. Users are knowledge workers who read, write, organize information, and plan tasks for long periods; they need an interface that supports focus and calm thinking instead of overstimulation.

Visual Design Philosophy:
The Natural / Organic style aims for a soft, breathable visual experience. Backgrounds use light, nature‑inspired gradients; cards and modules adopt stone/wood‑inspired neutrals with small green/blue accents. Layouts are structured and clear but avoid harsh industrial lines. Rounded corners, gentle shadows, and generous whitespace make elements feel like real cards and sheets arranged on a desk. Every decision should support the idea that “your eyes can stay here for hours without feeling tired”.

Materials & Textures:
Think of the background as a defocused wall or table surface lit by indirect daylight: large areas of off‑white, stone gray, and warm beige with occasional soft blobs of color. Card surfaces feel like matte paper or frosted plastic—no glossy chrome or mirror finishes. Corners are rounded (16–24px), and shadows are layered but subtle to create depth without drama. Green and blue accents function like small hints of plants or glassware: they highlight important areas but never dominate the scene.

Interaction Experience:
Interactions are calm, restrained, and clearly readable. Hover states slightly adjust shadow strength and border color or lift the background tone, rather than causing big movement or aggressive scaling. Buttons should feel like gently pressing into a soft surface: on active state, they sink a little and shadows tighten, then return smoothly. Scrolling and view transitions are smooth and understated; motion is used to orient the user, not to show off.

Atmosphere:
The overall mood should be that of a quiet, sunlit workspace—inviting enough that users don’t mind staying for a long time. Content sits on a supportive visual layer instead of competing with it. Subtle natural hints—rounded shapes, soft gradients, muted hues—evoke plants, stone, or fabric without literal illustration. The final impression is of a digital environment designed for reflection, focus, and slow, thoughtful work rather than quick, flashy consumption.`
    },
    // 自然風格的 CustomPrompt（模板級 AI 指令）
    customPrompt: {
      'zh-CN': `请使用 TailwindCSS 创建一个 **Natural / Organic（自然有机）** 风格的界面，通过柔和渐变背景、圆角卡片和自然色彩，营造安静、亲近自然的工作氛围。

**核心设计要求**

1. **背景与整体氛围**
   - 使用浅色自然渐变背景：\`from-amber-50 via-stone-50 to-slate-50\` 或类似色系。
   - 视觉目标：像在木桌或柔和晨光旁工作的「安静桌面」。
   - 示例：
     \`\`\`css
     .natural-bg {
       background: radial-gradient(circle at top left, #fef3c7 0%, #f5f5f4 45%, #e5e7eb 100%);
       color: #1f2933;
     }
     \`\`\`

2. **卡片与模块造型**
   - 卡片使用中等圆角：\`border-radius: 16px-24px\`，避免过度工业化的直角。
   - 阴影柔和、扩散：\`0 18px 40px rgba(15, 23, 42, 0.10)\`，不出现锐利边缘。
   - Tailwind 示例：
     \`\`\`html
     <div class="bg-white/90 rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.10)] border border-stone-200/60 p-6">
       <!-- 卡片內容 -->
     </div>
     \`\`\`

3. **自然配色系统**
   - 主色：鹅卵石灰、暖白、浅棕木头、薄荷绿、柔和蓝。
   - 示例色值：
     - 背景：\`#FAF3E0\`、\`#F5F5F4\`
     - 绿色点缀：\`#10B981\`（按钮/标签）、\`#6EE7B7\`
     - 蓝色辅助：\`#38BDF8\`、\`#0EA5E9\`
   - CSS 示例：
     \`\`\`css
     .natural-tag {
       background: linear-gradient(135deg, #bbf7d0, #a5f3fc);
       color: #065f46;
       border-radius: 9999px;
       padding: 0.4rem 1rem;
       font-weight: 600;
     }
     \`\`\`

4. **版式与层次**
   - 多采用单列或两列栅格，留白充足：
     - 外层容器：\`max-w-5xl mx-auto px-6 py-10\`
     - 卡片间距：24–32px
   - 文案层级：
     - 主标题：\`text-2xl md:text-3xl font-semibold tracking-tight\`
     - 副标题：\`text-sm text-stone-500\`
     - 正文：\`text-sm text-stone-600 leading-relaxed\`

5. **细节元素（自然感的点缀）**
   - 使用柔和的圆形或椭圆形渐变块模拟「光斑」或「石纹」。
   - 适度加入手绘感图标或略带不规则的边框，用于标签或徽章。
   - 示例：
     \`\`\`css
     .natural-blob {
       position: absolute;
       width: 140px;
       height: 140px;
       border-radius: 9999px;
       background: radial-gradient(circle at 30% 20%, #bbf7d0 0%, transparent 60%);
       filter: blur(10px);
       opacity: 0.8;
     }
     \`\`\`

**配色方案（Natural / Organic）**

- 背景：\`#FAF3E0\`、\`#F5F5F4\`、\`#E5E7EB\`
- 主體卡片：\`#FFFFFF\` + \`border-stone-200/60\`
- 强调色：\`#10B981\`（绿色）、\`#38BDF8\`（天空蓝）
- 文本：\`#1F2933\`（主）、\`#6B7280\`（辅）

**重要提示**
- 保持足够留白，不要把卡片塞满内容。
- 避免过度饱和颜色，优先使用柔和、中性的自然色。
- 阴影要柔和、分布宽，避免强烈对比的硬阴影。
- 按钮和标签可以更可爱一些，但整体仍需保持专业、安静。`,
      'en-US': `Create a **Natural / Organic** style interface using TailwindCSS, with soft gradients, rounded cards, and nature-inspired colors to build a calm, focused workspace.

**Core Design Requirements**

1. **Background and Atmosphere**
   - Use light natural gradients such as \`from-amber-50 via-stone-50 to-slate-50\`.
   - Target mood: a quiet desk by a window with soft morning light.

2. **Cards and Module Shapes**
   - Medium corner radius for cards (16–24px), soft shadows like \`0 18px 40px rgba(15,23,42,0.10)\`.
   - Example:
     \`\`\`html
     <div class="bg-white/90 rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.10)] border border-stone-200/60 p-6">
       <!-- Card content -->
     </div>
     \`\`\`

3. **Color System**
   - Base: warm neutrals and stone tones.
   - Accents: fresh greens (\`#10B981\`, \`#6EE7B7\`) and light blues (\`#38BDF8\`, \`#0EA5E9\`).

4. **Layout and Typography**
   - Prefer single-column or two-column layouts with generous spacing (24–32px between cards).
   - Use soft, readable typography: strong but not loud headings, gentle body text in stone grays.

5. **Natural Details**
   - Add subtle blobs, light spots, or organic shapes as background decorations.
   - Use pill-shaped tags and chips with gradient fills to echo natural, organic curves.

**Important Notes**
- Keep whitespace generous; avoid cluttered layouts.
- Prioritize soft, low-saturation colors, reserving bright accents for key actions.
- Shadows should feel diffused and atmospheric, not harsh.`
    }
  }
];
