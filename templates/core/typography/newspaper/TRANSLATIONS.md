# Newspaper Typography 翻譯補丁

## 使用說明

將以下翻譯添加到對應的 i18n 文件中:

---

## zh-CN.js (简体中文)

在 `styles.core` 對象中添加以下內容:

```javascript
"typography": {
  "newspaper": {
    "title": "报纸排版",
    "description": "传统报纸排版技术：首字下沉、多栏布局、衬线字体",
    "colorScheme": "深蓝强调色、米白背景、深灰正文",

    "modernEditorial": {
      "title": "现代报纸编辑",
      "description": "现代数字报纸风格：纯白背景、清晰排版、适合在线阅读",
      "colorScheme": "深蓝 (#1E3A8A)、米白 (#FAF8F5)、深灰 (#374151)"
    },

    "vintageRetro": {
      "title": "复古报纸",
      "description": "20世纪复古报纸风格：米黄纸张、旧化纹理、咖啡渍效果",
      "colorScheme": "深棕褐色 (#8B4513)、米黄色 (#F5DEB3)、暗褐背景 (#3B2F2F)"
    }
  }
}
```

---

## en-US.js (English)

在 `styles.core` 對象中添加以下內容:

```javascript
"typography": {
  "newspaper": {
    "title": "Newspaper Typography",
    "description": "Traditional newspaper layout: drop caps, multi-column layout, serif fonts",
    "colorScheme": "Deep blue accent, off-white background, dark grey body",

    "modernEditorial": {
      "title": "Modern Newspaper Editorial",
      "description": "Modern digital newspaper style: pure white background, clean layout, optimized for online reading",
      "colorScheme": "Deep blue (#1E3A8A), off-white (#FAF8F5), dark grey (#374151)"
    },

    "vintageRetro": {
      "title": "Vintage Newspaper",
      "description": "20th century vintage newspaper style: beige paper, aged texture, coffee stain effects",
      "colorScheme": "Deep sepia (#8B4513), beige (#F5DEB3), dark brown (#3B2F2F)"
    }
  }
}
```

---

## styleTagsMapping.js 标籤映射

在 `styleEnhancements` 對象中添加:

```javascript
// Modern Newspaper Editorial
'core-typography-newspaper-modern-editorial': {
  primaryCategory: 'core',
  categories: ['core', 'typography'],
  tags: ['editorial', 'newspaper', 'multi-column', 'drop-cap', 'serif', 'professional', 'authoritative'],
  relatedStyles: [
    'core-typography-newspaper-vintage-retro',
    'core-minimalism',
    'visual-outlineStyle-business'
  ]
},

// Vintage Newspaper Retro
'core-typography-newspaper-vintage-retro': {
  primaryCategory: 'core',
  categories: ['core', 'typography', 'retro'],
  tags: ['vintage', 'newspaper', 'aged-paper', 'retro', 'print-era', 'nostalgic'],
  relatedStyles: [
    'core-typography-newspaper-modern-editorial',
    'core-skeuomorphism',
    'retro-classic'
  ]
}
```
