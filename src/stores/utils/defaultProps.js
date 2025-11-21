import { nanoid } from 'nanoid';

/**
 * 默認組件屬性生成器
 */

/**
 * 生成組件的默認屬性
 * @param {string} componentType - 組件类型
 * @param {Object} baseContent - 基礎內容覆蓋
 * @returns {Object} - 默認屬性對象
 */
export const createDefaultProps = (componentType, baseContent = {}) => {
  const defaults = {
    Button: {
      baseProps: {
        content: { text: '按鈕' },
        style: {
          padding: 0,
          margin: 0,
          backgroundColor: '#3B82F6',
          color: '#FFFFFF',
          borderRadius: 6,
          fontSize: 14,
          fontWeight: 500
        },
        aria: { role: 'button', label: '按鈕' }
      }
    },
    Text: {
      baseProps: {
        content: { text: '文本內容' },
        style: {
          fontSize: 16,
          color: '#000000',
          lineHeight: 1.5,
          margin: 0,
          padding: 0
        }
      }
    },
    Image: {
      baseProps: {
        content: {
          src: 'https://media.istockphoto.com/id/492190130/photo/white-spitz-dog-lying-on-colored-background.jpg?s=612x612&w=0&k=20&c=uKgK-OBd8W-CgWjnl5MDhm2BvwcsVRifCQufGAIz52s=',
          alt: '圖片描述',
          placeholder: 'https://media.istockphoto.com/id/492190130/photo/white-spitz-dog-lying-on-colored-background.jpg?s=612x612&w=0&k=20&c=uKgK-OBd8W-CgWjnl5MDhm2BvwcsVRifCQufGAIz52s='
        },
        style: {
          width: 400,
          height: 300,
          objectFit: 'cover',
          margin: 0,
          padding: 0
        }
      }
    },
    Card: {
      baseProps: {
        style: {
          padding: 0,
          margin: 0,
          border: '1px solid #E5E7EB',
          borderRadius: 8,
          backgroundColor: '#FFFFFF'
        }
      },
      layoutProps: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    },
    Flex: {
      layoutProps: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }
    },
    Grid: {
      layoutProps: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16
      }
    }
  };

  return {
    id: nanoid(),
    ...(defaults[componentType] || {}),
    ...baseContent,
    responsiveOverrides: {},
    responsiveLayoutOverrides: {}
  };
};

/**
 * 獲取組件类型的默認佈局屬性
 * @param {string} componentType - 組件类型
 * @returns {Object} - 默認佈局屬性
 */
export const getDefaultLayoutProps = (componentType) => {
  const layoutDefaults = {
    Flex: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
    Grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    },
    Card: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  };

  return layoutDefaults[componentType] || {};
};

/**
 * 獲取組件类型的默認樣式
 * @param {string} componentType - 組件类型
 * @returns {Object} - 默認樣式對象
 */
export const getDefaultStyle = (componentType) => {
  const styleDefaults = {
    Button: {
      padding: 0,
      margin: 0,
      backgroundColor: '#3B82F6',
      color: '#FFFFFF',
      borderRadius: 6,
      fontSize: 14,
      fontWeight: 500
    },
    Text: {
      fontSize: 16,
      color: '#000000',
      lineHeight: 1.5,
      margin: 0,
      padding: 0
    },
    Image: {
      width: 400,
      height: 300,
      objectFit: 'cover',
      margin: 0,
      padding: 0
    },
    Card: {
      padding: 0,
      margin: 0,
      border: '1px solid #E5E7EB',
      borderRadius: 8,
      backgroundColor: '#FFFFFF'
    }
  };

  return styleDefaults[componentType] || {};
};
