/**
 * File Uploader Component
 * Drag-and-drop file upload with file type detection
 * @module components/community/UploadEditor/FileUploader
 */

import { memo, useCallback, useState, useRef } from 'react';
import { Upload, File, X, FileCode, FileType } from 'lucide-react';

/**
 * Accepted file types
 */
const ACCEPTED_TYPES = {
  'text/html': ['html', 'htm'],
  'text/css': ['css'],
  'application/javascript': ['js'],
  'text/javascript': ['js'],
  'text/jsx': ['jsx'],
  'text/plain': ['html', 'css', 'js', 'jsx', 'htm'],
};

const ACCEPTED_EXTENSIONS = ['html', 'htm', 'css', 'js', 'jsx', 'tsx'];

/**
 * File type icon map
 */
const FILE_ICONS = {
  html: { icon: FileCode, color: 'text-orange-400' },
  htm: { icon: FileCode, color: 'text-orange-400' },
  css: { icon: FileType, color: 'text-blue-400' },
  js: { icon: FileCode, color: 'text-yellow-400' },
  jsx: { icon: FileCode, color: 'text-cyan-400' },
  tsx: { icon: FileCode, color: 'text-blue-400' },
};

/**
 * File Uploader Component
 */
function FileUploaderComponent({ onUpload, onClose, t }) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // Validate file
  const validateFile = useCallback((file) => {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!ACCEPTED_EXTENSIONS.includes(ext)) {
      return {
        valid: false,
        error: `Unsupported file type: .${ext}`,
      };
    }

    // Check file size (max 1MB)
    if (file.size > 1024 * 1024) {
      return {
        valid: false,
        error: `File too large: ${file.name} (max 1MB)`,
      };
    }

    return { valid: true };
  }, []);

  // Handle file selection
  const handleFiles = useCallback((files) => {
    setError(null);
    const validFiles = [];

    for (const file of files) {
      const validation = validateFile(file);
      if (validation.valid) {
        validFiles.push(file);
      } else {
        setError(validation.error);
      }
    }

    if (validFiles.length > 0) {
      setSelectedFiles((prev) => [...prev, ...validFiles]);
    }
  }, [validateFile]);

  // Handle drag events
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, [handleFiles]);

  // Handle file input change
  const handleInputChange = useCallback((e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
    // Reset input value to allow selecting the same file again
    e.target.value = '';
  }, [handleFiles]);

  // Remove a file from the list
  const handleRemoveFile = useCallback((index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  // Handle upload confirmation
  const handleConfirm = useCallback(() => {
    if (selectedFiles.length > 0) {
      onUpload(selectedFiles);
    }
  }, [selectedFiles, onUpload]);

  // Get file icon
  const getFileIcon = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    const iconInfo = FILE_ICONS[ext] || { icon: File, color: 'text-gray-400' };
    const IconComponent = iconInfo.icon;
    return <IconComponent size={20} className={iconInfo.color} />;
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {t('community.editor.uploadFiles') || 'Upload Files'}
        </h3>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-500/10'
            : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/50'
        }`}
      >
        <Upload
          size={40}
          className={`mx-auto mb-4 ${isDragging ? 'text-blue-400' : 'text-gray-400'}`}
        />
        <p className="text-gray-300 mb-2">
          {t('community.editor.dropFilesHere') || 'Drop files here or click to browse'}
        </p>
        <p className="text-gray-500 text-sm">
          {t('community.editor.supportedFormats') || 'Supported formats: HTML, CSS, JS, JSX'}
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".html,.htm,.css,.js,.jsx,.tsx"
        onChange={handleInputChange}
        className="hidden"
      />

      {/* Error message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Selected files */}
      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-gray-400 text-sm">
            {t('community.editor.selectedFiles') || 'Selected files:'}
          </p>
          <div className="bg-gray-900 rounded-lg divide-y divide-gray-700">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  {getFileIcon(file.name)}
                  <span className="text-gray-300 text-sm">{file.name}</span>
                  <span className="text-gray-500 text-xs">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </div>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="p-1 rounded text-gray-500 hover:text-red-400 hover:bg-gray-700 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          {t('cancel') || 'Cancel'}
        </button>
        <button
          onClick={handleConfirm}
          disabled={selectedFiles.length === 0}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedFiles.length === 0
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {t('community.editor.importFiles') || 'Import Files'}
        </button>
      </div>
    </div>
  );
}

export const FileUploader = memo(FileUploaderComponent);
export default FileUploader;
