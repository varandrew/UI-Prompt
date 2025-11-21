// Brutalism Developer Workspace 完整页面数据 - 開發者工作台風格
export const brutalismDevWorkspaceHTML = `
  <div class="min-full-page" style="background: #f5f5f5; min-height: 100vh; font-family: Arial, 'Helvetica Neue', sans-serif;">

    <!-- Navigation Bar -->
    <nav style="background: #000000; color: #ffffff; padding: 1.5rem 2rem; border-bottom: 4px solid #ff0000; position: sticky; top: 0; z-index: 100;">
      <div style="max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 2rem;">
        <!-- Logo -->
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div style="width: 50px; height: 50px; background: #ff0000; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 24px; font-weight: 900; color: #000000;">&lt;/&gt;</span>
          </div>
          <span style="font-size: 24px; font-weight: 900; letter-spacing: 2px;">DEV STUDIO</span>
        </div>

        <!-- Main Nav -->
        <div style="display: flex; gap: 2rem; align-items: center;">
          <a href="javascript:void(0)" style="font-weight: 700; color: #ffffff; text-decoration: none; font-size: 14px; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.2s; letter-spacing: 1px;">WORKSPACE</a>
          <a href="javascript:void(0)" style="font-weight: 700; color: #cccccc; text-decoration: none; font-size: 14px; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.2s; letter-spacing: 1px;">PROJECTS</a>
          <a href="javascript:void(0)" style="font-weight: 700; color: #cccccc; text-decoration: none; font-size: 14px; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.2s; letter-spacing: 1px;">TOOLS</a>
          <a href="javascript:void(0)" style="font-weight: 700; color: #cccccc; text-decoration: none; font-size: 14px; padding: 0.5rem 1rem; border: 2px solid transparent; transition: all 0.2s; letter-spacing: 1px;">SETTINGS</a>
        </div>

        <!-- Right Actions -->
        <div style="display: flex; gap: 1rem; align-items: center;">
          <input type="text" placeholder="SEARCH..." style="padding: 0.75rem 1rem; border: 2px solid #ffffff; background: #000000; color: #ffffff; font-weight: 700; width: 160px; font-size: 14px; letter-spacing: 1px;">
          <div style="width: 44px; height: 44px; background: #ffffff; color: #000000; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; cursor: pointer;">🔔</div>
          <div style="width: 44px; height: 44px; background: #ff0000; color: #ffffff; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 16px; letter-spacing: -1px;">TC</div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section style="background: #000000; color: #ffffff; padding: 5rem 2rem; border-bottom: 4px solid #ff0000; position: relative;">
      <div style="max-width: 1400px; margin: 0 auto;">
        <div style="max-width: 800px;">
          <h1 style="font-size: 72px; font-weight: 900; color: #ffffff; margin: 0 0 1rem 0; line-height: 1; letter-spacing: -2px; text-transform: uppercase;">
            DEVELOPER<br/>WORKSPACE
          </h1>
          <p style="font-size: 24px; font-weight: 700; color: #ff0000; margin: 0 0 3rem 0; letter-spacing: 4px;">
            CODE. BUILD. DEPLOY.
          </p>
          <div style="display: flex; gap: 1.5rem; margin-bottom: 3rem;">
            <button style="padding: 1.5rem 3rem; background: #ff0000; color: #ffffff; border: 4px solid #ffffff; font-weight: 900; font-size: 18px; cursor: pointer; transition: all 0.2s; letter-spacing: 2px;">
              OPEN EDITOR
            </button>
            <button style="padding: 1.5rem 3rem; background: #000000; color: #ffffff; border: 4px solid #ffffff; font-weight: 900; font-size: 18px; cursor: pointer; transition: all 0.2s; letter-spacing: 2px;">
              VIEW DOCS
            </button>
          </div>
          <!-- Status Indicators -->
          <div style="display: flex; gap: 2rem; align-items: center;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 16px; height: 16px; background: #00ff00; border: 2px solid #ffffff; animation: pulse 2s infinite;"></div>
              <span style="font-weight: 700; font-size: 14px; letter-spacing: 1px;">ONLINE</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 16px; height: 16px; background: #00ffff; border: 2px solid #ffffff;"></div>
              <span style="font-weight: 700; font-size: 14px; letter-spacing: 1px;">SYNCED</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 16px; height: 16px; background: #ff0000; border: 2px solid #ffffff;"></div>
              <span style="font-weight: 700; font-size: 14px; letter-spacing: 1px;">READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Grid -->
    <section style="max-width: 1400px; margin: -2rem auto 0; padding: 0 2rem 4rem; position: relative; z-index: 10;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0;">

        <!-- Stat Card 1 -->
        <div style="background: #ffffff; color: #000000; padding: 3rem 2rem; border: 4px solid #000000; text-align: center;">
          <div style="font-size: 64px; font-weight: 900; color: #ff0000; margin: 0;">2543</div>
          <div style="font-size: 16px; font-weight: 700; color: #000000; margin-top: 1rem; letter-spacing: 2px;">COMMITS</div>
        </div>

        <!-- Stat Card 2 -->
        <div style="background: #000000; color: #ffffff; padding: 3rem 2rem; border: 4px solid #000000; text-align: center;">
          <div style="font-size: 64px; font-weight: 900; color: #ffffff; margin: 0;">134</div>
          <div style="font-size: 16px; font-weight: 700; color: #ffffff; margin-top: 1rem; letter-spacing: 2px;">PULL REQUESTS</div>
        </div>

        <!-- Stat Card 3 -->
        <div style="background: #ff0000; color: #ffffff; padding: 3rem 2rem; border: 4px solid #000000; text-align: center;">
          <div style="font-size: 64px; font-weight: 900; color: #000000; margin: 0;">98</div>
          <div style="font-size: 16px; font-weight: 700; color: #000000; margin-top: 1rem; letter-spacing: 2px;">ISSUES FIXED</div>
        </div>

        <!-- Stat Card 4 -->
        <div style="background: #ffffff; color: #000000; padding: 3rem 2rem; border: 4px solid #000000; text-align: center;">
          <div style="font-size: 64px; font-weight: 900; color: #000000; margin: 0;">456</div>
          <div style="font-size: 16px; font-weight: 700; color: #000000; margin-top: 1rem; letter-spacing: 2px;">DEPLOYS</div>
        </div>
      </div>
    </section>

    <!-- Code Editor Panel -->
    <section style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 4rem;">
      <div style="background: #1a1a1a; border: 4px solid #000000;">
        <!-- Editor Header -->
        <div style="background: #000000; border-bottom: 4px solid #ffffff; padding: 1rem; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; gap: 1rem;">
            <div style="padding: 0.5rem 1rem; background: #ff0000; color: #ffffff; font-weight: 700; font-size: 12px; letter-spacing: 1px; border: 2px solid #ffffff;">main.js</div>
            <div style="padding: 0.5rem 1rem; background: #000000; color: #999999; font-weight: 700; font-size: 12px; letter-spacing: 1px; border: 2px solid #333333;">styles.css</div>
            <div style="padding: 0.5rem 1rem; background: #000000; color: #999999; font-weight: 700; font-size: 12px; letter-spacing: 1px; border: 2px solid #333333;">index.html</div>
          </div>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <span style="color: #4ade80; font-weight: 700; font-size: 12px; letter-spacing: 1px;">● SAVED</span>
          </div>
        </div>

        <!-- Code Area -->
        <div style="padding: 2rem; font-family: 'Courier New', monospace; color: #4ade80; font-size: 14px; line-height: 1.8;">
          <div style="display: flex;">
            <div style="width: 60px; text-align: right; padding-right: 1.5rem; color: #666666; user-select: none;">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
            </div>
            <div style="flex: 1;">
              <div><span style="color: #ff0000;">function</span> <span style="color: #ffffff;">initApp</span>() {</div>
              <div>&nbsp;&nbsp;<span style="color: #ff0000;">const</span> <span style="color: #ffffff;">app</span> = <span style="color: #00ffff;">document</span>.<span style="color: #ffffff;">querySelector</span>(<span style="color: #ffd700;">'#app'</span>);</div>
              <div>&nbsp;&nbsp;<span style="color: #ff0000;">const</span> <span style="color: #ffffff;">config</span> = {</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ffffff;">theme:</span> <span style="color: #ffd700;">'dark'</span>,</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ffffff;">debug:</span> <span style="color: #00ffff;">true</span></div>
              <div>&nbsp;&nbsp;};</div>
              <div>&nbsp;&nbsp;</div>
              <div>&nbsp;&nbsp;<span style="color: #00ffff;">console</span>.<span style="color: #ffffff;">log</span>(<span style="color: #ffd700;">'App initialized!'</span>);</div>
              <div>&nbsp;&nbsp;<span style="color: #ff0000;">return</span> <span style="color: #ffffff;">app</span>;</div>
              <div>}</div>
            </div>
          </div>
        </div>

        <!-- Editor Footer -->
        <div style="background: #000000; border-top: 4px solid #ffffff; padding: 0.75rem 1.5rem; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: 700; color: #ffffff; letter-spacing: 1px;">
          <div>LINE: 5 | COL: 12</div>
          <div>UTF-8 | LF | JAVASCRIPT</div>
          <div style="color: #4ade80;">✓ NO ERRORS</div>
        </div>
      </div>
    </section>

    <!-- Terminal + Git History -->
    <section style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 4rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">

        <!-- Terminal Window -->
        <div style="background: #1a1a1a; border: 4px solid #000000;">
          <div style="background: #000000; border-bottom: 4px solid #ffffff; padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 14px; height: 14px; background: #ff0000; border: 2px solid #ffffff;"></div>
            <div style="width: 14px; height: 14px; background: #ffff00; border: 2px solid #ffffff;"></div>
            <div style="width: 14px; height: 14px; background: #00ff00; border: 2px solid #ffffff;"></div>
            <span style="font-weight: 900; color: #ffffff; font-size: 14px; margin-left: 1rem; letter-spacing: 1px;">TERMINAL</span>
          </div>
          <div style="padding: 2rem; font-family: 'Courier New', monospace; color: #4ade80; font-size: 14px; line-height: 1.8;">
            <div><span style="color: #ff0000;">user@dev-studio</span> <span style="color: #ffffff;">~</span> <span style="color: #00ffff;">$</span> npm run dev</div>
            <div style="color: #cccccc; margin-top: 0.5rem;">Starting development server...</div>
            <div style="color: #4ade80; margin-top: 0.25rem;">✓ Server running on http://localhost:3000</div>
            <div style="color: #4ade80; margin-top: 0.25rem;">✓ Compiled successfully in 2.34s</div>
            <div style="margin-top: 1rem;"><span style="color: #ff0000;">user@dev-studio</span> <span style="color: #ffffff;">~</span> <span style="color: #00ffff;">$</span> git status</div>
            <div style="color: #cccccc; margin-top: 0.5rem;">On branch main</div>
            <div style="color: #4ade80; margin-top: 0.25rem;">Your branch is up to date with 'origin/main'</div>
            <div style="margin-top: 1rem;"><span style="color: #ff0000;">user@dev-studio</span> <span style="color: #ffffff;">~</span> <span style="color: #00ffff;">$</span> <span class="terminal-cursor" style="background: #4ade80; animation: blink 1s infinite;">█</span></div>
          </div>
        </div>

        <!-- Git History -->
        <div style="background: #ffffff; border: 4px solid #000000; padding: 2rem;">
          <h3 style="font-size: 24px; font-weight: 900; margin: 0 0 2rem 0; color: #000000; letter-spacing: 2px; border-bottom: 4px solid #000000; padding-bottom: 1rem;">
            GIT COMMITS
          </h3>

          <!-- Commit 1 -->
          <div style="padding: 1.5rem; border: 4px solid #000000; margin-bottom: 1.5rem; background: #000000; color: #ffffff;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <div style="font-weight: 900; font-size: 14px; color: #ffffff; letter-spacing: 1px;">feat: Add dark mode toggle</div>
              <div style="padding: 0.25rem 0.75rem; background: #ff0000; color: #ffffff; font-weight: 900; font-size: 10px; letter-spacing: 1px;">
                NEW
              </div>
            </div>
            <div style="font-size: 12px; color: #cccccc; margin-bottom: 0.5rem;">Author: Tom Chen</div>
            <div style="font-size: 12px; color: #999999;">2 hours ago | branch: main | #a3c2f1</div>
          </div>

          <!-- Commit 2 -->
          <div style="padding: 1.5rem; border: 4px solid #000000; margin-bottom: 1.5rem; background: #f5f5f5;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <div style="font-weight: 900; font-size: 14px; color: #000000; letter-spacing: 1px;">fix: Resolve API timeout</div>
            </div>
            <div style="font-size: 12px; color: #666666; margin-bottom: 0.5rem;">Author: Sarah Kim</div>
            <div style="font-size: 12px; color: #999999;">5 hours ago | branch: main | #7b2e9a</div>
          </div>

          <!-- Commit 3 -->
          <div style="padding: 1.5rem; border: 4px solid #000000; background: #ffffff;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <div style="font-weight: 900; font-size: 14px; color: #000000; letter-spacing: 1px;">docs: Update README</div>
            </div>
            <div style="font-size: 12px; color: #666666; margin-bottom: 0.5rem;">Author: Mike Wang</div>
            <div style="font-size: 12px; color: #999999;">1 day ago | branch: develop | #f3a412</div>
          </div>
        </div>
      </div>
    </section>

    <!-- API Debugger + File Tree -->
    <section style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 4rem;">
      <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 0;">

        <!-- API Debugger -->
        <div style="background: #ffffff; border: 4px solid #000000; padding: 2rem;">
          <h3 style="font-size: 24px; font-weight: 900; margin: 0 0 2rem 0; color: #000000; letter-spacing: 2px; border-bottom: 4px solid #000000; padding-bottom: 1rem;">
            API DEBUGGER
          </h3>

          <!-- HTTP Method Selector -->
          <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
            <button style="padding: 0.75rem 1.5rem; background: #ff0000; color: #ffffff; border: 4px solid #000000; font-weight: 900; font-size: 14px; letter-spacing: 1px;">GET</button>
            <button style="padding: 0.75rem 1.5rem; background: #ffffff; color: #000000; border: 4px solid #000000; font-weight: 900; font-size: 14px; letter-spacing: 1px;">POST</button>
            <button style="padding: 0.75rem 1.5rem; background: #ffffff; color: #000000; border: 4px solid #000000; font-weight: 900; font-size: 14px; letter-spacing: 1px;">PUT</button>
            <button style="padding: 0.75rem 1.5rem; background: #ffffff; color: #000000; border: 4px solid #000000; font-weight: 900; font-size: 14px; letter-spacing: 1px;">DELETE</button>
          </div>

          <!-- URL Input -->
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 900; font-size: 12px; margin-bottom: 0.75rem; letter-spacing: 2px;">ENDPOINT</label>
            <input type="text" value="https://api.example.com/users" style="width: 100%; padding: 1rem; border: 4px solid #000000; background: #f5f5f5; color: #000000; font-weight: 700; font-size: 14px; font-family: 'Courier New', monospace;">
          </div>

          <!-- Request Headers -->
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 900; font-size: 12px; margin-bottom: 0.75rem; letter-spacing: 2px;">HEADERS</label>
            <textarea style="width: 100%; height: 80px; padding: 1rem; border: 4px solid #000000; background: #f5f5f5; color: #000000; font-weight: 400; font-size: 12px; font-family: 'Courier New', monospace; resize: none;">Content-Type: application/json
Authorization: Bearer token123</textarea>
          </div>

          <!-- Send Button -->
          <button style="width: 100%; padding: 1.25rem; background: #000000; color: #ffffff; border: 4px solid #000000; font-weight: 900; font-size: 16px; letter-spacing: 2px; cursor: pointer; margin-bottom: 1.5rem;">
            SEND REQUEST
          </button>

          <!-- Response Area -->
          <div style="background: #1a1a1a; border: 4px solid #000000; padding: 1.5rem; font-family: 'Courier New', monospace; color: #4ade80; font-size: 12px;">
            <div style="margin-bottom: 1rem; color: #ffffff; font-weight: 900; letter-spacing: 1px;">RESPONSE (200 OK)</div>
            <div style="color: #cccccc;">{ </div>
            <div style="margin-left: 1rem; color: #ffd700;">&nbsp;&nbsp;"status": <span style="color: #4ade80;">"success"</span>,</div>
            <div style="margin-left: 1rem; color: #ffd700;">&nbsp;&nbsp;"data": <span style="color: #00ffff;">[...]</span></div>
            <div style="color: #cccccc;">}</div>
          </div>
        </div>

        <!-- File Tree -->
        <div style="background: #000000; border: 4px solid #000000; padding: 2rem; color: #ffffff;">
          <h3 style="font-size: 24px; font-weight: 900; margin: 0 0 2rem 0; color: #ffffff; letter-spacing: 2px; border-bottom: 4px solid #ffffff; padding-bottom: 1rem;">
            FILE TREE
          </h3>

          <div style="font-family: 'Courier New', monospace; font-size: 13px; line-height: 2;">
            <div style="color: #ff0000; font-weight: 900;">📁 project-root/</div>
            <div style="margin-left: 1.5rem;">
              <div style="color: #ffffff; font-weight: 700;">📁 src/</div>
              <div style="margin-left: 1.5rem;">
                <div style="color: #4ade80;">📄 index.js</div>
                <div style="color: #4ade80;">📄 App.js</div>
                <div style="color: #ffffff; font-weight: 700; margin-top: 0.5rem;">📁 components/</div>
                <div style="margin-left: 1.5rem;">
                  <div style="color: #4ade80;">📄 Header.js</div>
                  <div style="color: #4ade80;">📄 Footer.js</div>
                  <div style="color: #4ade80;">📄 Sidebar.js</div>
                </div>
                <div style="color: #ffffff; font-weight: 700; margin-top: 0.5rem;">📁 utils/</div>
                <div style="margin-left: 1.5rem;">
                  <div style="color: #4ade80;">📄 helpers.js</div>
                  <div style="color: #4ade80;">📄 constants.js</div>
                </div>
              </div>
              <div style="color: #ffffff; font-weight: 700; margin-top: 0.5rem;">📁 public/</div>
              <div style="margin-left: 1.5rem;">
                <div style="color: #00ffff;">📄 index.html</div>
                <div style="color: #cccccc;">📄 favicon.ico</div>
              </div>
              <div style="color: #ffd700; margin-top: 0.5rem;">📄 package.json</div>
              <div style="color: #cccccc;">📄 .gitignore</div>
              <div style="color: #cccccc;">📄 README.md</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System Monitor -->
    <section style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 4rem;">
      <div style="background: #ffffff; border: 4px solid #000000; padding: 3rem;">
        <h2 style="font-size: 32px; font-weight: 900; margin: 0 0 2rem 0; color: #000000; border-bottom: 4px solid #000000; padding-bottom: 1rem; letter-spacing: 2px;">
          SYSTEM MONITOR
        </h2>

        <div style="display: grid; gap: 2rem;">
          <!-- CPU Usage -->
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
              <span style="font-weight: 900; font-size: 14px; letter-spacing: 1px;">CPU USAGE</span>
              <span style="font-weight: 900; font-size: 14px; color: #ff0000;">72%</span>
            </div>
            <div style="width: 100%; height: 30px; background: #f5f5f5; border: 4px solid #000000; overflow: hidden;">
              <div style="width: 72%; height: 100%; background: #ff0000;"></div>
            </div>
          </div>

          <!-- Memory -->
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
              <span style="font-weight: 900; font-size: 14px; letter-spacing: 1px;">MEMORY</span>
              <span style="font-weight: 900; font-size: 14px; color: #000000;">8.2 / 16 GB</span>
            </div>
            <div style="width: 100%; height: 30px; background: #f5f5f5; border: 4px solid #000000; overflow: hidden;">
              <div style="width: 51%; height: 100%; background: #000000;"></div>
            </div>
          </div>

          <!-- Disk -->
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
              <span style="font-weight: 900; font-size: 14px; letter-spacing: 1px;">DISK SPACE</span>
              <span style="font-weight: 900; font-size: 14px; color: #000000;">124 / 512 GB</span>
            </div>
            <div style="width: 100%; height: 30px; background: #f5f5f5; border: 4px solid #000000; overflow: hidden;">
              <div style="width: 24%; height: 100%; background: #000000;"></div>
            </div>
          </div>

          <!-- Network -->
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
              <span style="font-weight: 900; font-size: 14px; letter-spacing: 1px;">NETWORK</span>
              <span style="font-weight: 900; font-size: 14px; color: #4ade80;">↓ 2.3 MB/s | ↑ 0.8 MB/s</span>
            </div>
            <div style="width: 100%; height: 30px; background: #f5f5f5; border: 4px solid #000000; overflow: hidden;">
              <div style="width: 45%; height: 100%; background: #4ade80;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 4rem;">
      <div style="background: #000000; border: 4px solid #000000; padding: 3rem;">
        <h2 style="font-size: 32px; font-weight: 900; margin: 0 0 2rem 0; color: #ffffff; border-bottom: 4px solid #ffffff; padding-bottom: 1rem; letter-spacing: 2px;">
          QUICK ACTIONS
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
          <!-- Action 1 -->
          <div style="background: #ffffff; border: 4px solid #ffffff; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s;">
            <div style="font-size: 32px; margin-bottom: 1rem;">⌘</div>
            <div style="font-weight: 900; font-size: 14px; color: #000000; letter-spacing: 1px;">CMD + S</div>
            <div style="font-size: 12px; color: #666666; margin-top: 0.5rem;">SAVE FILE</div>
          </div>

          <!-- Action 2 -->
          <div style="background: #ff0000; border: 4px solid #ffffff; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s;">
            <div style="font-size: 32px; margin-bottom: 1rem;">⌘</div>
            <div style="font-weight: 900; font-size: 14px; color: #ffffff; letter-spacing: 1px;">CMD + K</div>
            <div style="font-size: 12px; color: #ffffff; margin-top: 0.5rem;">COMMAND PALETTE</div>
          </div>

          <!-- Action 3 -->
          <div style="background: #ffffff; border: 4px solid #ffffff; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s;">
            <div style="font-size: 32px; margin-bottom: 1rem;">⌘</div>
            <div style="font-weight: 900; font-size: 14px; color: #000000; letter-spacing: 1px;">CMD + F</div>
            <div style="font-size: 12px; color: #666666; margin-top: 0.5rem;">FIND IN FILES</div>
          </div>

          <!-- Action 4 -->
          <div style="background: #ffffff; border: 4px solid #ffffff; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s;">
            <div style="font-size: 32px; margin-bottom: 1rem;">⌘</div>
            <div style="font-weight: 900; font-size: 14px; color: #000000; letter-spacing: 1px;">CMD + B</div>
            <div style="font-size: 12px; color: #666666; margin-top: 0.5rem;">BUILD PROJECT</div>
          </div>

          <!-- Action 5 -->
          <div style="background: #ffffff; border: 4px solid #ffffff; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s;">
            <div style="font-size: 32px; margin-bottom: 1rem;">⌘</div>
            <div style="font-weight: 900; font-size: 14px; color: #000000; letter-spacing: 1px;">CMD + T</div>
            <div style="font-size: 12px; color: #666666; margin-top: 0.5rem;">RUN TESTS</div>
          </div>

          <!-- Action 6 -->
          <div style="background: #ffffff; border: 4px solid #ffffff; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s;">
            <div style="font-size: 32px; margin-bottom: 1rem;">⌘</div>
            <div style="font-weight: 900; font-size: 14px; color: #000000; letter-spacing: 1px;">CMD + D</div>
            <div style="font-size: 12px; color: #666666; margin-top: 0.5rem;">START DEBUG</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="background: #000000; color: #ffffff; padding: 4rem 2rem; border-top: 4px solid #ff0000;">
      <div style="max-width: 1400px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
          <!-- Brand -->
          <div>
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="width: 50px; height: 50px; background: #ff0000; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 24px; font-weight: 900; color: #000000;">&lt;/&gt;</span>
              </div>
              <span style="font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: 2px;">DEV STUDIO</span>
            </div>
            <p style="font-weight: 400; color: #cccccc; line-height: 1.6;">BRUTALIST DEVELOPER WORKSPACE. NO COMPROMISE.</p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 style="font-weight: 900; font-size: 18px; margin-bottom: 1.5rem; letter-spacing: 2px;">RESOURCES</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <a href="javascript:void(0)" style="color: #cccccc; text-decoration: none; font-weight: 700; transition: all 0.2s;">DOCUMENTATION</a>
              <a href="javascript:void(0)" style="color: #cccccc; text-decoration: none; font-weight: 700; transition: all 0.2s;">API REFERENCE</a>
              <a href="javascript:void(0)" style="color: #cccccc; text-decoration: none; font-weight: 700; transition: all 0.2s;">TUTORIALS</a>
              <a href="javascript:void(0)" style="color: #cccccc; text-decoration: none; font-weight: 700; transition: all 0.2s;">CHANGELOG</a>
            </div>
          </div>

          <!-- Support -->
          <div>
            <h3 style="font-weight: 900; font-size: 18px; margin-bottom: 1.5rem; letter-spacing: 2px;">SUPPORT</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <a href="javascript:void(0)" style="color: #cccccc; text-decoration: none; font-weight: 700; transition: all 0.2s;">HELP CENTER</a>
              <a href="javascript:void(0)" style="color: #cccccc; text-decoration: none; font-weight: 700; transition: all 0.2s;">CONTACT US</a>
              <a href="javascript:void(0)" style="color: #cccccc; text-decoration: none; font-weight: 700; transition: all 0.2s;">REPORT BUG</a>
              <a href="javascript:void(0)" style="color: #cccccc; text-decoration: none; font-weight: 700; transition: all 0.2s;">FEATURE REQUEST</a>
            </div>
          </div>

          <!-- Social -->
          <div>
            <h3 style="font-weight: 900; font-size: 18px; margin-bottom: 1.5rem; letter-spacing: 2px;">CONNECT</h3>
            <div style="display: flex; gap: 1rem;">
              <a href="javascript:void(0)" style="width: 50px; height: 50px; background: #ffffff; color: #000000; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; transition: all 0.2s; text-decoration: none;">G</a>
              <a href="javascript:void(0)" style="width: 50px; height: 50px; background: #ffffff; color: #000000; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; transition: all 0.2s; text-decoration: none;">T</a>
              <a href="javascript:void(0)" style="width: 50px; height: 50px; background: #ff0000; color: #ffffff; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; transition: all 0.2s; text-decoration: none;">L</a>
              <a href="javascript:void(0)" style="width: 50px; height: 50px; background: #ffffff; color: #000000; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; transition: all 0.2s; text-decoration: none;">Y</a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div style="border-top: 2px solid #ffffff; padding-top: 2rem; text-align: center;">
          <p style="font-weight: 700; font-size: 16px; color: #cccccc; margin: 0; letter-spacing: 1px;">
            © 2025 DEV STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  </div>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色黑白对比 (#000000, #FFFFFF)、程序员主题色 (#FF6B35, #4ECDC4, #45B7D1)、代码语法高亮 (#F8F8F2, #F92672, #66D9EF, #A6E22E)
`;

export const brutalismDevWorkspaceStyles = `
  /* Brutalism Developer Workspace Complete Styles */

  /* Navigation Link Hover */
  nav a:hover {
    border: 2px solid #ffffff !important;
    background: #ff0000 !important;
    color: #000000 !important;
  }

  /* Button Hover Effects */
  button:hover {
    transform: scale(1.02) !important;
    opacity: 0.95;
  }

  /* Input Focus Effects */
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #ff0000 !important;
  }

  /* Terminal Cursor Blink */
  @keyframes blink {
    0%, 49% {
      opacity: 1;
    }
    50%, 100% {
      opacity: 0;
    }
  }

  .terminal-cursor {
    display: inline-block;
    width: 10px;
    height: 18px;
  }

  /* Status Pulse Animation */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }

  /* Quick Action Card Hover */
  section > div > div > div:hover {
    transform: translateY(-4px) !important;
    background: #ff0000 !important;
    color: #ffffff !important;
  }

  section > div > div > div:hover div:first-child,
  section > div > div > div:hover div:last-child {
    color: #ffffff !important;
  }

  /* Footer Link Hover */
  footer a:hover {
    color: #ff0000 !important;
  }

  /* Footer Social Button Hover */
  footer div[style*="display: flex; gap: 1rem;"] > a:hover {
    background: #ff0000 !important;
    color: #ffffff !important;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    nav > div {
      flex-direction: column !important;
      gap: 1rem !important;
    }

    nav > div > div {
      flex-wrap: wrap;
      justify-content: center;
    }

    section > div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
    }

    h1 {
      font-size: 48px !important;
    }

    h2 {
      font-size: 24px !important;
    }

    h3 {
      font-size: 20px !important;
    }
  }

  @media (max-width: 768px) {
    nav input {
      width: 100% !important;
    }

    h1 {
      font-size: 36px !important;
    }

    h2 {
      font-size: 20px !important;
    }

    .stats-grid,
    section > div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
    }

    button {
      padding: 1rem 2rem !important;
      font-size: 14px !important;
    }

    footer > div > div:first-child {
      grid-template-columns: 1fr !important;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    section > div[style*="grid-template-columns: repeat(auto-fit"] {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }

  /* Page Container */
  .min-full-page {
    min-height: 100vh;
  }

  /* Smooth Scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Selection Color */
  ::selection {
    background: #ff0000;
    color: #ffffff;
  }
`;
