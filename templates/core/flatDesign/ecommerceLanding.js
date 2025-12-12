// ✅ Simplified: fullPage content now loaded from public/data/content/

export const flatDesignEcommerceLanding = {
  id: 'core-flat-design-ecommerce-landing',
  title: 'styles.core.flat-design.preview.ecommerceLanding',
  description: 'styles.core.flat-design.preview.ecommerceLandingDesc',

  // ✨ AI Prompt（用于生成与當前 Flat 電商落地页高度接近的 UI）
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Flat 电商 Landing」界面风格高度接近的扁平化（Flat Design）电商落地页。
要求：保持首页布局（Nav + Hero + 商品区 + 行動区）的結構和純色幾何風格不变，只允許替換品牌文案、商品示例和圖标。輸出使用語義化 HTML 結構和 TailwindCSS 風格的原子类（或等價工具类）。

【使用場景】
- 場景：現代電商品牌首页，用於展示主打商品 / 系列和促銷信息。
- 用戶：一般消費者与回访用戶，需要快速理解品牌賣點与主推产品。
- 目标：在扁平化視覺下強調「主商品 + 價格 + 行動按鈕」，让用戶快速進入購物流。

【整体布局結構】
1. 頂部导航
   - 左側：品牌 LOGO 或文字名稱。
   - 右側：导航連結（产品、优惠、支援）和简潔行動按鈕（登入 / 註册）。
   - 导航背景為純色或与页面背景一致，不使用阴影。
2. Hero 区域
   - 左側：主标題 + 副标題 + 價格 / 优惠标籤 + 主行動按鈕（立即購買 / 開始試用）。
   - 右側：产品主視覺卡片（手機 / 卡片 / 界面截圖），由幾何形狀和純色塊組成而非写實照片。
3. 商品 / 特色区
   - 使用 3–4 個扁平化商品卡片，每張卡片包含：
     - 商品圖示（简化插画或幾何 icon）。
     - 商品名稱与简短描述。
     - 價格与次要行動按鈕（Add to Cart / 詳情）。
4. 底部 / 可信度区
   - 可加入合作品牌 LOGO 列表、简短用戶評論或保障标籤（免運、退貨保障等），仍維持扁平風格。

【色彩与扁平化規則】
1. 色彩系統
   - 使用少量高飽和主色（例如純藍、純綠、橙色）作為区塊背景和按鈕颜色。
   - 背景為大面積淺色純色（如 #f5f7fa），商品卡片使用白色或淺灰背景。
   - 文本儘量使用深灰而非純黑，確保舒適閱讀。
2. 扁平化限制
   - 不允許阴影、漸变、紋理：所有背景必須是單色。
   - 层級由色塊對比与字体大小建立，避免利用阴影表示层級。

【排版与留白】
1. 排版
   - 标題字號較大，字重中等至偏粗，字距略緊。
   - 內文使用 16–18px，行高 1.6–1.8。
2. 留白
   - Hero 区域上下 padding 需足夠（48–80px），让主視覺呼吸。
   - 卡片之間使用統一間距（基於 8px 單位：24 / 32px 等）。

【交互与動效】
1. Hover
   - 按鈕 hover 仅改变背景純色亮度或飽和度（如从 #3498db 到 #2980b9），不出現阴影或位移。
   - 商品卡片 hover 可改变边框颜色或背景色亮度 5–10%。
2. Active
   - 按鈕按下颜色再深一級即可，無需縮放或動画。

【輸出要求】
- 使用語義化 HTML：header/nav/main/section/footer 明確区分結構。
- 使用 Tailwind 式原子类實現 flex/grid 布局与間距控制。
- 生成的界面在「無阴影無漸变 + 純色幾何 + 扁平商品卡片 + 大量留白」這幾個特徵上，需高度接近現有 Flat 電商落地页。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a Flat Design e‑commerce landing page that looks very close to the current “Flat E‑commerce Landing” demo.
Keep the homepage structure (navigation, hero, product / feature section and call-to-action area) and the pure geometric flat style almost identical. You may change brand copy, sample products and icons, but not the overall layout, block structure or flat visual language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Context: modern e‑commerce brand homepage used to present hero product, key selling points and promotions.
- Users: new visitors and returning customers who need to quickly understand the main product and take action.
- Goal: emphasise “hero product + price + primary action” within a clean, flat layout that feels modern and trustworthy.

[Layout]
1. Top navigation bar with brand logo or wordmark on the left and a small set of text links on the right (for example Products, Deals, Support, Login), optionally including a simple primary action button.
2. Hero section split into two columns: left column containing main heading, supporting description, price or discount badge and a strong primary button (such as “Buy now” or “Start free trial”); right column containing a hero card or abstract product illustration built from flat shapes.
3. Product / feature area with 3–4 flat product cards; each card includes a simple icon or illustration, product name, one–two lines of copy and a secondary action (for example “Add to cart” or “Details”).
4. Trust / footer area with partner logos, short testimonials or reassurance badges (free shipping, returns, support), all kept in the same flat, low-noise style.

[Visual style]
1. Use a light, almost white solid background for the page and white or very light grey for cards; no gradients or textures anywhere.
2. Choose a small set of high-saturation accent colors for hero backgrounds and buttons so primary actions stand out clearly.
3. Typography is simple and sans-serif; headings are large and bold, body text around 16–18px with good line-height for readability.
4. Use spacing and alignment rather than shadows to establish hierarchy: generous padding in the hero, consistent gaps between cards and clear column alignment.

[Interaction]
1. Hover states on buttons and cards only adjust solid color brightness or saturation slightly (for example blue changing from a lighter to a darker shade); no shadows or movement.
2. Active states simply darken the color one more step without scale or bounce animations to preserve the crisp flat feeling.
3. Transitions are short (approximately 150–200ms) and use simple ease-out curves.

[Output requirements]
- Use semantic HTML structure: header, nav, main, section, footer to clearly label page regions.
- Use TailwindCSS-style utility classes to implement flex or grid layouts, spacing, typography and colors.
- The generated page should preserve the key characteristics of the existing Flat e‑commerce landing: no shadows or gradients, solid geometric blocks, flat product cards and ample whitespace.`
  },

  // ✨ 風格 Prompt（用于 PreviewModal HTML 预览）
  stylePrompt: {
    'zh-CN': `角色：你是一位专精於扁平化设計的 UI 设計師，擅長為電商平台創造清晰、高效的購物界面。

場景定位：
為現代電商平台打造简潔高效的落地页，通過扁平化设計強調商品本身和購買流程的清晰性。目标用戶為追求便捷購物体驗的消費者，需要在視覺上体現快速、直接、值得信賴的品牌形象。界面要求信息层次清晰，让用戶能夠快速找到商品、理解优惠、完成購買。這是一個以轉化為核心目标的商業页面，需要在保持美觀的同時最大化用戶行動效率。

視覺设計理念：
採用極简直接的设計語言，移除所有可能干擾購買決策的視覺裝飾。设計強調信息的清晰傳達和行動按鈕的突出显示，通過鮮明的純色和明確的視覺层次引导用戶完成購買流程。完全拒絕使用阴影、漸变等裝飾性技法，轉而依靠颜色對比、尺寸差異和充足留白來建立清晰的信息架構。整体風格追求現代、乾淨、高效的視覺表達，让用戶能夠零障礙地瀏覽商品和完成交易。界面運用有限色板原則，主要使用品牌主色搭配中性背景，營造出专業、可信、現代的電商氛圍。

材质与质感：
所有元素都呈現為純粹的平面形態，完全不模擬任何真實世界的材质。背景使用純白或極淺的中性灰，確保商品圖片成為視覺焦點。商品卡片採用純白背景配以細边框或直接使用留白分隔，完全不使用阴影效果。主行動按鈕使用飽和度高的純色（如鮮明的綠色或橙色），表面平滑無光澤無阴影，仅在懸停時改变颜色深度。次要按鈕使用白色或淺灰背景配以深色边框，保持視覺层次的清晰区分。價格标籤使用高對比度的純色背景（如紅色或橙色）配以白色文字，確保优惠信息一目了然。导航欄使用深色純色背景（如深灰或品牌色），搭配白色文字和圖标，形成清晰的頂部錨定。整体視覺如同精心设計的信息圖表，每個元素都有明確的功能和視覺權重。

交互体驗：
所有交互都以快速響應和明確反饋為原則。主行動按鈕在懸停時瞬間变為更深的同色系，沒有過渡動画，提供即時的視覺確認。點擊時颜色進一步加深，但不产生位移或变形，保持扁平的視覺狀態。商品卡片在懸停時仅通過边框颜色变化或輕微的背景色变化來提供反饋，避免複雜動效干擾瀏覽。加入購物車按鈕點擊後立即改变颜色或文字，提供明確的操作成功提示。滾動交互保持流暢简潔，不添加視差或其他裝飾性效果。篩選器和下拉菜單使用純色背景和清晰的選中狀態标識，確保操作狀態一目了然。整体交互節奏極快，響應時間控制在最短範圍內，營造高效流暢的購物体驗。

氛圍營造：
界面營造出現代電商平台的专業高效氛圍，充滿商業活力而不失可信度。鮮明的主行動按鈕颜色（如綠色代表購買、橙色代表优惠）佔据关鍵位置，引导用戶視线和行動。價格信息使用醒目的純色标籤突出显示，优惠折扣使用高對比度的紅色或橙色色塊，確保促銷信息傳達有力。商品网格採用精確對齊的佈局，間距統一，展現出专業的視覺規範。导航和分类使用清晰的純色标籤和圖标，幫助用戶快速定位。整体色彩使用遵循電商慣例，成功/可用用綠色、警告/促銷用橙紅色、信息提示用藍色，形成用戶熟悉的視覺語言。文字与背景保持極高對比度，確保價格、規格等关鍵信息清晰易讀。留白運用充足但不過度，在保持視覺舒適的同時最大化信息密度，平衡美觀与效率。`,

    'en-US': `Role: You are a UI designer specializing in Flat Design, skilled at creating clear, efficient shopping interfaces for e-commerce platforms.

Scenario Positioning:
Create a clean and efficient landing page for modern e-commerce platforms, emphasizing product clarity and purchase flow through flat design. Target users are consumers seeking convenient shopping experiences who need interfaces that visually reflect fast, direct, and trustworthy brand images. The interface must have clear information hierarchy, allowing users to quickly find products, understand promotions, and complete purchases. This is a conversion-focused commercial page needing to maximize user action efficiency while maintaining aesthetics.

Visual Design Philosophy:
Adopt extremely simple and direct design language, removing all visual decorations that might interfere with purchase decisions. Design emphasizes clear information delivery and prominent action button display, guiding users through the purchase flow via vivid solid colors and clear visual hierarchy. Completely reject decorative techniques like shadows and gradients, relying instead on color contrast, size differences, and ample whitespace to establish clear information architecture. The overall style pursues modern, clean, efficient visual expression, allowing users to browse products and complete transactions with zero barriers. The interface employs limited palette principles, mainly using brand primary colors with neutral backgrounds, creating professional, trustworthy, modern e-commerce atmosphere.

Materials & Textures:
All elements present as pure flat forms, completely avoiding simulation of real-world materials. Backgrounds use pure white or extremely light neutral gray, ensuring product images become visual focal points. Product cards adopt pure white backgrounds with thin borders or direct whitespace separation, completely avoiding shadow effects. Primary action buttons use highly saturated solid colors (like vivid green or orange), with smooth surfaces without gloss or shadows, changing only color depth on hover. Secondary buttons use white or light gray backgrounds with dark borders, maintaining clear visual hierarchy distinction. Price tags use high-contrast solid color backgrounds (like red or orange) with white text, ensuring promotional information is immediately visible. Navigation bars use dark solid color backgrounds (like dark gray or brand colors) with white text and icons, forming clear top anchoring. The overall visual is like meticulously designed infographics, every element having clear function and visual weight.

Interaction Experience:
All interactions follow principles of quick response and clear feedback. Primary action buttons instantly change to deeper same-color tones on hover without transition animations, providing immediate visual confirmation. On click, colors deepen further but produce no displacement or deformation, maintaining flat visual state. Product cards provide feedback only through border color changes or slight background color changes on hover, avoiding complex effects that interfere with browsing. Add-to-cart buttons immediately change color or text after click, providing clear operation success prompts. Scroll interactions remain smooth and simple, not adding parallax or other decorative effects. Filters and dropdown menus use solid color backgrounds and clear selected state indicators, ensuring operation states are immediately visible. Overall interaction rhythm is extremely fast, response time controlled within shortest ranges, creating efficient smooth shopping experiences.

Atmosphere Creation:
The interface creates the professional efficient atmosphere of modern e-commerce platforms, full of commercial vitality without losing credibility. Vivid primary action button colors (like green for purchase, orange for promotions) occupy key positions, guiding user sight and actions. Price information uses eye-catching solid color tags for highlighting, promotional discounts use high-contrast red or orange color blocks, ensuring promotional information is powerfully conveyed. Product grids adopt precisely aligned layouts with uniform spacing, showing professional visual standards. Navigation and categories use clear solid color labels and icons, helping users quickly locate. Overall color use follows e-commerce conventions: success/available in green, warning/promotional in orange-red, information prompts in blue, forming familiar visual language for users. Text and backgrounds maintain extremely high contrast, ensuring key information like prices and specifications are clearly readable. Whitespace is ample but not excessive, balancing visual comfort while maximizing information density, balancing aesthetics with efficiency.`
  },

  // ✅ Simplified: previews metadata only, html/styles loaded dynamically
  previews: [
    {
      id: 'ecommerce-landing',
      name: 'styles.core.flat-design.preview.ecommerceLanding',
      type: 'fullpage'
    }
  ]
}
