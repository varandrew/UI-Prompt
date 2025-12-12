// Visual Style Template: Neon Noir
// 霓虹黑色電影 - 賽博朋克夜店風格

import {
  neonNoirFullPageHTML,
  neonNoirFullPageStyles
} from './neonNoirFullPage';

export const visualNeonNoir = {
  id: 'visual-neon-noir',
  title: 'styles.visual.neonNoir.title',
  description: 'styles.visual.neonNoir.description',

  // Demo HTML - Noir fog and neon text
  demoHTML: `
    <div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, #0a0a0a, #1a0a14); position: relative; overflow: hidden;">
      <!-- Fog particle -->
      <div style="position: absolute; top: 10%; left: 10%; width: 120px; height: 120px; background: radial-gradient(circle, rgba(255, 0, 85, 0.2), transparent 70%); border-radius: 50%; filter: blur(30px); animation: float 4s ease-in-out infinite;"></div>

      <!-- Main content -->
      <div style="position: relative; z-index: 2; text-align: center;">
        <h3 class="neon-title" style="color: #ff0055; text-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055, 0 0 40px #ff0055; font-size: 1.5rem; font-weight: 900; margin-bottom: 0.5rem; letter-spacing: 0.1em; animation: neon-flicker 4s ease-in-out infinite;">
          NEON NOIR
        </h3>
        <p style="color: #ff00ff; text-shadow: 0 0 5px #ff00ff; font-size: 0.7rem; font-family: 'Courier New', monospace; letter-spacing: 0.05em;">
          // city_lights.exe
        </p>
      </div>
    </div>
  `,

  customStyles: `
    @keyframes float {
      0%, 100% { transform: translate(0, 0); opacity: 0.2; }
      50% { transform: translate(-10px, -15px); opacity: 0.3; }
    }
    @keyframes neon-flicker {
      0%, 100% { opacity: 1; }
      2%, 8%, 10%, 25%, 27% { opacity: 0.8; }
      5%, 24% { opacity: 0.4; }
    }
  `,

  // Preview configuration
  fullPagePreviewId: 'neon-noir',
  fullPageHTML: neonNoirFullPageHTML,
  fullPageStyles: neonNoirFullPageStyles,

  // Style Prompt for AI generation (used in Home page demo)
  stylePrompt: {
    'zh-CN': `角色：你是一位擅长将赛博朋克霓虹与黑色电影气质结合的 UI 设计师，需要为音乐平台或夜间场景应用设计一套 Neon Noir 风格界面。

场景定位：
界面置身于夜雨后的城市街区，远处是模糊的霓虹招牌与灯箱广告，近处是音乐平台、夜店活动页或播放控制台。目标用户是热爱电子、合成波或独立音乐的年轻人，他们在深夜使用该界面浏览歌单、参加活动或探索 DJ Set，界面需要传达一种「城市深夜、朦胧霓虹、略带危险感」的气氛。

视觉设计理念：
Neon Noir 强调「深色背景 + 高对比霓虹粉紫」的冲突感，将经典黑色电影中的高对比光影与现代霓虹灯光结合。画面主体保持简洁，使用较大的留黑面积，让霓虹文字、光雾和边缘光晕成为视觉焦点。布局以卡片和分区为主，模块之间有明显的层次分隔，但边缘被光影柔化，让整体看起来像在夜色中浮现的一块块发光招牌。

材质与质感：
视觉材质以「霓虹招牌 + 雾气 + 反射」为主：背景是接近纯黑的暗红/酒红渐变，叠加低透明度的霓虹雾团和轻微噪点，类似被雨水浸湿的城市墙面。标题与 LOGO 采用多层 text-shadow 模拟霓虹灯管发光，文字边缘略微发糊，形成光晕。卡片和输入框使用半透明深色面板，边缘描以霓虹粉紫细边框或柔光，让 UI 像一组悬浮于夜色中的电子海报。

交互体验：
交互节奏偏慢、略带戏剧性。按钮与标签在悬停时会轻微变亮并扩散光晕，好像霓虹灯忽然加强电流；标题与关键文案可以偶尔模拟霓虹灯闪烁或微弱抖动，但频率不宜过高，以免干扰阅读。点击时的反馈更像是亮度的「吸收」与「回落」，而不是强烈位移；整体动效时长可以略长于常规 UI（250–400ms），营造从容、戏剧化的节奏。

氛围营造：
整体氛围是「城市深夜中的霓虹巷口」：画面中总有一两处亮到刺目的霓虹点（标题、主要按钮、播放进度），其他部分则保持暗灰或柔和紫调。局部雾气、粒子光斑与模糊背景让用户仿佛站在夜店门口看活动招贴；音乐卡片、DJ 模块和播放控制区则像贴在玻璃上的发光海报。用户使用该界面时，应感到自己正置身城市夜生活的一部分，而不是普通的浅色音乐 App。`,
    'en-US': `Role: You are a UI designer who blends cyberpunk neon with film noir aesthetics, creating a Neon Noir interface for a music platform or night‑time experience app.

Scenario Positioning:
The interface lives in a rainy city street at night: distant neon signs and billboards blur into the background while the foreground UI acts as a glowing panel for music discovery, events, or DJ sets. Target users are listeners of electronic, synthwave, or underground music browsing at night. The interface should evoke “late‑night city, moody neon, slightly dangerous but alluring”.

Visual Design Philosophy:
Neon Noir is built on the tension between deep, almost black backgrounds and high‑contrast neon pink‑purple accents. It borrows the hard light/shadow contrast of classic film noir and merges it with modern neon signage. The layout remains fairly simple with generous dark negative space; neon text, fog, and edges become the main visual highlights. Sections are clearly separated, but edges are softened by glow so modules feel like luminous posters floating in the dark.

Materials & Textures:
Core materials are neon tubes, fog, and wet surfaces. Backgrounds are deep black and dark wine gradients with subtle grain, as if projected onto damp city walls. Titles and logotypes use multiple text‑shadow layers to mimic physical neon tubes; edges are slightly blurred to form a halo. Cards and input fields are semi‑transparent dark panels with neon borders or soft outer glows, resembling backlit signage or club flyers taped onto glass.

Interaction Experience:
Interactions are slow, theatrical, and deliberate. On hover, buttons and chips brighten gently and expand their glow, like a neon sign receiving a tiny power surge. Occasional flicker effects on headings reinforce the “unstable neon” feeling, but should be used sparingly. Active states rely on subtle brightness and glow changes rather than large physical movement, with animation durations slightly longer than standard UI (around 250–400ms) to maintain a moody rhythm.

Atmosphere:
The overall mood is that of a side alley lit only by club signs and bar marquees. One or two focal elements (page title, primary CTA, playback controls) shine intensely in neon pink/purple, while the rest of the interface stays in soft dark tones. Light fog patches, particle glows, and blurred background shapes make the UI feel like standing at a club entrance reading posters under neon. Users should feel they are inside the nocturnal music scene, not just using another light‑themed music app.`
  },

   // Custom Prompt（模板級 AI 指令，供 Neon Noir 預覽使用）
  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个 **Neon Noir（霓虹黑色电影）** 风格的界面，将赛博朋克霓虹灯与黑色电影的高对比光影结合起来，营造潮湿夜街、酒吧门口、音乐平台等场景氛围。

**核心设计要求**

1. **黑色电影式深色背景**
   - 使用接近纯黑的渐变背景：\`#050509 → #0a0a0a → #1a0a14\`
   - 可以叠加轻微雾气、暗角（vignette）与颗粒噪点，营造胶片质感
   - 示例：
     \`\`\`css
     .neon-noir-bg {
       background:
         radial-gradient(circle at top, #1a0a14 0%, #050509 40%, #000000 100%);
       color: #f9fafb;
     }

     .neon-noir-vignette::before {
       content: '';
       position: absolute;
       inset: 0;
       pointer-events: none;
       background:
         radial-gradient(circle at center,
           transparent 0%,
           transparent 45%,
           rgba(0, 0, 0, 0.75) 100%);
     }
     \`\`\`

2. **霓虹粉紫 + 高對比光暈**
   - 主色：霓虹紅粉 \`#ff0055\`、霓虹粉紫 \`#ff00ff\`、霓虹紫 \`#b967ff\`
   - 背景多為暗紅 / 酒紅：\`#1a0a14\`、\`#140812\`
   - 文字与边框示例：
     \`\`\`css
     .neon-noir-pink {
       color: #ff0055;
       text-shadow:
         0 0 10px rgba(255, 0, 85, 0.9),
         0 0 25px rgba(255, 0, 85, 0.7),
         0 0 40px rgba(255, 0, 85, 0.5);
     }

     .neon-noir-purple {
       color: #b967ff;
       text-shadow:
         0 0 12px rgba(185, 103, 255, 0.9),
         0 0 24px rgba(185, 103, 255, 0.7);
     }

     .neon-noir-border {
       border: 1px solid rgba(255, 0, 85, 0.7);
       box-shadow:
         0 0 20px rgba(255, 0, 85, 0.6),
         0 0 40px rgba(255, 0, 85, 0.4);
     }
     \`\`\`

3. **霓虹招牌与标題字体**
   - 使用大写、寬字距标題：\`letter-spacing: 0.12em - 0.2em\`
   - 模擬霓虹招牌：多层 text-shadow + 閃爍動画
   - 示例：
     \`\`\`css
     .neon-noir-title {
       font-size: clamp(1.75rem, 3vw, 3rem);
       font-weight: 900;
       letter-spacing: 0.16em;
       color: #ff0055;
       text-transform: uppercase;
       text-shadow:
         0 0 10px rgba(255, 0, 85, 0.9),
         0 0 20px rgba(255, 0, 85, 0.8),
         0 0 40px rgba(255, 0, 85, 0.6);
       animation: neonNoirFlicker 4s ease-in-out infinite;
     }

     @keyframes neonNoirFlicker {
       0%, 100% { opacity: 1; }
       3%, 7%, 22%, 28% { opacity: 0.85; }
       5%, 24% { opacity: 0.4; }
     }
     \`\`\`

4. **霧氣与光暈粒子**
   - 使用模糊圓形漸变作為「霓虹光暈」与「街頭霧氣」
   - 粒子隨機漂浮，速度較慢（4–10 秒）以保持 Noir 氣氛
   - 示例：
     \`\`\`css
     .neon-noir-fog {
       position: absolute;
       width: 200px;
       height: 200px;
       border-radius: 9999px;
       background: radial-gradient(circle,
         rgba(255, 0, 85, 0.25),
         transparent 70%);
       filter: blur(35px);
       animation: noirFogFloat 8s ease-in-out infinite;
     }

     @keyframes noirFogFloat {
       0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.25; }
       50% { transform: translate3d(-12px, -18px, 0); opacity: 0.4; }
     }
     \`\`\`

5. **卡片与音樂平台模塊**
   - 典型場景：音樂平台 / 夜店活動页面
   - 卡片设計：
     - 半透明深色背景：\`rgba(10, 10, 16, 0.8)\`
     - 霓虹边框 + 微弱內阴影
     - 卡片标題使用霓虹字体、描述文字保持偏灰色
   - 示例：
     \`\`\`css
     .neon-noir-card {
       background: rgba(10, 10, 16, 0.8);
       border-radius: 1rem;
       border: 1px solid rgba(185, 103, 255, 0.6);
       box-shadow:
         0 0 24px rgba(185, 103, 255, 0.4),
         0 20px 40px rgba(0, 0, 0, 0.7);
       padding: 1.25rem 1.5rem;
     }

     .neon-noir-card-title {
       font-weight: 700;
       color: #ff00ff;
       letter-spacing: 0.08em;
     }
     \`\`\`

6. **互動与按鈕效果**
   - 按鈕應具有「霓虹亮起」的懸停狀態与輕微按壓效果
   - 建議使用边框 + 透明背景組合
   - 示例：
     \`\`\`css
     .neon-noir-button {
       padding: 0.75rem 1.75rem;
       border-radius: 9999px;
       border: 1px solid rgba(255, 0, 85, 0.8);
       background: rgba(5, 5, 10, 0.8);
       color: #ff0055;
       font-weight: 600;
       letter-spacing: 0.08em;
       text-transform: uppercase;
       box-shadow:
         0 0 16px rgba(255, 0, 85, 0.5),
         0 8px 18px rgba(0, 0, 0, 0.8);
       transition: all 0.25s ease-out;
     }

     .neon-noir-button:hover {
       background: rgba(255, 0, 85, 0.1);
       box-shadow:
         0 0 26px rgba(255, 0, 85, 0.8),
         0 14px 28px rgba(0, 0, 0, 0.9);
       transform: translateY(-2px);
     }

     .neon-noir-button:active {
       transform: translateY(1px) scale(0.98);
       box-shadow:
         0 0 12px rgba(255, 0, 85, 0.6),
         0 6px 16px rgba(0, 0, 0, 0.9);
     }
     \`\`\`

**配色方案（Neon Noir）**

- 背景：\`#0a0a0a\`、\`#050509\`、\`#1a0a14\`
- 霓虹主色：\`#ff0055\`、\`#ff00ff\`、\`#b967ff\`
- 文本：\`#f9fafb\`（主文本）、\`#9ca3af\`（描述文字）

**重要提示**
- 需保持高對比：背景極暗、霓虹極亮
- 適量使用霧氣与顆粒，避免画面過於乾淨
- 動画節奏偏慢、偶爾閃爍，模擬不稳定的霓虹灯
- 避免大面積純白或高飽和其他颜色，以免破壞 Noir 氛圍`,

    'en-US': `Please create a **Neon Noir** style interface using TailwindCSS, combining cyberpunk neon lights with film noir high-contrast lighting to evoke rainy streets, bar entrances, and music/nightclub platforms.

**Core Design Requirements**

1. **Film Noir Dark Background**
   - Use near-black gradients: \`#050509 → #0a0a0a → #1a0a14\`
   - Add subtle fog, vignette, and grain to simulate analog film
   - Example:
     \`\`\`css
     .neon-noir-bg {
       background:
         radial-gradient(circle at top, #1a0a14 0%, #050509 40%, #000000 100%);
       color: #f9fafb;
     }

     .neon-noir-vignette::before {
       content: '';
       position: absolute;
       inset: 0;
       pointer-events: none;
       background:
         radial-gradient(circle at center,
           transparent 0%,
           transparent 45%,
           rgba(0, 0, 0, 0.75) 100%);
     }
     \`\`\`

2. **Neon Pink-Purple Glow**
   - Primary colors: \`#ff0055\`, \`#ff00ff\`, \`#b967ff\`
   - Background accent: dark red / wine tones \`#1a0a14\`, \`#140812\`
   - Example:
     \`\`\`css
     .neon-noir-pink {
       color: #ff0055;
       text-shadow:
         0 0 10px rgba(255, 0, 85, 0.9),
         0 0 25px rgba(255, 0, 85, 0.7),
         0 0 40px rgba(255, 0, 85, 0.5);
     }

     .neon-noir-purple {
       color: #b967ff;
       text-shadow:
         0 0 12px rgba(185, 103, 255, 0.9),
         0 0 24px rgba(185, 103, 255, 0.7);
     }

     .neon-noir-border {
       border: 1px solid rgba(255, 0, 85, 0.7);
       box-shadow:
         0 0 20px rgba(255, 0, 85, 0.6),
         0 0 40px rgba(255, 0, 85, 0.4);
     }
     \`\`\`

3. **Neon Sign Typography**
   - Use uppercase titles with wide letter-spacing: \`0.12em–0.2em\`
   - Simulate neon signage through multi-layer text-shadow and flicker
   - Example:
     \`\`\`css
     .neon-noir-title {
       font-size: clamp(1.75rem, 3vw, 3rem);
       font-weight: 900;
       letter-spacing: 0.16em;
       color: #ff0055;
       text-transform: uppercase;
       text-shadow:
         0 0 10px rgba(255, 0, 85, 0.9),
         0 0 20px rgba(255, 0, 85, 0.8),
         0 0 40px rgba(255, 0, 85, 0.6);
       animation: neonNoirFlicker 4s ease-in-out infinite;
     }
     \`\`\`

4. **Fog and Glow Particles**
   - Use blurred radial gradients as neon glow and street fog
   - Particles float slowly (4–10s) to keep the noir mood
   - Example:
     \`\`\`css
     .neon-noir-fog {
       position: absolute;
       width: 200px;
       height: 200px;
       border-radius: 9999px;
       background: radial-gradient(circle,
         rgba(255, 0, 85, 0.25),
         transparent 70%);
       filter: blur(35px);
       animation: noirFogFloat 8s ease-in-out infinite;
     }
     \`\`\`

5. **Cards and Music Platform Modules**
   - Typical use case: music platform / nightclub event page
   - Card design:
     - Semi-transparent dark surface: \`rgba(10, 10, 16, 0.8)\`
     - Neon borders with soft inner shadow
     - Titles in neon, descriptions in muted gray
   - Example:
     \`\`\`css
     .neon-noir-card {
       background: rgba(10, 10, 16, 0.8);
       border-radius: 1rem;
       border: 1px solid rgba(185, 103, 255, 0.6);
       box-shadow:
         0 0 24px rgba(185, 103, 255, 0.4),
         0 20px 40px rgba(0, 0, 0, 0.7);
       padding: 1.25rem 1.5rem;
     }

     .neon-noir-card-title {
       font-weight: 700;
       color: #ff00ff;
       letter-spacing: 0.08em;
     }
     \`\`\`

6. **Interactions and Buttons**
   - Buttons should feel like neon switches: glow on hover, slight press on active
   - Prefer outline + transparent background combinations
   - Example:
     \`\`\`css
     .neon-noir-button {
       padding: 0.75rem 1.75rem;
       border-radius: 9999px;
       border: 1px solid rgba(255, 0, 85, 0.8);
       background: rgba(5, 5, 10, 0.8);
       color: #ff0055;
       font-weight: 600;
       letter-spacing: 0.08em;
       text-transform: uppercase;
       box-shadow:
         0 0 16px rgba(255, 0, 85, 0.5),
         0 8px 18px rgba(0, 0, 0, 0.8);
       transition: all 0.25s ease-out;
     }
     \`\`\`

**Color Scheme (Neon Noir)**

- Background: \`#0a0a0a\`, \`#050509\`, \`#1a0a14\`
- Neon: \`#ff0055\`, \`#ff00ff\`, \`#b967ff\`
- Text: \`#f9fafb\` (primary), \`#9ca3af\` (secondary)

**Important Notes**
- Maintain strong contrast: very dark background, very bright neon
- Use fog and grain sparingly but visibly to avoid a too-clean digital look
- Animation tempo should be slow with occasional flicker to mimic unstable neon
- Avoid large bright white areas or non-neon saturated colors that break the noir mood`
  },

  // Color scheme
  colorScheme: {
    'zh-CN': '主色深黑色 (#0a0a0a)、暗紫红 (#1a0a14)、霓虹粉紫 (#ff0055 / #ff00ff)、霓虹紫 (#b967ff)、半透明黑 (rgba(10,10,10,0.7))',
    'en-US': 'Primary deep black (#0a0a0a), dark purple-red (#1a0a14), neon pink-purple (#ff0055 / #ff00ff), neon purple (#b967ff), semi-transparent black (rgba(10,10,10,0.7))'
  },

  // Multiple preview support
  previews: [
    {
      id: 'music-platform',
      name: 'styles.visual.neonNoir.previews.musicPlatform',
      type: 'full',
      previewId: 'neon-noir',
      description: 'Neon Noir music/nightclub platform with red-purple neon aesthetics and high-intensity animations',
      features: [
        'Red-purple neon fog atmospheric background',
        'Glowing red/pink/purple neon borders',
        'Glass-morphism cards with neon edges',
        'Flickering neon text animations',
        'Music player cards with progress bars',
        'DJ/Artist showcase cards with statistics',
        'Events timeline with neon dots',
        'Audio wave visualization effects',
        'Neon input fields with glow effects',
        'Multiple loading animations (ring, pulse dots, data stream)',
        'Dark noir color palette (#0a0a0a, #ff0055, #ff00ff, #b967ff)',
        'Responsive design for mobile'
      ],
      html: neonNoirFullPageHTML,
      styles: neonNoirFullPageStyles
    }
  ]
};
