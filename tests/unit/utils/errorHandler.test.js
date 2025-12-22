/**
 * 錯誤處理工具模組測試
 * Tests for Error Handler Utilities
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  AppError,
  NetworkError,
  ValidationError,
  tryCatch,
  asyncTryCatch,
  withRetry,
  createErrorState,
  safeAsyncEffect,
  formatErrorMessage
} from '../../../src/utils/errorHandler.js';

// ========== AppError Tests ==========
describe('AppError', () => {
  it('should create error with default code', () => {
    const error = new AppError('Test error');
    expect(error.message).toBe('Test error');
    expect(error.code).toBe('APP_ERROR');
    expect(error.name).toBe('AppError');
    expect(error.details).toBeNull();
  });

  it('should create error with custom code', () => {
    const error = new AppError('Test error', 'CUSTOM_CODE');
    expect(error.code).toBe('CUSTOM_CODE');
  });

  it('should create error with details', () => {
    const details = { field: 'email', value: 'invalid' };
    const error = new AppError('Test error', 'APP_ERROR', details);
    expect(error.details).toEqual(details);
  });

  it('should have timestamp', () => {
    const before = new Date().toISOString();
    const error = new AppError('Test error');
    const after = new Date().toISOString();

    expect(error.timestamp).toBeDefined();
    expect(error.timestamp >= before).toBe(true);
    expect(error.timestamp <= after).toBe(true);
  });

  it('should be instance of Error', () => {
    const error = new AppError('Test error');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AppError);
  });
});

// ========== NetworkError Tests ==========
describe('NetworkError', () => {
  it('should create network error with status', () => {
    const error = new NetworkError('Network failed', 500);
    expect(error.message).toBe('Network failed');
    expect(error.code).toBe('NETWORK_ERROR');
    expect(error.name).toBe('NetworkError');
    expect(error.status).toBe(500);
  });

  it('should create network error without status', () => {
    const error = new NetworkError('Network failed');
    expect(error.status).toBeNull();
  });

  it('should be instance of AppError', () => {
    const error = new NetworkError('Network failed');
    expect(error).toBeInstanceOf(AppError);
    expect(error).toBeInstanceOf(NetworkError);
  });

  it('should accept details', () => {
    const details = { url: 'https://api.example.com', method: 'GET' };
    const error = new NetworkError('Network failed', 404, details);
    expect(error.details).toEqual(details);
  });
});

// ========== ValidationError Tests ==========
describe('ValidationError', () => {
  it('should create validation error with field', () => {
    const error = new ValidationError('Invalid email', 'email');
    expect(error.message).toBe('Invalid email');
    expect(error.code).toBe('VALIDATION_ERROR');
    expect(error.name).toBe('ValidationError');
    expect(error.field).toBe('email');
  });

  it('should create validation error without field', () => {
    const error = new ValidationError('Validation failed');
    expect(error.field).toBeNull();
  });

  it('should be instance of AppError', () => {
    const error = new ValidationError('Validation failed');
    expect(error).toBeInstanceOf(AppError);
    expect(error).toBeInstanceOf(ValidationError);
  });
});

// ========== tryCatch Tests ==========
describe('tryCatch', () => {
  it('should return function result on success', () => {
    const result = tryCatch(() => 'success');
    expect(result).toBe('success');
  });

  it('should return fallback on error', () => {
    const result = tryCatch(() => {
      throw new Error('Test error');
    }, 'fallback');
    expect(result).toBe('fallback');
  });

  it('should return null as default fallback', () => {
    const result = tryCatch(() => {
      throw new Error('Test error');
    });
    expect(result).toBeNull();
  });

  it('should call onError callback on error', () => {
    const onError = vi.fn();
    tryCatch(
      () => { throw new Error('Test error'); },
      null,
      { onError }
    );
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(expect.any(AppError));
  });

  it('should rethrow error when rethrow option is true', () => {
    expect(() => {
      tryCatch(
        () => { throw new Error('Test error'); },
        null,
        { rethrow: true }
      );
    }).toThrow();
  });

  it('should not rethrow by default', () => {
    expect(() => {
      tryCatch(() => { throw new Error('Test error'); });
    }).not.toThrow();
  });

  it('should pass context to enhanced error', () => {
    const onError = vi.fn();
    tryCatch(
      () => { throw new Error('Test error'); },
      null,
      { onError, context: 'TestContext' }
    );
    const error = onError.mock.calls[0][0];
    expect(error.details?.context).toBe('TestContext');
  });

  it('should handle non-function onError gracefully', () => {
    expect(() => {
      tryCatch(
        () => { throw new Error('Test error'); },
        null,
        { onError: 'not a function' }
      );
    }).not.toThrow();
  });
});

// ========== asyncTryCatch Tests ==========
describe('asyncTryCatch', () => {
  it('should return async function result on success', async () => {
    const result = await asyncTryCatch(async () => 'success');
    expect(result).toBe('success');
  });

  it('should return fallback on async error', async () => {
    const result = await asyncTryCatch(
      async () => { throw new Error('Async error'); },
      'fallback'
    );
    expect(result).toBe('fallback');
  });

  it('should return null as default fallback', async () => {
    const result = await asyncTryCatch(async () => {
      throw new Error('Async error');
    });
    expect(result).toBeNull();
  });

  it('should call onError callback on async error', async () => {
    const onError = vi.fn();
    await asyncTryCatch(
      async () => { throw new Error('Async error'); },
      null,
      { onError }
    );
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(expect.any(AppError));
  });

  it('should rethrow error when rethrow option is true', async () => {
    await expect(asyncTryCatch(
      async () => { throw new Error('Async error'); },
      null,
      { rethrow: true }
    )).rejects.toThrow();
  });

  it('should handle rejected promises', async () => {
    const result = await asyncTryCatch(
      () => Promise.reject(new Error('Rejected')),
      'fallback'
    );
    expect(result).toBe('fallback');
  });

  it('should preserve AppError instances', async () => {
    const onError = vi.fn();
    const originalError = new NetworkError('Network failed', 500);

    await asyncTryCatch(
      async () => { throw originalError; },
      null,
      { onError }
    );

    const error = onError.mock.calls[0][0];
    expect(error).toBeInstanceOf(NetworkError);
    expect(error.status).toBe(500);
  });
});

// ========== withRetry Tests ==========
describe('withRetry', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return result on first success', async () => {
    const fn = vi.fn().mockResolvedValue('success');
    const resultPromise = withRetry(fn);

    await vi.runAllTimersAsync();
    const result = await resultPromise;

    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should retry on failure', async () => {
    const fn = vi.fn()
      .mockRejectedValueOnce(new Error('First fail'))
      .mockRejectedValueOnce(new Error('Second fail'))
      .mockResolvedValue('success');

    const resultPromise = withRetry(fn, { maxRetries: 3, delay: 100 });

    await vi.runAllTimersAsync();
    const result = await resultPromise;

    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should throw after max retries', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('Always fail'));

    // Wrap in try-catch to handle the expected rejection
    try {
      const resultPromise = withRetry(fn, { maxRetries: 3, delay: 100 });
      await vi.runAllTimersAsync();
      await resultPromise;
      // Should not reach here
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe('Always fail');
    }

    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should respect shouldRetry condition', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('Non-retryable'));

    const shouldRetry = vi.fn().mockReturnValue(false);

    // Wrap in try-catch to handle the expected rejection
    try {
      const resultPromise = withRetry(fn, { maxRetries: 3, shouldRetry });
      await vi.runAllTimersAsync();
      await resultPromise;
      // Should not reach here
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeDefined();
    }

    expect(fn).toHaveBeenCalledTimes(1);
    expect(shouldRetry).toHaveBeenCalledTimes(1);
  });

  it('should call onRetry callback', async () => {
    const fn = vi.fn()
      .mockRejectedValueOnce(new Error('Fail'))
      .mockResolvedValue('success');

    const onRetry = vi.fn();

    const resultPromise = withRetry(fn, { maxRetries: 3, delay: 100, onRetry });

    await vi.runAllTimersAsync();
    await resultPromise;

    expect(onRetry).toHaveBeenCalledTimes(1);
    expect(onRetry).toHaveBeenCalledWith(expect.any(Error), 1);
  });

  it('should use exponential backoff', async () => {
    const fn = vi.fn()
      .mockRejectedValueOnce(new Error('Fail 1'))
      .mockRejectedValueOnce(new Error('Fail 2'))
      .mockResolvedValue('success');

    const delay = 1000;
    const resultPromise = withRetry(fn, { maxRetries: 3, delay });

    // First call happens immediately
    expect(fn).toHaveBeenCalledTimes(1);

    // After first delay (1000ms)
    await vi.advanceTimersByTimeAsync(delay);
    expect(fn).toHaveBeenCalledTimes(2);

    // After second delay (2000ms - exponential backoff)
    await vi.advanceTimersByTimeAsync(delay * 2);
    expect(fn).toHaveBeenCalledTimes(3);

    await resultPromise;
  });
});

// ========== createErrorState Tests ==========
describe('createErrorState', () => {
  it('should create handleError and clearError functions', () => {
    const setError = vi.fn();
    const { handleError, clearError } = createErrorState(setError);

    expect(typeof handleError).toBe('function');
    expect(typeof clearError).toBe('function');
  });

  it('should call setError with error object on handleError', () => {
    const setError = vi.fn();
    const { handleError } = createErrorState(setError);

    handleError(new Error('Test error'));

    expect(setError).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Test error',
      code: expect.any(String),
      timestamp: expect.any(String)
    }));
  });

  it('should call setError with null on clearError', () => {
    const setError = vi.fn();
    const { clearError } = createErrorState(setError);

    clearError();

    expect(setError).toHaveBeenCalledWith(null);
  });

  it('should call setLoading(false) on handleError if provided', () => {
    const setError = vi.fn();
    const setLoading = vi.fn();
    const { handleError } = createErrorState(setError, setLoading);

    handleError(new Error('Test error'));

    expect(setLoading).toHaveBeenCalledWith(false);
  });

  it('should include context in error details', () => {
    const setError = vi.fn();
    const { handleError } = createErrorState(setError);

    handleError(new Error('Test error'), 'LoadData');

    const errorArg = setError.mock.calls[0][0];
    expect(errorArg.details?.context).toBe('LoadData');
  });
});

// ========== safeAsyncEffect Tests ==========
describe('safeAsyncEffect', () => {
  it('should execute async function', async () => {
    const asyncFn = vi.fn().mockResolvedValue('done');
    safeAsyncEffect(asyncFn);

    await vi.waitFor(() => {
      expect(asyncFn).toHaveBeenCalled();
    });
  });

  it('should return cleanup function', () => {
    const asyncFn = vi.fn().mockResolvedValue('done');
    const cleanup = safeAsyncEffect(asyncFn);

    expect(typeof cleanup).toBe('function');
  });

  it('should pass isCancelled checker to async function', async () => {
    let receivedChecker;
    const asyncFn = vi.fn().mockImplementation((isCancelled) => {
      receivedChecker = isCancelled;
      return Promise.resolve();
    });

    safeAsyncEffect(asyncFn);

    await vi.waitFor(() => {
      expect(receivedChecker).toBeDefined();
      expect(typeof receivedChecker).toBe('function');
      expect(receivedChecker()).toBe(false);
    });
  });

  it('should set isCancelled to true after cleanup', async () => {
    let receivedChecker;
    const asyncFn = vi.fn().mockImplementation((isCancelled) => {
      receivedChecker = isCancelled;
      return new Promise(resolve => setTimeout(resolve, 100));
    });

    const cleanup = safeAsyncEffect(asyncFn);
    cleanup();

    await vi.waitFor(() => {
      expect(receivedChecker()).toBe(true);
    });
  });

  it('should call onError callback on error (if not cancelled)', async () => {
    const onError = vi.fn();
    const asyncFn = vi.fn().mockRejectedValue(new Error('Async error'));

    safeAsyncEffect(asyncFn, { onError });

    await vi.waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it('should not call onError if cancelled', async () => {
    const onError = vi.fn();
    let rejectFn;
    const asyncFn = vi.fn().mockImplementation(() => {
      return new Promise((_, reject) => {
        rejectFn = reject;
      });
    });

    const cleanup = safeAsyncEffect(asyncFn, { onError });
    cleanup(); // Cancel immediately

    // Trigger the rejection
    rejectFn(new Error('Async error'));

    // Wait a bit to ensure onError would have been called if it was going to
    await new Promise(resolve => setTimeout(resolve, 50));

    expect(onError).not.toHaveBeenCalled();
  });
});

// ========== formatErrorMessage Tests ==========
describe('formatErrorMessage', () => {
  it('should format NETWORK_ERROR in Chinese', () => {
    const error = new NetworkError('Network failed');
    const message = formatErrorMessage(error, 'zh-CN');
    expect(message).toBe('網絡連接失敗，請檢查您的網絡設置');
  });

  it('should format NETWORK_ERROR in English', () => {
    const error = new NetworkError('Network failed');
    const message = formatErrorMessage(error, 'en-US');
    expect(message).toBe('Network connection failed, please check your network settings');
  });

  it('should format VALIDATION_ERROR in Chinese', () => {
    const error = new ValidationError('Invalid input');
    const message = formatErrorMessage(error, 'zh-CN');
    expect(message).toBe('輸入數據驗證失敗');
  });

  it('should format VALIDATION_ERROR in English', () => {
    const error = new ValidationError('Invalid input');
    const message = formatErrorMessage(error, 'en-US');
    expect(message).toBe('Input validation failed');
  });

  it('should format APP_ERROR in Chinese', () => {
    const error = new AppError('App error');
    const message = formatErrorMessage(error, 'zh-CN');
    expect(message).toBe('操作失敗，請稍後重試');
  });

  it('should format APP_ERROR in English', () => {
    const error = new AppError('App error');
    const message = formatErrorMessage(error, 'en-US');
    expect(message).toBe('Operation failed, please try again later');
  });

  it('should default to Chinese if language not recognized', () => {
    const error = new AppError('App error');
    const message = formatErrorMessage(error, 'fr-FR');
    expect(message).toBe('操作失敗，請稍後重試');
  });

  it('should default to Chinese if no language provided', () => {
    const error = new AppError('App error');
    const message = formatErrorMessage(error);
    expect(message).toBe('操作失敗，請稍後重試');
  });

  it('should use original message for unknown error codes', () => {
    const error = { code: 'UNKNOWN_CODE', message: 'Original message' };
    const message = formatErrorMessage(error, 'en-US');
    expect(message).toBe('Original message');
  });

  it('should handle errors without code', () => {
    const error = new Error('Plain error');
    const message = formatErrorMessage(error, 'en-US');
    expect(message).toBe('An unknown error occurred');
  });

  it('should handle errors without message', () => {
    const error = { code: 'UNKNOWN_ERROR' };
    const message = formatErrorMessage(error, 'en-US');
    expect(message).toBe('An unknown error occurred');
  });
});

// ========== Error Type Hierarchy Tests ==========
describe('Error Type Hierarchy', () => {
  it('should maintain proper inheritance chain', () => {
    const appError = new AppError('App');
    const networkError = new NetworkError('Network');
    const validationError = new ValidationError('Validation');

    expect(appError).toBeInstanceOf(Error);
    expect(networkError).toBeInstanceOf(Error);
    expect(networkError).toBeInstanceOf(AppError);
    expect(validationError).toBeInstanceOf(Error);
    expect(validationError).toBeInstanceOf(AppError);
  });

  it('should distinguish between error types', () => {
    const appError = new AppError('App');
    const networkError = new NetworkError('Network');
    const validationError = new ValidationError('Validation');

    expect(appError.name).toBe('AppError');
    expect(networkError.name).toBe('NetworkError');
    expect(validationError.name).toBe('ValidationError');
  });

  it('should have correct error codes', () => {
    const appError = new AppError('App');
    const networkError = new NetworkError('Network');
    const validationError = new ValidationError('Validation');

    expect(appError.code).toBe('APP_ERROR');
    expect(networkError.code).toBe('NETWORK_ERROR');
    expect(validationError.code).toBe('VALIDATION_ERROR');
  });
});

// ========== Edge Cases ==========
describe('Edge Cases', () => {
  it('should handle null error in formatErrorMessage', () => {
    // formatErrorMessage accesses error.code, which will throw TypeError for null
    // This is expected behavior - the function requires an error object
    expect(() => formatErrorMessage(null, 'en-US')).toThrow(TypeError);
  });

  it('should handle undefined error in formatErrorMessage', () => {
    // Similar to null, accessing properties on undefined throws TypeError
    expect(() => formatErrorMessage(undefined, 'en-US')).toThrow(TypeError);
  });

  it('should handle error-like object without code', () => {
    // An object with just a message should use the UNKNOWN_ERROR message first,
    // then fall back to error.message if unknown code not in lang map
    const error = { message: 'Custom message' };
    const message = formatErrorMessage(error, 'en-US');
    // lang[code] (UNKNOWN_ERROR) exists, so it returns that
    expect(message).toBe('An unknown error occurred');
  });

  it('should handle empty error object', () => {
    // An empty object should fall back to UNKNOWN_ERROR
    const error = {};
    const message = formatErrorMessage(error, 'en-US');
    expect(message).toBe('An unknown error occurred');
  });

  it('should handle string as error in tryCatch', () => {
    const result = tryCatch(() => {
      throw 'String error';
    }, 'fallback');
    expect(result).toBe('fallback');
  });

  it('should handle number as error in tryCatch', () => {
    const result = tryCatch(() => {
      throw 42;
    }, 'fallback');
    expect(result).toBe('fallback');
  });
});
