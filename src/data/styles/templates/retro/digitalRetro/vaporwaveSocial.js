// Vaporwave - Digital Retro Aesthetic
// 蒸汽波 - 数位復古美學

export const vaporwaveSocial = 
  {
    id: 'vaporwave',
    title: 'styles.retro.vaporwave.title',
    description: 'styles.retro.vaporwave.description',
    demoHTML: `
      <h4 class="text-3xl font-bold text-white tracking-widest">ＶＡＰＯＲＷＡＶＥ</h4>
    `,
    customStyles: '',
    demoBoxClass: 'bg-gradient-to-br from-pink-300 via-purple-400 to-cyan-300',
    colorScheme: {
  'zh-CN': '霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)',
      'en-US': 'Neon pink-purple (#FF71CE), neon blue (#01CDFE), neon purple (#B967FF), dark purple background (#2E1F47)'
    },
    previews: [
      {
        id: 'social-media-feed',
        name: 'styles.retro.vaporwave.preview.retroSocialMedia',
        type: 'full',
        description: 'styles.retro.vaporwave.preview.retroSocialMediaDesc',
        features: [
          'Windows 95 Style Window Bar',
          'CRT Scanlines Effect',
          'Matrix Digital Rain Background',
          'Social Stats Cards',
          'Post Feed with Interactions',
          'Online Status Indicators',
          'Fullwidth Character Aesthetics'
        ],
        colorScheme: {
          'zh-cn': '霓虹粉 (#ff6ec7)、霓虹藍 (#00d9ff)、紫色 (#b967ff)、深紫背景 (#1a0033)',
          'en-US': 'Neon pink (#ff6ec7), neon blue (#00d9ff), purple (#b967ff), dark purple background (#1a0033)'
        },
        // ✅ 階段 3.2: 改用 previewId
        previewId: 'vaporwave',
      },
      {
        id: 'art-gallery-nft',
        name: 'styles.retro.vaporwave.preview.artGalleryNFT',
        type: 'full',
        description: 'styles.retro.vaporwave.preview.artGalleryNFTDesc',
        features: [
          'Glitchy Navigation with VHS Distortion',
          'Art Grid with Holographic Frames',
          'VHS Playback UI for Artwork Details',
          'Artist Profiles with Retro Computer Aesthetics',
          'Greek Columns and Dolphin Graphics',
          'Auction Timer with Digital Rain Background',
          'Top Collectors Windows 95 List',
          'Recent Sales Marquee Scroller'
        ],
        colorScheme: {
          'zh-cn': '霓虹粉 (#ff6ec7)、霓虹藍 (#00d9ff)、紫色 (#b967ff)、深紫漸变背景 (#1a0033 → #330066)、檸檬黃強調 (#ffff00)',
          'en-US': 'Neon pink (#ff6ec7), neon blue (#00d9ff), purple (#b967ff), dark purple gradient background (#1a0033 → #330066), lemon yellow accent (#ffff00)'
        },
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DIGITAL DREAMS Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    @keyframes vhs-glitch {
      0%, 100% { transform: translateX(0); opacity: 1; }
      20% { transform: translateX(-5px); opacity: 0.8; }
      40% { transform: translateX(5px); opacity: 1; }
      60% { transform: translateX(-3px); filter: hue-rotate(90deg); }
      80% { transform: translateX(2px); opacity: 0.9; }
    }

    @keyframes scan-lines {
      0% { transform: translateY(0); }
      100% { transform: translateY(100%); }
    }

    @keyframes holographic {
      0%, 100% { box-shadow: 0 0 20px #ff6ec7, 0 0 40px #00d9ff; }
      50% { box-shadow: 0 0 30px #00d9ff, 0 0 60px #b967ff; }
    }

    @keyframes float-dolphin {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }

    @keyframes matrix-rain {
      0% { transform: translateY(-100%); opacity: 1; }
      100% { transform: translateY(100vh); opacity: 0; }
    }

    @keyframes neon-flicker {
      0%, 100% { text-shadow: 0 0 10px #ff6ec7, 0 0 20px #ff6ec7; }
      50% { text-shadow: 0 0 20px #00d9ff, 0 0 40px #00d9ff; }
    }

    body {
      font-family: 'Courier New', monospace;
      background: linear-gradient(135deg, #1a0033 0%, #2d1854 50%, #330066 100%);
      color: #ffffff;
      overflow-x: hidden;
      position: relative;
    }

    /* CRT Scanlines */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
      z-index: 1000;
      animation: scan-lines 8s linear infinite;
    }

    /* Matrix Rain */
    .matrix-rain {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: 1;
    }

    .matrix-column {
      position: absolute;
      top: -100%;
      font-size: 14px;
      color: #00ff00;
      opacity: 0.3;
      animation: matrix-rain linear infinite;
    }

    /* Header */
    .gallery-header {
      background: rgba(26, 0, 51, 0.9);
      border-bottom: 3px solid #ff6ec7;
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 100;
      animation: vhs-glitch 0.3s ease-in-out infinite;
    }

    .gallery-nav {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .gallery-logo {
      font-size: 2rem;
      font-weight: bold;
      background: linear-gradient(90deg, #ff6ec7, #00d9ff, #b967ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-transform: uppercase;
      letter-spacing: 4px;
      animation: neon-flicker 3s ease-in-out infinite;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      color: #00d9ff;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 2px;
      position: relative;
      transition: all 0.3s;
    }

    .nav-link::before {
      content: '▶';
      position: absolute;
      left: -15px;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .nav-link:hover::before {
      opacity: 1;
    }

    .nav-link:hover {
      color: #ffff00;
    }

    /* Hero Banner */
    .hero-banner {
      padding: 6rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero-statue {
      font-size: 6rem;
      margin-bottom: 2rem;
      filter: drop-shadow(0 0 20px #ff6ec7);
    }

    .hero-title {
      font-size: 4rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 8px;
      background: linear-gradient(45deg, #ff6ec7, #00d9ff, #b967ff, #ffff00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
      animation: neon-flicker 2s ease-in-out infinite;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: #00d9ff;
      letter-spacing: 4px;
      text-transform: uppercase;
    }

    /* Art Grid */
    .art-grid-section {
      max-width: 1400px;
      margin: 4rem auto;
      padding: 0 2rem;
    }

    .section-title {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 3rem;
      color: #ff6ec7;
      text-transform: uppercase;
      letter-spacing: 6px;
      text-shadow: 0 0 20px #ff6ec7;
    }

    .art-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .art-card {
      background: rgba(26, 0, 51, 0.6);
      border: 2px solid #ff6ec7;
      border-radius: 10px;
      padding: 1.5rem;
      position: relative;
      animation: holographic 3s ease-in-out infinite;
      transition: transform 0.3s;
    }

    .art-card:hover {
      transform: scale(1.05);
      border-color: #ffff00;
    }

    .art-display {
      background: linear-gradient(135deg, #b967ff, #ff6ec7);
      height: 250px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      margin-bottom: 1rem;
      position: relative;
      overflow: hidden;
    }

    .art-display::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: holographic-scan 2s ease-in-out infinite;
    }

    @keyframes holographic-scan {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    .art-info {
      color: #ffffff;
    }

    .art-title {
      font-size: 1.5rem;
      color: #00d9ff;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .art-artist {
      color: #b967ff;
      margin-bottom: 1rem;
    }

    .art-price {
      font-size: 1.8rem;
      color: #ffff00;
      font-weight: bold;
    }

    /* Featured Artwork */
    .featured-section {
      background: rgba(0, 0, 0, 0.4);
      padding: 4rem 2rem;
      margin: 4rem 0;
    }

    .featured-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .featured-display {
      background: linear-gradient(135deg, #ff6ec7, #00d9ff);
      height: 400px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 6rem;
      border: 3px solid #ffff00;
      box-shadow: 0 0 40px #ff6ec7;
    }

    .featured-info h3 {
      font-size: 2.5rem;
      color: #ff6ec7;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    .featured-info p {
      color: #00d9ff;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .bid-button {
      background: linear-gradient(135deg, #ff6ec7, #b967ff);
      color: white;
      border: 2px solid #ffff00;
      padding: 1rem 3rem;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
      transition: all 0.3s;
      font-weight: bold;
    }

    .bid-button:hover {
      background: linear-gradient(135deg, #ffff00, #ff6ec7);
      transform: scale(1.1);
    }

    /* Artists Section */
    .artists-section {
      max-width: 1400px;
      margin: 4rem auto;
      padding: 0 2rem;
    }

    .artists-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .artist-card {
      background: rgba(0, 0, 0, 0.6);
      border: 2px solid #00d9ff;
      border-radius: 10px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s;
    }

    .artist-card:hover {
      border-color: #ff6ec7;
      transform: translateY(-10px);
    }

    .artist-avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(135deg, #b967ff, #00d9ff);
      margin: 0 auto 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      border: 3px solid #ff6ec7;
    }

    .artist-name {
      font-size: 1.5rem;
      color: #ffff00;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .artist-works {
      color: #00d9ff;
    }

    /* Sidebar Widgets */
    .sidebar-widgets {
      max-width: 400px;
      margin: 4rem auto;
      padding: 0 2rem;
    }

    .widget {
      background: rgba(26, 0, 51, 0.8);
      border: 2px solid #b967ff;
      border-radius: 10px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .widget-title {
      font-size: 1.5rem;
      color: #ff6ec7;
      margin-bottom: 1rem;
      text-transform: uppercase;
      border-bottom: 2px solid #00d9ff;
      padding-bottom: 0.5rem;
    }

    .collector-item {
      padding: 0.75rem;
      border-bottom: 1px solid #333;
      color: #00d9ff;
    }

    /* Footer */
    .gallery-footer {
      background: rgba(0, 0, 0, 0.8);
      border-top: 3px solid #ff6ec7;
      padding: 3rem 2rem;
      margin-top: 6rem;
      text-align: center;
    }

    .footer-dolphins {
      font-size: 3rem;
      margin-bottom: 1rem;
      animation: float-dolphin 3s ease-in-out infinite;
    }

    .footer-columns {
      font-size: 4rem;
      margin-bottom: 1rem;
      color: #00d9ff;
    }

    .footer-text {
      color: #b967ff;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .hero-title { font-size: 2.5rem; letter-spacing: 4px; }
      .featured-container { grid-template-columns: 1fr; }
      .nav-links { display: none; }
      .art-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <!-- Matrix Rain Background -->
  <div class="matrix-rain">
    <div class="matrix-column" style="left: 10%; animation-duration: 8s;">10101010<br>01010101<br>11001100</div>
    <div class="matrix-column" style="left: 30%; animation-duration: 10s; animation-delay: 2s;">01110111<br>10001000<br>11111111</div>
    <div class="matrix-column" style="left: 50%; animation-duration: 12s; animation-delay: 4s;">00110011<br>11001100<br>10101010</div>
    <div class="matrix-column" style="left: 70%; animation-duration: 9s; animation-delay: 1s;">11110000<br>00001111<br>01010101</div>
    <div class="matrix-column" style="left: 90%; animation-duration: 11s; animation-delay: 3s;">10011001<br>01100110<br>11110000</div>
  </div>

  <!-- Header -->
  <header class="gallery-header">
    <nav class="gallery-nav">
      <div class="gallery-logo">Digital Dreams</div>
      <div class="nav-links">
        <a href="javascript:void(0)" class="nav-link">Gallery</a>
        <a href="javascript:void(0)" class="nav-link">Artists</a>
        <a href="javascript:void(0)" class="nav-link">Marketplace</a>
      </div>
    </nav>
  </header>

  <!-- Hero Banner -->
  <section class="hero-banner">
    <div class="hero-statue">🗿</div>
    <h1 class="hero-title">Digital Dreams</h1>
    <p class="hero-subtitle">Vaporwave NFT Gallery</p>
  </section>

  <!-- Art Grid -->
  <section class="art-grid-section">
    <h2 class="section-title">Featured Artworks</h2>
    <div class="art-grid">
      <div class="art-card">
        <div class="art-display">🌴</div>
        <div class="art-info">
          <h3 class="art-title">Palm Paradise</h3>
          <p class="art-artist">by CyberArtist</p>
          <div class="art-price">2.5 ETH</div>
        </div>
      </div>
      <div class="art-card">
        <div class="art-display">🌊</div>
        <div class="art-info">
          <h3 class="art-title">Wave Rider</h3>
          <p class="art-artist">by NeonCreator</p>
          <div class="art-price">1.8 ETH</div>
        </div>
      </div>
      <div class="art-card">
        <div class="art-display">🌺</div>
        <div class="art-info">
          <h3 class="art-title">Tropical Vibe</h3>
          <p class="art-artist">by RetroMaster</p>
          <div class="art-price">3.2 ETH</div>
        </div>
      </div>
      <div class="art-card">
        <div class="art-display">🌅</div>
        <div class="art-info">
          <h3 class="art-title">Sunset Dreams</h3>
          <p class="art-artist">by VaporKing</p>
          <div class="art-price">2.0 ETH</div>
        </div>
      </div>
      <div class="art-card">
        <div class="art-display">💿</div>
        <div class="art-info">
          <h3 class="art-title">Digital Disc</h3>
          <p class="art-artist">by PixelPro</p>
          <div class="art-price">1.5 ETH</div>
        </div>
      </div>
      <div class="art-card">
        <div class="art-display">🎮</div>
        <div class="art-info">
          <h3 class="art-title">Retro Gaming</h3>
          <p class="art-artist">by GameArtist</p>
          <div class="art-price">2.8 ETH</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Artwork -->
  <section class="featured-section">
    <div class="featured-container">
      <div class="featured-display">🌸</div>
      <div class="featured-info">
        <h3>Cherry Blossom Dreams</h3>
        <p>An exclusive vaporwave masterpiece combining traditional Japanese aesthetics with digital art. Limited edition 1/1.</p>
        <p style="color: #ffff00; font-size: 1.8rem; font-weight: bold;">Current Bid: 5.5 ETH</p>
        <button class="bid-button">Place Bid</button>
      </div>
    </div>
  </section>

  <!-- Artists -->
  <section class="artists-section">
    <h2 class="section-title">Featured Artists</h2>
    <div class="artists-grid">
      <div class="artist-card">
        <div class="artist-avatar">🎨</div>
        <div class="artist-name">CyberArtist</div>
        <div class="artist-works">127 Artworks</div>
      </div>
      <div class="artist-card">
        <div class="artist-avatar">🖼️</div>
        <div class="artist-name">NeonCreator</div>
        <div class="artist-works">89 Artworks</div>
      </div>
      <div class="artist-card">
        <div class="artist-avatar">✨</div>
        <div class="artist-name">RetroMaster</div>
        <div class="artist-works">156 Artworks</div>
      </div>
      <div class="artist-card">
        <div class="artist-avatar">🌈</div>
        <div class="artist-name">VaporKing</div>
        <div class="artist-works">203 Artworks</div>
      </div>
    </div>
  </section>

  <!-- Sidebar Widgets -->
  <section class="sidebar-widgets">
    <div class="widget">
      <div class="widget-title">Top Collectors</div>
      <div class="collector-item">🏆 CryptoWhale - 42 NFTs</div>
      <div class="collector-item">💎 DiamondHands - 38 NFTs</div>
      <div class="collector-item">🌟 StarCollector - 35 NFTs</div>
    </div>

    <div class="widget">
      <div class="widget-title">Recent Sales</div>
      <div class="collector-item">🌴 Palm Paradise - 2.5 ETH</div>
      <div class="collector-item">🌊 Wave Rider - 1.8 ETH</div>
      <div class="collector-item">🌺 Tropical Vibe - 3.2 ETH</div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="gallery-footer">
    <div class="footer-dolphins">🐬 🐬 🐬</div>
    <div class="footer-columns">⚡️</div>
    <div class="footer-text">© 2025 DIGITAL DREAMS GALLERY</div>
    <div class="footer-text" style="margin-top: 1rem; opacity: 0.7;">Ａｅｓｔｈｅｔｉｃ Ｎ信ＦＴ Ｍａｒｋｅｔｐｌａｃｅ</div>
  </footer>
</body>
</html>`
      }
    ],

    // 模板級 customPrompt（長版 Prompt，可直接給 LLM 高精度復刻 UI）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Vaporwave 蒸汽波社交界面」示例风格高度接近的 UI。
要求：保持粉紫霓虹渐变背景、CRT 扫描线、全角字符标题和 VHS 故障感等核心特征，只允许替换文案、模组内容与图标，不改变整体构图和色彩逻辑。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 蒸汽波 / Synthwave 风格的社交媒体主页或个人主页
- 展示数字艺术、NFT 收藏或音乐作品的复古视觉画廊
- 需要让用户感受到「90 年代日式电视台 + CRT 屏幕 + 赛博怀旧」氛围的界面

【整体布局结构】
1. 背景层
   - 使用从霓虹粉到霓虹蓝 / 紫的渐变背景（如 #ff71ce → #01cdfe → #b967ff），可以叠加轻微噪点与星点。
   - 在页面下半部加入透视网格（Vaporwave Grid），使用线框地平线向远处消失，营造空间感。
2. 主内容区域
   - 中央或略偏上的位置放置主标题区：全角大写「ＶＡＰＯＲＷＡＶＥ」或类似文案。
   - 标题下方为社交信息区：头像、用户名、简介和若干统计卡片（粉丝数、收藏数等）。
   - 再往下为动态 Feed / 帖子流，每条帖子作为胶片卡片或 CRT 窗口呈现。
3. 装饰元素
   - 在角落或背景中加入典型蒸汽波符号：希腊柱、海豚、棕榈树、CD 光盘、日文假名等。
   - 可在顶部或侧边加入 VHS REC 标识、播放时间码等 UI 细节。

【色彩与材质】
1. 霓虹配色
   - 主色：霓虹粉 (#ff71ce)、霓虹蓝 (#01cdfe)、霓虹紫 (#b967ff)。
   - 背景：深紫渐变 (#1a0033、#2d1854、#330066) 为主，以霓虹色叠加发光。
   - 点缀色：柠檬黄 (#ffff00)、薄荷绿 (#00ff9f) 只在小面积高亮使用。
2. 材质质感
   - 利用 text-shadow 和 box-shadow 叠加多层发光，打造强烈霓虹光晕。
   - 对部分元素添加混合模式（如 mix-blend-mode: screen）增强 CRT 光感。

【文字与全角字符】
1. 标题与主要标签建议转换为全角字符，拉宽字间距（letter-spacing 较大），强化 Vaporwave 气质。
2. 正文可使用等宽或近似等宽字体（如 'Courier New'），营造命令行 / 终端感。

【交互与动效】
1. Hover 效果
   - 按钮和卡片在悬停时增加发光强度（text-shadow / box-shadow 变强），颜色略微偏移。
   - 链接在 hover 时可出现故障闪烁或轻微抖动，但频率需控制。
2. 动画
   - 在顶层叠加非常轻微的 VHS 垂直抖动 / 偏移动画，或随机色相旋转（hue-rotate）。
   - 在背景或遮罩层上添加缓慢向下移动的扫描线；Feed 背后可以有 Matrix 式数字雨。

【输出要求】
- 使用语义化 HTML（header / main / section / footer）组织社交主页的结构。
- 使用 TailwindCSS 风格原子类控制布局（flex / grid）、间距和对齐，必要时用自定义类实现发光、扫描线和网格地平线效果。
- 生成 UI 必须保留「霓虹渐变背景 + 透视网格地平线 + 全角字符标题 + CRT/VHS 故障感」这些关键特征，让人一眼看出是 Vaporwave 蒸汽波社交界面。`,

      'en-US': `You are a senior UI designer and front-end engineer. Generate a Vaporwave social interface that looks very close to the current “Vaporwave” demo.
Keep the pink–blue–purple neon gradient background, CRT scanlines, full-width character title and VHS glitch feel as core traits. You may change copy, modules and icons, but you should not alter the overall composition or color philosophy. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Vaporwave / synthwave themed social or personal home pages
- Retro digital art, NFT or music galleries with nostalgic aesthetics
- Interfaces that should feel like “90s Japanese TV + CRT screen + cyber nostalgia”

[Layout structure]
1. Background layer
   - Use a large neon gradient (for example #ff71ce → #01cdfe → #b967ff) with subtle noise and star specks.
   - Add a perspective grid at the bottom half of the viewport, receding toward a vanishing point to create depth.
2. Main content area
   - Place a central or slightly elevated title block with full-width characters (e.g. “ＶＡＰＯＲＷＡＶＥ”).
   - Below the title, show profile information: avatar, handle, short bio and statistic cards (followers, likes, etc.).
   - Further down, render a feed of posts, each as a “tape card” or CRT window with interactions.
3. Decorative elements
   - Integrate classic vaporwave motifs: Greek columns, dolphins, palm trees, CDs, Japanese kana, etc.
   - Optionally include VHS UI marks like REC labels, timecodes or playback indicators.

[Color and materials]
1. Neon palette
   - Primary: neon pink (#ff71ce), neon blue (#01cdfe), neon purple (#b967ff).
   - Background: dark purple gradients (#1a0033, #2d1854, #330066) with neon glows layered on top.
   - Accents: lemon yellow (#ffff00) and mint green (#00ff9f) in small highlight areas.
2. Rendering
   - Build strong neon glows using multiple layers of text-shadow and box-shadow.
   - Use blend modes (e.g. mix-blend-mode: screen) on certain highlights to simulate CRT light.

[Typography]
1. Convert key headings and labels to full-width characters and increase letter-spacing to emphasize vaporwave character.
2. Use monospace or near-monospace fonts (such as 'Courier New') for body text to echo terminal aesthetics.

[Interaction and motion]
1. Hover
   - On hover, intensify glow, slightly shift hue, or apply mild jitter for buttons and cards.
   - Links may glitch momentarily or show flickering underlines, with controlled frequency.
2. Motion
   - Overlay slow-moving or gently flickering VHS noise and vertical jitter on a top-level layer.
   - Add slow downward scanlines over the background and optional matrix-like digital rain behind the feed.

[Output requirements]
- Use semantic HTML (header / main / section / footer) to structure the social layout.
- Use Tailwind-style utilities for layout (flex/grid), spacing and alignment, and custom classes where necessary for glow, scanlines and grid horizon.
- The generated UI must preserve “neon gradient backdrop + perspective grid + full-width title + CRT/VHS glitch feel” as key cues so it is clearly recognized as a Vaporwave social interface.`
    },

    // 模板級 stylePrompt (詳細 Prompt，1000-2000字)
    stylePrompt: {
      'zh-CN': `角色：你是专精於蒸汽波（Vaporwave）風格的 UI 设計師，专注於 90 年代网絡文化、日式美學和賽博朋克粉紫配色。

場景定位：為藝術作品展示、音樂平台或賽博朋克主題网站打造具有蒸汽波氛圍的界面，通過粉紫漸变和 VHS 故障效果傳達復古未來主義。

核心设計語言：

1. **粉紫漸变系統**：
   - 霓虹三色漸变：
     \`\`\`css
     .vaporwave-gradient {
       background: linear-gradient(
         135deg,
         #ff71ce 0%,
         #01cdfe 50%,
         #b967ff 100%
       );
     }
     \`\`\`

   - 全景漸变背景：
     \`\`\`css
     .vaporwave-bg {
       background: linear-gradient(
         135deg,
         #1a0033 0%,
         #2d1854 25%,
         #330066 50%,
         #2d1854 75%,
         #1a0033 100%
       );
       min-height: 100vh;
     }
     \`\`\`

   - 全息漸变边框：
     \`\`\`css
     .vaporwave-border {
       border: 2px solid transparent;
       background:
         linear-gradient(#1a0033, #1a0033) padding-box,
         linear-gradient(45deg, #ff71ce, #01cdfe, #b967ff, #ff71ce) border-box;
       animation: holographic-border 3s linear infinite;
     }

     @keyframes holographic-border {
       0% { background-position: 0% 0%; }
       100% { background-position: 100% 100%; }
     }
     \`\`\`

2. **VHS 故障效果系統**：
   - 画面抖動故障：
     \`\`\`css
     .vhs-glitch {
       animation: vhs-glitch 0.3s ease-in-out infinite;
     }

     @keyframes vhs-glitch {
       0%, 100% { transform: translateX(0); opacity: 1; }
       20% { transform: translateX(-5px); opacity: 0.8; }
       40% { transform: translateX(5px); opacity: 1; }
       60% { transform: translateX(-3px); filter: hue-rotate(90deg); }
       80% { transform: translateX(2px); opacity: 0.9; }
     }
     \`\`\`

   - CRT 掃描线：
     \`\`\`css
     .vaporwave-scanlines::before {
       content: '';
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: repeating-linear-gradient(
         0deg,
         rgba(0, 0, 0, 0.15),
         rgba(0, 0, 0, 0.15) 1px,
         transparent 1px,
         transparent 2px
       );
       pointer-events: none;
       z-index: 1000;
       animation: scan-lines 8s linear infinite;
     }

     @keyframes scan-lines {
       0% { transform: translateY(0); }
       100% { transform: translateY(100%); }
     }
     \`\`\`

配色方案：

主色調（霓虹色系）：
- 霓虹粉：#ff71ce
- 霓虹藍：#01cdfe
- 霓虹紫：#b967ff
- 檸檬黃：#ffff00（強調色）

背景色（深紫漸变）：
- 最深紫：#1a0033
- 中紫：#2d1854
- 亮紫：#330066

點綴色（日式元素）：
- 櫻花粉：#ffb7c5
- 海豚藍：#00d9ff
- 熱帶綠：#00ff9f

3. **全角字符排版系統**：
   \`\`\`css
   .vaporwave-text {
     font-family: 'Courier New', monospace;
     font-size: 2rem;
     background: linear-gradient(90deg, #ff71ce, #01cdfe, #b967ff);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     background-clip: text;
     letter-spacing: 0.2em;
     text-transform: uppercase;
   }

   /* 全角字符轉換（JavaScript 輔助） */
   function toFullWidth(str) {
     return str.replace(/[A-Za-z0-9]/g, function(s) {
       return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
     });
   }
   // "VAPORWAVE" → "ＶＡＰＯＲＷＡＶＥ"
   \`\`\`

4. **透視网格背景**：
   \`\`\`css
   .vaporwave-grid {
     position: fixed;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 50vh;
     background:
       repeating-linear-gradient(
         90deg,
         transparent,
         transparent 19px,
         #ff71ce 19px,
         #ff71ce 20px
       ),
       repeating-linear-gradient(
         0deg,
         transparent,
         transparent 19px,
         #ff71ce 19px,
         #ff71ce 20px
       );
     transform: perspective(500px) rotateX(60deg);
     transform-origin: bottom;
     opacity: 0.3;
     pointer-events: none;
   }
   \`\`\`

5. **霓虹文字效果**：
   \`\`\`css
   .vaporwave-neon {
     color: #ff71ce;
     text-shadow:
       0 0 10px rgba(255, 113, 206, 0.8),
       0 0 20px rgba(255, 113, 206, 0.6),
       0 0 30px rgba(1, 205, 254, 0.4),
       0 0 40px rgba(1, 205, 254, 0.2);
     animation: neon-flicker 3s ease-in-out infinite;
   }

   @keyframes neon-flicker {
     0%, 100% { opacity: 1; text-shadow:
       0 0 10px rgba(255, 113, 206, 0.8),
       0 0 20px rgba(255, 113, 206, 0.6); }
     50% { opacity: 0.9; text-shadow:
       0 0 20px rgba(1, 205, 254, 0.8),
       0 0 40px rgba(1, 205, 254, 0.6); }
   }
   \`\`\`

6. **日式元素整合**：
   - 希臘雕像 + 海豚 + 棕櫚樹組合：
     \`\`\`css
     .vaporwave-statue {
       font-size: 6rem;
       filter: drop-shadow(0 0 20px #ff71ce);
       animation: float-statue 3s ease-in-out infinite;
     }

     @keyframes float-statue {
       0%, 100% { transform: translateY(0); }
       50% { transform: translateY(-20px); }
     }
     \`\`\`

   - 日文片假名裝飾：
     使用字符：ア、イ、ウ、エ、オ、カ、キ、ク、ケ、コ
     \`\`\`html
     <div class="vaporwave-katakana">
       アエステティック（Aesthetic）
     </div>
     \`\`\`

技術實現要點：

1. **字体選擇**：
   - Courier New（等寬字体，用於全角字符）
   - MS PGothic（日文字体）
   - Noto Sans JP（現代日文字体）

2. **動画組合**：
   - VHS 故障：0.3s 快速抖動
   - 霓虹閃爍：3s 緩慢循環
   - 雕像浮動：3s ease-in-out
   - Matrix 雨：8-12s 隨機延遲

3. **視覺层次**：
   - 背景层：透視网格 + Matrix 雨（z-index: 1）
   - 內容层：主要元素（z-index: 10）
   - 掃描线层：CRT 效果（z-index: 1000）

4. **響應式优化**：
   \`\`\`css
   @media (max-width: 768px) {
     .vaporwave-grid {
       transform: perspective(300px) rotateX(70deg);
     }
     .vaporwave-text {
       font-size: 1.5rem;
       letter-spacing: 0.1em;
     }
   }
   \`\`\`

重要提示：
- 避免使用純黑背景，使用深紫漸变
- 霓虹效果至少使用 3 层 text-shadow
- 全角字符优先使用 JavaScript 轉換（toFullWidth 函数）
- VHS 故障效果使用隨機 transform 和 filter: hue-rotate
- 透視网格使用 transform: perspective + rotateX
- 整合日式元素：🗿（雕像）、🐬（海豚）、🌴（棕櫚樹）、🌸（櫻花）、💿（CD）
- 使用 mix-blend-mode: screen 模擬 CRT 發光效果`,

      'en-US': `Role: You are a UI designer specializing in Vaporwave style, focusing on 90s internet culture, Japanese aesthetics, and cyberpunk pink-purple color schemes.

Scenario: Create vaporwave atmosphere interfaces for art showcases, music platforms, or cyberpunk themed websites, conveying retro-futurism through pink-purple gradients and VHS glitch effects.

Core Design Language:

1. **Pink-Purple Gradient System**:
   - Neon three-color gradient:
     \`\`\`css
     .vaporwave-gradient {
       background: linear-gradient(
         135deg,
         #ff71ce 0%,
         #01cdfe 50%,
         #b967ff 100%
       );
     }
     \`\`\`

   - Panoramic gradient background:
     \`\`\`css
     .vaporwave-bg {
       background: linear-gradient(
         135deg,
         #1a0033 0%,
         #2d1854 25%,
         #330066 50%,
         #2d1854 75%,
         #1a0033 100%
       );
       min-height: 100vh;
     }
     \`\`\`

2. **VHS Glitch Effect System**:
   - Screen shake glitch:
     \`\`\`css
     .vhs-glitch {
       animation: vhs-glitch 0.3s ease-in-out infinite;
     }

     @keyframes vhs-glitch {
       0%, 100% { transform: translateX(0); opacity: 1; }
       20% { transform: translateX(-5px); opacity: 0.8; }
       40% { transform: translateX(5px); opacity: 1; }
       60% { transform: translateX(-3px); filter: hue-rotate(90deg); }
       80% { transform: translateX(2px); opacity: 0.9; }
     }
     \`\`\`

Color Scheme:

Primary (Neon Colors):
- Neon Pink: #ff71ce
- Neon Blue: #01cdfe
- Neon Purple: #b967ff
- Lemon Yellow: #ffff00 (accent)

Background (Deep Purple Gradient):
- Darkest Purple: #1a0033
- Mid Purple: #2d1854
- Bright Purple: #330066

Accent (Japanese Elements):
- Cherry Blossom Pink: #ffb7c5
- Dolphin Blue: #00d9ff
- Tropical Green: #00ff9f

3. **Full-Width Character Typography**:
   \`\`\`css
   .vaporwave-text {
     font-family: 'Courier New', monospace;
     font-size: 2rem;
     background: linear-gradient(90deg, #ff71ce, #01cdfe, #b967ff);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     background-clip: text;
     letter-spacing: 0.2em;
     text-transform: uppercase;
   }

   /* Full-width character conversion (JavaScript helper) */
   function toFullWidth(str) {
     return str.replace(/[A-Za-z0-9]/g, function(s) {
       return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
     });
   }
   // "VAPORWAVE" → "ＶＡＰＯＲＷＡＶＥ"
   \`\`\`

4. **Perspective Grid Background**:
   \`\`\`css
   .vaporwave-grid {
     position: fixed;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 50vh;
     background:
       repeating-linear-gradient(
         90deg,
         transparent,
         transparent 19px,
         #ff71ce 19px,
         #ff71ce 20px
       ),
       repeating-linear-gradient(
         0deg,
         transparent,
         transparent 19px,
         #ff71ce 19px,
         #ff71ce 20px
       );
     transform: perspective(500px) rotateX(60deg);
     transform-origin: bottom;
     opacity: 0.3;
     pointer-events: none;
   }
   \`\`\`

Important Notes:
- Avoid pure black background, use deep purple gradients
- Neon effects require at least 3 layers of text-shadow
- Full-width characters preferably use JavaScript conversion (toFullWidth function)
- VHS glitch effect uses random transform and filter: hue-rotate
- Perspective grid uses transform: perspective + rotateX
- Integrate Japanese elements: 🗿 (statue), 🐬 (dolphin), 🌴 (palm tree), 🌸 (cherry blossom), 💿 (CD)
- Use mix-blend-mode: screen to simulate CRT glow effect`
    }
  }
