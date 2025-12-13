// Style Multi-dimensional Tags Mapping (clean minimal version)
// If an enhancement for a style ID is missing, defaults are applied via enhanceStyle.

export const styleEnhancements = {
  // ========== Core Design Families (增強版) ==========
  'core-skeuomorphism': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['classic', 'depth', 'creative', 'enterprise', 'textured'],
    relatedStyles: ['core-material', 'visual-translucent-glassMorphism']
  },
  'core-flatDesign': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'flat', 'minimal', 'bold', 'colorful', 'clean', 'ecommerce', 'design-system'],
    relatedStyles: ['core-minimalism', 'core-material']
  },
  'core-materialDesign': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'depth', 'geometric', 'enterprise', 'bold', 'colorful'],
    relatedStyles: ['core-flatDesign', 'core-fluent2']
  },
  'core-materialDesign-principles': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'depth', 'geometric', 'enterprise', 'interactive', 'educational'],
    relatedStyles: ['core-materialDesign', 'core-flatDesign', 'core-fluent2']
  },
  'core-minimalism': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'minimal', 'flat', 'creative', 'clean'],
    relatedStyles: ['core-flatDesign']
  },
  'core-fluent2': {
    primaryCategory: 'core',
    categories: ['core'],
    tags: ['contemporary', 'translucent', 'depth', 'enterprise', 'modern'],
    relatedStyles: ['core-materialDesign', 'visual-translucent-glassMorphism']
  },
  'retro-newspaper': {
    primaryCategory: 'retro',
    categories: ['retro', 'typography', 'editorial'],
    tags: ['classic', 'editorial', 'newspaper', 'vintage', 'content'],
    relatedStyles: ['core-minimalism', 'retro-swissDesign']
  },
  'core-typography': {
    primaryCategory: 'core',
    categories: ['core', 'typography'],
    tags: ['contemporary', 'editorial', 'creative', 'bold'],
    relatedStyles: ['core-minimalism', 'retro-newspaper']
  }

  ,

  // ========== Visual Design Styles (增強版) ==========
  // Glass & Translucent
  'visual-glassmorphism': {
    primaryCategory: 'visual',
    categories: ['visual', 'translucent'],
    tags: ['contemporary', 'translucent', 'depth', 'gradient', 'modern', 'creative'],
    relatedStyles: ['core-fluent2', 'visual-y2k', 'visual-translucent-aurora-glass']
  },
  'visual-auroraGlass': {
    primaryCategory: 'visual',
    categories: ['visual', 'translucent', 'nature'],
    tags: ['contemporary', 'translucent', 'colorful', 'organic', 'gradient', 'creative'],
    relatedStyles: ['visual-glassmorphism', 'visual-y2k']
  },

  // Brutalism & Bold
  'visual-neoBrutalism': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'bold', 'flat', 'geometric', 'colorful', 'creative'],
    relatedStyles: ['core-flatDesign', 'visual-y2k']
  },
  'visual-antiDesign': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'bold', 'experimental', 'colorful', 'creative'],
    relatedStyles: ['visual-neoBrutalism', 'visual-y2k']
  },

  // Nature & Organic
  'visual-nature': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'natural', 'creative'],
    relatedStyles: ['visual-nature-solarpunk', 'visual-biophilic']
  },
  'visual-liquid': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'animated', 'creative'],
    relatedStyles: ['visual-nature-liquid', 'visual-nature-wave']
  },
  'visual-particle': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'effectDriven', 'animated', 'creative'],
    relatedStyles: ['visual-tech-generative-art', 'visual-nature-smoke']
  },
  'visual-smoke': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'effectDriven', 'animated', 'creative'],
    relatedStyles: ['visual-nature-liquid', 'visual-nature-particle']
  },
  'visual-solarpunk': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'futuristic', 'creative'],
    relatedStyles: ['visual-biophilic', 'visual-nature']
  },
  'visual-natural': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'natural', 'creative'],
    relatedStyles: ['visual-biophilic', 'visual-nature']
  },

  // Gradients & Colors
  'visual-gradients': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'gradient', 'creative'],
    relatedStyles: ['visual-gradient-mesh-gradient', 'visual-gradient-animated-gradient']
  },
  'visual-duotone': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'bold', 'colorful', 'gradient', 'minimal', 'creative'],
    relatedStyles: ['visual-gradient-mesh-gradient', 'core-flatDesign']
  },
  'visual-duotone-brand-identity': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'bold', 'colorful', 'gradient', 'minimal', 'creative', 'brand'],
    relatedStyles: ['visual-duotone', 'visual-gradient-duotone', 'visual-neonCyberpunk']
  },
  'visual-holographic': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'futuristic', 'gradient', 'effectDriven', 'creative'],
    relatedStyles: ['visual-y2k', 'visual-neonCyberpunk']
  },
  'visual-holographicFoil': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'futuristic', 'gradient', 'creative'],
    relatedStyles: ['visual-holographic', 'visual-y2k']
  },

  // Light & Glow
  'visual-light': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'effectDriven', 'creative'],
    relatedStyles: ['visual-light-glow', 'visual-light-ambient']
  },
  'visual-glow': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'effectDriven', 'colorful', 'animated', 'creative'],
    relatedStyles: ['visual-light-neon', 'visual-neonCyberpunk']
  },
  'visual-neon': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'neon', 'colorful', 'futuristic', 'creative'],
    relatedStyles: ['visual-neonCyberpunk', 'visual-neonNoir']
  },
  'visual-spotlight': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'effectDriven', 'dramatic', 'creative'],
    relatedStyles: ['visual-light-glow', 'visual-light-ambient']
  },
  'visual-ambient': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'minimal', 'clean', 'creative'],
    relatedStyles: ['visual-light-glow', 'core-minimalism']
  },

  // Neon & Cyberpunk
  'visual-neonCyberpunk': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'neon', 'colorful', 'futuristic', 'gaming', 'creative'],
    relatedStyles: ['visual-neonNoir', 'visual-y2k', 'retro-arcadeCRT']
  },
  'visual-neonNoir': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'neon', 'minimal', 'dramatic', 'creative'],
    relatedStyles: ['visual-neonCyberpunk', 'visual-liminalSpace']
  },

  // Tech & Data
  'visual-generativeArt': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'effectDriven', 'aiPowered', 'animated', 'creative'],
    relatedStyles: ['visual-nature-particle', 'visual-tech-sci-fi-hud']
  },
  'visual-sciFiHud': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'effectDriven', 'futuristic', 'gaming', 'creative'],
    relatedStyles: ['visual-neonCyberpunk', 'visual-tech-generative-art']
  },
  'visual-3dElements': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'depth', 'effectDriven', 'geometric', 'creative'],
    relatedStyles: ['visual-tech-generative-art']
  },

  // Soft & Minimal
  'visual-softUI': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'depth', 'soft', 'clean', 'minimal', 'creative'],
    relatedStyles: ['core-materialDesign', 'visual-glassmorphism']
  },
  'visual-darkMode': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'dark', 'minimal', 'modern'],
    relatedStyles: ['core-minimalism']
  },

  // Textures
  'visual-grain': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'minimal', 'textured', 'retro', 'creative'],
    relatedStyles: ['visual-monochrome', 'core-minimalism']
  },
  'visual-fabric': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'textured', 'creative'],
    relatedStyles: ['visual-texture-leather', 'visual-nature-solarpunk']
  },

  // Playful & Creative
  'visual-kawaiiMinimal': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'colorful', 'playful', 'creative'],
    relatedStyles: ['visual-y2k', 'visual-paperCutout']
  },
  'visual-paperCutout': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'playful', 'creative'],
    relatedStyles: ['visual-kawaiiMinimal']
  },
  'visual-handDrawnSketch': {
    primaryCategory: 'visual',
    categories: ['visual', 'creative'],
    tags: ['timeless', 'playful', 'organic', 'handwritten', 'creative', 'informal'],
    relatedStyles: ['visual-paperCutout', 'visual-kawaiiMinimal']
  },

  // Modern Styles
  'visual-memphis': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'bold', 'geometric', 'colorful', 'creative'],
    relatedStyles: ['visual-y2k', 'visual-neoBrutalism']
  },
  'visual-scandi': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'clean', 'organic', 'creative'],
    relatedStyles: ['core-minimalism']
  },
  'visual-wabiSabi': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'organic', 'natural', 'creative'],
    relatedStyles: ['visual-scandi', 'core-minimalism']
  },
  'visual-vaporwave': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'colorful', 'gradient', 'aesthetic', 'nostalgic', 'creative'],
    relatedStyles: ['visual-y2k', 'visual-gradient-holographic']
  },
  'visual-utilityFirst': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'clean', 'enterprise'],
    relatedStyles: ['core-minimalism']
  },
  'visual-organic': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'natural', 'creative'],
    relatedStyles: ['visual-biophilic', 'visual-nature']
  },
  'visual-accessibility': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'accessible', 'high-contrast', 'enterprise'],
    relatedStyles: ['core-minimalism']
  },
  'visual-accessibility-basic': {
    primaryCategory: 'visual',
    categories: ['visual', 'accessibility'],
    tags: ['contemporary', 'accessible', 'wcag-compliant', 'high-contrast', 'inclusive', 'government', 'enterprise'],
    relatedStyles: ['visual-accessibility', 'core-minimalism', 'visual-utilityFirst']
  },

  // Keep existing visual styles
  'visual-neo-brutalism': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'bold', 'flat', 'geometric', 'colorful', 'creative'],
    relatedStyles: ['core-flatDesign', 'visual-y2k']
  },
  'visual-nature-solarpunk': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'creative', 'animated'],
    relatedStyles: ['visual-nature-liquid']
  },
  'visual-liminalSpace': {
    primaryCategory: 'visual',
    categories: ['visual', 'effectDriven'],
    tags: ['contemporary', 'minimal', 'effectDriven', 'creative'],
    relatedStyles: ['visual-neon-noir', 'visual-neon-cyberpunk', 'visual-translucent-glassmorphism']
  },
  'visual-outlineStyle': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'flat', 'clean', 'enterprise'],
    relatedStyles: ['core-minimalism', 'visual-neo-brutalism', 'core-flat']
  },
  'visual-outlineStyle-business': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'flat', 'clean', 'enterprise'],
    relatedStyles: ['core-minimalism', 'visual-neo-brutalism', 'core-flat']
  },
  'visual-outlineStyle-elearning': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'flat', 'clean', 'colorful', 'education'],
    relatedStyles: ['visual-outlineStyle-business', 'visual-paperCutout', 'visual-kawaii']
  },
  'hand-drawn-sketch': {
    primaryCategory: 'visual',
    categories: ['visual', 'creative'],
    tags: ['timeless', 'playful', 'organic', 'handwritten', 'creative', 'informal', 'friendly'],
    relatedStyles: ['visual-paperCutout', 'visual-kawaii', 'visual-outlineStyle-elearning']
  },

  // ========== Retro Digital Styles (增強版) ==========
  'retro-artDeco': {
    primaryCategory: 'retro',
    categories: ['retro', 'luxury'],
    tags: ['retro', 'classic', 'geometric', 'bold', 'creative', 'enterprise'],
    relatedStyles: ['visual-neoBrutalism', 'core-skeuomorphism']
  },
  'retro-darkAcademia': {
    primaryCategory: 'retro',
    categories: ['retro', 'academic'],
    tags: ['retro', 'classic', 'depth', 'content', 'textured', 'creative'],
    relatedStyles: ['core-skeuomorphism', 'visual-texture-leather']
  },
  'retro-frutigerAero': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'colorful', 'organic', 'translucent', 'creative'],
    relatedStyles: ['visual-glassmorphism', 'visual-nature-solarpunk', 'visual-y2k']
  },
  'retro-retroFuturism': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'futuristic', 'monochrome', 'monospace', 'creative'],
    relatedStyles: ['terminal-cli', 'retro-arcadeCRT', 'visual-neonCyberpunk']
  },
  'retro-retroOS': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'classic', 'skeuomorphic', 'enterprise', 'creative'],
    relatedStyles: ['retro-arcadeCRT', 'terminal-cli', 'core-skeuomorphism']
  },
  'retro-swissDesign': {
    primaryCategory: 'retro',
    categories: ['retro', 'print'],
    tags: ['retro', 'minimal', 'typography', 'geometric', 'clean', 'creative'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business']
  },

  // Keep existing retro styles
  'retro-digital-arcadeCRT': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'neon', 'effectDriven', 'gaming', 'creative'],
    relatedStyles: ['visual-neonCyberpunk', 'retro-digital-pixelArt', 'retro-digital-vaporwave']
  },
  'terminal-cli': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'monochrome', 'monospace', 'codeHeavy', 'enterprise'],
    relatedStyles: ['retro-digital-arcadeCRT', 'visual-y2k', 'retro-digital-pixelArt']
  },
  'terminal-cli-y2k': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'neon', 'colorful', 'futuristic', 'creative'],
    relatedStyles: ['terminal-cli', 'visual-y2k', 'retro-digital-arcadeCRT']
  },
  'retro-os-windows95': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'classic', 'skeuomorphic', 'enterprise', 'creative'],
    relatedStyles: ['retro-digital-arcadeCRT', 'terminal-cli', 'core-skeuomorphism']
  },
  'retro-swiss-design': {
    primaryCategory: 'retro',
    categories: ['retro', 'print'],
    tags: ['retro', 'minimal', 'typography', 'geometric', 'clean', 'creative'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business']
  },
  'retro-art-deco-luxury': {
    primaryCategory: 'retro',
    categories: ['retro', 'luxury'],
    tags: ['retro', 'classic', 'geometric', 'bold', 'creative', 'enterprise'],
    relatedStyles: ['visual-neo-brutalism', 'core-skeuomorphism']
  },
  'retro-dark-academia-library': {
    primaryCategory: 'retro',
    categories: ['retro', 'academic'],
    tags: ['retro', 'classic', 'depth', 'content', 'creative'],
    relatedStyles: ['core-skeuomorphism', 'visual-texture-leather']
  },
  'retro-frutiger-aero-os': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'colorful', 'organic', 'translucent', 'creative'],
    relatedStyles: ['visual-translucent-glassmorphism', 'visual-nature-solarpunk', 'visual-y2k']
  },
  'retro-futurism-dos': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'futuristic', 'monochrome', 'monospace', 'creative'],
    relatedStyles: ['terminal-cli', 'retro-digital-arcadeCRT', 'visual-neon-cyberpunk']
  },
  'retro-arcadeCRT-arcade-hall': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'neon', 'gaming', 'effectDriven', 'creative'],
    relatedStyles: ['retro-digital-arcadeCRT', 'visual-neon-cyberpunk', 'retro-digital-arcadeCRT']
  },
  'retro-arcadeCRT-cyberpunk-control': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'neon', 'futuristic', 'gaming', 'effectDriven', 'creative'],
    relatedStyles: ['retro-digital-arcadeCRT', 'visual-neon-cyberpunk', 'visual-tech-sci-fi-hud']
  },
  'pixelArt': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'gaming', 'pixel', '8bit', 'creative', 'nostalgic'],
    relatedStyles: ['retro-digital-arcadeCRT', 'terminal-cli', 'vaporwave']
  },
  'vaporwave': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'colorful', 'gradient', 'aesthetic', 'nostalgic', 'creative'],
    relatedStyles: ['visual-y2k', 'visual-gradient-holographic', 'pixelArt']
  },
  'visual-y2k': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'colorful', 'translucent', 'futuristic', 'creative'],
    relatedStyles: ['terminal-cli', 'visual-translucent-glassmorphism', 'vaporwave']
  },

  // New Styles 2025
  'visual-claymorphism': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'depth', 'soft', 'colorful', 'playful', 'creative', 'ecommerce'],
    relatedStyles: ['visual-soft-ui', 'visual-paperCutout', 'visual-kawaii-minimal']
  },
  'visual-claymation': {
    primaryCategory: 'visual',
    categories: ['visual', 'playful'],
    tags: ['contemporary', 'playful', 'colorful', 'rounded', 'friendly', 'creative', 'animated'],
    relatedStyles: ['visual-claymorphism', 'visual-kawaii-minimal', 'visual-paperCutout']
  },
  'visual-industrial': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'bold', 'minimal', 'utilitarian', 'enterprise', 'technical'],
    relatedStyles: ['visual-monochrome', 'core-minimalism', 'visual-outlineStyle-business']
  },
  'visual-biophilic': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'natural', 'harmonious', 'creative'],
    relatedStyles: ['visual-nature-solarpunk', 'visual-nature-liquid', 'natural']
  },

  // Scroll Narrative (NEW - replaces parallaxScrolling)
  'visual-scrollNarrative': {
    primaryCategory: 'visual',
    categories: ['visual', 'interaction'],
    tags: ['contemporary', 'motionBased', 'immersive', 'creative', 'content'],
    relatedStyles: ['interaction-mouseTracking']
  },
  'visual-kineticTypography': {
    primaryCategory: 'visual',
    categories: ['visual', 'typography'],
    tags: ['contemporary', 'bold', 'motionBased', 'creative'],
    relatedStyles: ['visual-scrollNarrative', 'retro-arcadeCRT', 'visual-neonCyberpunk']
  },

  // VisualTech 系列
  'visual-tech-gradients': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'colorful', 'effectDriven', 'creative'],
    relatedStyles: ['visual-gradient-mesh-gradient', 'visual-gradient-animated-gradient']
  },
  'visual-tech-3d-elements': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'depth', 'effectDriven', 'creative', 'geometric'],
    relatedStyles: []
  },
  'visual-tech-anti-design': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'bold', 'experimental', 'creative', 'colorful'],
    relatedStyles: ['visual-neo-brutalism', 'visual-y2k', 'core-flat']
  },
  'visual-antiDesign-studio': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'bold', 'experimental', 'creative', 'colorful', 'brutalism'],
    relatedStyles: ['visual-neoBrutalism', 'visual-y2k', 'visual-tech-anti-design']
  },
  'visual-tech-generative-art': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'effectDriven', 'aiPowered', 'creative', 'animated'],
    relatedStyles: ['visual-nature-particle', 'visual-nature-liquid', 'visual-tech-sci-fi-hud']
  },
  'visual-tech-sci-fi-hud': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech'],
    tags: ['contemporary', 'effectDriven', 'futuristic', 'gaming', 'creative'],
    relatedStyles: ['visual-neon-cyberpunk', 'visual-neon-noir', 'visual-tech-generative-art']
  },
  'visual-tech-bento-grids': {
    primaryCategory: 'visual',
    categories: ['visual', 'tech', 'layout'],
    tags: ['contemporary', 'geometric', 'clean', 'enterprise', 'creative'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business']
  },

  // Translucent 系列
  'visual-translucent-glassmorphism': {
    primaryCategory: 'visual',
    categories: ['visual', 'translucent'],
    tags: ['contemporary', 'translucent', 'depth', 'gradient', 'clean', 'creative', 'modern'],
    relatedStyles: ['core-fluent2', 'visual-y2k', 'visual-translucent-aurora-glass', 'core-material']
  },
  'visual-translucent-translucent-layers': {
    primaryCategory: 'visual',
    categories: ['visual', 'translucent'],
    tags: ['contemporary', 'translucent', 'depth', 'layered', 'creative'],
    relatedStyles: ['visual-translucent-glassmorphism', 'visual-translucent-aurora-glass', 'core-fluent2']
  },
  'visual-translucent-aurora-glass': {
    primaryCategory: 'visual',
    categories: ['visual', 'translucent', 'nature'],
    tags: ['contemporary', 'translucent', 'colorful', 'organic', 'creative'],
    relatedStyles: ['visual-translucent-glassmorphism', 'visual-y2k']
  },
  // visual-translucent-frost-glass 已移除 - 無 preview HTML
  // visual-translucent-acrylic-material 已移除 - 無 preview HTML

  // Gradient 系列
  'visual-gradient-mesh-gradient': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'organic', 'creative', 'animated'],
    relatedStyles: ['visual-tech-gradients', 'visual-gradient-animated-gradient']
  },
  'visual-gradient-animated-gradient': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'motionBased', 'creative', 'animated'],
    relatedStyles: ['visual-gradient-mesh-gradient', 'visual-y2k']
  },
  'visual-gradient-color-transition': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'motionBased', 'creative'],
    relatedStyles: ['visual-gradient-animated-gradient', 'visual-tech-gradients']
  },
  'visual-gradient-duotone': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'bold', 'colorful', 'creative', 'minimal'],
    relatedStyles: ['visual-gradient-mesh-gradient', 'core-flat', 'visual-neo-brutalism']
  },
  'visual-gradient-holographic': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['contemporary', 'colorful', 'futuristic', 'creative', 'effectDriven'],
    relatedStyles: ['visual-y2k', 'visual-neon-cyberpunk', 'visual-gradient-mesh-gradient']
  },

  // Shape 系列
  // visual-shape-blob 已移除 - 無 preview HTML
  // visual-shape-polygon 已移除 - 無 preview HTML
  // visual-shape-morphing 已移除 - 無 preview HTML
  // visual-shape-geometric 已移除 - 無 preview HTML
  // visual-shape-organic 已移除 - 無 preview HTML

  // Texture 系列
  // visual-texture-clay 已移除 - 無 preview HTML
  'visual-texture-leather': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['classic', 'depth', 'creative', 'enterprise'],
    relatedStyles: ['core-skeuomorphism', 'visual-texture-fabric']
  },
  'visual-texture-leather-vintage-journal': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro', 'texture'],
    tags: ['retro', 'classic', 'depth', 'creative', 'travel'],
    relatedStyles: ['visual-texture-leather', 'core-skeuomorphism', 'retro-vintage-newspaper']
  },
  'visual-texture-grain': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'minimal', 'creative', 'retro'],
    relatedStyles: ['visual-monochrome', 'core-minimalism']
  },
  'visual-texture-fabric': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'creative'],
    relatedStyles: ['visual-texture-leather', 'visual-nature-solarpunk']
  },
  // visual-texture-paper 已移除 - 無 preview HTML

  // Light 系列
  'visual-light-glow': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'effectDriven', 'colorful', 'creative', 'animated'],
    relatedStyles: ['visual-light-neon', 'visual-neon-cyberpunk']
  },
  'visual-light-spotlight': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'effectDriven', 'dramatic', 'creative'],
    relatedStyles: ['visual-light-glow', 'visual-light-ambient']
  },
  'visual-light-ambient': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'minimal', 'clean', 'creative'],
    relatedStyles: ['visual-light-glow', 'core-minimalism', 'visual-translucent-glassmorphism']
  },
  'visual-light-neon': {
    primaryCategory: 'visual',
    categories: ['visual', 'light'],
    tags: ['contemporary', 'neon', 'colorful', 'futuristic', 'creative'],
    relatedStyles: ['visual-neon-cyberpunk', 'visual-neon-noir', 'visual-y2k']
  },

  // Nature 系列
  'visual-nature-smoke': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'effectDriven', 'creative', 'animated'],
    relatedStyles: ['visual-nature-liquid', 'visual-nature-particle']
  },
  'visual-nature-liquid': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'creative', 'animated'],
    relatedStyles: []
  },
  'visual-nature-particle': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'effectDriven', 'creative', 'animated'],
    relatedStyles: ['visual-tech-generative-art', 'visual-nature-smoke']
  },
  'visual-nature-wave': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'motionBased', 'creative', 'animated'],
    relatedStyles: ['visual-nature-liquid']
  },
  'visual-nature-aurora-wave': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'gradient', 'animation', 'dreamlike', 'futuristic', 'nature'],
    relatedStyles: ['visual-nature-liquid', 'visual-nature-particle', 'visual-gradient-mesh-gradient']
  },

  // 其他 Visual 風格
  'visual-neon-cyberpunk': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'neon', 'colorful', 'futuristic', 'gaming', 'creative'],
    relatedStyles: ['visual-neon-noir', 'visual-y2k', 'retro-digital-arcadeCRT']
  },
  'visual-neon-noir': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'neon', 'minimal', 'dramatic', 'creative'],
    relatedStyles: ['visual-neon-cyberpunk', 'visual-liminalSpace', 'visual-y2k']
  },
  'visual-soft-ui': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'depth', 'soft', 'clean', 'creative'],
    relatedStyles: ['core-material', 'visual-translucent-glassmorphism', 'core-fluent2']
  },
  'visual-monochrome': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'minimal', 'monochrome', 'clean', 'enterprise'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business', 'visual-texture-grain']
  },
  'kawaii-minimal': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'colorful', 'creative', 'playful'],
    relatedStyles: ['visual-y2k', 'visual-paper-cutout', 'visual-outlineStyle-elearning']
  },
  'paperCutout': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'creative', 'playful'],
    relatedStyles: ['visual-kawaii-minimal', 'visual-outlineStyle-elearning']
  },

  // New Trend 系列
  'maximalism': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'bold', 'colorful', 'experimental', 'creative'],
    relatedStyles: ['visual-neo-brutalism', 'visual-tech-anti-design', 'visual-y2k']
  },
  'scandi': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'clean', 'organic', 'creative'],
    relatedStyles: ['core-minimalism', 'visual-texture-wood']
  },
  'memphis': {
    primaryCategory: 'visual',
    categories: ['visual', 'retro'],
    tags: ['retro', 'bold', 'geometric', 'colorful', 'creative'],
    relatedStyles: ['visual-y2k', 'visual-neo-brutalism']
  },
  'claymation': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'creative', 'playful'],
    relatedStyles: ['visual-paper-cutout']
  },
  'corporate': {
    primaryCategory: 'visual',
    categories: ['visual', 'modern'],
    tags: ['contemporary', 'minimal', 'clean', 'enterprise', 'professional'],
    relatedStyles: ['core-minimalism', 'visual-outlineStyle-business']
  },

  // Accessibility 系列
  // 已移除: accessibility-high-contrast

  // VisualStyles 中的風格
  'natural': {
    primaryCategory: 'visual',
    categories: ['visual', 'nature'],
    tags: ['contemporary', 'organic', 'colorful', 'creative'],
    relatedStyles: ['visual-nature-solarpunk']
  },
  'clay': {
    primaryCategory: 'visual',
    categories: ['visual', 'texture'],
    tags: ['contemporary', 'organic', 'colorful', 'creative'],
    relatedStyles: ['visual-nature-solarpunk']
  },

  // Newspaper Typography Family (moved to retro)
  'retro-newspaper-modern-editorial': {
    primaryCategory: 'retro',
    categories: ['retro', 'typography', 'editorial'],
    tags: ['classic', 'editorial', 'newspaper', 'multi-column', 'drop-cap', 'serif', 'professional', 'authoritative', 'depth', 'vintage'],
    relatedStyles: [
      'retro-newspaper-vintage-retro',
      'core-minimalism',
      'retro-swissDesign'
    ]
  },

  'retro-newspaper-vintage-retro': {
    primaryCategory: 'retro',
    categories: ['retro', 'typography', 'vintage'],
    tags: ['classic', 'vintage', 'newspaper', 'aged-paper', 'retro', 'print-era', 'nostalgic', 'depth', 'texture'],
    relatedStyles: [
      'retro-newspaper-modern-editorial',
      'core-skeuomorphism',
      'retro-swissDesign'
    ]
  },

  // --- Layout 系列補充：打破常規網格 / 分屏 / 瀑布流 ---
  brokenGrid: {
    primaryCategory: 'layout',
    categories: ['layout', 'visual'],
    // 打破常規網格：強對比、幾何與實驗性
    tags: ['contemporary', 'bold', 'geometric', 'experimental', 'creative'],
    relatedStyles: ['visual-tech-bento-grids', 'maximalism', 'visual-neo-brutalism']
  },
  splitScreen: {
    primaryCategory: 'layout',
    categories: ['layout'],
    // 分屏佈局：強對比 A/B 結構，常用於方案對比與雙入口
    tags: ['contemporary', 'minimal', 'geometric', 'enterprise', 'saas'],
    relatedStyles: ['visual-tech-bento-grids', 'core-minimalism']
  },
  masonry: {
    primaryCategory: 'layout',
    categories: ['layout', 'visual'],
    // 瀑布流佈局：作品集 / 卡片集合用，偏創意內容展示
    tags: ['contemporary', 'colorful', 'creative', 'content'],
    relatedStyles: ['visual-scrollNarrative', 'visual-gradient-mesh-gradient', 'maximalism']
  },

  // --- Retro 系列補充：街機 CRT 家族卡片 ---
  'retro-arcadeCRT': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    // 家族總覽卡片：與 arcadeCRT 模板保持一致標籤
    tags: ['retro', 'neon', 'effectDriven', 'gaming', 'creative'],
    relatedStyles: ['retro-digital-arcadeCRT', 'retro-arcadeCRT-arcade-hall', 'retro-arcadeCRT-cyberpunk-control']
  },

  // --- Retro 系列補充：數位復古家族卡片 ---
  'retro-digitalRetro': {
    primaryCategory: 'retro',
    categories: ['retro', 'digital'],
    tags: ['retro', 'pixel', 'gaming', 'creative', 'colorful', '8bit'],
    relatedStyles: ['retro-arcadeCRT', 'visual-y2k', 'visual-neonCyberpunk']
  },

  // ========== Interaction Patterns (增強版) ==========
  'interaction-mouseTracking': {
    primaryCategory: 'interaction',
    categories: ['interaction', 'visual'],
    tags: ['contemporary', 'motionBased', 'effectDriven', 'gaming', 'creative', 'animated'],
    relatedStyles: ['visual-scrollNarrative', 'visual-tech-generative-art', 'visual-tech-sci-fi-hud']
  },
  'interaction-mouse-tracking': {
    primaryCategory: 'interaction',
    categories: ['interaction', 'visual'],
    // 鼠標追蹤 + 粒子 + 3D 視差
    tags: ['contemporary', 'motionBased', 'effectDriven', 'gaming', 'creative'],
    relatedStyles: ['visual-scrollNarrative', 'visual-tech-generative-art', 'visual-tech-sci-fi-hud']
  }
};

/**
 * 智能推斷風格標籤
 * 根據風格 ID 和描述自動生成合理的標籤
 * @param {string} styleId - 風格 ID
 * @param {string} description - 風格描述（可選）
 * @returns {Array<string>} 標籤數組
 */
function inferTags(styleId, description = '') {
  const tags = new Set();
  const id = styleId.toLowerCase();
  const desc = (description || '').toLowerCase();

  // === 時代特徵標籤 ===
  // Retro styles
  if (id.includes('retro') || id.includes('vintage') || id.includes('classic') ||
      id.includes('80s') || id.includes('90s') || id.includes('y2k') ||
      desc.includes('retro') || desc.includes('vintage')) {
    tags.add('retro');
  }
  // Contemporary/Modern
  else if (id.includes('modern') || id.includes('contemporary') || id.includes('new') ||
           desc.includes('modern') || desc.includes('contemporary')) {
    tags.add('contemporary');
  }
  // Classic/Timeless
  else if (id.includes('classic') || id.includes('traditional') ||
           desc.includes('classic') || desc.includes('traditional')) {
    tags.add('classic');
  }
  // Default to contemporary for core/visual
  else if (id.startsWith('core-') || id.startsWith('visual-')) {
    tags.add('contemporary');
  }

  // === 視覺特性標籤 ===
  // Minimal
  if (id.includes('minimal') || id.includes('clean') || id.includes('simple') ||
      desc.includes('minimal') || desc.includes('clean')) {
    tags.add('minimal');
  }
  // Bold/Dramatic
  if (id.includes('bold') || id.includes('brutal') || id.includes('dramatic') ||
      desc.includes('bold') || desc.includes('strong')) {
    tags.add('bold');
  }
  // Flat
  if (id.includes('flat') || desc.includes('flat')) {
    tags.add('flat');
  }
  // Depth (shadows, 3D)
  if (id.includes('skeuomorphism') || id.includes('material') || id.includes('soft') ||
      id.includes('3d') || id.includes('shadow') || id.includes('depth') ||
      desc.includes('depth') || desc.includes('shadow')) {
    tags.add('depth');
  }
  // Colorful
  if (id.includes('color') || id.includes('gradient') || id.includes('rainbow') ||
      id.includes('vibrant') || id.includes('kawaii') || id.includes('memphis') ||
      desc.includes('colorful') || desc.includes('vibrant')) {
    tags.add('colorful');
  }
  // Monochrome
  if (id.includes('monochrome') || id.includes('mono') || id.includes('bw') ||
      desc.includes('monochrome') || desc.includes('black and white')) {
    tags.add('monochrome');
  }
  // Geometric
  if (id.includes('geometric') || id.includes('grid') || id.includes('bento') ||
      desc.includes('geometric') || desc.includes('grid')) {
    tags.add('geometric');
  }
  // Organic
  if (id.includes('organic') || id.includes('nature') || id.includes('biophilic') ||
      id.includes('liquid') || id.includes('wave') || id.includes('flora') ||
      desc.includes('organic') || desc.includes('natural')) {
    tags.add('organic');
  }

  // === 技術手法標籤 ===
  // Translucent/Glass
  if (id.includes('glass') || id.includes('translucent') || id.includes('transparent') ||
      id.includes('aurora') || id.includes('frosted') ||
      desc.includes('glass') || desc.includes('translucent')) {
    tags.add('translucent');
  }
  // Gradient
  if (id.includes('gradient') || id.includes('duotone') || id.includes('holographic') ||
      desc.includes('gradient')) {
    tags.add('gradient');
  }
  // Neon/Glow
  if (id.includes('neon') || id.includes('glow') || id.includes('cyberpunk') ||
      desc.includes('neon') || desc.includes('glow')) {
    tags.add('neon');
  }
  // Texture
  if (id.includes('texture') || id.includes('grain') || id.includes('fabric') ||
      id.includes('leather') || id.includes('paper') ||
      desc.includes('texture')) {
    tags.add('textured');
  }
  // Animation/Motion
  if (id.includes('animated') || id.includes('motion') || id.includes('kinetic') ||
      id.includes('particle') || id.includes('scroll') ||
      desc.includes('animated') || desc.includes('motion')) {
    tags.add('animated');
  }
  // Effect-driven
  if (id.includes('effect') || id.includes('visual') || id.includes('generative') ||
      id.includes('sci-fi') || id.includes('hud') || id.includes('liminal') ||
      desc.includes('effect')) {
    tags.add('effectDriven');
  }

  // === 使用場景標籤 ===
  // Creative/Artistic
  if (id.includes('creative') || id.includes('art') || id.includes('sketch') ||
      id.includes('hand-drawn') || id.includes('claymation') ||
      desc.includes('creative') || desc.includes('artistic')) {
    tags.add('creative');
  }
  // Enterprise/Professional
  if (id.includes('enterprise') || id.includes('corporate') || id.includes('professional') ||
      id.includes('business') || desc.includes('enterprise') || desc.includes('professional')) {
    tags.add('enterprise');
  }
  // Gaming
  if (id.includes('game') || id.includes('gaming') || id.includes('arcade') ||
      id.includes('pixel') || id.includes('crt') ||
      desc.includes('game') || desc.includes('gaming')) {
    tags.add('gaming');
  }
  // Futuristic
  if (id.includes('futuristic') || id.includes('sci-fi') || id.includes('cyberpunk') ||
      id.includes('y2k') || desc.includes('futuristic') || desc.includes('future')) {
    tags.add('futuristic');
  }

  return Array.from(tags);
}

export const enhanceStyle = (style) => {
  // ⚠️ 防禦性檢查：確保 style 和 style.id 存在
  if (!style || typeof style.id !== 'string') {
    console.warn('[enhanceStyle] 無效的 style 對象:', style);
    // 返回帶默認值的對象，避免下游崩潰
    return style ? {
      ...style,
      primaryCategory: 'core',
      categories: ['core'],
      tags: [],
      relatedStyles: []
    } : null;
  }

  const enhancement = styleEnhancements[style.id];
  if (!enhancement) {
    // 自動推斷 primaryCategory 基於 style id
    let inferredCategory = style.primaryCategory;
    if (!inferredCategory) {
      if (style.id.startsWith('core-')) {
        inferredCategory = 'core';
      } else if (style.id.startsWith('visual-')) {
        inferredCategory = 'visual';
      } else if (style.id.startsWith('retro-')) {
        inferredCategory = 'retro';
      } else if (style.id.startsWith('layout-')) {
        inferredCategory = 'layout';
      } else if (style.id.startsWith('interaction-')) {
        inferredCategory = 'interaction';
      } else {
        inferredCategory = 'core'; // 默認值
      }
    }

    // 自動推斷 categories
    let inferredCategories = style.categories;
    if (!inferredCategories || inferredCategories.length === 0) {
      inferredCategories = [inferredCategory];
      // 根据 id 添加子分类
      if (style.id.includes('-tech-')) {
        inferredCategories.push('tech');
      }
      if (style.id.includes('-translucent-')) {
        inferredCategories.push('translucent');
      }
      if (style.id.includes('-gradient-')) {
        inferredCategories.push('gradient');
      }
      if (style.id.includes('-light-')) {
        inferredCategories.push('light');
      }
      if (style.id.includes('-nature-')) {
        inferredCategories.push('nature');
      }
      if (style.id.includes('-retro') || style.id.includes('neon') || style.id.includes('y2k')) {
        inferredCategories.push('retro');
      }
    }

    // ⭐ 智能推斷 tags（如果原始 style 沒有 tags）
    let inferredTags = style.tags || [];
    if (inferredTags.length === 0) {
      // 提取描述文本（支持 i18n 對象和翻譯鍵）
      let description = '';
      if (typeof style.description === 'object' && style.description !== null) {
        description = style.description['zh-CN'] || style.description['en-US'] || '';
      } else if (typeof style.description === 'string') {
        description = style.description;
      }

      inferredTags = inferTags(style.id, description);
      console.log(`[enhanceStyle] 自動推斷 tags: ${style.id} → [${inferredTags.join(', ')}]`);
    }

    return {
      ...style,
      primaryCategory: inferredCategory,
      categories: inferredCategories,
      tags: inferredTags,
      relatedStyles: style.relatedStyles || []
    };
  }
  return { ...style, ...enhancement };
};

// ⚠️ 修復：添加數組驗證和過濾，避免無效項導致崩潰
export const enhanceStyles = (styles) => {
  if (!Array.isArray(styles)) {
    console.warn('[enhanceStyles] 輸入不是數組:', styles);
    return [];
  }
  return styles
    .filter(s => s && typeof s.id === 'string')
    .map(enhanceStyle)
    .filter(Boolean);  // 過濾掉 enhanceStyle 返回的 null
};

export default {
  styleEnhancements,
  enhanceStyle,
  enhanceStyles,
  'visual-handDrawnSketch-notebook': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary'], // TODO: 添加更多標籤（參考：classic, contemporary, timeless, retro, minimal, bold, etc.）
    relatedStyles: [] // TODO: 添加關聯風格 ID
  },
  'visual-glow-luminous-cards': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary'], // TODO: 添加更多標籤（參考：classic, contemporary, timeless, retro, minimal, bold, etc.）
    relatedStyles: [] // TODO: 添加關聯風格 ID
  },
  'visual-holographic-aurora-panel': {
    primaryCategory: 'visual',
    categories: ['visual', 'gradient'],
    tags: ['futuristic', 'gradient', 'glassmorphic', 'neon', 'effectDriven'],
    relatedStyles: ['visual-gradient-holographic', 'visual-neon-cyberpunk', 'visual-glassmorphism']
  },
  'visual-y2k-creative-store': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary'], // TODO: 添加更多標籤（參考：classic, contemporary, timeless, retro, minimal, bold, etc.）
    relatedStyles: [] // TODO: 添加關聯風格 ID
  },
  'visual-wabiSabi-wabiSabi-zen-website': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary'], // TODO: 添加更多標籤（參考：classic, contemporary, timeless, retro, minimal, bold, etc.）
    relatedStyles: [] // TODO: 添加關聯風格 ID
  },
  'portfolio-showcase': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary'], // TODO: 添加更多標籤（參考：classic, contemporary, timeless, retro, minimal, bold, etc.）
    relatedStyles: [] // TODO: 添加關聯風格 ID
  },
  'visual-industrial-analog-synth': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary'], // TODO: 添加更多標籤（參考：classic, contemporary, timeless, retro, minimal, bold, etc.）
    relatedStyles: [] // TODO: 添加關聯風格 ID
  },
  'solarpunk-eco-marketplace': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary'], // TODO: 添加更多標籤（參考：classic, contemporary, timeless, retro, minimal, bold, etc.）
    relatedStyles: [] // TODO: 添加關聯風格 ID
  },
  'visual-organic-flow-workspace': {
    primaryCategory: 'visual',
    categories: ['visual'],
    tags: ['contemporary', 'organic', 'warm', 'workspace', 'biophilic', 'calm', 'tactile'],
    relatedStyles: ['visual-organic']
  },
};
