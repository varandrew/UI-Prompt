// 专用：將主應用中的樣式注入到 iframe，避免在預覽中使用 Tailwind CDN

/**
 * 將當前页面的樣式表（<link rel="stylesheet"> 与 <style>）克隆並注入到 iframe 內部。
 * 目的：在預覽 iframe 中使用同一份編譯後的 Tailwind 与自定義樣式，移除對 CDN 的依賴。
 *
 * 注意：
 * - 要求 iframe 与主页為同源（本专案符合）。
 * - 會跳過重複注入（以 data 标記）。
 *
 * @param {HTMLIFrameElement} iframe
 */
export function injectAppStylesIntoIframe(iframe) {
  if (!iframe) return;
  const doc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!doc) return;

  try {
    // 避免重複注入
    if (doc.documentElement && doc.documentElement.dataset && doc.documentElement.dataset.appStylesInjected) {
      return;
    }

    const targetHead = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
    const parentDoc = document;

    // 1) 複製 <link rel="stylesheet" ...>
    const links = Array.from(parentDoc.querySelectorAll('link[rel="stylesheet"]'));
    links.forEach((lnk) => {
      const clone = doc.createElement('link');
      clone.rel = 'stylesheet';
      // 使用絕對 URL，避免相對路徑解析問題
      clone.href = lnk.href;
      // 盡可能復制屬性（如 media）
      if (lnk.media) clone.media = lnk.media;
      targetHead.appendChild(clone);
    });

    // 2) 複製內联 <style>
    const styles = Array.from(parentDoc.querySelectorAll('style'));
    styles.forEach((sty) => {
      const clone = doc.createElement('style');
      clone.textContent = sty.textContent || '';
      targetHead.appendChild(clone);
    });

    if (doc.documentElement && doc.documentElement.dataset) {
      doc.documentElement.dataset.appStylesInjected = '1';
    }
  } catch {
    // 静默失敗，保底不影響主流程
    // console.debug('injectAppStylesIntoIframe failed');
  }
}

/**
 * 仅移除 Tailwind CDN 的 <script>/<link> 片段，不影響其他腳本。
 * 適用於將內嵌 HTML 作為 srcDoc 或字串組裝時的清理。
 *
 * @param {string} html
 * @returns {string}
 */
export function stripTailwindCdn(html) {
  if (!html) return html;
  let out = html;
  // 移除 <script src="https://cdn.tailwindcss.com"></script>
  out = out.replace(/<script[^>]*src=["']https:\/\/cdn\.tailwindcss\.com[^>]*><\/script>/gi, '');
  // 移除 <link ... href="https://cdn.tailwindcss.com" .../>
  out = out.replace(/<link[^>]*href=["']https:\/\/cdn\.tailwindcss\.com[^"']*["'][^>]*>/gi, '');
  return out;
}

