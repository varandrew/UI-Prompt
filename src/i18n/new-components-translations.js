// 新組件翻譯補丁
// 這些翻譯需要整合到 zh-CN.js 和 en-US.js 中

export const zhCNTranslations = {
  // 組件分類名稱
  nav: {
    visualEffects: '視覺特效' // 新增分類
  },

  // 組件翻譯
  data: {
    components: {
      // Visual Effects - Confetti Effects
      visualEffects: {
        'confetti-effects': {
          title: '五彩紙屑效果',
          description: '慶祝和成功反饋的動畫特效，支持多種設計風格',
          variants: {
            minimalism: {
              name: '極簡主義',
              description: '黑白簡約紙屑，幾何形狀，注重留白'
            },
            'material-design': {
              name: 'Material Design',
              description: 'Google Material 色板，流暢動畫，強調層級'
            },
            'neo-brutalism': {
              name: '新粗野主義',
              description: '大膽色塊，高對比度，強烈視覺衝擊'
            },
            glassmorphism: {
              name: '玻璃態',
              description: '半透明柔和紙屑，模糊效果，飄逸感'
            },
            cyberpunk: {
              name: '賽博朋克',
              description: '霓虹發光紙屑，未來感，強烈對比'
            }
          }
        }
      },

      // Interactive - Comparison Slider
      interactive: {
        'comparison-slider': {
          title: 'Before/After 對比滑塊',
          description: '圖片對比滑塊，支持拖拽和觸摸操作',
          variants: {
            minimalism: {
              name: '極簡主義',
              description: '細線分割器，黑白對比，簡潔交互'
            },
            skeuomorphism: {
              name: '擬物化',
              description: '3D 滑塊把手，真實質感，立體陰影'
            },
            cyberpunk: {
              name: '賽博朋克',
              description: '霓虹發光分割線，未來感手柄'
            }
          }
        }
      }
    }
  },

  // Demo 文本翻譯
  demo: {
    confetti: {
      minimalism: {
        title: '極簡紙屑',
        subtitle: '簡約黑白設計',
        simple: '純粹',
        geometric: '幾何',
        monochrome: '單色'
      },
      material: {
        title: 'Material 紙屑',
        subtitle: 'Google 設計規範',
        primary: '主色調',
        success: '成功',
        colorful: '多彩'
      },
      brutal: {
        title: '粗野紙屑',
        subtitle: '大膽視覺衝擊',
        explosion: '爆炸',
        chaos: '混沌',
        mega: '超級'
      },
      glass: {
        title: '玻璃紙屑',
        subtitle: '柔和半透明',
        soft: '柔和',
        pastel: '粉彩',
        ethereal: '飄逸'
      },
      cyberpunk: {
        title: '賽博紙屑',
        subtitle: '霓虹未來',
        neon: '霓虹',
        glitch: '故障',
        matrix: '矩陣'
      }
    },
    comparisonSlider: {
      minimalism: {
        title: '極簡對比',
        subtitle: '拖拽滑塊查看前後對比',
        before: '之前',
        after: '之後'
      },
      skeuomorphism: {
        title: '擬物對比',
        subtitle: '真實3D滑塊效果',
        before: '原始',
        after: '優化'
      },
      cyberpunk: {
        title: '賽博對比',
        subtitle: '霓虹發光分割線',
        before: '未改造',
        after: '已改造'
      }
    }
  }
};

export const enUSTranslations = {
  // Component category names
  nav: {
    visualEffects: 'Visual Effects' // New category
  },

  // Component translations
  data: {
    components: {
      // Visual Effects - Confetti Effects
      visualEffects: {
        'confetti-effects': {
          title: 'Confetti Effects',
          description: 'Celebration and success feedback animations with multiple design styles',
          variants: {
            minimalism: {
              name: 'Minimalism',
              description: 'Black and white simple confetti, geometric shapes, emphasis on whitespace'
            },
            'material-design': {
              name: 'Material Design',
              description: 'Google Material color palette, smooth animations, emphasis on hierarchy'
            },
            'neo-brutalism': {
              name: 'Neo-Brutalism',
              description: 'Bold color blocks, high contrast, strong visual impact'
            },
            glassmorphism: {
              name: 'Glassmorphism',
              description: 'Semi-transparent soft confetti, blur effects, floating sensation'
            },
            cyberpunk: {
              name: 'Cyberpunk',
              description: 'Neon glowing confetti, futuristic, strong contrast'
            }
          }
        }
      },

      // Interactive - Comparison Slider
      interactive: {
        'comparison-slider': {
          title: 'Before/After Comparison Slider',
          description: 'Image comparison slider with drag and touch support',
          variants: {
            minimalism: {
              name: 'Minimalism',
              description: 'Thin line divider, black and white contrast, clean interaction'
            },
            skeuomorphism: {
              name: 'Skeuomorphism',
              description: '3D slider handle, realistic texture, dimensional shadows'
            },
            cyberpunk: {
              name: 'Cyberpunk',
              description: 'Neon glowing divider, futuristic handle'
            }
          }
        }
      }
    }
  },

  // Demo text translations
  demo: {
    confetti: {
      minimalism: {
        title: 'Minimal Confetti',
        subtitle: 'Simple Black & White',
        simple: 'Pure',
        geometric: 'Geometric',
        monochrome: 'Monochrome'
      },
      material: {
        title: 'Material Confetti',
        subtitle: 'Google Design Specs',
        primary: 'Primary',
        success: 'Success',
        colorful: 'Colorful'
      },
      brutal: {
        title: 'Brutal Confetti',
        subtitle: 'Bold Visual Impact',
        explosion: 'Explosion',
        chaos: 'Chaos',
        mega: 'Mega'
      },
      glass: {
        title: 'Glass Confetti',
        subtitle: 'Soft Translucent',
        soft: 'Soft',
        pastel: 'Pastel',
        ethereal: 'Ethereal'
      },
      cyberpunk: {
        title: 'Cyber Confetti',
        subtitle: 'Neon Future',
        neon: 'Neon',
        glitch: 'Glitch',
        matrix: 'Matrix'
      }
    },
    comparisonSlider: {
      minimalism: {
        title: 'Minimal Comparison',
        subtitle: 'Drag slider to compare',
        before: 'Before',
        after: 'After'
      },
      skeuomorphism: {
        title: 'Skeuo Comparison',
        subtitle: 'Realistic 3D slider',
        before: 'Original',
        after: 'Enhanced'
      },
      cyberpunk: {
        title: 'Cyber Comparison',
        subtitle: 'Neon glowing divider',
        before: 'Unmodified',
        after: 'Modified'
      }
    }
  }
};
