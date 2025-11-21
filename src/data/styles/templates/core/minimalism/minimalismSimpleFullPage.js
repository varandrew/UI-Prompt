// 極简主義：简單全页示例（登入页）
// 說明：此為極简風格的純黑白登入页，作為 Minimalism 額外預覽範例

export const minimalismSimpleFullPageHTML = `
  <!-- 頂部导覽 -->
  <header class="minml-header">
    <div class="minml-container">
      <div class="minml-logo">MINIMAL</div>
      <nav class="minml-nav">
        <a href="javascript:void(0)" data-i18n="loginPage.nav.home">Home</a>
        <a href="javascript:void(0)" data-i18n="loginPage.nav.about">About</a>
        <a href="javascript:void(0)" data-i18n="loginPage.nav.contact">Contact</a>
      </nav>
    </div>
  </header>

  <!-- 主內容：登入卡片 -->
  <main class="minml-main">
    <section class="minml-card">
      <h1 class="minml-title" data-i18n="loginPage.form.title">Sign in</h1>
      <p class="minml-sub" data-i18n="loginPage.form.subtitle">Welcome back. Please enter your details.</p>
      <form class="minml-form" onsubmit="return false;">
        <label class="minml-label" for="email" data-i18n="loginPage.form.emailLabel">Email</label>
        <input id="email" type="email" class="minml-input" placeholder="you@example.com"/>
        <label class="minml-label" for="password" data-i18n="loginPage.form.passwordLabel">Password</label>
        <input id="password" type="password" class="minml-input" placeholder="••••••••"/>
        <button class="minml-btn" type="submit" data-i18n="loginPage.form.continueBtn">Continue</button>
      </form>
      <div class="minml-meta">
        <span data-i18n="loginPage.form.noAccount">No account?</span> <a class="minml-link" href="javascript:void(0)" data-i18n="loginPage.form.createLink">Create one</a>
      </div>
    </section>
  </main>

  <!-- 底部 -->
  <footer class="minml-footer">
    <div class="minml-container">
      <span data-i18n="loginPage.footer.copyright">© 2025 Minimal UI</span>
      <div class="minml-links">
        <a href="javascript:void(0)" data-i18n="loginPage.footer.terms">Terms</a>
        <a href="javascript:void(0)" data-i18n="loginPage.footer.privacy">Privacy</a>
      </div>
    </div>
  </footer>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色纯白 (#FFFFFF)、黑色文字 (#111111)、中性灰色 (#666666)、边框灰色 (#E5E5E5)、背景浅灰 (#FAFAFA)
`;

export const minimalismSimpleFullPageStyles = `
  /* 全局与排版 */
  :root { --line: #E5E5E5; --text: #111; --muted: #666; --bg: #fff; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; }

  /* 頂部 */
  .minml-container { max-width: 960px; margin: 0 auto; padding: 0 16px; }
  .minml-header { position: sticky; top: 0; background: rgba(255,255,255,.9); border-bottom: 1px solid var(--line); backdrop-filter: blur(6px); }
  .minml-header .minml-container { display: flex; align-items: center; justify-content: space-between; height: 56px; }
  .minml-logo { font-size: 12px; letter-spacing: .2em; }
  .minml-nav { display: flex; gap: 24px; }
  .minml-nav a { color: var(--muted); text-decoration: none; font-size: 13px; }
  .minml-nav a:hover { color: var(--text); }

  /* 主內容 */
  .minml-main { min-height: calc(100vh - 56px - 56px); display: grid; place-items: center; padding: 40px 16px; }
  .minml-card { width: 100%; max-width: 360px; border: 1px solid var(--line); padding: 24px; }
  .minml-title { font-weight: 600; font-size: 20px; margin-bottom: 4px; }
  .minml-sub { color: var(--muted); font-size: 13px; margin-bottom: 20px; }
  .minml-form { display: grid; gap: 8px; }
  .minml-label { font-size: 12px; color: var(--muted); }
  .minml-input { height: 36px; border: 1px solid var(--line); padding: 0 10px; font-size: 14px; outline: none; transition: border-color .2s ease; }
  .minml-input:focus { border-color: #111; }
  .minml-btn { height: 36px; background: #111; color: #fff; border: 1px solid #111; font-size: 13px; cursor: pointer; transition: all .2s ease; margin-top: 6px; }
  .minml-btn:hover { background: transparent; color: #111; }
  .minml-meta { margin-top: 12px; font-size: 12px; color: var(--muted); }
  .minml-link { color: #111; text-decoration: underline; }

  /* 底部 */
  .minml-footer { height: 56px; border-top: 1px solid var(--line); display: flex; align-items: center; }
  .minml-footer .minml-container { display: flex; align-items: center; justify-content: space-between; }
  .minml-links { display: flex; gap: 16px; }
  .minml-links a { color: var(--muted); text-decoration: none; font-size: 12px; }
  .minml-links a:hover { color: var(--text); }
`;

