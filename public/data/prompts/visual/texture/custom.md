# Custom Prompt

## 中文版本 (zh-CN)

请使用 TailwindCSS 创建一个质感艺术风格的界面，通过纹理叠加、材质模拟和细节处理创造丰富的触觉视觉体验。

### 核心设计要求

1.  **织物质感 (Fabric Texture)**
    使用 CSS 渐变或 SVG 图案模拟布料的经纬编织感。通过重复的线性渐变创造亚麻、帆布或牛仔布的粗糙表面。
    ```css
    /* 亚麻布纹理 */
    .bg-fabric-linen {
      background-color: #e8dcc4;
      background-image:
        linear-gradient(90deg, rgba(0,0,0,0.03) 50%, transparent 50%),
        linear-gradient(rgba(0,0,0,0.03) 50%, transparent 50%);
      background-size: 4px 4px;
    }

    /* 牛仔布纹理 */
    .bg-fabric-denim {
      background-color: #4a5f7f;
      background-image:
        repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px),
        repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px);
    }
    ```

2.  **颗粒质感 (Grain Texture)**
    利用 SVG Noise 滤镜或 Base64 噪点图层覆盖在纯色或渐变之上，增加视觉的摩擦感和复古氛围。通常使用 `mix-blend-mode: overlay` 或 `multiply`。
    ```css
    /* SVG 噪点层 */
    .bg-grain-overlay {
      position: relative;
    }
    .bg-grain-overlay::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.05;
      z-index: 10;
      pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    ```

3.  **皮革质感 (Leather Texture)**
    结合细微的噪点和不规则的径向渐变来模拟皮革的毛孔和光泽。通常配合缝线效果（虚线边框）增强真实感。
    ```css
    .bg-leather-brown {
      background-color: #8b6f47;
      background-image:
        radial-gradient(#9c7d52 1px, transparent 1px),
        radial-gradient(#7a613f 1px, transparent 1px);
      background-size: 8px 8px;
      background-position: 0 0, 4px 4px;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.4); /* 边缘加深 */
    }

    .border-stitching {
      border: 2px dashed rgba(255,255,255,0.4);
      outline: 1px solid rgba(0,0,0,0.1);
      outline-offset: -6px;
    }
    ```

4.  **木纹质感 (Wood Texture)**
    使用拉伸的噪点或重复的线性渐变模拟木材的纹理走向。颜色通常为深浅不一的棕色系，带有略微的模糊。
    ```css
    .bg-wood-grain {
      background-color: #8b4513;
      background-image:
        repeating-linear-gradient(90deg,
          transparent 0px,
          transparent 2px,
          rgba(0,0,0,0.1) 4px,
          transparent 6px,
          rgba(0,0,0,0.05) 10px
        );
      background-size: 100% 100%;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
    }
    ```

5.  **金属拉丝 (Brushed Metal)**
    通过高频重复的线性渐变（含有杂色）模拟金属表面的拉丝痕迹，配合高光反射效果。
    ```css
    .bg-metal-brushed {
      background-color: #c0c0c0;
      background-image:
        repeating-linear-gradient(0deg,
          transparent,
          transparent 1px,
          rgba(255,255,255,0.1) 2px,
          rgba(0,0,0,0.1) 3px
        );
      box-shadow:
        inset 1px 1px 2px rgba(255,255,255,0.8),
        inset -1px -1px 2px rgba(0,0,0,0.5);
    }
    ```

6.  **纸张纹理 (Paper Texture)**
    模拟纸张的纤维感和不平整度。通常使用暖白色底色加上极细微的杂色，有时伴随轻微的折痕阴影。
    ```css
    .bg-paper-textured {
      background-color: #f5f5dc;
      background-image:
        linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
        url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='%23000' fill-opacity='0.03'/%3E%3C/svg%3E");
      box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
    }
    ```

7.  **石材质感 (Stone Texture)**
    利用分形噪点（Fractal Noise）或重叠不同大小的散点图层，模拟花岗岩或混凝土的粗糙表面。
    ```css
    .bg-stone-concrete {
      background-color: #8b8680;
      filter: contrast(120%);
      background-image:
        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
        radial-gradient(circle at 20% 80%, rgba(0,0,0,0.1) 2px, transparent 2px);
      background-size: 20px 20px;
    }
    ```

### 配色方案

| 类别 | 颜色代码 | 说明 |
|------|---------|------|
| **织物系 (Fabric)** | `#e8dcc4` (亚麻米) | 自然、舒适的基调 |
| | `#d4c5a9` (旧帆布) | 略带陈旧感的背景 |
| | `#4a5f7f` (牛仔蓝) | 坚固、耐用的视觉 |
| **颗粒系 (Grain)** | `#e0c3fc` (迷雾紫) | 梦幻、带有数字噪点感 |
| | `#fbc2eb` (复古粉) | 柔和且带有胶片感 |
| **皮革系 (Leather)** | `#8b6f47` (鞍褐) | 经典皮革色 |
| | `#6b4423` (深咖啡) | 沉稳、高级感 |
| | `#2a2a2a` (磨砂黑) | 现代皮革质感 |
| **木纹系 (Wood)** | `#8b4513` (桃花心木) | 红褐色，温暖 |
| | `#654321` (黑胡桃) | 深沉、稳重 |
| | `#a0826d` (原木色) | 清新自然 |
| **金属系 (Metal)** | `#c0c0c0` (标准银) | 基础金属色 |
| | `#a8a8a8` (深空灰) | 更有质感的铝合金 |
| | `#e8e8e8` (亮银) | 高光部分 |
| **纸张系 (Paper)** | `#f5f5dc` (米黄) | 护眼、书写感 |
| | `#fffef0` (象牙白) | 干净但有温度 |
| **石材系 (Stone)** | `#8b8680` (岩石灰) | 自然矿石感 |
| | `#696969` (暗岩灰) | 深邃、坚硬 |

### 关键 CSS 类实现

#### 1. 织物质感卡片 (.fabric-card)
```css
/* 使用 Tailwind @apply 或直接 CSS */
.fabric-card {
  position: relative;
  border-radius: 0.5rem;
  padding: 1.5rem;
  overflow: hidden;
  background-color: #e8dcc4;
  /* 模拟编织纹理 */
  background-image:
    linear-gradient(90deg, rgba(0,0,0,0.04) 50%, transparent 50%),
    linear-gradient(rgba(0,0,0,0.04) 50%, transparent 50%);
  background-size: 3px 3px;
  /* 边缘磨损感阴影 */
  box-shadow:
    inset 0 0 15px rgba(139, 111, 71, 0.2),
    2px 4px 8px rgba(0,0,0,0.1);
  border: 1px solid rgba(139, 111, 71, 0.1);
}

.fabric-card:hover {
  box-shadow:
    inset 0 0 10px rgba(139, 111, 71, 0.15),
    4px 8px 16px rgba(0,0,0,0.15);
  transform: translateY(-1px);
  transition: all 0.3s ease;
}
```

#### 2. 颗粒质感按钮 (.grain-button)
```css
.grain-button {
  position: relative;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
  background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
  /* 叠加 SVG 噪点 */
  isolation: isolate;
  overflow: hidden;
}

.grain-button::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.3;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
}

.grain-button:hover {
  filter: brightness(1.1);
  box-shadow: 0 4px 15px rgba(142, 197, 252, 0.4);
  transform: scale(1.02);
}

.grain-button:active {
  transform: scale(0.98);
  filter: brightness(0.95);
}
```

#### 3. 皮革质感面板 (.leather-panel)
```css
.leather-panel {
  border-radius: 0.75rem;
  padding: 2rem;
  color: white;
  background-color: #2a2a2a;
  /* 皮革纹理：径向噪点 */
  background-image:
    radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 6px 6px, 10px 10px;
  background-position: 0 0, 5px 5px;
  /* 缝线效果 */
  border: 1px solid #111;
  outline: 2px dashed #444;
  outline-offset: -8px;
  box-shadow:
    inset 0 0 40px rgba(0,0,0,0.8),
    0 10px 20px rgba(0,0,0,0.5);
}
```

#### 4. 木纹表面 (.wood-surface)
```css
.wood-surface {
  width: 100%;
  height: 8rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fef3c7;
  font-family: serif;
  background-color: #654321;
  /* 木纹：水平拉伸噪点 */
  background-image:
    repeating-linear-gradient(90deg,
      rgba(255,255,255,0.02) 0px,
      rgba(255,255,255,0.02) 1px,
      transparent 1px,
      transparent 15px
    ),
    repeating-linear-gradient(92deg,
      transparent 0px,
      rgba(0,0,0,0.2) 2px,
      transparent 4px,
      transparent 20px
    );
  /* 倒角效果 */
  border-top: 2px solid rgba(255,255,255,0.1);
  border-bottom: 2px solid rgba(0,0,0,0.3);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
```

#### 5. 金属拉丝输入框 (.metal-input)
```css
.metal-input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.25rem;
  color: #374151;
  outline: none;
  background-color: #e8e8e8;
  /* 金属拉丝：细密垂直线 */
  background-image:
    linear-gradient(0deg, rgba(0,0,0,0.05) 50%, transparent 50%);
  background-size: 100% 2px;
  /* 金属质感光泽：内阴影模拟反射 */
  box-shadow:
    inset 0 2px 4px rgba(0,0,0,0.2),
    inset 0 -1px 2px rgba(255,255,255,0.8),
    0 1px 2px rgba(0,0,0,0.1);
  border: 1px solid #c0c0c0;
  transition: all 0.2s;
}

.metal-input:focus {
  background-color: #f0f0f0;
  box-shadow:
    inset 0 2px 4px rgba(0,0,0,0.15),
    0 0 0 3px rgba(192,192,192,0.4);
  border-color: #a8a8a8;
}
```

### Tailwind CSS 配置

为了方便复用颜色和纹理，请按以下方式配置 `tailwind.config.js`：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        fabric: {
          linen: '#e8dcc4',
          canvas: '#d4c5a9',
          denim: '#4a5f7f',
        },
        grain: {
          lilac: '#e0c3fc',
          pink: '#fbc2eb',
        },
        leather: {
          saddle: '#8b6f47',
          coffee: '#6b4423',
          dark: '#2a2a2a',
        },
        wood: {
          mahogany: '#8b4513',
          walnut: '#654321',
          oak: '#a0826d',
        },
        metal: {
          silver: '#c0c0c0',
          space: '#a8a8a8',
          bright: '#e8e8e8',
        },
        paper: {
          beige: '#f5f5dc',
          ivory: '#fffef0',
        },
        stone: {
          grey: '#8b8680',
          dark: '#696969',
        },
      },
      backgroundImage: {
        'grain-pattern': "url('data:image/svg+xml,...')", // 填入SVG Base64
      },
      boxShadow: {
        'leather-inset': 'inset 0 0 20px rgba(0,0,0,0.4)',
        'metal-glow': 'inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.5)',
      }
    },
  },
}
```

### 重要提示

1.  **性能优化**：尽量使用 CSS Gradients 或 SVG Data URIs 来实现纹理，避免加载大型图片文件，以保持页面加载速度。
2.  **可访问性 (a11y)**：纹理背景容易导致文字对比度不足。请务必在深色纹理上使用浅色粗体文字，或在文字下方添加半透明纯色遮罩。
3.  **拟物化细节**：Texture Art 的核心在于微小的细节。例如，皮革上的缝线应该是虚线且带有 `outline-offset`；金属的高光应该随着光源方向变化。
4.  **混合模式 (Blend Modes)**：善用 `mix-blend-mode` (如 `overlay`, `soft-light`) 将纹理层自然地融合到背景色中，避免生硬的覆盖。
5.  **交互反馈**：物理材质应该有物理反馈。例如，按压按钮时（active 状态），阴影应该变深且内缩，模拟物体被压下的感觉。
6.  **响应式设计**：确保纹理在不同屏幕尺寸下不会变形。对于 `background-size`，尽量使用固定像素值（如 `4px 4px`）而不是百分比，以保证纹理密度一致。
7.  **光影统一**：确保所有材质的光源方向一致（通常默认为左上角光源）。阴影、高光和渐变的方向必须统一，否则界面会显得杂乱。

---

## English Version (en-US)

Please create a Texture Art style interface using TailwindCSS, creating rich tactile visual experiences through texture overlays, material simulation, and detail processing.

### Core Design Requirements

1.  **Fabric Texture**
    Use CSS gradients or SVG patterns to simulate the warp and weft of fabric. Create rough surfaces like linen, canvas, or denim through repeating linear gradients.
    ```css
    /* Linen Texture */
    .bg-fabric-linen {
      background-color: #e8dcc4;
      background-image:
        linear-gradient(90deg, rgba(0,0,0,0.03) 50%, transparent 50%),
        linear-gradient(rgba(0,0,0,0.03) 50%, transparent 50%);
      background-size: 4px 4px;
    }

    /* Denim Texture */
    .bg-fabric-denim {
      background-color: #4a5f7f;
      background-image:
        repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px),
        repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px);
    }
    ```

2.  **Grain Texture**
    Utilize SVG Noise filters or Base64 noise layers overlaid on solid colors or gradients to add visual friction and a vintage atmosphere. Usually used with `mix-blend-mode: overlay` or `multiply`.
    ```css
    /* SVG Noise Layer */
    .bg-grain-overlay {
      position: relative;
    }
    .bg-grain-overlay::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.05;
      z-index: 10;
      pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    ```

3.  **Leather Texture**
    Combine subtle noise and irregular radial gradients to simulate leather pores and sheen. Often paired with stitching effects (dashed borders) to enhance realism.
    ```css
    .bg-leather-brown {
      background-color: #8b6f47;
      background-image:
        radial-gradient(#9c7d52 1px, transparent 1px),
        radial-gradient(#7a613f 1px, transparent 1px);
      background-size: 8px 8px;
      background-position: 0 0, 4px 4px;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.4); /* Edge darkening */
    }

    .border-stitching {
      border: 2px dashed rgba(255,255,255,0.4);
      outline: 1px solid rgba(0,0,0,0.1);
      outline-offset: -6px;
    }
    ```

4.  **Wood Texture**
    Use stretched noise or repeating linear gradients to simulate wood grain direction. Colors are typically varying shades of brown with slight blurring.
    ```css
    .bg-wood-grain {
      background-color: #8b4513;
      background-image:
        repeating-linear-gradient(90deg,
          transparent 0px,
          transparent 2px,
          rgba(0,0,0,0.1) 4px,
          transparent 6px,
          rgba(0,0,0,0.05) 10px
        );
      background-size: 100% 100%;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
    }
    ```

5.  **Brushed Metal**
    Simulate brushed marks on metal surfaces through high-frequency repeating linear gradients (containing noise), combined with highlight reflection effects.
    ```css
    .bg-metal-brushed {
      background-color: #c0c0c0;
      background-image:
        repeating-linear-gradient(0deg,
          transparent,
          transparent 1px,
          rgba(255,255,255,0.1) 2px,
          rgba(0,0,0,0.1) 3px
        );
      box-shadow:
        inset 1px 1px 2px rgba(255,255,255,0.8),
        inset -1px -1px 2px rgba(0,0,0,0.5);
    }
    ```

6.  **Paper Texture**
    Simulate the fiber feel and unevenness of paper. Usually uses a warm white base with extremely subtle noise, sometimes accompanied by slight crease shadows.
    ```css
    .bg-paper-textured {
      background-color: #f5f5dc;
      background-image:
        linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
        url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='%23000' fill-opacity='0.03'/%3E%3C/svg%3E");
      box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
    }
    ```

7.  **Stone Texture**
    Utilize Fractal Noise or overlapping scatter layers of different sizes to simulate the rough surface of granite or concrete.
    ```css
    .bg-stone-concrete {
      background-color: #8b8680;
      filter: contrast(120%);
      background-image:
        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
        radial-gradient(circle at 20% 80%, rgba(0,0,0,0.1) 2px, transparent 2px);
      background-size: 20px 20px;
    }
    ```

### Color Scheme

| Category | Hex Code | Description |
|----------|----------|-------------|
| **Fabric** | `#e8dcc4` (Linen Beige) | Natural, comfortable base |
| | `#d4c5a9` (Old Canvas) | Slightly aged background |
| | `#4a5f7f` (Denim Blue) | Sturdy, durable visual |
| **Grain** | `#e0c3fc` (Lilac Mist) | Dreamy, digital noise feel |
| | `#fbc2eb` (Retro Pink) | Soft with a film look |
| **Leather** | `#8b6f47` (Saddle Brown) | Classic leather color |
| | `#6b4423` (Dark Coffee) | Stable, premium feel |
| | `#2a2a2a` (Matte Black) | Modern leather texture |
| **Wood** | `#8b4513` (Mahogany) | Reddish-brown, warm |
| | `#654321` (Dark Walnut) | Deep, steady |
| | `#a0826d` (Oak) | Fresh and natural |
| **Metal** | `#c0c0c0` (Standard Silver) | Basic metal color |
| | `#a8a8a8` (Space Grey) | More textured aluminum |
| | `#e8e8e8` (Bright Silver) | Highlights |
| **Paper** | `#f5f5dc` (Beige) | Eye-friendly, writing feel |
| | `#fffef0` (Ivory White) | Clean but warm |
| **Stone** | `#8b8680` (Stone Grey) | Natural mineral look |
| | `#696969` (Dark Rock) | Deep, hard |

### Key CSS Class Implementations

#### 1. Fabric Card (.fabric-card)
```css
/* Use Tailwind @apply or standard CSS */
.fabric-card {
  position: relative;
  border-radius: 0.5rem;
  padding: 1.5rem;
  overflow: hidden;
  background-color: #e8dcc4;
  /* Simulating weave texture */
  background-image:
    linear-gradient(90deg, rgba(0,0,0,0.04) 50%, transparent 50%),
    linear-gradient(rgba(0,0,0,0.04) 50%, transparent 50%);
  background-size: 3px 3px;
  /* Worn edge shadow */
  box-shadow:
    inset 0 0 15px rgba(139, 111, 71, 0.2),
    2px 4px 8px rgba(0,0,0,0.1);
  border: 1px solid rgba(139, 111, 71, 0.1);
}

.fabric-card:hover {
  box-shadow:
    inset 0 0 10px rgba(139, 111, 71, 0.15),
    4px 8px 16px rgba(0,0,0,0.15);
  transform: translateY(-1px);
  transition: all 0.3s ease;
}
```

#### 2. Grain Button (.grain-button)
```css
.grain-button {
  position: relative;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
  background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
  /* SVG Noise Overlay */
  isolation: isolate;
  overflow: hidden;
}

.grain-button::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.3;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
}

.grain-button:hover {
  filter: brightness(1.1);
  box-shadow: 0 4px 15px rgba(142, 197, 252, 0.4);
  transform: scale(1.02);
}

.grain-button:active {
  transform: scale(0.98);
  filter: brightness(0.95);
}
```

#### 3. Leather Panel (.leather-panel)
```css
.leather-panel {
  border-radius: 0.75rem;
  padding: 2rem;
  color: white;
  background-color: #2a2a2a;
  /* Leather texture: Radial noise */
  background-image:
    radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 6px 6px, 10px 10px;
  background-position: 0 0, 5px 5px;
  /* Stitching effect */
  border: 1px solid #111;
  outline: 2px dashed #444;
  outline-offset: -8px;
  box-shadow:
    inset 0 0 40px rgba(0,0,0,0.8),
    0 10px 20px rgba(0,0,0,0.5);
}
```

#### 4. Wood Surface (.wood-surface)
```css
.wood-surface {
  width: 100%;
  height: 8rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fef3c7;
  font-family: serif;
  background-color: #654321;
  /* Wood grain: Horizontally stretched noise */
  background-image:
    repeating-linear-gradient(90deg,
      rgba(255,255,255,0.02) 0px,
      rgba(255,255,255,0.02) 1px,
      transparent 1px,
      transparent 15px
    ),
    repeating-linear-gradient(92deg,
      transparent 0px,
      rgba(0,0,0,0.2) 2px,
      transparent 4px,
      transparent 20px
    );
  /* Beveled edges */
  border-top: 2px solid rgba(255,255,255,0.1);
  border-bottom: 2px solid rgba(0,0,0,0.3);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
```

#### 5. Metal Input (.metal-input)
```css
.metal-input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.25rem;
  color: #374151;
  outline: none;
  background-color: #e8e8e8;
  /* Brushed Metal: Fine vertical lines */
  background-image:
    linear-gradient(0deg, rgba(0,0,0,0.05) 50%, transparent 50%);
  background-size: 100% 2px;
  /* Metallic sheen: Inner shadow for reflection */
  box-shadow:
    inset 0 2px 4px rgba(0,0,0,0.2),
    inset 0 -1px 2px rgba(255,255,255,0.8),
    0 1px 2px rgba(0,0,0,0.1);
  border: 1px solid #c0c0c0;
  transition: all 0.2s;
}

.metal-input:focus {
  background-color: #f0f0f0;
  box-shadow:
    inset 0 2px 4px rgba(0,0,0,0.15),
    0 0 0 3px rgba(192,192,192,0.4);
  border-color: #a8a8a8;
}
```

### Tailwind CSS Configuration

To reuse colors and textures, configure `tailwind.config.js` as follows:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        fabric: {
          linen: '#e8dcc4',
          canvas: '#d4c5a9',
          denim: '#4a5f7f',
        },
        grain: {
          lilac: '#e0c3fc',
          pink: '#fbc2eb',
        },
        leather: {
          saddle: '#8b6f47',
          coffee: '#6b4423',
          dark: '#2a2a2a',
        },
        wood: {
          mahogany: '#8b4513',
          walnut: '#654321',
          oak: '#a0826d',
        },
        metal: {
          silver: '#c0c0c0',
          space: '#a8a8a8',
          bright: '#e8e8e8',
        },
        paper: {
          beige: '#f5f5dc',
          ivory: '#fffef0',
        },
        stone: {
          grey: '#8b8680',
          dark: '#696969',
        },
      },
      backgroundImage: {
        'grain-pattern': "url('data:image/svg+xml,...')", // Insert SVG Base64
      },
      boxShadow: {
        'leather-inset': 'inset 0 0 20px rgba(0,0,0,0.4)',
        'metal-glow': 'inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.5)',
      }
    },
  },
}
```

### Important Notes

1.  **Performance Optimization**: Try to use CSS Gradients or SVG Data URIs to implement textures to avoid loading large image files and maintain page load speed.
2.  **Accessibility (a11y)**: Textured backgrounds can easily lead to insufficient text contrast. Be sure to use light, bold text on dark textures, or add semi-transparent solid color masks behind text.
3.  **Skeuomorphic Details**: The core of Texture Art lies in tiny details. For example, stitching on leather should be dashed with `outline-offset`; highlights on metal should change with the light source direction.
4.  **Blend Modes**: Make good use of `mix-blend-mode` (such as `overlay`, `soft-light`) to naturally blend texture layers into the background color, avoiding abrupt overlays.
5.  **Interaction Feedback**: Physical materials should have physical feedback. For instance, when a button is pressed (active state), the shadow should darken and contract to simulate the object being pressed down.
6.  **Responsive Design**: Ensure textures do not distort on different screen sizes. For `background-size`, try to use fixed pixel values (e.g., `4px 4px`) rather than percentages to ensure consistent texture density.
7.  **Lighting Consistency**: Ensure the light source direction is consistent for all materials (usually defaulting to top-left). The direction of shadows, highlights, and gradients must be unified; otherwise, the interface will look chaotic.
