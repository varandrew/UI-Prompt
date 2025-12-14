# Custom Prompt

## 中文版本 (zh-CN)

创建一个无障碍（Accessibility）风格的网页设计，确保所有用户（包括残障人士）都能轻松访问和使用界面。

**核心原则**

WCAG 标准：
- **Level AA 合规**：最低标准，适用于公共网站
- **Level AAA 合规**：最高标准，适用于政府或敏感服务
- **对比度**：正文 4.5:1，大字号 3:1（AAA 为 7:1 和 4.5:1）
- **可操作性**：键盘全访问，无时间限制（可延长）
- **可感知性**：文字替代、字幕、颜色独立
- **可理解性**：清晰语言、一致导航、错误提示

四大支柱：
1. **可感知（Perceivable）**：信息可被用户感知
2. **可操作（Operable）**：用户可以操作界面元素
3. **可理解（Understandable）**：内容和操作清晰易懂
4. **健壮（Robust）**：兼容辅助技术

**视觉设计**

色彩对比：
- **文字对比度**：深色文字 (#1a1a1a, #2d2d2d) 配浅色背景 (#ffffff, #f3f4f6)
- **按钮对比度**：确保背景与文字、背景与周围环境都有足够对比
- **链接识别**：不仅依赖颜色，添加下划线或图标
- **错误提示**：红色配图标，不单独使用颜色
- **对比度工具**：使用 Contrast Checker 验证

字体与排版：
- **字体大小**：最小 16px（桌面），18px（移动）
- **行高**：1.5-1.8，确保易读
- **行长度**：60-80 字符，避免过长
- **字体选择**：清晰易读，如 Inter, Roboto, Open Sans
- **字重**：正文 400-500，标题 600-700
- **可缩放**：支持浏览器放大至 200%

焦点指示：
- **清晰轮廓**：3-4px 实线边框，颜色对比强烈
- **焦点颜色**：蓝色 (#2563eb)、深蓝 (#1e40af) 或品牌色
- **焦点顺序**：逻辑顺序（从上至下，从左至右）
- **跳过链接**：提供 "跳至主内容" 链接
- **焦点陷阱**：模态框内循环焦点

**界面组件**

按钮设计：
- **最小尺寸**：44x44px（移动），48x48px（桌面）
- **清晰标签**：描述性文字，如 "提交表单" 而非 "提交"
- **状态反馈**：hover, focus, active, disabled 状态明显
- **键盘访问**：Tab 导航，Enter/Space 触发
- **视觉反馈**：点击后状态变化或加载指示

表单设计：
- **标签关联**：<label for="id"> 与 <input id="id"> 关联
- **必填标记**：使用 * 并添加 aria-required="true"
- **错误提示**：清晰描述错误，位于输入框下方
- **帮助文本**：提供示例或说明
- **自动完成**：支持 autocomplete 属性
- **输入验证**：实时反馈，不等待提交

导航栏：
- **清晰层级**：主导航、子导航层级分明
- **键盘导航**：Tab 切换，Enter 打开
- **跳过导航**：提供跳至主内容链接
- **移动菜单**：汉堡菜单有清晰标签
- **当前页面**：aria-current="page" 标记

链接设计：
- **可识别**：下划线或不同颜色，不仅依赖颜色
- **描述性**：避免 "点击这里"，使用 "查看用户指南"
- **外部链接**：标记或图标指示
- **新窗口打开**：提前告知，添加 aria-label

**ARIA 属性**

必要 ARIA：
- **aria-label**：为无文字元素提供标签（如图标按钮）
- **aria-labelledby**：关联标签元素 ID
- **aria-describedby**：关联描述元素 ID
- **aria-hidden**：隐藏装饰性元素
- **aria-live**：动态内容更新通知
- **aria-expanded**：可折叠元素状态
- **role**：定义元素角色（button, navigation, alert）

ARIA 实例：
```html
<!-- 图标按钮 -->
<button aria-label="关闭对话框">
  <svg aria-hidden="true">...</svg>
</button>

<!-- 实时更新 -->
<div aria-live="polite" aria-atomic="true">
  新消息：5 条未读
</div>

<!-- 可折叠菜单 -->
<button aria-expanded="false" aria-controls="menu">
  菜单
</button>
<div id="menu" role="menu" hidden>...</div>
```

**键盘导航**

基本交互：
- **Tab / Shift+Tab**：前进 / 后退焦点
- **Enter / Space**：激活按钮或链接
- **Esc**：关闭对话框或菜单
- **Arrow keys**：菜单或列表导航
- **Home / End**：跳至开始 / 结束

自定义组件：
- **下拉菜单**：Arrow Up/Down 选择，Enter 确认
- **标签页**：Arrow Left/Right 切换
- **模态框**：焦点陷阱，Esc 关闭
- **滑块**：Arrow Left/Right 调整
- **日期选择器**：Arrow 键选择日期

焦点管理：
- **逻辑顺序**：按视觉顺序 Tab
- **跳过重复**：提供跳过链接
- **模态框**：打开时聚焦第一个元素，关闭时返回触发元素
- **焦点指示器**：始终可见，清晰对比

**屏幕阅读器支持**

语义 HTML：
- **标题层级**：h1-h6 正确嵌套
- **地标区域**：header, nav, main, aside, footer
- **列表**：ul, ol, li 正确标记
- **表格**：th, caption, summary 完整

替代文本：
- **图片 alt**：描述性文字，装饰图片 alt=""
- **图标按钮**：aria-label 描述功能
- **信息图表**：提供数据表格替代
- **视频字幕**：同步字幕和文字稿

动态内容：
- **aria-live**：polite（非紧急）或 assertive（紧急）
- **加载状态**：提供文字说明 "正在加载..."
- **错误提示**：aria-invalid, aria-describedby
- **成功反馈**：明确文字提示

**响应式与移动端**

触摸目标：
- **最小尺寸**：44x44px（iOS）、48x48px（Android）
- **间距**：相邻目标至少 8px 间距
- **手势替代**：提供按钮替代复杂手势
- **方向锁定**：避免强制横屏或竖屏

文字缩放：
- **支持 200% 缩放**：无水平滚动
- **响应式文字**：使用 rem 或 em
- **无固定高度**：允许内容扩展
- **可读性**：缩放后仍清晰可辨

**动画与交互**

减少动作：
- **prefers-reduced-motion**：检测用户偏好
- **禁用动画**：提供静态替代
- **减少闪烁**：避免每秒闪烁 3 次以上
- **自动播放**：提供暂停按钮

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

时间限制：
- **可延长**：允许用户延长时间
- **无时限**：避免强制时间限制
- **提前警告**：倒计时 20 秒前警告
- **保存进度**：自动保存用户输入

**测试工具**

自动化测试：
- **axe DevTools**：浏览器扩展，检测 WCAG 违规
- **Lighthouse**：Chrome DevTools，无障碍评分
- **WAVE**：在线工具，视觉化违规问题
- **pa11y**：命令行工具，CI/CD 集成

手动测试：
- **键盘导航**：Tab 遍历所有元素
- **屏幕阅读器**：NVDA（Windows）、JAWS、VoiceOver（macOS/iOS）
- **色盲模拟**：验证颜色独立性
- **缩放测试**：200% 放大测试
- **真实用户测试**：邀请残障用户测试

**实施清单**

- 文字对比度 >4.5:1（正文）、>3:1（大字号）
- 焦点指示器清晰可见
- 所有功能可键盘访问
- 图片有 alt 文字
- 表单标签正确关联
- 标题层级正确（h1-h6）
- 地标区域清晰（header, nav, main）
- 链接有描述性文字
- 错误提示清晰明确
- 支持屏幕阅读器
- 颜色独立性（不仅依赖颜色）
- 支持浏览器缩放
- 遵循 prefers-reduced-motion
- ARIA 属性正确使用
- 触摸目标 >44x44px

**使用场景**

- 政府网站和公共服务
- 教育平台和在线课程
- 医疗健康系统
- 金融服务网站
- 电商平台
- 新闻和媒体网站
- 所有注重包容性的产品


---

## English Version (en-US)

Create an Accessibility web design ensuring all users (including people with disabilities) can easily access and use the interface.

**Core Principles**

WCAG Standards:
- **Level AA Compliance**: minimum standard for public websites
- **Level AAA Compliance**: highest standard for government or sensitive services
- **Contrast**: body text 4.5:1, large text 3:1 (AAA is 7:1 and 4.5:1)
- **Operability**: full keyboard access, no time limits (can be extended)
- **Perceivability**: text alternatives, captions, color independence
- **Understandability**: clear language, consistent navigation, error hints

Four Pillars:
1. **Perceivable**: information can be perceived by users
2. **Operable**: users can operate interface elements
3. **Understandable**: content and operations are clear and comprehensible
4. **Robust**: compatible with assistive technologies

**Visual Design**

Color Contrast:
- **Text contrast**: dark text (#1a1a1a, #2d2d2d) with light background (#ffffff, #f3f4f6)
- **Button contrast**: ensure background-to-text and background-to-surroundings have sufficient contrast
- **Link identification**: don't rely on color alone, add underlines or icons
- **Error hints**: red with icons, not color alone
- **Contrast tools**: use Contrast Checker for verification

Typography & Layout:
- **Font size**: minimum 16px (desktop), 18px (mobile)
- **Line height**: 1.5-1.8 for readability
- **Line length**: 60-80 characters, avoid too long
- **Font choice**: clear and readable like Inter, Roboto, Open Sans
- **Font weight**: body 400-500, headings 600-700
- **Scalable**: support browser zoom up to 200%

Focus Indicators:
- **Clear outline**: 3-4px solid border with strong contrast color
- **Focus color**: blue (#2563eb), dark blue (#1e40af), or brand color
- **Focus order**: logical sequence (top to bottom, left to right)
- **Skip links**: provide "skip to main content" link
- **Focus trap**: cycle focus within modals

**UI Components**

Button Design:
- **Minimum size**: 44x44px (mobile), 48x48px (desktop)
- **Clear labels**: descriptive text like "Submit Form" not just "Submit"
- **State feedback**: obvious hover, focus, active, disabled states
- **Keyboard access**: Tab navigation, Enter/Space trigger
- **Visual feedback**: state change or loading indicator after click

Form Design:
- **Label association**: <label for="id"> with <input id="id"> association
- **Required markers**: use * and add aria-required="true"
- **Error hints**: clearly describe errors, placed below input field
- **Help text**: provide examples or instructions
- **Autocomplete**: support autocomplete attribute
- **Input validation**: real-time feedback, don't wait for submission

Navigation Bar:
- **Clear hierarchy**: main and sub-navigation clearly differentiated
- **Keyboard navigation**: Tab to switch, Enter to open
- **Skip navigation**: provide skip to main content link
- **Mobile menu**: hamburger menu with clear labels
- **Current page**: marked with aria-current="page"

Link Design:
- **Identifiable**: underlines or different colors, not color alone
- **Descriptive**: avoid "click here", use "View User Guide"
- **External links**: marked or icon indicated
- **Open in new window**: inform beforehand, add aria-label

**ARIA Attributes**

Essential ARIA:
- **aria-label**: provide labels for text-free elements (like icon buttons)
- **aria-labelledby**: associate with label element ID
- **aria-describedby**: associate with description element ID
- **aria-hidden**: hide decorative elements
- **aria-live**: notify dynamic content updates
- **aria-expanded**: collapsible element state
- **role**: define element role (button, navigation, alert)

ARIA Examples:
```html
<!-- Icon button -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Live updates -->
<div aria-live="polite" aria-atomic="true">
  New messages: 5 unread
</div>

<!-- Collapsible menu -->
<button aria-expanded="false" aria-controls="menu">
  Menu
</button>
<div id="menu" role="menu" hidden>...</div>
```

**Keyboard Navigation**

Basic Interactions:
- **Tab / Shift+Tab**: forward / backward focus
- **Enter / Space**: activate button or link
- **Esc**: close dialog or menu
- **Arrow keys**: menu or list navigation
- **Home / End**: jump to start / end

Custom Components:
- **Dropdown menu**: Arrow Up/Down select, Enter confirm
- **Tabs**: Arrow Left/Right switch
- **Modal**: focus trap, Esc to close
- **Slider**: Arrow Left/Right adjust
- **Date picker**: Arrow keys select dates

Focus Management:
- **Logical order**: Tab in visual order
- **Skip repetition**: provide skip links
- **Modals**: focus first element on open, return to trigger on close
- **Focus indicator**: always visible with clear contrast

**Screen Reader Support**

Semantic HTML:
- **Heading hierarchy**: h1-h6 properly nested
- **Landmark regions**: header, nav, main, aside, footer
- **Lists**: ul, ol, li correctly marked
- **Tables**: th, caption, summary complete

Alternative Text:
- **Image alt**: descriptive text, decorative images alt=""
- **Icon buttons**: aria-label describes function
- **Infographics**: provide data table alternatives
- **Video captions**: synchronized captions and transcripts

Dynamic Content:
- **aria-live**: polite (non-urgent) or assertive (urgent)
- **Loading states**: provide text description "Loading..."
- **Error hints**: aria-invalid, aria-describedby
- **Success feedback**: clear text prompts

**Responsive & Mobile**

Touch Targets:
- **Minimum size**: 44x44px (iOS), 48x48px (Android)
- **Spacing**: adjacent targets at least 8px apart
- **Gesture alternatives**: provide button alternatives for complex gestures
- **Orientation lock**: avoid forcing landscape or portrait

Text Scaling:
- **Support 200% zoom**: no horizontal scrolling
- **Responsive text**: use rem or em
- **No fixed heights**: allow content expansion
- **Readability**: clear and legible after scaling

**Animation & Interaction**

Reduced Motion:
- **prefers-reduced-motion**: detect user preference
- **Disable animations**: provide static alternatives
- **Reduce flashing**: avoid flashing more than 3 times per second
- **Autoplay**: provide pause button

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Time Limits:
- **Extendable**: allow users to extend time
- **No limits**: avoid forced time constraints
- **Advance warning**: warn 20 seconds before timeout
- **Save progress**: auto-save user input

**Testing Tools**

Automated Testing:
- **axe DevTools**: browser extension, detects WCAG violations
- **Lighthouse**: Chrome DevTools, accessibility scoring
- **WAVE**: online tool, visualizes accessibility issues
- **pa11y**: command-line tool, CI/CD integration

Manual Testing:
- **Keyboard navigation**: Tab through all elements
- **Screen readers**: NVDA (Windows), JAWS, VoiceOver (macOS/iOS)
- **Colorblind simulation**: verify color independence
- **Zoom testing**: test at 200% magnification
- **Real user testing**: invite users with disabilities to test

**Implementation Checklist**

- Text contrast >4.5:1 (body), >3:1 (large text)
- Focus indicators clearly visible
- All functionality keyboard accessible
- Images have alt text
- Form labels correctly associated
- Heading hierarchy correct (h1-h6)
- Landmark regions clear (header, nav, main)
- Links have descriptive text
- Error messages clear and specific
- Screen reader support
- Color independence (not relying on color alone)
- Browser zoom support
- Respect prefers-reduced-motion
- ARIA attributes correctly used
- Touch targets >44x44px

**Use Cases**

- Government websites and public services
- Education platforms and online courses
- Healthcare systems
- Financial services websites
- E-commerce platforms
- News and media websites
- All products emphasizing inclusivity
