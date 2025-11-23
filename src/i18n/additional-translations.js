// 新增组件翻译补充 - 需要手动整合到 zh-CN.js 和 en-US.js

export const zhCNAdditions = {
  // ===== 添加到 data.components.dataDisplay =====
  "animated-counter": {
    "title": "动画计数器",
    "description": "数字滚动计数器，支持多种动画效果",
    "variants": {
      "minimalism": {
        "name": "极简主义",
        "description": "简洁数字滚动，注重排版和留白"
      },
      "skeuomorphism": {
        "name": "拟物化",
        "description": "翻页效果计数器，真实质感"
      },
      "material-design": {
        "name": "Material Design",
        "description": "Google 设计规范，彩色卡片"
      },
      "terminal-cli": {
        "name": "Terminal CLI",
        "description": "终端命令行风格，系统状态显示"
      },
      "cyberpunk": {
        "name": "赛博朋克",
        "description": "霓虹发光数字，未来科技感"
      }
    }
  },

  // ===== 添加到 data.components.feedback =====
  "reaction-picker": {
    "title": "表情反应选择器",
    "description": "社交互动表情选择器，支持多种设计风格",
    "variants": {
      "material-design": {
        "name": "Material Design",
        "description": "Google 设计规范，圆润卡片"
      },
      "glassmorphism": {
        "name": "玻璃态",
        "description": "半透明毛玻璃效果"
      },
      "neumorphism": {
        "name": "新拟态",
        "description": "柔和浮雕效果"
      },
      "minimalism": {
        "name": "极简主义",
        "description": "简洁黑白设计"
      }
    }
  },

  // ===== 添加到 data.components.interactive =====
  "image-magnifier": {
    "title": "图片放大镜",
    "description": "鼠标悬停图片放大效果",
    "variants": {
      "universal": {
        "name": "通用版本",
        "description": "适用于所有场景的图片放大镜"
      }
    }
  },

  // ===== 添加到 demo 对象 =====
  "animatedCounter": {
    "minimalism": {
      "title": "极简计数器",
      "subtitle": "简洁数字动画",
      "users": "用户",
      "projects": "项目",
      "revenue": "收入"
    },
    "skeuomorphism": {
      "title": "拟物计数器",
      "subtitle": "翻页数字效果",
      "downloads": "下载量",
      "sales": "销售额",
      "satisfaction": "满意度"
    },
    "material": {
      "title": "Material 计数器",
      "subtitle": "彩色统计卡片",
      "members": "成员",
      "completed": "已完成",
      "active": "活跃",
      "rating": "评分"
    },
    "terminal": {
      "title": "终端计数器",
      "subtitle": "系统状态监控",
      "refreshing": "实时刷新中..."
    },
    "cyberpunk": {
      "title": "赛博计数器",
      "subtitle": "未来数据面板",
      "neural": "神经网络",
      "quantum": "量子处理",
      "cyber": "赛博连接",
      "matrix": "矩阵节点"
    }
  },
  "reactionPicker": {
    "material": {
      "title": "Material 反应",
      "subtitle": "悬停查看更多反应",
      "postText": "这是一条精彩的内容！点击下方图标查看更多反应选项。"
    },
    "glass": {
      "title": "玻璃态反应",
      "subtitle": "半透明交互效果",
      "postText": "体验毛玻璃风格的表情反应选择器。"
    },
    "neomorph": {
      "title": "新拟态反应",
      "subtitle": "柔和浮雕交互",
      "postText": "享受柔和的新拟态设计表情选择器。"
    },
    "minimalism": {
      "title": "极简反应",
      "subtitle": "简洁交互设计",
      "postText": "最简单直接的表情反应选择方式。"
    }
  },
  "imageMagnifier": {
    "title": "图片放大镜",
    "subtitle": "鼠标移动查看放大效果",
    "circle": "圆形放大镜",
    "square": "方形放大镜"
  }
};

export const enUSAdditions = {
  // ===== Add to data.components.dataDisplay =====
  "animated-counter": {
    "title": "Animated Counter",
    "description": "Number scrolling counter with various animation effects",
    "variants": {
      "minimalism": {
        "name": "Minimalism",
        "description": "Clean number scrolling, focus on typography and spacing"
      },
      "skeuomorphism": {
        "name": "Skeuomorphism",
        "description": "Flip effect counter with realistic texture"
      },
      "material-design": {
        "name": "Material Design",
        "description": "Google design specs with colorful cards"
      },
      "terminal-cli": {
        "name": "Terminal CLI",
        "description": "Terminal CLI style with system status display"
      },
      "cyberpunk": {
        "name": "Cyberpunk",
        "description": "Neon glowing numbers with futuristic tech feel"
      }
    }
  },

  // ===== Add to data.components.feedback =====
  "reaction-picker": {
    "title": "Reaction Picker",
    "description": "Social interaction emoji picker with multiple design styles",
    "variants": {
      "material-design": {
        "name": "Material Design",
        "description": "Google design specs with rounded cards"
      },
      "glassmorphism": {
        "name": "Glassmorphism",
        "description": "Semi-transparent frosted glass effect"
      },
      "neumorphism": {
        "name": "Neumorphism",
        "description": "Soft embossed effect"
      },
      "minimalism": {
        "name": "Minimalism",
        "description": "Clean black and white design"
      }
    }
  },

  // ===== Add to data.components.interactive =====
  "image-magnifier": {
    "title": "Image Magnifier",
    "description": "Image zoom effect on mouse hover",
    "variants": {
      "universal": {
        "name": "Universal",
        "description": "Image magnifier suitable for all scenarios"
      }
    }
  },

  // ===== Add to demo object =====
  "animatedCounter": {
    "minimalism": {
      "title": "Minimal Counter",
      "subtitle": "Clean number animation",
      "users": "Users",
      "projects": "Projects",
      "revenue": "Revenue"
    },
    "skeuomorphism": {
      "title": "Skeuo Counter",
      "subtitle": "Flip number effect",
      "downloads": "Downloads",
      "sales": "Sales",
      "satisfaction": "Satisfaction"
    },
    "material": {
      "title": "Material Counter",
      "subtitle": "Colorful stat cards",
      "members": "Members",
      "completed": "Completed",
      "active": "Active",
      "rating": "Rating"
    },
    "terminal": {
      "title": "Terminal Counter",
      "subtitle": "System status monitor",
      "refreshing": "Real-time refreshing..."
    },
    "cyberpunk": {
      "title": "Cyber Counter",
      "subtitle": "Future data panel",
      "neural": "Neural Network",
      "quantum": "Quantum Process",
      "cyber": "Cyber Connect",
      "matrix": "Matrix Node"
    }
  },
  "reactionPicker": {
    "material": {
      "title": "Material Reactions",
      "subtitle": "Hover to see more reactions",
      "postText": "This is amazing content! Click the icon below to see more reaction options."
    },
    "glass": {
      "title": "Glass Reactions",
      "subtitle": "Semi-transparent interaction",
      "postText": "Experience the frosted glass style emoji reaction picker."
    },
    "neomorph": {
      "title": "Neomorph Reactions",
      "subtitle": "Soft embossed interaction",
      "postText": "Enjoy the soft neumorphic design emoji picker."
    },
    "minimalism": {
      "title": "Minimal Reactions",
      "subtitle": "Clean interaction design",
      "postText": "The simplest and most direct emoji reaction selector."
    }
  },
  "imageMagnifier": {
    "title": "Image Magnifier",
    "subtitle": "Move mouse to see zoom effect",
    "circle": "Circle Magnifier",
    "square": "Square Magnifier"
  }
};
