import { useState, useMemo, useEffect, useRef } from 'react';
import { PromptDrawer } from '../prompt/PromptDrawer';
import { PreviewModal } from '../preview/PreviewModal';
import { PromptGenerator } from '../../utils/promptGenerator';
import { useLanguage } from '../../hooks/useLanguage';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { getStylePreviewUrl } from '../../utils/styleHelper';
import { LANGUAGES } from "../../utils/i18n/languageConstants";
import { containsJSX } from '../../utils/jsxCompiler';
import { getCategoryLabel } from '../../data/metadata/categoryMetadata';
import { useSharedIntersectionObserver } from '../../hooks/useSharedIntersectionObserver';

// 🆕 子組件導入
import { IframeRenderer } from './IframeRenderer';
import { JSXCompiler } from './JSXCompiler';
import { StyleCardUI, StyleCardContainer } from './StyleCardUI';

/**
 * StyleCard - 風格卡片主組件（重構版）
 *
 * 職責：
 * - 接收外部 props
 * - 數據準備和轉換（i18n, metadata）
 * - 狀態管理（模態框、延遲加載）
 * - 組合子組件（IframeRenderer, JSXCompiler, StyleCardUI）
 *
 * 已移除的職責（委派給子組件）：
 * - iframe 渲染邏輯 → IframeRenderer
 * - JSX 編譯邏輯 → JSXCompiler
 * - UI 展示邏輯 → StyleCardUI
 */
export function StyleCard({
  title,
  description,
  demoHTML,
  customStyles = '',
  fullPageHTML = '',
  fullPageStyles = '',
  fullPagePreviewId = '',
  demoBoxClass = 'bg-gray-50 dark:bg-gray-900',
  demoBoxStyle = '',
  tags = [],
  onTagClick,
  previews = [],
  colorScheme = null,
  variant = null,
  id = null,
  primaryCategory = null,
  layoutMode = 'centered',
  customPrompt = null,
  stylePrompt = null,
  demoJSX = null,
  renderMode = 'auto'
}) {
  // ===== 狀態管理 =====
  const [showPrompt, setShowPrompt] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { language, t } = useLanguage();

  // ===== 共享 IntersectionObserver: 延遲加載 =====
  // 使用共享 observer 減少記憶體使用（原本每個卡片一個 observer，現在全局共享一個）
  const cardRef = useSharedIntersectionObserver(() => {
    setIsVisible(true);
  });

  // ===== 國際化處理 =====
  const currentDemoHTML = getDemoHTML(demoHTML, language);

  /**
   * 渲染文本：支持多種格式（i18n 對象、翻譯鍵、純文本）
   */
  const renderText = (value) => {
    let result = '';

    // i18n 對象格式
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result = value[language];
      if (!result && language === LANGUAGES.ZH_CN) {
        result = value[LANGUAGES.ZH_CN_LOWER];
      } else if (!result && language === LANGUAGES.ZH_CN_LOWER) {
        result = value[LANGUAGES.ZH_CN];
      }
      if (!result) {
        result = value[LANGUAGES.ZH_CN] || value[LANGUAGES.ZH_CN_LOWER] || value[LANGUAGES.EN_US] || '';
      }
    }
    // raw: 前綴
    else if (typeof value === 'string' && value.toLowerCase().startsWith('raw:')) {
      result = value.slice(4);
    }
    // 包含中文字符
    else if (typeof value === 'string' && /[\u4e00-\u9fff]/.test(value)) {
      result = value;
    }
    // 翻譯鍵（包含點號）
    else if (typeof value === 'string' && value.includes('.')) {
      const translation = t(value);
      result = translation !== value ? translation : value;
    }
    // 其他情況
    else if (typeof value === 'string') {
      result = t(value);
    }

    return String(result || '');
  };

  const displayTitle = renderText(title);
  const displayDescription = renderText(description);

  // ===== 判斷渲染模式（HTML or JSX） =====
  const shouldUseJSX = useMemo(() => {
    if (renderMode === 'html') return false;
    if (renderMode === 'jsx') return true;
    // auto 模式：優先使用 demoJSX，否則檢測 demoHTML 是否包含 JSX
    if (demoJSX) return true;
    return renderMode === 'auto' && currentDemoHTML && containsJSX(currentDemoHTML);
  }, [renderMode, demoJSX, currentDemoHTML]);

  // ===== 分類處理 =====
  const primaryCategoryLabel = useMemo(() => {
    if (!primaryCategory) return null;
    try {
      return getCategoryLabel(primaryCategory, language);
    } catch {
      return null;
    }
  }, [primaryCategory, language]);

  // ===== Prompt 生成 =====
  const styleObject = useMemo(() => ({
    title: displayTitle,
    description: displayDescription,
    customPrompt,
    stylePrompt,
    demoHTML,
    fullPageHTML
  }), [displayTitle, displayDescription, customPrompt, stylePrompt, demoHTML, fullPageHTML]);

  const promptContent = useMemo(() => {
    return PromptGenerator.generate(
      styleObject,
      { mode: 'card' },
      language
    );
  }, [styleObject, language]);

  // ===== demoBoxStyle 解析 =====
  const parseStyleString = (str) => {
    if (!str || typeof str !== 'string') return {};
    const toCamel = (k) => (k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()));
    return str
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean)
      .reduce((acc, decl) => {
        const idx = decl.indexOf(':');
        if (idx === -1) return acc;
        let key = decl.slice(0, idx).trim();
        let value = decl.slice(idx + 1).trim();
        if (!key) return acc;
        if (value.endsWith(';')) value = value.slice(0, -1).trim();
        key = toCamel(key);
        acc[key] = value;
        return acc;
      }, {});
  };

  const demoBoxInlineStyle = useMemo(() => parseStyleString(demoBoxStyle), [demoBoxStyle]);

  // ===== 事件處理 =====
  const handleGetPrompt = () => {
    setShowPrompt(true);
  };

  const handlePreview = () => {
    // ⭐ DEBUG: 驗證傳入的 ID
    console.log(`[StyleCard handlePreview] id prop: "${id}" (${id?.length} chars)`);

    // ⭐ ID 驗證保護
    if (!id || typeof id !== 'string' || id.length === 0) {
      console.error('[StyleCard] Invalid id:', id);
      setShowPreview(true);  // Fallback 到模態框預覽
      return;
    }

    // ⭐ 修復：避免模板 ID 缺少分類前綴導致路由 404，單模板時仍保留預覽索引
    const isSinglePreview = previews && previews.length === 1;
    const templatePreviewId = isSinglePreview ? (previews[0].templateId || previews[0].id) : null;
    const hasCategoryPrefix = templatePreviewId
      ? /^(core|visual|retro|layout|interaction)-/i.test(templatePreviewId)
      : false;

    let previewId = id;
    let query = '';

    if (isSinglePreview && templatePreviewId) {
      if (hasCategoryPrefix) {
        // 單一模板且已有分類前綴，直接使用
        previewId = templatePreviewId;
        console.log(`[StyleCard] 單一模板，使用帶前綴 templateId: ${previewId}`);
      } else {
        // 缺少分類前綴時改用 family id，並鎖定第一個預覽索引
        previewId = id;
        query = 'previewIndex=0';
        console.warn(`[StyleCard] 模板 ID 缺少分類前綴，改用 family id: ${previewId}`);
      }
    } else if (previews && previews.length > 1) {
      // 多個模板：使用 family ID 以顯示所有模板和切換器
      console.log(`[StyleCard] 多個模板 (${previews.length})，使用 family ID: ${id}`);
    } else if (id) {
      console.log(`[StyleCard] 使用 card id: ${id}`);
    }

    if (previewId) {
      const baseUrl = getStylePreviewUrl(previewId);
      const previewUrl = query ? `${baseUrl}?${query}` : baseUrl;
      const fullUrl = window.location.origin + previewUrl;

      // ⭐ URL 完整性驗證
      if (!fullUrl.includes(encodeURIComponent(previewId))) {
        console.error('[StyleCard] URL validation FAILED:', {
          previewId,
          expectedLength: previewId.length,
          fullUrl
        });
      }

      window.open(fullUrl, '_blank');
    } else {
      console.warn('[StyleCard] Missing previewId, fallback to modal');
      setShowPreview(true);
    }
  };

  // ===== 渲染 Demo 區域（根據模式選擇子組件） =====
  const renderDemo = () => {
    const jsxSource = demoJSX || currentDemoHTML;

    if (shouldUseJSX) {
      return (
        <JSXCompiler
          jsxCode={jsxSource}
          customStyles={customStyles}
          id={id || displayTitle}
          isVisible={isVisible}
          demoBoxClass={demoBoxClass}
          demoBoxStyle={demoBoxInlineStyle}
        />
      );
    }

    return (
      <IframeRenderer
        demoHTML={currentDemoHTML}
        customStyles={customStyles}
        id={id || displayTitle}
        language={language}
        layoutMode={layoutMode}
        demoBoxClass={demoBoxClass}
        demoBoxStyle={demoBoxInlineStyle}
        isVisible={isVisible}
      />
    );
  };

  // ===== 渲染 UI 區域 =====
  const renderUI = () => {
    return (
      <StyleCardUI
        title={displayTitle}
        description={displayDescription}
        primaryCategoryLabel={primaryCategoryLabel}
        templatesCount={previews?.length || 0}
        tags={tags}
        onTagClick={onTagClick}
        onGetPrompt={handleGetPrompt}
        onPreview={handlePreview}
        language={language}
        t={t}
      />
    );
  };

  // ===== 主渲染 =====
  return (
    <>
      <StyleCardContainer
        demoContent={renderDemo()}
        uiContent={renderUI()}
        cardRef={cardRef}
        templatesCount={previews?.length || 0}
      />

      {/* Prompt 抽屜 */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={displayTitle}
        content={promptContent}
      />

      {/* Preview 模態框 */}
      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        title={displayTitle}
        description={displayDescription}
        htmlContent={demoHTML}
        customStyles={customStyles}
        fullPageHTML={fullPageHTML}
        fullPageStyles={fullPageStyles}
        fullPagePreviewId={fullPagePreviewId}
        previews={previews}
        colorScheme={colorScheme}
        variant={variant}
        stylePrompt={stylePrompt}
      />
    </>
  );
}
