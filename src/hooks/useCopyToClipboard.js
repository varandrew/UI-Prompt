import { useCallback, useEffect, useRef, useState } from 'react';

function fallbackCopyText(text) {
  try {
    if (typeof document === 'undefined') return false;

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}

/**
 * useCopyToClipboard
 *
 * @param {Object} [options]
 * @param {number} [options.timeout=2000] - Auto reset `copied` after ms
 * @param {(text: string) => void} [options.onSuccess]
 * @param {(error: unknown) => void} [options.onError]
 * @returns {{ copy: (text: string) => Promise<boolean>, copied: boolean, resetCopied: () => void }}
 */
export function useCopyToClipboard(options = {}) {
  const { timeout = 2000, onSuccess, onError } = options;
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const resetCopied = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setCopied(false);
  }, []);

  const copy = useCallback(
    async (text) => {
      const normalizedText = typeof text === 'string' ? text : String(text ?? '');

      try {
        const hasClipboardApi =
          typeof navigator !== 'undefined' && typeof navigator.clipboard?.writeText === 'function';

        if (hasClipboardApi) {
          await navigator.clipboard.writeText(normalizedText);
        } else {
          const success = fallbackCopyText(normalizedText);
          if (!success) {
            throw new Error('Clipboard API is not available');
          }
        }

        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), timeout);

        onSuccess?.(normalizedText);
        return true;
      } catch (error) {
        onError?.(error);
        return false;
      }
    },
    [onError, onSuccess, timeout]
  );

  return { copy, copied, resetCopied };
}

export default useCopyToClipboard;
