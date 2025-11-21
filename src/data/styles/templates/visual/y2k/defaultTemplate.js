// Visual Style Template: Y2K (Frutiger Aero)
// Y2K 千禧年设計美學 - 氣泡裝飾、玻璃態效果、青藍色漸变

import {
  y2kFullPageHTML,
  y2kFullPageStyles
} from './y2kFullPage';
import { stylePrompt } from './stylePrompt';
import { fullPageCustomPrompt } from './fullPageCustomPrompt';

export const y2kStyle = {
  id: 'visual-y2k',
  title: 'styles.visual.y2k.title',
  description: 'styles.visual.y2k.description',

  // Demo HTML - Y2K bubble showcase (保持當前设計)
  demoHTML: `
    <div class="w-full h-full flex flex-col items-center justify-center p-6 gap-6">
      <div class="relative group">
        <div class="w-28 h-28 bg-gradient-to-br from-cyan-200 via-blue-300 to-indigo-400 rounded-full shadow-2xl border-4 border-white/80 transform transition-all duration-500 group-hover:scale-110 cursor-pointer">
          <div class="absolute top-4 left-6 w-12 h-12 bg-gradient-to-br from-white/90 to-white/30 rounded-full blur-lg"></div>
          <div class="absolute top-2 left-8 w-6 h-6 bg-white rounded-full blur-md"></div>
        </div>
      </div>
      <div class="text-center">
        <h4 class="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 drop-shadow-lg mb-2">Y2K</h4>
        <div class="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full border-2 border-white/60 shadow-lg">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600 font-bold text-sm">Frutiger Aero</p>
        </div>
      </div>
    </div>
  `,

  customStyles: '',

  // Preview configuration - 使用純 Y2K 風格
  fullPagePreviewId: 'y2k-dashboard',
  fullPageHTML: y2kFullPageHTML,
  fullPageStyles: y2kFullPageStyles,
  fullPageCustomPrompt,
  stylePrompt,

  // Multiple preview support
  previews: [
    {
      id: 'y2k-dashboard',
      name: 'styles.visual.y2k.previews.dashboard',
      type: 'full',
      description: 'styles.visual.y2k.previews.dashboardDesc',
      features: [
        'Glassmorphism Navigation Bar (backdrop-blur-xl)',
        'Gradient Bubble Logo with Light Reflection',
        'Floating Bubble Decorations with Animation',
        'Y2K Hero Section with Gradient Text',
        'Statistics Cards Grid (4 columns)',
        'Glass-effect Project Cards with Progress Bars',
        'Team Activity Timeline',
        'UI Components Showcase (Forms, Buttons, Chips)',
        'Data Table with Glass Rows',
        'Floating Action Button (FAB)',
        'Cyan-Blue-Teal Gradient Color Scheme',
        'Inner Shadow and Outer Glow Effects',
        'Semi-transparent White Overlays',
        'Responsive Design (Desktop/Tablet/Mobile)'
      ],
      colorScheme: {
        'zh-CN': '背景青藍漸变 (#ECFEFF / Cyan-50, #EFF6FF / Blue-50, #CCFBF1 / Teal-50)、主色青色 (#06b6d4 / Cyan-500)、藍色 (#3b82f6 / Blue-500)、翠綠色 (#10b981 / Emerald-500)、玻璃效果半透明白 (rgba(255,255,255,0.7))、內阴影高光 (rgba(255,255,255,0.5))',
        'en-US': 'Background cyan-blue gradient (#ECFEFF / Cyan-50, #EFF6FF / Blue-50, #CCFBF1 / Teal-50), primary cyan (#06b6d4 / Cyan-500), blue (#3b82f6 / Blue-500), emerald (#10b981 / Emerald-500), glass effect semi-transparent white (rgba(255,255,255,0.7)), inner shadow highlight (rgba(255,255,255,0.5))'
      },
      html: y2kFullPageHTML,
      styles: y2kFullPageStyles
    }
  ],

  // Template-level color scheme
  colorScheme: {
    'zh-CN': '背景青藍漸变 (#ECFEFF, #EFF6FF, #CCFBF1)、主色青色 (#22D3EE)、藍色 (#60A5FA)、青綠色 (#2DD4BF)、玻璃效果半透明白 (rgba(255,255,255,0.7))',
    'en-US': 'Background cyan-blue gradient (#ECFEFF, #EFF6FF, #CCFBF1), primary cyan (#22D3EE), blue (#60A5FA), teal (#2DD4BF), glass effect semi-transparent white (rgba(255,255,255,0.7))'
  }
};
