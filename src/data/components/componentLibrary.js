/**
 * 組件庫定義 - MVP 版本
 *
 * 包含 6 種核心組件:
 * - 原子組件: Button, Text, Image
 * - 容器組件: Flex, Grid
 * - 複合組件: Card
 */

export const componentLibrary = [
  // ========== 原子組件 ==========

  {
    componentType: 'Button',
    displayName: {
      'zh-cn': '按钮',
      'en-US': 'Button'
    },
    category: 'atomic',
    icon: '🔘',
    description: {
      'zh-cn': '可点击的按钮组件，支持主要按钮、次要按钮等样式',
      'en-US': 'Clickable button component with primary, secondary styles'
    },
    allowedParents: ['Flex', 'Grid', 'Card', 'Page'],
    defaultProps: {
      baseProps: {
        content: { text: 'componentLibrary.button.content' },
        style: {
          // 預设边距為 0
          padding: 0,
          margin: 0,
          backgroundColor: '#3B82F6',
          color: '#FFFFFF',
          borderRadius: 6,
          fontSize: 14,
          fontWeight: 500,
          cursor: 'pointer',
          border: 'none'
        },
        aria: { role: 'button', label: 'componentLibrary.button.content' }
      }
    },
    variants: [
      {
        name: 'primary',
        style: { backgroundColor: '#3B82F6', color: '#FFFFFF' }
      },
      {
        name: 'secondary',
        style: { backgroundColor: '#E5E7EB', color: '#1F2937' }
      },
      {
        name: 'text',
        style: { backgroundColor: 'transparent', color: '#3B82F6', border: 'none' }
      }
    ]
  },

  {
    componentType: 'Text',
    displayName: {
      'zh-cn': '文本',
      'en-US': 'Text'
    },
    category: 'atomic',
    icon: '📝',
    description: {
      'zh-cn': '纯文本内容展示组件',
      'en-US': 'Text component with heading, body, label variants'
    },
    allowedParents: ['Flex', 'Grid', 'Card', 'Page'],
    defaultProps: {
      baseProps: {
        content: { text: 'componentLibrary.text.content' },
        style: {
          fontSize: 16,
          color: '#000000',
          lineHeight: 1.5,
          // 預设边距為 0
          margin: 0,
          padding: 0
        }
      }
    },
    variants: [
      {
        name: 'heading',
        style: { fontSize: 32, fontWeight: 700, lineHeight: 1.2 }
      },
      {
        name: 'subheading',
        style: { fontSize: 24, fontWeight: 600, lineHeight: 1.3 }
      },
      {
        name: 'body',
        style: { fontSize: 16, fontWeight: 400, lineHeight: 1.5 }
      },
      {
        name: 'caption',
        style: { fontSize: 12, fontWeight: 400, color: '#6B7280', lineHeight: 1.4 }
      }
    ]
  },

  {
    componentType: 'Image',
    displayName: {
      'zh-cn': '图片',
      'en-US': 'Image'
    },
    category: 'atomic',
    icon: '🖼️',
    description: {
      'zh-cn': '图片组件，支持占位符和响应式调整',
      'en-US': 'Image component with placeholder and responsive sizing'
    },
    allowedParents: ['Flex', 'Grid', 'Card', 'Page'],
    defaultProps: {
      baseProps: {
        content: {
          src: 'https://media.istockphoto.com/id/492190130/photo/white-spitz-dog-lying-on-colored-background.jpg?s=612x612&w=0&k=20&c=uKgK-OBd8W-CgWjnl5MDhm2BvwcsVRifCQufGAIz52s=',
          alt: '图片描述',
          placeholder: 'https://media.istockphoto.com/id/492190130/photo/white-spitz-dog-lying-on-colored-background.jpg?s=612x612&w=0&k=20&c=uKgK-OBd8W-CgWjnl5MDhm2BvwcsVRifCQufGAIz52s='
        },
        style: {
          width: 400,
          height: 300,
          objectFit: 'cover',
          borderRadius: 0,
          // 預设边距為 0
          margin: 0,
          padding: 0
        }
      }
    }
  },

  // ========== 容器組件 ==========

  {
    componentType: 'Flex',
    displayName: {
      'zh-cn': 'Flex 容器',
      'en-US': 'Flex Container'
    },
    category: 'container',
    icon: '📦',
    description: {
      'zh-cn': 'Flexbox 布局容器，支持水平或垂直排列',
      'en-US': 'Flexbox layout container with horizontal or vertical arrangement'
    },
    allowsChildren: true,
    allowedParents: ['Flex', 'Grid', 'Card', 'Page'],
    defaultProps: {
      baseProps: {
        style: {
          // 預设边距為 0
          padding: 0,
          margin: 0,
          backgroundColor: 'transparent'
        }
      },
      layoutProps: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap'
      }
    },
    layoutOptions: {
      flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
      alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      flexWrap: ['nowrap', 'wrap', 'wrap-reverse']
    }
  },

  {
    componentType: 'Grid',
    displayName: {
      'zh-cn': 'Grid 容器',
      'en-US': 'Grid Container'
    },
    category: 'container',
    icon: '⊞',
    description: {
      'zh-cn': 'CSS Grid 布局容器，支持多列网格',
      'en-US': 'CSS Grid layout container with multi-column support'
    },
    allowsChildren: true,
    allowedParents: ['Flex', 'Grid', 'Card', 'Page'],
    defaultProps: {
      baseProps: {
        style: {
          // 預设边距為 0
          padding: 0,
          margin: 0,
          backgroundColor: 'transparent'
        }
      },
      layoutProps: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        alignItems: 'start',
        justifyItems: 'stretch'
      }
    },
    layoutOptions: {
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
        'repeat(auto-fit, minmax(200px, 1fr))'
      ],
      alignItems: ['start', 'center', 'end', 'stretch'],
      justifyItems: ['start', 'center', 'end', 'stretch']
    }
  },

  // ========== 複合組件 ==========

  {
    componentType: 'Card',
    displayName: {
      'zh-cn': '卡片',
      'en-US': 'Card'
    },
    category: 'composite',
    icon: '🃏',
    description: {
      'zh-cn': '卡片容器，包含标题、内容和操作区域',
      'en-US': 'Card container with header, content, and actions'
    },
    allowsChildren: true,
    allowedParents: ['Flex', 'Grid', 'Page'],
    defaultProps: {
      baseProps: {
        style: {
          // 預设边距為 0
          padding: 0,
          margin: 0,
          border: '1px solid #E5E7EB',
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }
      },
      layoutProps: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'stretch'
      }
    }
  }
];

/**
 * 獲取組件定義
 */
export const getComponentDef = (componentType) => {
  return componentLibrary.find(comp => comp.componentType === componentType);
};

/**
 * 按类別分組
 */
export const getComponentsByCategory = () => {
  return {
    atomic: componentLibrary.filter(comp => comp.category === 'atomic'),
    container: componentLibrary.filter(comp => comp.category === 'container'),
    composite: componentLibrary.filter(comp => comp.category === 'composite')
  };
};

/**
 * 校驗父子关係
 */
export const canDropIntoParent = (childType, parentType) => {
  const childDef = getComponentDef(childType);

  if (!childDef) return false;

  // Page 可以包含任何組件
  if (parentType === 'Page') return true;

  // 检查 allowedParents 約束
  if (childDef.allowedParents) {
    return childDef.allowedParents.includes(parentType);
  }

  return true;
};

/**
 * 判斷組件是否可包含子元素
 */
export const canHaveChildren = (componentType) => {
  const def = getComponentDef(componentType);
  return def?.allowsChildren || componentType === 'Page';
};
