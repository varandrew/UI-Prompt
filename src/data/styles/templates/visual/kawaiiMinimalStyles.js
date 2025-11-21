// Kawaii Minimal 風格定義
// ✅ 階段 3.2 优化: 移除所有静態 import，改用動態加載
// 預期減少構建体積：25 KB

export const kawaiiMinimalStyles = [
  {
    id: 'kawaii-minimal',
    title: 'styles.visual.kawaii-minimal.title',
    description: 'styles.visual.kawaii-minimal.description',
    demoHTML: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 2rem; background: linear-gradient(135deg, #FFF9F5 0%, #FFFFFF 100%); border-radius: 20px; position: relative; overflow: hidden;">

        <!-- 🎈 浮動裝飾形狀 (6個) -->
        <!-- 粉紅愛心 -->
        <div style="position: absolute; top: 20px; left: 30px; animation: kawaii-float 4s ease-in-out infinite;">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path d="M 16 28 C 16 28 4 18 4 12 C 4 8 7 6 10 6 C 12 6 14 7 16 9 C 18 7 20 6 22 6 C 25 6 28 8 28 12 C 28 18 16 28 16 28 Z" fill="#FFB6D9" opacity="0.6"/>
          </svg>
        </div>
        <!-- 紫色星星 -->
        <div style="position: absolute; top: 50px; right: 40px; animation: kawaii-rotate 12s linear infinite;">
          <svg width="28" height="28" viewBox="0 0 28 28">
            <path d="M 14 2 L 16 10 L 24 10 L 18 15 L 20 24 L 14 19 L 8 24 L 10 15 L 4 10 L 12 10 Z" fill="#E6D5FF" opacity="0.5"/>
          </svg>
        </div>
        <!-- 黃色笑臉 -->
        <div style="position: absolute; top: 140px; left: 20px; animation: kawaii-pulse 3s ease-in-out infinite;">
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="13" fill="none" stroke="#FFE87C" stroke-width="2" opacity="0.7"/>
            <circle cx="11" cy="12" r="1.5" fill="#FFE87C"/>
            <circle cx="19" cy="12" r="1.5" fill="#FFE87C"/>
            <path d="M 9 17 Q 15 21 21 17" stroke="#FFE87C" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
        </div>
        <!-- 綠色云朵 -->
        <div style="position: absolute; bottom: 100px; right: 30px; animation: kawaii-float 5s ease-in-out infinite;">
          <svg width="36" height="24" viewBox="0 0 36 24">
            <path d="M 8 16 C 4 16 2 13 2 10 C 2 7 4 5 7 5 C 8 3 10 2 12 2 C 15 2 17 4 18 6 C 19 5 21 5 23 5 C 26 5 28 7 28 10 C 28 13 26 15 23 15 L 8 16 Z" fill="#A8E6CF" opacity="0.5" transform="translate(4, 4)"/>
          </svg>
        </div>
        <!-- 粉紅音符 -->
        <div style="position: absolute; bottom: 60px; left: 50px; animation: kawaii-float 3.5s ease-in-out infinite;">
          <svg width="24" height="32" viewBox="0 0 24 32">
            <circle cx="8" cy="24" r="4" fill="#FFC1E3"/>
            <rect x="12" y="4" width="3" height="20" fill="#FFC1E3" rx="1.5"/>
            <path d="M 12 4 Q 20 2 20 8" stroke="#FFC1E3" stroke-width="3" fill="none" stroke-linecap="round"/>
          </svg>
        </div>
        <!-- 薰衣草禮物 -->
        <div style="position: absolute; bottom: 140px; left: 45%; animation: kawaii-pulse 4s ease-in-out infinite;">
          <svg width="28" height="28" viewBox="0 0 28 28">
            <rect x="6" y="10" width="16" height="14" rx="2" fill="none" stroke="#E6D5FF" stroke-width="2"/>
            <path d="M 14 10 L 14 2 M 6 10 L 6 6 L 14 2 L 22 6 L 22 10" stroke="#E6D5FF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="6" y1="17" x2="22" y2="17" stroke="#E6D5FF" stroke-width="2"/>
          </svg>
        </div>

        <!-- 📌 Header 区 - 仅显示标題 -->
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 style="font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #FFB6D9 0%, #E6D5FF 50%, #A8E6CF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 0; letter-spacing: -0.5px;">Kawaii Minimal</h2>
        </div>

        <!-- 🎨 Mini Navigation (5個純色塊) -->
        <div style="display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem;">
          <div style="width: 48px; height: 10px; background: linear-gradient(135deg, #FFB6D9, #FFC1E3); border-radius: 999px; box-shadow: 0 2px 8px rgba(255,182,217,0.3); transition: transform 0.3s;" class="kawaii-nav-item"></div>
          <div style="width: 48px; height: 10px; background: linear-gradient(135deg, #E6D5FF, #C9A0FF); border-radius: 999px; box-shadow: 0 2px 8px rgba(230,213,255,0.3); transition: transform 0.3s;" class="kawaii-nav-item"></div>
          <div style="width: 48px; height: 10px; background: linear-gradient(135deg, #FFE87C, #FFFACD); border-radius: 999px; box-shadow: 0 2px 8px rgba(255,232,124,0.3); transition: transform 0.3s;" class="kawaii-nav-item"></div>
          <div style="width: 48px; height: 10px; background: linear-gradient(135deg, #A8E6CF, #D4F4DD); border-radius: 999px; box-shadow: 0 2px 8px rgba(168,230,207,0.3); transition: transform 0.3s;" class="kawaii-nav-item"></div>
          <div style="width: 48px; height: 10px; background: linear-gradient(135deg, #AED9E0, #B8E3E9); border-radius: 999px; box-shadow: 0 2px 8px rgba(174,217,224,0.3); transition: transform 0.3s;" class="kawaii-nav-item"></div>
        </div>

        <!-- 📊 Statistics Cards (4列网格) -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
          <!-- 卡片 1: 笑臉圖标 -->
          <div style="background: linear-gradient(135deg, #FFE5EC, #FFFFFF); padding: 1.25rem 1rem; border-radius: 20px; text-align: center; border: 2px solid #FFB6D9; transition: all 0.3s;" class="kawaii-stat-card">
            <svg width="36" height="36" viewBox="0 0 36 36" style="margin: 0 auto;">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#FFB6D9" stroke-width="2.5"/>
              <circle cx="13" cy="15" r="2" fill="#FFB6D9"/>
              <circle cx="23" cy="15" r="2" fill="#FFB6D9"/>
              <path d="M 11 22 Q 18 28 25 22" stroke="#FFB6D9" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
          <!-- 卡片 2: 星星圖标 -->
          <div style="background: linear-gradient(135deg, #F3E5FF, #FFFFFF); padding: 1.25rem 1rem; border-radius: 20px; text-align: center; border: 2px solid #E6D5FF; transition: all 0.3s;" class="kawaii-stat-card">
            <svg width="36" height="36" viewBox="0 0 36 36" style="margin: 0 auto;">
              <path d="M 18 4 L 20.5 14 L 30 14 L 22.5 20 L 25 30 L 18 24 L 11 30 L 13.5 20 L 6 14 L 15.5 14 Z" stroke="#E6D5FF" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
            </svg>
          </div>
          <!-- 卡片 3: 愛心圖标 -->
          <div style="background: linear-gradient(135deg, #FFF8DC, #FFFFFF); padding: 1.25rem 1rem; border-radius: 20px; text-align: center; border: 2px solid #FFE87C; transition: all 0.3s;" class="kawaii-stat-card">
            <svg width="36" height="36" viewBox="0 0 36 36" style="margin: 0 auto;">
              <path d="M 18 30 C 18 30 6 20 6 13 C 6 9 9 7 12 7 C 14.5 7 16.5 8.5 18 11 C 19.5 8.5 21.5 7 24 7 C 27 7 30 9 30 13 C 30 20 18 30 18 30 Z" stroke="#FFE87C" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
            </svg>
          </div>
          <!-- 卡片 4: 鈴鐺圖标 -->
          <div style="background: linear-gradient(135deg, #E8F8F5, #FFFFFF); padding: 1.25rem 1rem; border-radius: 20px; text-align: center; border: 2px solid #A8E6CF; transition: all 0.3s;" class="kawaii-stat-card">
            <svg width="36" height="36" viewBox="0 0 36 36" style="margin: 0 auto;">
              <path d="M 18 6 L 18 8 M 12 26 L 24 26 M 18 8 C 14 8 11 11 11 15 L 11 21 C 11 23 10 24 9 25 L 27 25 C 26 24 25 23 25 21 L 25 15 C 25 11 22 8 18 8 Z" stroke="#A8E6CF" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M 15 26 C 15 28 16 30 18 30 C 20 30 21 28 21 26" stroke="#A8E6CF" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <!-- 🎯 Content Grid (3x2 网格) -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
          <!-- 粉紅漸变卡片 -->
          <div style="background: linear-gradient(135deg, #FFC1E3, #FFE5EC); padding: 1.5rem; border-radius: 24px; display: flex; align-items: center; justify-content: center; min-height: 80px; transition: all 0.3s;" class="kawaii-content-card">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="12" stroke="#FFFFFF" stroke-width="2" fill="none"/>
              <path d="M 12 14 L 15 17 L 21 11" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <!-- 紫色漸变卡片 -->
          <div style="background: linear-gradient(135deg, #C9A0FF, #E5D4FF); padding: 1.5rem; border-radius: 24px; display: flex; align-items: center; justify-content: center; min-height: 80px; transition: all 0.3s;" class="kawaii-content-card">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <rect x="8" y="8" width="16" height="16" rx="4" stroke="#FFFFFF" stroke-width="2" fill="none"/>
              <path d="M 12 16 L 16 20 L 24 12" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <!-- 黃色漸变卡片 -->
          <div style="background: linear-gradient(135deg, #FFFACD, #FFF8DC); padding: 1.5rem; border-radius: 24px; display: flex; align-items: center; justify-content: center; min-height: 80px; transition: all 0.3s;" class="kawaii-content-card">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path d="M 16 6 L 18 14 L 26 14 L 20 19 L 22 27 L 16 22 L 10 27 L 12 19 L 6 14 L 14 14 Z" stroke="#FFE87C" stroke-width="2" fill="none"/>
            </svg>
          </div>
          <!-- 綠色漸变卡片 -->
          <div style="background: linear-gradient(135deg, #A8E6CF, #D4F4DD); padding: 1.5rem; border-radius: 24px; display: flex; align-items: center; justify-content: center; min-height: 80px; transition: all 0.3s;" class="kawaii-content-card">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="10" stroke="#FFFFFF" stroke-width="2" fill="none"/>
              <path d="M 16 10 L 16 16 L 21 19" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <!-- 藍綠漸变卡片 -->
          <div style="background: linear-gradient(135deg, #AED9E0, #B8E3E9); padding: 1.5rem; border-radius: 24px; display: flex; align-items: center; justify-content: center; min-height: 80px; transition: all 0.3s;" class="kawaii-content-card">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path d="M 10 12 L 16 6 L 22 12 M 16 6 L 16 20 M 10 20 L 22 20 L 22 26 L 10 26 Z" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <!-- 淡粉漸变卡片 -->
          <div style="background: linear-gradient(135deg, #FFDBE9, #FFF0F5); padding: 1.5rem; border-radius: 24px; display: flex; align-items: center; justify-content: center; min-height: 80px; transition: all 0.3s;" class="kawaii-content-card">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path d="M 8 16 C 8 16 11 11 16 11 C 21 11 24 16 24 16 C 24 16 21 21 16 21 C 11 21 8 16 8 16 Z" stroke="#FFB6D9" stroke-width="2" fill="none"/>
              <circle cx="16" cy="16" r="3" stroke="#FFB6D9" stroke-width="2" fill="none"/>
            </svg>
          </div>
        </div>

        <!-- 🔘 Interactive Elements -->
        <div style="margin-bottom: 1.5rem;">
          <!-- 3個按鈕 (無文字) -->
          <div style="display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap;">
            <div style="width: 60px; height: 40px; background: linear-gradient(135deg, #FFB6D9, #E6D5FF); border-radius: 999px; box-shadow: 0 4px 12px rgba(255,182,217,0.35); transition: all 0.3s; cursor: pointer;" class="kawaii-button"></div>
            <div style="width: 60px; height: 40px; background: linear-gradient(135deg, #E6D5FF, #C9A0FF); border-radius: 999px; box-shadow: 0 4px 12px rgba(230,213,255,0.35); transition: all 0.3s; cursor: pointer;" class="kawaii-button"></div>
            <div style="width: 60px; height: 40px; background: transparent; border: 2.5px solid #A8E6CF; border-radius: 999px; transition: all 0.3s; cursor: pointer;" class="kawaii-button"></div>
          </div>

          <!-- 3個進度條 (無标籤) -->
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem;">
            <div style="width: 100%; height: 8px; background: #F5F5F5; border-radius: 999px; overflow: hidden;">
              <div style="width: 75%; height: 100%; background: linear-gradient(90deg, #FFB6D9, #FFC1E3); border-radius: 999px;"></div>
            </div>
            <div style="width: 100%; height: 8px; background: #F5F5F5; border-radius: 999px; overflow: hidden;">
              <div style="width: 60%; height: 100%; background: linear-gradient(90deg, #E6D5FF, #C9A0FF); border-radius: 999px;"></div>
            </div>
            <div style="width: 100%; height: 8px; background: #F5F5F5; border-radius: 999px; overflow: hidden;">
              <div style="width: 90%; height: 100%; background: linear-gradient(90deg, #A8E6CF, #D4F4DD); border-radius: 999px;"></div>
            </div>
          </div>

          <!-- 8個标籤 (純色塊，無文字) -->
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;">
            <div style="width: 52px; height: 26px; background: linear-gradient(135deg, #FFB6D9, #FFDBE9); border-radius: 999px; box-shadow: 0 2px 6px rgba(255,182,217,0.25);"></div>
            <div style="width: 52px; height: 26px; background: linear-gradient(135deg, #E6D5FF, #F5EDFF); border-radius: 999px; box-shadow: 0 2px 6px rgba(230,213,255,0.25);"></div>
            <div style="width: 52px; height: 26px; background: linear-gradient(135deg, #FFE87C, #FFFACD); border-radius: 999px; box-shadow: 0 2px 6px rgba(255,232,124,0.25);"></div>
            <div style="width: 52px; height: 26px; background: linear-gradient(135deg, #A8E6CF, #D4F4DD); border-radius: 999px; box-shadow: 0 2px 6px rgba(168,230,207,0.25);"></div>
            <div style="width: 52px; height: 26px; background: linear-gradient(135deg, #AED9E0, #B8E3E9); border-radius: 999px; box-shadow: 0 2px 6px rgba(174,217,224,0.25);"></div>
            <div style="width: 52px; height: 26px; background: linear-gradient(135deg, #FFC1E3, #FFE5EC); border-radius: 999px; box-shadow: 0 2px 6px rgba(255,193,227,0.25);"></div>
            <div style="width: 52px; height: 26px; background: linear-gradient(135deg, #C9A0FF, #E5D4FF); border-radius: 999px; box-shadow: 0 2px 6px rgba(201,160,255,0.25);"></div>
            <div style="width: 52px; height: 26px; background: linear-gradient(135deg, #FFFACD, #FFF8DC); border-radius: 999px; box-shadow: 0 2px 6px rgba(255,250,205,0.25);"></div>
          </div>
        </div>

        <!-- 🎨 Bottom Decoration (3個大型漸变圓形) -->
        <div style="position: relative; height: 60px; margin-top: 1rem;">
          <div style="position: absolute; left: 10%; bottom: -20px; width: 80px; height: 80px; background: radial-gradient(circle, rgba(255,182,217,0.3), rgba(255,182,217,0)); border-radius: 50%;"></div>
          <div style="position: absolute; left: 40%; bottom: -30px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(230,213,255,0.25), rgba(230,213,255,0)); border-radius: 50%;"></div>
          <div style="position: absolute; right: 15%; bottom: -25px; width: 90px; height: 90px; background: radial-gradient(circle, rgba(168,230,207,0.28), rgba(168,230,207,0)); border-radius: 50%;"></div>
        </div>

        <!-- 🎬 動画樣式 -->
        <style>
          @keyframes kawaii-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          @keyframes kawaii-pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.08); opacity: 0.9; }
          }
          @keyframes kawaii-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .kawaii-nav-item:hover {
            transform: translateY(-3px) scale(1.05);
          }
          .kawaii-stat-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 20px rgba(255, 182, 217, 0.3);
          }
          .kawaii-content-card:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          }
          .kawaii-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 16px rgba(255, 182, 217, 0.4);
          }
        </style>
      </div>
    `,
    // ✅ 階段 3.2: 改用動態加載 ID
    fullPagePreviewId: 'kawaii-minimal',
    // Kawaii Minimal 風格 StylePrompt（較長版）
    stylePrompt: {
      'zh-CN': `角色：你是一位专精于 Kawaii + Minimal 视觉语言的 UI 设计师，需要为面向年轻用户的仪表板或创意工具设计一套「可爱但不杂乱」的界面。

场景定位：
界面适用于插画工具、创意工作台、学习看板或轻量任务管理应用，目标用户多为学生、设计师或内容创作者。他们希望界面在情绪上给人鼓励、放松和陪伴感，同时仍然保持「好用」「清晰」「不会被过度装饰干扰」的使用体验。

视觉设计理念：
Kawaii Minimal 并不是简单地堆叠可爱元素，而是在清晰布局和信息层级之上，点缀少量「糖果色、笑脸和圆角」。背景保持非常柔和的奶油白或淡粉渐变，让整个画面显得明亮而轻盈；主卡片与模块保留极简结构，只在关键区域使用高饱和的糖果色渐变来表达情绪。整体要给人「干净、甜但不过度甜腻」的印象。

材质与质感：
视觉材质偏向平滑、柔软的塑料与贴纸感：大尺寸圆角卡片像被贴在白板上的色纸，按钮则像小软糖或圆角胶囊。大部分区域保持纯色或轻微渐变，不使用复杂纹理，以保持模块边界清晰。图标与小插图通过简化形体和明亮配色传达可爱感，而不是追求写实细节；适度使用手写感标题或手绘线条增强亲密感，但正文仍保持易读的系统无衬线字体。

交互体验：
交互强调「轻、软、弹」的感觉。按钮在悬停时略微上浮并伴随小幅弹跳或放大，像小软糖被轻轻弹起；卡片在 hover 时轻微提亮或产生 1–2 像素的位移，制造「被注意到」但不紧张的反馈。动效时长略长于常规企业 UI（200–300ms），缓动曲线偏向 ease-out 或带一点回弹，增强可爱与轻盈感。所有负面状态（错误、删除）也尽量以柔和的方式呈现，避免带来过度压力。

氛围营造：
整体氛围像是干净的文具桌或贴满贴纸的笔记本封面：到处都有小面积的可爱元素，但画面中心仍然留给内容本身。粉、紫、薄荷绿和奶油黄等糖果色只在按钮、标签、图标中出现，背景和大块区域仍使用低饱和浅色维持视觉平衡。使用时，用户应该感觉「这是一个会让自己心情变好、但又能认真完成任务的空间」。`,
      'en-US': `Role: You are a UI designer specialized in Kawaii + Minimal aesthetics, designing an interface that feels cute and friendly without becoming cluttered or childish.

Scenario Positioning:
This style suits illustration tools, creative dashboards, study planners, or light‑weight task managers aimed at younger users, students, and creators. The UI should offer emotional comfort and encouragement while staying functional, clear, and free from overwhelming decoration.

Visual Design Philosophy:
Kawaii Minimal builds cuteness on top of a clean, minimal layout. The background stays very soft—creamy whites and light pastels—while primary cards and modules keep simple structures with strong hierarchy. Candy colors, smiley icons, and rounded shapes are used as accents rather than the entire palette. The intended impression is “bright, sweet, approachable, but still tidy and usable”.

Materials & Textures:
Visual materials resemble smooth plastic and stickers: large high‑radius cards feel like color paper pieces, and buttons resemble small gummy candies or pill capsules. Most surfaces are flat color or gentle gradients with no heavy textures, so sections remain legible. Icons are simplified and expressive rather than realistic; handwritten‑style headings or doodle lines can be used sparingly to add personality, while body text remains in a clean sans‑serif font for readability.

Interaction Experience:
Interactions should feel light, soft, and slightly bouncy. Primary buttons float up a bit and may “bounce” subtly on hover; cards respond with mild lighting and tiny position shifts to signal focus without tension. Animation timings around 200–300ms with easing curves that gently overshoot create a playful yet controlled feel. Even error and destructive states should be presented in a gentle, non‑stressful way, keeping the emotional tone positive.

Atmosphere:
The overall mood is that of a neat stationery desk or a sticker‑decorated notebook cover. Cute elements are scattered across the interface, but content remains center stage. Candy pinks, lavenders, mint greens, and soft yellows appear mainly on buttons, tags, and icons, while large areas rely on desaturated light tones to avoid overload. Users should feel that this is a place where they can smile, relax, and still get real work done.`
    },
    // Kawaii Minimal CustomPrompt（模板級 AI 指令）
    customPrompt: {
      'zh-CN': `请使用 TailwindCSS 创建一个 **Kawaii Minimal（可爱极简）** 风格的界面，在保持结构简洁的前提下加入糖果色、圆角和表情化小元素。

**核心设计要求**

1. **柔和背景与整体气氛**
   - 背景使用奶油白 / 浅粉渐变：\`#FFF9F5 → #FFFFFF\`、\`from-rose-50 via-pink-50 to-white\`。
   - 气氛关键词：甜、轻、治愈、没有压力。

2. **圆角与卡片造型**
   - 卡片圆角半径偏大：\`20px–28px\`，按钮圆角可到 \`9999px\`（胶囊形）。
   - 阴影轻盈柔和：\`0 4px 12px rgba(255, 182, 217, 0.25)\` 之类。
   - Tailwind 示例：
     \`\`\`html
     <div class="bg-white rounded-[24px] shadow-[0_8px_24px_rgba(248,187,208,0.35)] border border-pink-100/80 p-6">
       <!-- Kawaii card content -->
     </div>
     \`\`\`

3. **糖果色配色系统**
   - 主色：粉红、薰衣草紫、薄荷绿、奶油黄。
   - 示例色值：
     - 粉：\`#FFB6D9\`、\`#FFDBE9\`
     - 紫：\`#E6D5FF\`
     - 绿：\`#D4F1D4\`
     - 黄：\`#FFF9E6\`
   - 按钮常用渐变：
     \`\`\`css
     .kawaii-btn-primary {
       background: linear-gradient(135deg, #FFB6D9, #E6D5FF);
       color: #333333;
     }
     \`\`\`

4. **表情化图标与排版**
   - 使用简单几何图形组合成可爱图标（星星、笑脸、爱心等）。
   - 标题可搭配轻微手写感字体或模拟效果，正文保持系统无衬线字体。
   - 字重：标题粗体，正文中等；字号不宜过小，保证可读性。

5. **微动效与「弹跳感」**
   - 按钮 hover 时使用轻微弹跳或上浮效果：
     \`\`\`css
     @keyframes kawaiiBounce {
       0%, 100% { transform: translateY(0); }
       50% { transform: translateY(-10px); }
     }
     .kawaii-button:hover {
       animation: kawaiiBounce 0.6s ease-in-out;
     }
     \`\`\`
   - 卡片 hover 使用轻微位移 + 阴影加深，但仍保持温和。

**配色方案（Kawaii Minimal）**

- 背景：\`#FFF9F5\`、\`#FFFFFF\`
- 主要糖果色：\`#FFB6D9\`、\`#E6D5FF\`、\`#D4F1D4\`、\`#FFF9E6\`
- 文本：\`#333333\`（标题）、\`#666666\`（正文）

**重要提示**
- 整体结构仍然是「极简」：模块数量不多、信息密度适中。
- 用颜色和圆角去传达可爱感，而不是堆叠复杂装饰。
- 文案与标签可以更俏皮，但注意保持清晰、易懂。`,
      'en-US': `Create a **Kawaii Minimal** style interface using TailwindCSS: simple layout, high-radius cards, candy gradients, and playful details without visual overload.

**Core Design Requirements**

1. **Soft Background**
   - Use creamy or pastel gradients like \`#FFF9F5 → #FFFFFF\`.
   - Mood keywords: sweet, light, comforting.

2. **Rounded Cards and Buttons**
   - Large radii for cards (20–28px) and pill-shaped buttons (\`rounded-full\`).
   - Soft pastel shadows for elevation.

3. **Candy Color Palette**
   - Pinks, lavender, mint, and soft yellow as main accents.
   - Use gradients on primary buttons and badges; keep text dark enough for legibility.

4. **Expressive Icons**
   - Simple geometric icons (stars, smile faces, hearts) and sticker-like tags.
   - Combine a playful subtitle with a clear, readable system font for content.

5. **Micro-interactions**
   - Gentle bounce or float on hover for primary buttons.
   - Slight lift and shadow increase on card hover while remaining soft.

**Important Notes**
- Keep the layout minimal and breathable; do not overload with decorations.
- Use vivid candy colors only for key elements; keep the rest neutral and light.
- Ensure typography and contrast remain usable despite the playful visuals.`
    }
  }
];
