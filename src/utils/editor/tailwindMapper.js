/**
 * Tailwind CSS 映射器
 *
 * 職責:
 * - 將 px/数值轉換為 Tailwind class 建議
 * - 處理颜色映射
 * - 生成響應式前綴
 *
 * 版本: Tailwind CSS 4.1
 */

// ========== 間距比例尺 (Spacing Scale) ==========
const SPACING_SCALE = {
  0: '0',
  2: '0.5',   // 2px → 0.5
  4: '1',     // 4px → 1
  6: '1.5',   // 6px → 1.5
  8: '2',     // 8px → 2
  10: '2.5',  // 10px → 2.5
  12: '3',    // 12px → 3
  14: '3.5',  // 14px → 3.5
  16: '4',    // 16px → 4
  20: '5',    // 20px → 5
  24: '6',    // 24px → 6
  28: '7',    // 28px → 7
  32: '8',    // 32px → 8
  40: '10',   // 40px → 10
  48: '12',   // 48px → 12
  56: '14',   // 56px → 14
  64: '16'    // 64px → 16
};

// ========== 颜色映射表 (Tailwind Default Palette) ==========
const COLOR_MAP = {
  // Blues
  '#3B82F6': 'blue-500',
  '#60A5FA': 'blue-400',
  '#2563EB': 'blue-600',
  '#1D4ED8': 'blue-700',

  // Grays
  '#FFFFFF': 'white',
  '#000000': 'black',
  '#F9FAFB': 'gray-50',
  '#F3F4F6': 'gray-100',
  '#E5E7EB': 'gray-200',
  '#D1D5DB': 'gray-300',
  '#9CA3AF': 'gray-400',
  '#6B7280': 'gray-500',
  '#4B5563': 'gray-600',
  '#374151': 'gray-700',
  '#1F2937': 'gray-800',
  '#111827': 'gray-900',

  // Reds
  '#EF4444': 'red-500',
  '#DC2626': 'red-600',
  '#FCA5A5': 'red-300',

  // Greens
  '#10B981': 'green-500',
  '#059669': 'green-600',
  '#34D399': 'green-400',

  // Yellows
  '#F59E0B': 'yellow-500',
  '#FCD34D': 'yellow-300',

  // Purples
  '#8B5CF6': 'purple-500',
  '#A78BFA': 'purple-400'
};

/**
 * 查找最接近的比例尺值
 */
function findClosestScale(value, scaleMap) {
  const scales = Object.keys(scaleMap).map(Number);
  return scales.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  );
}

/**
 * 主映射函数
 */
export const mapToTailwind = (cssProperty, value) => {
  const mappers = {
    // ========== 間距屬性 ==========
    padding: (val) => {
      if (typeof val === 'object') {
        const { top, right, bottom, left } = val;
        if (top === right && right === bottom && bottom === left) {
          // 四边相同
          const scale = findClosestScale(top, SPACING_SCALE);
          return `p-${SPACING_SCALE[scale]}`;
        }
        // 四边不同 (回退到自定義)
        return {
          customCss: `padding: ${top}px ${right}px ${bottom}px ${left}px`
        };
      }
      // 数值
      const scale = findClosestScale(val, SPACING_SCALE);
      return `p-${SPACING_SCALE[scale]}`;
    },

    paddingTop: (val) => {
      const scale = findClosestScale(val, SPACING_SCALE);
      return `pt-${SPACING_SCALE[scale]}`;
    },

    paddingRight: (val) => {
      const scale = findClosestScale(val, SPACING_SCALE);
      return `pr-${SPACING_SCALE[scale]}`;
    },

    paddingBottom: (val) => {
      const scale = findClosestScale(val, SPACING_SCALE);
      return `pb-${SPACING_SCALE[scale]}`;
    },

    paddingLeft: (val) => {
      const scale = findClosestScale(val, SPACING_SCALE);
      return `pl-${SPACING_SCALE[scale]}`;
    },

    margin: (val) => {
      const scale = findClosestScale(Math.abs(val), SPACING_SCALE);
      return val >= 0 ? `m-${SPACING_SCALE[scale]}` : `-m-${SPACING_SCALE[scale]}`;
    },

    gap: (val) => {
      const scale = findClosestScale(val, SPACING_SCALE);
      return `gap-${SPACING_SCALE[scale]}`;
    },

    // ========== 颜色屬性 ==========
    backgroundColor: (val) => {
      if (COLOR_MAP[val]) {
        return `bg-${COLOR_MAP[val]}`;
      }
      // 回退到自定義
      return { customCss: `background-color: ${val}` };
    },

    color: (val) => {
      if (COLOR_MAP[val]) {
        return `text-${COLOR_MAP[val]}`;
      }
      return { customCss: `color: ${val}` };
    },

    borderColor: (val) => {
      if (COLOR_MAP[val]) {
        return `border-${COLOR_MAP[val]}`;
      }
      return { customCss: `border-color: ${val}` };
    },

    // ========== 字体屬性 ==========
    fontSize: (val) => {
      const sizeMap = {
        12: 'text-xs',
        14: 'text-sm',
        16: 'text-base',
        18: 'text-lg',
        20: 'text-xl',
        24: 'text-2xl',
        30: 'text-3xl',
        36: 'text-4xl',
        48: 'text-5xl',
        60: 'text-6xl'
      };

      const closest = Object.keys(sizeMap).map(Number).reduce((prev, curr) =>
        Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
      );

      return sizeMap[closest] || { customCss: `font-size: ${val}px` };
    },

    fontWeight: (val) => {
      const weightMap = {
        100: 'font-thin',
        200: 'font-extralight',
        300: 'font-light',
        400: 'font-normal',
        500: 'font-medium',
        600: 'font-semibold',
        700: 'font-bold',
        800: 'font-extrabold',
        900: 'font-black'
      };
      return weightMap[val] || 'font-normal';
    },

    // ========== 边框与圓角 ==========
    borderRadius: (val) => {
      if (val === 0) return 'rounded-none';
      if (val <= 2) return 'rounded-sm';
      if (val <= 4) return 'rounded';
      if (val <= 6) return 'rounded-md';
      if (val <= 8) return 'rounded-lg';
      if (val <= 12) return 'rounded-xl';
      return 'rounded-2xl';
    },

    border: (val) => {
      // 简單處理 "1px solid #XXX" 格式
      if (typeof val === 'string' && val.startsWith('1px')) {
        return 'border';
      }
      return { customCss: `border: ${val}` };
    },

    // ========== 尺寸屬性 ==========
    width: (val) => {
      if (typeof val === 'string' && val.endsWith('%')) {
        const num = parseInt(val);
        if (num === 100) return 'w-full';
        if (num === 50) return 'w-1/2';
        if (num === 33) return 'w-1/3';
        if (num === 25) return 'w-1/4';
      }
      return { customCss: `width: ${val}` };
    },

    height: (val) => {
      if (typeof val === 'string' && val.endsWith('%')) {
        const num = parseInt(val);
        if (num === 100) return 'h-full';
        if (num === 50) return 'h-1/2';
      }
      return { customCss: `height: ${val}` };
    },

    minHeight: (val) => {
      if (val === '100vh') return 'min-h-screen';
      return { customCss: `min-height: ${val}` };
    },

    // ========== Flexbox 屬性 ==========
    flexDirection: (val) => {
      const map = {
        'row': 'flex-row',
        'column': 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-col-reverse'
      };
      return map[val] || 'flex-row';
    },

    alignItems: (val) => {
      const map = {
        'flex-start': 'items-start',
        'center': 'items-center',
        'flex-end': 'items-end',
        'stretch': 'items-stretch',
        'baseline': 'items-baseline'
      };
      return map[val] || 'items-start';
    },

    justifyContent: (val) => {
      const map = {
        'flex-start': 'justify-start',
        'center': 'justify-center',
        'flex-end': 'justify-end',
        'space-between': 'justify-between',
        'space-around': 'justify-around',
        'space-evenly': 'justify-evenly'
      };
      return map[val] || 'justify-start';
    },

    flexWrap: (val) => {
      const map = {
        'nowrap': 'flex-nowrap',
        'wrap': 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse'
      };
      return map[val] || 'flex-nowrap';
    },

    // ========== Grid 屬性 ==========
    gridTemplateColumns: (val) => {
      // 匹配 "repeat(3, 1fr)" 格式
      const match = val.match(/repeat\((\d+),\s*1fr\)/);
      if (match) {
        const cols = match[1];
        return `grid-cols-${cols}`;
      }
      return { customCss: `grid-template-columns: ${val}` };
    }
  };

  const mapper = mappers[cssProperty];
  return mapper ? mapper(value) : { customCss: `${kebabCase(cssProperty)}: ${value}` };
};

/**
 * 生成響應式 class
 */
export const mapResponsiveProp = (property, baseValue, overrides = {}) => {
  const classes = [];

  // 基礎 class (桌面)
  const baseClass = mapToTailwind(property, baseValue);
  if (typeof baseClass === 'string') {
    classes.push(baseClass);
  }

  // 響應式覆蓋
  if (overrides.tablet) {
    const tabletClass = mapToTailwind(property, overrides.tablet);
    if (typeof tabletClass === 'string') {
      classes.push(`md:${tabletClass}`);
    }
  }

  if (overrides.mobile) {
    const mobileClass = mapToTailwind(property, overrides.mobile);
    if (typeof mobileClass === 'string') {
      classes.push(`sm:${mobileClass}`);
    }
  }

  return classes.filter(Boolean).join(' ');
};

/**
 * 批量映射樣式對象
 */
export const mapStyleObject = (styleObj) => {
  const classes = [];
  const customCss = [];

  Object.entries(styleObj).forEach(([prop, value]) => {
    const result = mapToTailwind(prop, value);

    if (typeof result === 'string') {
      classes.push(result);
    } else if (result.customCss) {
      customCss.push(result.customCss);
    }
  });

  return { classes: classes.join(' '), customCss };
};

/**
 * 工具函数: 轉換為 kebab-case
 */
function kebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
