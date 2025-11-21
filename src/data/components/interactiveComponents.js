// 互動特效 - Interactive Components
import { loadingAnimations } from './loadingAnimations';
import { TourGuideDemo } from '../../components/interactive/TourGuideDemo';

export const interactiveComponents = [
  {
    id: 'hover-effects',
    title: 'data.components.interactive.hover-effects.title',
    description: 'data.components.interactive.hover-effects.description',
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.interactive.hover-effects.variants.minimalism.name',
        description: 'data.components.interactive.hover-effects.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 class="font-light text-2xl mb-2 text-gray-900">
                {{t:demo.hover.minimalism.title}}
              </h3>
              <p class="text-gray-500 mb-8 text-sm font-light">{{t:demo.hover.minimalism.subtitle}}</p>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                <!-- Pure Fade -->
                <a href="javascript:void(0)" class="min-hover-card group block p-6 bg-gray-50 rounded-lg text-center transition-all duration-300 hover:bg-black">
                  <p class="font-light text-gray-800 group-hover:text-white transition-colors duration-300">
                    {{t:demo.hover.minimalism.fade}}
                  </p>
                </a>

                <!-- Subtle Scale -->
                <a href="javascript:void(0)" class="min-hover-card group block p-6 bg-white border border-gray-200 rounded-lg text-center transition-all duration-300 hover:scale-105">
                  <p class="font-light text-gray-800">
                    {{t:demo.hover.minimalism.scale}}
                  </p>
                </a>

                <!-- Opacity Shift -->
                <a href="javascript:void(0)" class="min-hover-card group block p-6 bg-black text-white rounded-lg text-center transition-opacity duration-300 hover:opacity-70">
                  <p class="font-light">
                    {{t:demo.hover.minimalism.opacity}}
                  </p>
                </a>

                <!-- Border Reveal -->
                <a href="javascript:void(0)" class="min-hover-card group block p-6 bg-white border-2 border-transparent rounded-lg text-center transition-all duration-300 hover:border-gray-900">
                  <p class="font-light text-gray-800">
                    {{t:demo.hover.minimalism.border}}
                  </p>
                </a>

                <!-- Underline Effect -->
                <a href="javascript:void(0)" class="min-hover-card group block p-6 bg-gray-50 rounded-lg text-center relative overflow-hidden">
                  <p class="font-light text-gray-800 relative z-10">
                    {{t:demo.hover.minimalism.underline}}
                  </p>
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>

                <!-- Letter Spacing -->
                <a href="javascript:void(0)" class="min-hover-card group block p-6 bg-white border border-gray-200 rounded-lg text-center">
                  <p class="font-light text-gray-800 tracking-normal group-hover:tracking-wider transition-all duration-300">
                    {{t:demo.hover.minimalism.spacing}}
                  </p>
                </a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .min-hover-card {
            cursor: pointer;
          }
        `
      },
      {
        id: 'skeuomorphism',
        name: 'data.components.interactive.hover-effects.variants.skeuomorphism.name',
        description: 'data.components.interactive.hover-effects.variants.skeuomorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl p-8">
              <h3 class="font-bold text-2xl mb-2 text-gray-800" style="text-shadow: 1px 1px 2px rgba(255,255,255,0.8)">
                {{t:demo.hover.skeuomorphism.title}}
              </h3>
              <p class="text-gray-700 mb-8 text-sm">{{t:demo.hover.skeuomorphism.subtitle}}</p>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                <!-- 3D Button Press -->
                <a href="javascript:void(0)" class="skeuo-btn-press block">
                  <div class="skeuo-btn-inner">
                    <p class="font-semibold text-white">
                      {{t:demo.hover.skeuomorphism.press}}
                    </p>
                  </div>
                </a>

                <!-- Glossy Button -->
                <a href="javascript:void(0)" class="skeuo-glossy block">
                  <p class="font-semibold text-white">
                    {{t:demo.hover.skeuomorphism.glossy}}
                  </p>
                </a>

                <!-- Embossed -->
                <a href="javascript:void(0)" class="skeuo-emboss block">
                  <p class="font-bold text-gray-700">
                    {{t:demo.hover.skeuomorphism.emboss}}
                  </p>
                </a>

                <!-- Leather Texture -->
                <a href="javascript:void(0)" class="skeuo-leather block">
                  <p class="font-semibold text-amber-900">
                    {{t:demo.hover.skeuomorphism.leather}}
                  </p>
                </a>

                <!-- Metal Shine -->
                <a href="javascript:void(0)" class="skeuo-metal block">
                  <p class="font-bold text-gray-100">
                    {{t:demo.hover.skeuomorphism.metal}}
                  </p>
                </a>

                <!-- Raised Panel -->
                <a href="javascript:void(0)" class="skeuo-raised block">
                  <p class="font-semibold text-gray-800">
                    {{t:demo.hover.skeuomorphism.raised}}
                  </p>
                </a>

                <!-- Toggle Switch Style -->
                <a href="javascript:void(0)" class="skeuo-toggle block">
                  <p class="font-semibold text-white">
                    {{t:demo.hover.skeuomorphism.toggle}}
                  </p>
                </a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .skeuo-btn-press {
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            background: linear-gradient(to bottom, #ef4444, #dc2626);
            box-shadow:
              0 6px 0 #991b1b,
              0 8px 12px rgba(0,0,0,0.3);
            transition: all 0.1s ease;
            text-align: center;
          }
          .skeuo-btn-press:hover {
            transform: translateY(2px);
            box-shadow:
              0 4px 0 #991b1b,
              0 6px 10px rgba(0,0,0,0.3);
          }
          .skeuo-btn-press:active {
            transform: translateY(6px);
            box-shadow:
              0 0 0 #991b1b,
              0 2px 6px rgba(0,0,0,0.3);
          }
          .skeuo-btn-inner {
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }

          .skeuo-glossy {
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            background: linear-gradient(to bottom, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.3),
              inset 0 -1px 0 rgba(0,0,0,0.2),
              0 4px 8px rgba(0,0,0,0.3);
            border: 1px solid rgba(0,0,0,0.2);
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            text-align: center;
            transition: all 0.3s;
          }
          .skeuo-glossy:hover {
            background: linear-gradient(to bottom, #2563eb 0%, #1d4ed8 50%, #1e40af 100%);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.3),
              inset 0 -1px 0 rgba(0,0,0,0.2),
              0 6px 12px rgba(0,0,0,0.4);
          }

          .skeuo-emboss {
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            background: linear-gradient(to bottom, #e5e7eb, #d1d5db);
            box-shadow:
              inset 0 2px 4px rgba(255,255,255,0.8),
              inset 0 -2px 4px rgba(0,0,0,0.2),
              0 2px 4px rgba(0,0,0,0.1);
            text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
            text-align: center;
            transition: all 0.3s;
          }
          .skeuo-emboss:hover {
            box-shadow:
              inset 0 -2px 4px rgba(255,255,255,0.8),
              inset 0 2px 4px rgba(0,0,0,0.3),
              0 2px 4px rgba(0,0,0,0.1);
          }

          .skeuo-leather {
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            background:
              radial-gradient(circle at 20% 30%, rgba(217, 119, 6, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.1) 0%, transparent 50%),
              linear-gradient(to bottom, #d97706, #b45309);
            box-shadow:
              inset 0 2px 4px rgba(0,0,0,0.3),
              inset 0 -1px 2px rgba(255,255,255,0.1),
              0 4px 8px rgba(0,0,0,0.3);
            text-align: center;
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            transition: all 0.3s;
          }
          .skeuo-leather:hover {
            background:
              radial-gradient(circle at 20% 30%, rgba(217, 119, 6, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.15) 0%, transparent 50%),
              linear-gradient(to bottom, #b45309, #92400e);
            transform: scale(1.05);
          }

          .skeuo-metal {
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #64748b 0%, #475569 25%, #334155 50%, #475569 75%, #64748b 100%);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.3),
              inset 0 -1px 0 rgba(0,0,0,0.5),
              0 4px 8px rgba(0,0,0,0.4);
            border: 1px solid rgba(0,0,0,0.3);
            text-align: center;
            text-shadow: 0 1px 3px rgba(0,0,0,0.8);
            transition: all 0.3s;
          }
          .skeuo-metal:hover {
            background: linear-gradient(135deg, #475569 0%, #334155 25%, #1e293b 50%, #334155 75%, #475569 100%);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.4),
              inset 0 -1px 0 rgba(0,0,0,0.6),
              0 6px 12px rgba(0,0,0,0.5);
          }

          .skeuo-raised {
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            background: linear-gradient(to bottom, #f3f4f6, #e5e7eb);
            box-shadow:
              0 4px 0 #9ca3af,
              0 6px 10px rgba(0,0,0,0.2);
            text-align: center;
            text-shadow: 0 1px 0 rgba(255,255,255,0.8);
            transition: all 0.2s;
          }
          .skeuo-raised:hover {
            transform: translateY(2px);
            box-shadow:
              0 2px 0 #9ca3af,
              0 4px 8px rgba(0,0,0,0.2);
          }

          .skeuo-toggle {
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            background: linear-gradient(to right, #10b981, #059669);
            box-shadow:
              inset 0 2px 4px rgba(0,0,0,0.2),
              0 4px 8px rgba(0,0,0,0.3);
            text-align: center;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
          }
          .skeuo-toggle::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
          }
          .skeuo-toggle:hover::before {
            left: 100%;
          }
          .skeuo-toggle:hover {
            background: linear-gradient(to right, #059669, #047857);
            box-shadow:
              inset 0 2px 4px rgba(0,0,0,0.3),
              0 6px 12px rgba(0,0,0,0.4);
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.interactive.hover-effects.variants.neumorphism.name',
        description: 'data.components.interactive.hover-effects.variants.neumorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-8" style="box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;">
              <h3 class="font-semibold text-2xl mb-2 text-gray-800">
                {{t:demo.hover.neumorphism.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.hover.neumorphism.subtitle}}</p>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                <!-- Soft Outset -->
                <a href="javascript:void(0)" class="neu-outset block">
                  <p class="font-medium text-gray-700">
                    {{t:demo.hover.neumorphism.outset}}
                  </p>
                </a>

                <!-- Soft Inset -->
                <a href="javascript:void(0)" class="neu-inset block">
                  <p class="font-medium text-gray-700">
                    {{t:demo.hover.neumorphism.inset}}
                  </p>
                </a>

                <!-- Floating -->
                <a href="javascript:void(0)" class="neu-float block">
                  <p class="font-medium text-gray-700">
                    {{t:demo.hover.neumorphism.float}}
                  </p>
                </a>

                <!-- Concave -->
                <a href="javascript:void(0)" class="neu-concave block">
                  <p class="font-medium text-gray-700">
                    {{t:demo.hover.neumorphism.concave}}
                  </p>
                </a>

                <!-- Convex -->
                <a href="javascript:void(0)" class="neu-convex block">
                  <p class="font-medium text-gray-700">
                    {{t:demo.hover.neumorphism.convex}}
                  </p>
                </a>

                <!-- Pressed -->
                <a href="javascript:void(0)" class="neu-pressed block">
                  <p class="font-medium text-gray-700">
                    {{t:demo.hover.neumorphism.pressed}}
                  </p>
                </a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .neu-outset {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: linear-gradient(145deg, #e0e0e0, #ffffff);
            box-shadow:
              8px 8px 16px #bebebe,
              -8px -8px 16px #ffffff;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .neu-outset:hover {
            box-shadow:
              12px 12px 24px #bebebe,
              -12px -12px 24px #ffffff;
            transform: translateY(-2px);
          }

          .neu-inset {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: linear-gradient(145deg, #ffffff, #e0e0e0);
            box-shadow:
              inset 8px 8px 16px #bebebe,
              inset -8px -8px 16px #ffffff;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .neu-inset:hover {
            box-shadow:
              inset 12px 12px 24px #bebebe,
              inset -12px -12px 24px #ffffff;
          }

          .neu-float {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: linear-gradient(145deg, #ffffff, #e0e0e0);
            box-shadow:
              6px 6px 12px #bebebe,
              -6px -6px 12px #ffffff;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .neu-float:hover {
            box-shadow:
              16px 16px 32px #bebebe,
              -16px -16px 32px #ffffff;
            transform: translateY(-4px);
          }

          .neu-concave {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: #e0e0e0;
            box-shadow:
              8px 8px 16px #bebebe,
              -8px -8px 16px #ffffff,
              inset 2px 2px 4px rgba(190, 190, 190, 0.3);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .neu-concave:hover {
            box-shadow:
              8px 8px 16px #bebebe,
              -8px -8px 16px #ffffff,
              inset 6px 6px 12px rgba(190, 190, 190, 0.5);
          }

          .neu-convex {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: linear-gradient(145deg, #f0f0f0, #d0d0d0);
            box-shadow:
              8px 8px 16px #bebebe,
              -8px -8px 16px #ffffff;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .neu-convex:hover {
            background: linear-gradient(145deg, #d0d0d0, #f0f0f0);
            box-shadow:
              12px 12px 24px #bebebe,
              -12px -12px 24px #ffffff;
          }

          .neu-pressed {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: #e0e0e0;
            box-shadow:
              8px 8px 16px #bebebe,
              -8px -8px 16px #ffffff;
            text-align: center;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .neu-pressed:hover {
            box-shadow:
              inset 6px 6px 12px #bebebe,
              inset -6px -6px 12px #ffffff;
            transform: scale(0.98);
          }
        `
      },
      {
        id: 'bootstrap5',
        name: 'data.components.interactive.hover-effects.variants.bootstrap5.name',
        description: 'data.components.interactive.hover-effects.variants.bootstrap5.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 class="font-bold text-2xl mb-2 text-gray-900">
                {{t:demo.hover.bootstrap5.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.hover.bootstrap5.subtitle}}</p>

              <div class="space-y-6">
                <!-- Button Group 1 -->
                <div class="flex flex-wrap gap-3">
                  <a href="javascript:void(0)" class="btn-bs btn-primary">
                    {{t:demo.hover.bootstrap5.primary}}
                  </a>
                  <a href="javascript:void(0)" class="btn-bs btn-secondary">
                    {{t:demo.hover.bootstrap5.secondary}}
                  </a>
                  <a href="javascript:void(0)" class="btn-bs btn-success">
                    {{t:demo.hover.bootstrap5.success}}
                  </a>
                  <a href="javascript:void(0)" class="btn-bs btn-danger">
                    {{t:demo.hover.bootstrap5.danger}}
                  </a>
                </div>

                <!-- Button Group 2 -->
                <div class="flex flex-wrap gap-3">
                  <a href="javascript:void(0)" class="btn-bs btn-warning">
                    {{t:demo.hover.bootstrap5.warning}}
                  </a>
                  <a href="javascript:void(0)" class="btn-bs btn-info">
                    {{t:demo.hover.bootstrap5.info}}
                  </a>
                  <a href="javascript:void(0)" class="btn-bs btn-light">
                    {{t:demo.hover.bootstrap5.light}}
                  </a>
                  <a href="javascript:void(0)" class="btn-bs btn-dark">
                    {{t:demo.hover.bootstrap5.dark}}
                  </a>
                </div>

                <!-- Outline Buttons -->
                <div class="pt-4 border-t border-gray-200">
                  <h4 class="font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wide">{{t:demo.hover.bootstrap5.outlineVariants}}</h4>
                  <div class="flex flex-wrap gap-3">
                    <a href="javascript:void(0)" class="btn-bs btn-outline-primary">
                      {{t:demo.hover.bootstrap5.outlinePrimary}}
                    </a>
                    <a href="javascript:void(0)" class="btn-bs btn-outline-success">
                      {{t:demo.hover.bootstrap5.outlineSuccess}}
                    </a>
                    <a href="javascript:void(0)" class="btn-bs btn-outline-danger">
                      {{t:demo.hover.bootstrap5.outlineDanger}}
                    </a>
                    <a href="javascript:void(0)" class="btn-bs btn-outline-info">
                      {{t:demo.hover.bootstrap5.outlineInfo}}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .btn-bs {
            display: inline-block;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 0.375rem;
            transition: all 0.15s ease-in-out;
          }

          .btn-primary {
            background-color: #0d6efd;
            border-color: #0d6efd;
            color: #ffffff;
          }
          .btn-primary:hover {
            background-color: #0b5ed7;
            border-color: #0a58ca;
          }

          .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
            color: #ffffff;
          }
          .btn-secondary:hover {
            background-color: #5c636a;
            border-color: #565e64;
          }

          .btn-success {
            background-color: #198754;
            border-color: #198754;
            color: #ffffff;
          }
          .btn-success:hover {
            background-color: #157347;
            border-color: #146c43;
          }

          .btn-danger {
            background-color: #dc3545;
            border-color: #dc3545;
            color: #ffffff;
          }
          .btn-danger:hover {
            background-color: #bb2d3b;
            border-color: #b02a37;
          }

          .btn-warning {
            background-color: #ffc107;
            border-color: #ffc107;
            color: #000000;
          }
          .btn-warning:hover {
            background-color: #ffca2c;
            border-color: #ffc720;
          }

          .btn-info {
            background-color: #0dcaf0;
            border-color: #0dcaf0;
            color: #000000;
          }
          .btn-info:hover {
            background-color: #31d2f2;
            border-color: #25cff2;
          }

          .btn-light {
            background-color: #f8f9fa;
            border-color: #f8f9fa;
            color: #000000;
          }
          .btn-light:hover {
            background-color: #f9fafb;
            border-color: #f9fafb;
          }

          .btn-dark {
            background-color: #212529;
            border-color: #212529;
            color: #ffffff;
          }
          .btn-dark:hover {
            background-color: #1c1f23;
            border-color: #1a1e21;
          }

          .btn-outline-primary {
            background-color: transparent;
            border-color: #0d6efd;
            color: #0d6efd;
          }
          .btn-outline-primary:hover {
            background-color: #0d6efd;
            border-color: #0d6efd;
            color: #ffffff;
          }

          .btn-outline-success {
            background-color: transparent;
            border-color: #198754;
            color: #198754;
          }
          .btn-outline-success:hover {
            background-color: #198754;
            border-color: #198754;
            color: #ffffff;
          }

          .btn-outline-danger {
            background-color: transparent;
            border-color: #dc3545;
            color: #dc3545;
          }
          .btn-outline-danger:hover {
            background-color: #dc3545;
            border-color: #dc3545;
            color: #ffffff;
          }

          .btn-outline-info {
            background-color: transparent;
            border-color: #0dcaf0;
            color: #0dcaf0;
          }
          .btn-outline-info:hover {
            background-color: #0dcaf0;
            border-color: #0dcaf0;
            color: #000000;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.interactive.hover-effects.variants.glassmorphism.name',
        description: 'data.components.interactive.hover-effects.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-2xl p-8 relative overflow-hidden">
              <!-- Background Pattern -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle, #ffffff 2px, transparent 2px); background-size: 30px 30px;"></div>
              </div>

              <div class="relative z-10">
                <h3 class="font-bold text-2xl mb-2 text-white">
                  {{t:demo.hover.glassmorphism.title}}
                </h3>
                <p class="text-white/90 mb-8 text-sm">{{t:demo.hover.glassmorphism.subtitle}}</p>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <!-- Classic Glass -->
                  <a href="javascript:void(0)" class="glass-classic block">
                    <p class="font-medium text-white">
                      {{t:demo.hover.glassmorphism.classic}}
                    </p>
                  </a>

                  <!-- Frosted Glass -->
                  <a href="javascript:void(0)" class="glass-frosted block">
                    <p class="font-medium text-white">
                      {{t:demo.hover.glassmorphism.frosted}}
                    </p>
                  </a>

                  <!-- Colored Glass -->
                  <a href="javascript:void(0)" class="glass-colored block">
                    <p class="font-medium text-white">
                      {{t:demo.hover.glassmorphism.colored}}
                    </p>
                  </a>

                  <!-- Gradient Glass -->
                  <a href="javascript:void(0)" class="glass-gradient block">
                    <p class="font-medium text-white">
                      {{t:demo.hover.glassmorphism.gradient}}
                    </p>
                  </a>

                  <!-- Border Glow -->
                  <a href="javascript:void(0)" class="glass-border-glow block">
                    <p class="font-medium text-white">
                      {{t:demo.hover.glassmorphism.borderGlow}}
                    </p>
                  </a>

                  <!-- Shimmer Glass -->
                  <a href="javascript:void(0)" class="glass-shimmer block">
                    <p class="font-medium text-white">
                      {{t:demo.hover.glassmorphism.shimmer}}
                    </p>
                  </a>

                  <!-- Dark Glass -->
                  <a href="javascript:void(0)" class="glass-dark block">
                    <p class="font-medium text-white">
                      {{t:demo.hover.glassmorphism.dark}}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .glass-classic {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-classic:hover {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(15px);
            transform: translateY(-4px);
            box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.25);
          }

          .glass-frosted {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-frosted:hover {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(25px) saturate(200%);
            border-color: rgba(255, 255, 255, 0.5);
          }

          .glass-colored {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-colored:hover {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3));
            backdrop-filter: blur(16px);
            transform: scale(1.05);
          }

          .glass-gradient {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            backdrop-filter: blur(10px);
            border: 1px solid;
            border-image: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1)) 1;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-gradient:hover {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
            backdrop-filter: blur(15px);
          }

          .glass-border-glow {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-border-glow:hover {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(15px);
            border-color: rgba(255, 255, 255, 0.6);
            box-shadow:
              0 0 20px rgba(255, 255, 255, 0.4),
              inset 0 0 20px rgba(255, 255, 255, 0.1);
          }

          .glass-shimmer {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-shimmer::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
            transform: rotate(45deg);
            transition: all 0.6s;
          }
          .glass-shimmer:hover::before {
            left: 100%;
          }
          .glass-shimmer:hover {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(15px);
          }

          .glass-dark {
            cursor: pointer;
            padding: 1.5rem;
            border-radius: 1rem;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-dark:hover {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(16px);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
        `
      }
    ]
  },
  // 使用从 loadingAnimations.js 导入的完整變体版本
  loadingAnimations,
  {
    id: 'transition-effects',
    title: 'data.components.interactive.transition-effects.title',
    description: 'data.components.interactive.transition-effects.description',
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.interactive.transition-effects.variants.minimalism.name',
        description: 'data.components.interactive.transition-effects.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 class="font-light text-2xl mb-2 text-gray-900">
                {{t:demo.interactive.transitionEffects.minimalism.title}}
              </h3>
              <p class="text-gray-500 mb-8 text-sm font-light">{{t:demo.interactive.transitionEffects.minimalism.subtitle}}</p>

              <!-- Fade Effects -->
              <div class="mb-8">
                <h4 class="font-medium text-sm text-gray-700 mb-4 uppercase tracking-wide">{{t:demo.interactive.transitionEffects.minimalism.fadeTitle}}</h4>
                <div class="grid grid-cols-3 gap-4">
                  <a href="javascript:void(0)" class="min-fade-in group block p-6 bg-gray-50 border border-gray-200 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                    <p class="font-light text-gray-800">{{t:demo.interactive.transitionEffects.minimalism.fadeIn}}</p>
                  </a>
                  <a href="javascript:void(0)" class="min-fade-out group block p-6 bg-gray-50 border border-gray-200 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                    <p class="font-light text-gray-800">{{t:demo.interactive.transitionEffects.minimalism.fadeOut}}</p>
                  </a>
                  <a href="javascript:void(0)" class="min-fade-toggle group block p-6 bg-gray-50 border border-gray-200 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                    <p class="font-light text-gray-800">{{t:demo.interactive.transitionEffects.minimalism.fadeToggle}}</p>
                  </a>
                </div>
              </div>

              <!-- Slide Effects -->
              <div class="mb-8">
                <h4 class="font-medium text-sm text-gray-700 mb-4 uppercase tracking-wide">{{t:demo.interactive.transitionEffects.minimalism.slideTitle}}</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a href="javascript:void(0)" class="min-slide-up group block p-6 bg-black text-white rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <p class="font-light">{{t:demo.interactive.transitionEffects.minimalism.slideUp}}</p>
                  </a>
                  <a href="javascript:void(0)" class="min-slide-down group block p-6 bg-black text-white rounded-xl text-center transition-all duration-300 hover:translate-y-2 hover:shadow-2xl">
                    <p class="font-light">{{t:demo.interactive.transitionEffects.minimalism.slideDown}}</p>
                  </a>
                  <a href="javascript:void(0)" class="min-slide-left group block p-6 bg-black text-white rounded-xl text-center transition-all duration-300 hover:-translate-x-2 hover:shadow-2xl">
                    <p class="font-light">{{t:demo.interactive.transitionEffects.minimalism.slideLeft}}</p>
                  </a>
                  <a href="javascript:void(0)" class="min-slide-right group block p-6 bg-black text-white rounded-xl text-center transition-all duration-300 hover:translate-x-2 hover:shadow-2xl">
                    <p class="font-light">{{t:demo.interactive.transitionEffects.minimalism.slideRight}}</p>
                  </a>
                </div>
              </div>

              <!-- Scale Effects -->
              <div>
                <h4 class="font-medium text-sm text-gray-700 mb-4 uppercase tracking-wide">{{t:demo.interactive.transitionEffects.minimalism.scaleTitle}}</h4>
                <div class="grid grid-cols-3 gap-4">
                  <a href="javascript:void(0)" class="min-scale-up group block p-8 bg-gray-100 rounded-xl text-center transition-all duration-300 hover:scale-110 hover:bg-gray-200">
                    <p class="font-light text-gray-800">{{t:demo.interactive.transitionEffects.minimalism.scaleUp}}</p>
                  </a>
                  <a href="javascript:void(0)" class="min-scale-down group block p-8 bg-gray-100 rounded-xl text-center transition-all duration-300 hover:scale-90 hover:bg-gray-200">
                    <p class="font-light text-gray-800">{{t:demo.interactive.transitionEffects.minimalism.scaleDown}}</p>
                  </a>
                  <a href="javascript:void(0)" class="min-scale-pulse group block p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl text-center transition-all duration-300 hover:scale-105 animate-pulse">
                    <p class="font-light text-gray-800">{{t:demo.interactive.transitionEffects.minimalism.scalePulse}}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .min-fade-in {
            animation: minFadeIn 0.5s ease-in-out;
          }
          .min-fade-out:hover {
            opacity: 0.3;
          }
          .min-fade-toggle:hover {
            opacity: 0;
            transform: translateY(-10px);
          }
          @keyframes minFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `
      },
      {
        id: 'bootstrap5',
        name: 'data.components.interactive.transition-effects.variants.bootstrap5.name',
        description: 'data.components.interactive.transition-effects.variants.bootstrap5.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <h3 class="font-bold text-2xl mb-2 text-gray-900">
                {{t:demo.interactive.transitionEffects.bootstrap5.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.interactive.transitionEffects.bootstrap5.subtitle}}</p>

              <!-- Modal Transition Demo -->
              <div class="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-gray-700 mb-3">{{t:demo.interactive.transitionEffects.bootstrap5.modalTitle}}</h4>
                <div class="bs-modal-demo bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
                  <h5 class="font-bold text-lg mb-2">{{t:demo.interactive.transitionEffects.bootstrap5.modalHeader}}</h5>
                  <p class="text-gray-600 mb-4">{{t:demo.interactive.transitionEffects.bootstrap5.modalBody}}</p>
                  <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold">
                    {{t:demo.interactive.transitionEffects.bootstrap5.modalButton}}
                  </button>
                </div>
              </div>

              <!-- Accordion Transition Demo -->
              <div class="mb-8">
                <h4 class="font-semibold text-gray-700 mb-3">{{t:demo.interactive.transitionEffects.bootstrap5.accordionTitle}}</h4>
                <div class="space-y-2">
                  <div class="bs-accordion-item border border-gray-300 rounded-lg overflow-hidden">
                    <div class="bs-accordion-header bg-gray-100 p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200 font-semibold">
                      {{t:demo.interactive.transitionEffects.bootstrap5.accordionItem1}}
                    </div>
                    <div class="bs-accordion-body bg-white p-4 text-gray-600 border-t border-gray-200">
                      {{t:demo.interactive.transitionEffects.bootstrap5.accordionContent1}}
                    </div>
                  </div>
                  <div class="bs-accordion-item border border-gray-300 rounded-lg overflow-hidden">
                    <div class="bs-accordion-header bg-gray-100 p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200 font-semibold">
                      {{t:demo.interactive.transitionEffects.bootstrap5.accordionItem2}}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Alert Transitions -->
              <div>
                <h4 class="font-semibold text-gray-700 mb-3">{{t:demo.interactive.transitionEffects.bootstrap5.alertTitle}}</h4>
                <div class="space-y-3">
                  <div class="bs-alert bs-alert-success bg-green-100 border-l-4 border-green-500 p-4 rounded-lg animate-slide-in-right">
                    <p class="font-semibold text-green-800">{{t:demo.interactive.transitionEffects.bootstrap5.alertSuccess}}</p>
                  </div>
                  <div class="bs-alert bs-alert-warning bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg animate-slide-in-right" style="animation-delay: 0.1s;">
                    <p class="font-semibold text-yellow-800">{{t:demo.interactive.transitionEffects.bootstrap5.alertWarning}}</p>
                  </div>
                  <div class="bs-alert bs-alert-info bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg animate-slide-in-right" style="animation-delay: 0.2s;">
                    <p class="font-semibold text-blue-800">{{t:demo.interactive.transitionEffects.bootstrap5.alertInfo}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.5s ease-out forwards;
          }
          .bs-modal-demo {
            animation: modalFadeIn 0.3s ease-out;
          }
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: translateY(-50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .bs-accordion-item:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transform: translateY(-2px);
            transition: all 0.3s ease;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.interactive.transition-effects.variants.glassmorphism.name',
        description: 'data.components.interactive.transition-effects.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-2xl p-8 relative overflow-hidden">
              <!-- Background Pattern -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle, #ffffff 2px, transparent 2px); background-size: 40px 40px;"></div>
              </div>

              <div class="relative z-10">
                <h3 class="font-bold text-2xl mb-2 text-white">
                  {{t:demo.interactive.transitionEffects.glassmorphism.title}}
                </h3>
                <p class="text-white/90 mb-8 text-sm">{{t:demo.interactive.transitionEffects.glassmorphism.subtitle}}</p>

                <!-- 3D Flip Cards -->
                <div class="mb-8">
                  <h4 class="font-semibold text-white mb-4">{{t:demo.interactive.transitionEffects.glassmorphism.flipTitle}}</h4>
                  <div class="grid grid-cols-2 gap-6">
                    <div class="glass-flip-card-container">
                      <div class="glass-flip-card">
                        <div class="glass-flip-card-front">
                          <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.flipHorizontal}}</p>
                        </div>
                        <div class="glass-flip-card-back">
                          <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.flipBackSide}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="glass-flip-card-container glass-flip-vertical">
                      <div class="glass-flip-card">
                        <div class="glass-flip-card-front">
                          <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.flipVertical}}</p>
                        </div>
                        <div class="glass-flip-card-back">
                          <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.flipBackSide}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 3D Rotate Effects -->
                <div class="mb-8">
                  <h4 class="font-semibold text-white mb-4">{{t:demo.interactive.transitionEffects.glassmorphism.rotateTitle}}</h4>
                  <div class="grid grid-cols-3 gap-4">
                    <a href="javascript:void(0)" class="glass-rotate-x block">
                      <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.rotateX}}</p>
                    </a>
                    <a href="javascript:void(0)" class="glass-rotate-y block">
                      <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.rotateY}}</p>
                    </a>
                    <a href="javascript:void(0)" class="glass-rotate-z block">
                      <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.rotateZ}}</p>
                    </a>
                  </div>
                </div>

                <!-- 3D Perspective Cards -->
                <div>
                  <h4 class="font-semibold text-white mb-4">{{t:demo.interactive.transitionEffects.glassmorphism.perspectiveTitle}}</h4>
                  <div class="grid grid-cols-2 gap-6">
                    <a href="javascript:void(0)" class="glass-perspective-card">
                      <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.perspectiveLeft}}</p>
                    </a>
                    <a href="javascript:void(0)" class="glass-perspective-card glass-perspective-right">
                      <p class="font-medium text-white">{{t:demo.interactive.transitionEffects.glassmorphism.perspectiveRight}}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .glass-flip-card-container {
            perspective: 1000px;
            height: 150px;
            cursor: pointer;
          }
          .glass-flip-card {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
          }
          .glass-flip-card-container:hover .glass-flip-card {
            transform: rotateY(180deg);
          }
          .glass-flip-vertical:hover .glass-flip-card {
            transform: rotateX(180deg);
          }
          .glass-flip-card-front,
          .glass-flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-center;
            padding: 1.5rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
          }
          .glass-flip-card-back {
            transform: rotateY(180deg);
            background: rgba(255, 255, 255, 0.25);
          }
          .glass-flip-vertical .glass-flip-card-back {
            transform: rotateX(180deg);
          }

          .glass-rotate-x,
          .glass-rotate-y,
          .glass-rotate-z {
            padding: 2rem 1.5rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            text-align: center;
            transition: all 0.6s ease;
            cursor: pointer;
          }
          .glass-rotate-x:hover {
            transform: rotateX(360deg);
          }
          .glass-rotate-y:hover {
            transform: rotateY(360deg);
          }
          .glass-rotate-z:hover {
            transform: rotate(360deg) scale(1.1);
          }

          .glass-perspective-card {
            padding: 3rem 2rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            text-align: center;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            transform-style: preserve-3d;
          }
          .glass-perspective-card:hover {
            transform: perspective(600px) rotateY(-15deg) translateX(-10px);
            box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
          }
          .glass-perspective-right:hover {
            transform: perspective(600px) rotateY(15deg) translateX(10px);
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.interactive.transition-effects.variants.neumorphism.name',
        description: 'data.components.interactive.transition-effects.variants.neumorphism.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-8" style="box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;">
              <h3 class="font-semibold text-2xl mb-2 text-gray-800">
                {{t:demo.interactive.transitionEffects.neumorphism.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.interactive.transitionEffects.neumorphism.subtitle}}</p>

              <!-- Bounce Effects -->
              <div class="mb-8">
                <h4 class="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">{{t:demo.interactive.transitionEffects.neumorphism.bounceTitle}}</h4>
                <div class="grid grid-cols-3 gap-6">
                  <a href="javascript:void(0)" class="neu-bounce block">
                    <p class="font-medium text-gray-700">{{t:demo.interactive.transitionEffects.neumorphism.bounce}}</p>
                  </a>
                  <a href="javascript:void(0)" class="neu-bounce-in block">
                    <p class="font-medium text-gray-700">{{t:demo.interactive.transitionEffects.neumorphism.bounceIn}}</p>
                  </a>
                  <a href="javascript:void(0)" class="neu-bounce-scale block">
                    <p class="font-medium text-gray-700">{{t:demo.interactive.transitionEffects.neumorphism.bounceScale}}</p>
                  </a>
                </div>
              </div>

              <!-- Elastic Effects -->
              <div class="mb-8">
                <h4 class="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">{{t:demo.interactive.transitionEffects.neumorphism.elasticTitle}}</h4>
                <div class="grid grid-cols-2 gap-6">
                  <a href="javascript:void(0)" class="neu-elastic block">
                    <p class="font-medium text-gray-700">{{t:demo.interactive.transitionEffects.neumorphism.elastic}}</p>
                  </a>
                  <a href="javascript:void(0)" class="neu-elastic-scale block">
                    <p class="font-medium text-gray-700">{{t:demo.interactive.transitionEffects.neumorphism.elasticScale}}</p>
                  </a>
                </div>
              </div>

              <!-- Wave & Wobble Effects -->
              <div>
                <h4 class="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">{{t:demo.interactive.transitionEffects.neumorphism.otherTitle}}</h4>
                <div class="grid grid-cols-3 gap-6">
                  <a href="javascript:void(0)" class="neu-wave block">
                    <p class="font-medium text-gray-700">{{t:demo.interactive.transitionEffects.neumorphism.wave}}</p>
                  </a>
                  <a href="javascript:void(0)" class="neu-wobble block">
                    <p class="font-medium text-gray-700">{{t:demo.interactive.transitionEffects.neumorphism.wobble}}</p>
                  </a>
                  <a href="javascript:void(0)" class="neu-pulse block">
                    <p class="font-medium text-gray-700">{{t:demo.interactive.transitionEffects.neumorphism.pulse}}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .neu-bounce,
          .neu-bounce-in,
          .neu-bounce-scale,
          .neu-elastic,
          .neu-elastic-scale,
          .neu-wave,
          .neu-wobble,
          .neu-pulse {
            padding: 2rem 1.5rem;
            border-radius: 1rem;
            background: #e0e5ec;
            box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .neu-bounce:hover {
            animation: bounce 0.6s ease infinite;
          }

          @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
          }
          .neu-bounce-in:hover {
            animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .neu-bounce-scale:hover {
            animation: bounce 0.5s ease, scaleUp 0.5s ease;
          }
          @keyframes scaleUp {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }

          .neu-elastic:hover {
            transform: scale(1.1);
            transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .neu-elastic-scale:hover {
            animation: elasticScale 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          @keyframes elasticScale {
            0% { transform: scale(1); }
            25% { transform: scale(1.1, 0.9); }
            50% { transform: scale(0.9, 1.1); }
            75% { transform: scale(1.05, 0.95); }
            100% { transform: scale(1); }
          }

          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            75% { transform: rotate(-5deg); }
          }
          .neu-wave:hover {
            animation: wave 0.5s ease infinite;
          }

          @keyframes wobble {
            0%, 100% { transform: translateX(0); }
            15% { transform: translateX(-10px) rotate(-5deg); }
            30% { transform: translateX(10px) rotate(3deg); }
            45% { transform: translateX(-10px) rotate(-3deg); }
            60% { transform: translateX(10px) rotate(2deg); }
            75% { transform: translateX(-5px) rotate(-1deg); }
          }
          .neu-wobble:hover {
            animation: wobble 0.8s ease;
          }

          .neu-pulse:hover {
            animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
            }
            50% {
              opacity: 0.7;
              box-shadow: 12px 12px 24px #bebebe, -12px -12px 24px #ffffff;
            }
          }
        `
      },
      {
        id: 'cyberpunk',
        name: 'data.components.interactive.transition-effects.variants.cyberpunk.name',
        description: 'data.components.interactive.transition-effects.variants.cyberpunk.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gray-950 rounded-2xl shadow-2xl p-8 overflow-hidden relative">
              <!-- Cyberpunk Grid Background -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute inset-0" style="background-image: linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px); background-size: 50px 50px;"></div>
              </div>

              <div class="relative z-10">
                <h3 class="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 cyber-title">
                  {{t:demo.interactive.transitionEffects.cyberpunk.title}}
                </h3>
                <p class="text-gray-400 mb-8 text-sm">{{t:demo.interactive.transitionEffects.cyberpunk.subtitle}}</p>

                <!-- Glitch Effects -->
                <div class="mb-8">
                  <h4 class="font-semibold text-cyan-400 mb-4 text-sm uppercase tracking-wide">{{t:demo.interactive.transitionEffects.cyberpunk.glitchTitle}}</h4>
                  <div class="grid grid-cols-2 gap-6">
                    <a href="javascript:void(0)" class="cyber-glitch-card block">
                      <p class="font-bold text-white cyber-glitch-text">{{t:demo.interactive.transitionEffects.cyberpunk.glitchText}}</p>
                    </a>
                    <a href="javascript:void(0)" class="cyber-glitch-card block">
                      <p class="font-bold text-white cyber-rgb-split">{{t:demo.interactive.transitionEffects.cyberpunk.rgbSplit}}</p>
                    </a>
                  </div>
                </div>

                <!-- Neon Pulse Effects -->
                <div class="mb-8">
                  <h4 class="font-semibold text-cyan-400 mb-4 text-sm uppercase tracking-wide">{{t:demo.interactive.transitionEffects.cyberpunk.neonTitle}}</h4>
                  <div class="grid grid-cols-3 gap-4">
                    <a href="javascript:void(0)" class="cyber-neon-pulse block">
                      <p class="font-bold text-cyan-400">{{t:demo.interactive.transitionEffects.cyberpunk.neonPulse}}</p>
                    </a>
                    <a href="javascript:void(0)" class="cyber-neon-glow block">
                      <p class="font-bold text-purple-400">{{t:demo.interactive.transitionEffects.cyberpunk.neonGlow}}</p>
                    </a>
                    <a href="javascript:void(0)" class="cyber-neon-flicker block">
                      <p class="font-bold text-pink-400">{{t:demo.interactive.transitionEffects.cyberpunk.neonFlicker}}</p>
                    </a>
                  </div>
                </div>

                <!-- Matrix & Scan Effects -->
                <div>
                  <h4 class="font-semibold text-cyan-400 mb-4 text-sm uppercase tracking-wide">{{t:demo.interactive.transitionEffects.cyberpunk.matrixTitle}}</h4>
                  <div class="grid grid-cols-2 gap-6">
                    <a href="javascript:void(0)" class="cyber-matrix-card block">
                      <p class="font-mono font-bold text-green-400">{{t:demo.interactive.transitionEffects.cyberpunk.dataStream}}</p>
                    </a>
                    <a href="javascript:void(0)" class="cyber-scan-card block">
                      <p class="font-mono font-bold text-cyan-400">{{t:demo.interactive.transitionEffects.cyberpunk.scanLine}}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .cyber-glitch-card,
          .cyber-neon-pulse,
          .cyber-neon-glow,
          .cyber-neon-flicker,
          .cyber-matrix-card,
          .cyber-scan-card {
            padding: 2rem 1.5rem;
            border-radius: 0.75rem;
            background: rgba(6, 182, 212, 0.1);
            border: 2px solid rgba(6, 182, 212, 0.3);
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          .cyber-glitch-card:hover .cyber-glitch-text {
            animation: glitch 0.3s infinite;
          }
          .cyber-glitch-card:hover {
            background: rgba(6, 182, 212, 0.2);
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
          }

          @keyframes rgbSplit {
            0%, 100% { text-shadow: 0 0 0; }
            25% { text-shadow: -2px 0 0 red, 2px 0 0 blue; }
            50% { text-shadow: 2px 0 0 red, -2px 0 0 blue; }
            75% { text-shadow: -2px 0 0 blue, 2px 0 0 red; }
          }
          .cyber-glitch-card:hover .cyber-rgb-split {
            animation: rgbSplit 0.3s infinite;
          }

          .cyber-neon-pulse {
            background: rgba(6, 182, 212, 0.1);
            border-color: rgba(6, 182, 212, 0.5);
          }
          .cyber-neon-pulse:hover {
            animation: neonPulse 1.5s ease-in-out infinite;
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.8), inset 0 0 20px rgba(6, 182, 212, 0.2);
          }
          @keyframes neonPulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(6, 182, 212, 0.8), inset 0 0 20px rgba(6, 182, 212, 0.2);
              border-color: rgba(6, 182, 212, 0.8);
            }
            50% {
              box-shadow: 0 0 40px rgba(6, 182, 212, 1), inset 0 0 30px rgba(6, 182, 212, 0.4);
              border-color: rgba(6, 182, 212, 1);
            }
          }

          .cyber-neon-glow {
            background: rgba(168, 85, 247, 0.1);
            border-color: rgba(168, 85, 247, 0.5);
          }
          .cyber-neon-glow:hover {
            background: rgba(168, 85, 247, 0.2);
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.8), inset 0 0 15px rgba(168, 85, 247, 0.3);
            border-color: rgba(168, 85, 247, 1);
          }

          .cyber-neon-flicker {
            background: rgba(236, 72, 153, 0.1);
            border-color: rgba(236, 72, 153, 0.5);
          }
          .cyber-neon-flicker:hover {
            animation: flicker 0.15s infinite;
          }
          @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }

          .cyber-matrix-card {
            background: rgba(34, 197, 94, 0.1);
            border-color: rgba(34, 197, 94, 0.3);
            position: relative;
            overflow: hidden;
          }
          .cyber-matrix-card::before {
            content: '';
            position: absolute;
            top: -100%;
            left: 0;
            right: 0;
            height: 100%;
            background: linear-gradient(to bottom, transparent, rgba(34, 197, 94, 0.3), transparent);
            animation: matrixRain 2s linear infinite;
          }
          .cyber-matrix-card:hover {
            box-shadow: 0 0 25px rgba(34, 197, 94, 0.6);
          }
          @keyframes matrixRain {
            0% { top: -100%; }
            100% { top: 200%; }
          }

          .cyber-scan-card {
            position: relative;
            overflow: hidden;
          }
          .cyber-scan-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: rgba(6, 182, 212, 0.8);
            box-shadow: 0 0 10px rgba(6, 182, 212, 1);
            animation: scanLine 2s linear infinite;
          }
          .cyber-scan-card:hover {
            box-shadow: 0 0 25px rgba(6, 182, 212, 0.6);
          }
          @keyframes scanLine {
            0% { top: 0; }
            100% { top: 100%; }
          }

          .cyber-title {
            animation: titleGlow 2s ease-in-out infinite;
          }
          @keyframes titleGlow {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(6, 182, 212, 0.5)); }
            50% { filter: drop-shadow(0 0 15px rgba(6, 182, 212, 0.9)); }
          }
        `
      }
    ]
  },
  {
    id: 'scroll-animations',
    title: 'data.components.interactive.scroll-animations.title',
    description: 'data.components.interactive.scroll-animations.description',
    variants: [
      // 主要展示：極简主義純視覺化演示
      {
        id: 'minimal-demo',
        name: 'data.components.interactive.scroll-animations.variants.minimal-demo.name',
        description: 'data.components.interactive.scroll-animations.variants.minimal-demo.description',
        demoHTML: `
          <div class="relative w-full h-[450px] bg-white flex items-center justify-center overflow-hidden">

            <!-- 中央演示区域 -->
            <div class="relative w-full max-w-md h-80 flex flex-col items-center justify-center">

              <!-- 从上方滑入的方塊 + 箭頭 -->
              <div class="absolute top-0 flex flex-col items-center gap-3">
                <div class="w-2 h-2 border-r border-t border-gray-400 transform rotate-[-135deg]"></div>
                <div class="w-20 h-20 bg-black rounded shadow-lg" style="animation: slideFromTop 1s ease-out forwards;"></div>
              </div>

              <!-- 中央区域 - 左右方塊 -->
              <div class="flex items-center justify-between w-full px-8">
                <!-- 从左側滑入的方塊 + 箭頭 -->
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 border-r border-t border-gray-400 transform rotate-[-45deg]"></div>
                  <div class="w-20 h-20 bg-black rounded shadow-lg" style="animation: slideFromLeft 1s 0.3s ease-out forwards; opacity: 0;"></div>
                </div>

                <!-- 从右側滑入的方塊 + 箭頭 -->
                <div class="flex items-center gap-3">
                  <div class="w-20 h-20 bg-black rounded shadow-lg" style="animation: slideFromRight 1s 0.6s ease-out forwards; opacity: 0;"></div>
                  <div class="w-2 h-2 border-r border-t border-gray-400 transform rotate-[135deg]"></div>
                </div>
              </div>

              <!-- 从下方滑入的方塊 + 箭頭 -->
              <div class="absolute bottom-0 flex flex-col items-center gap-3">
                <div class="w-20 h-20 bg-black rounded shadow-lg" style="animation: slideFromBottom 1s 0.9s ease-out forwards; opacity: 0;"></div>
                <div class="w-2 h-2 border-r border-t border-gray-400 transform rotate-[45deg]"></div>
              </div>

            </div>

            <!-- 底部進度指示點 -->
            <div class="absolute bottom-8 flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-black" style="animation: dotPulse 1s ease-out forwards;"></div>
          <div class="w-2 h-2 rounded-full bg-gray-300" style="animation: dotPulse 1s 0.3s ease-out forwards;"></div>
          <div class="w-2 h-2 rounded-full bg-gray-300" style="animation: dotPulse 1s 0.6s ease-out forwards;"></div>
          <div class="w-2 h-2 rounded-full bg-gray-300" style="animation: dotPulse 1s 0.9s ease-out forwards;"></div>
        </div>

        <!-- 極淡网格背景 -->
        <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 20px 20px;"></div>

      </div>
    `,
    customStyles: `
      @keyframes slideFromTop {
        from {
          opacity: 0;
          transform: translateY(-100px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideFromLeft {
        from {
          opacity: 0;
          transform: translateX(-100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideFromRight {
        from {
          opacity: 0;
          transform: translateX(100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideFromBottom {
        from {
          opacity: 0;
          transform: translateY(100px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes dotPulse {
        0% {
          background: #E5E7EB;
          transform: scale(1);
        }
        50% {
          background: #000000;
          transform: scale(1.3);
        }
        100% {
          background: #000000;
          transform: scale(1);
        }
      }
    `
    },

    // 變体 2：視差滾動卡片 (來自原 scrollAnimationsData)
    {
      id: 'parallax-cards',
      name: 'data.components.interactive.scroll-animations.variants.parallax-cards.name',
      description: 'data.components.interactive.scroll-animations.variants.parallax-cards.description',
      demoHTML: `
        <div class="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <!-- Background Layer (Slow) -->
          <div class="parallax-bg absolute inset-0 opacity-30">
            <div class="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <!-- Content Container -->
          <div class="relative z-10 container mx-auto px-6 py-20 space-y-32">
            <h2 class="text-5xl font-bold text-white text-center mb-20">
              Parallax Scroll Experience
            </h2>

            <!-- Card 1 (Fast Layer) -->
            <div class="parallax-card parallax-fast">
              <div class="glass-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <h3 class="text-2xl font-bold text-white">Fast Layer</h3>
                </div>
                <p class="text-white/80 leading-relaxed">
                  This card moves faster as you scroll, creating a dynamic parallax effect.
                  The glassmorphism design adds modern aesthetics with semi-transparent backgrounds.
                </p>
              </div>
            </div>

            <!-- Card 2 (Medium Layer) -->
            <div class="parallax-card parallax-medium">
              <div class="glass-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-2xl">
                    🌊
                  </div>
                  <h3 class="text-2xl font-bold text-white">Medium Layer</h3>
                </div>
                <p class="text-white/80 leading-relaxed">
                  This card moves at medium speed, positioned between the fast and slow layers.
                  The layered depth creates an immersive 3D scrolling experience.
                </p>
              </div>
            </div>

            <!-- Card 3 (Slow Layer) -->
            <div class="parallax-card parallax-slow">
              <div class="glass-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-2xl">
                    🐢
                  </div>
                  <h3 class="text-2xl font-bold text-white">Slow Layer</h3>
                </div>
                <p class="text-white/80 leading-relaxed">
                  This card moves slowly, staying closer to the background. The parallax effect
                  creates natural depth perception similar to real-world vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        /* Parallax Scroll Animation */
        .parallax-card {
          opacity: 0;
          transform: translateY(100px);
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Different speeds for parallax layers */
        .parallax-fast {
          animation-delay: 0.1s;
        }

        .parallax-medium {
          animation-delay: 0.2s;
        }

        .parallax-slow {
          animation-delay: 0.3s;
        }

        /* Smooth scrolling hint */
        .parallax-card:nth-child(even) {
          transform: translateX(-50px);
        }

        .parallax-card:nth-child(odd) {
          transform: translateX(50px);
        }
      `
    },

    // 變体 3：揭示動画 (简化版來自原 scrollAnimationsData)
    {
      id: 'reveal-scroll',
      name: 'data.components.interactive.scroll-animations.variants.reveal-scroll.name',  
      description: 'data.components.interactive.scroll-animations.variants.reveal-scroll.description',
      demoHTML: `
        <div class="w-full min-h-screen bg-gray-50 py-20 px-6">
          <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="reveal-element text-center mb-16">
              <h2 class="text-5xl font-bold text-gray-900 mb-4">
                Scroll to Reveal
              </h2>
              <p class="text-gray-600 text-lg">
                Watch as content gracefully appears while you scroll down
              </p>
            </div>

            <!-- Progress Bar -->
            <div class="reveal-element w-full h-2 bg-gray-200 rounded-full mb-16">
              <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: 60%;"></div>
            </div>

            <!-- Content Blocks -->
            <div class="space-y-8">
              <!-- Block 1 -->
              <div class="reveal-element bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">📱</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Mobile-First Design
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      Our design approach prioritizes mobile experiences, ensuring seamless
                      functionality across all devices with responsive layouts.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Block 2 -->
              <div class="reveal-element bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">⚡</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Lightning Fast
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      Optimized performance ensures instant loading times and smooth animations
                      for the best user experience possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        /* Reveal on Scroll Animation */
        .reveal-element {
          opacity: 0;
          transform: translateY(50px);
          animation: revealUp 0.8s ease-out forwards;
        }

        @keyframes revealUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Staggered delays */
        .reveal-element:nth-child(1) { animation-delay: 0.1s; }
        .reveal-element:nth-child(2) { animation-delay: 0.2s; }
        .reveal-element:nth-child(3) { animation-delay: 0.3s; }
        .reveal-element:nth-child(4) { animation-delay: 0.4s; }
        .reveal-element:nth-child(5) { animation-delay: 0.5s; }
      `
    }
    ]
  },
  {
    id: 'micro-interactions',
    title: 'data.components.interactive.micro-interactions.title',
    description: 'data.components.interactive.micro-interactions.description',
    variants: [
      {
        id: 'button-ripple',
        name: 'data.components.interactive.micro-interactions.variants.buttonRipple.name',
        description: 'data.components.interactive.micro-interactions.variants.buttonRipple.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl border border-purple-100 p-8">
              <h3 class="font-bold text-2xl mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {{t:demo.microInteractions.buttonRipple.title}}
              </h3>
              <p class="text-gray-600 mb-6 text-sm">{{t:demo.microInteractions.buttonRipple.subtitle}}</p>

              <!-- Material Design Ripple Buttons -->
              <div class="mb-8">
                <h4 class="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">{{t:demo.microInteractions.buttonRipple.materialStyle}}</h4>
                <div class="flex flex-wrap gap-3">
                  <button class="ripple-btn relative px-6 py-3 bg-blue-600 text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300 active:scale-95">
                    {{t:demo.microInteractions.buttonRipple.primary}}
                  </button>
                  <button class="ripple-btn relative px-6 py-3 bg-green-600 text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:bg-green-700 transition-all duration-300 active:scale-95">
                    {{t:demo.microInteractions.buttonRipple.success}}
                  </button>
                  <button class="ripple-btn relative px-6 py-3 bg-red-600 text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:bg-red-700 transition-all duration-300 active:scale-95">
                    {{t:demo.microInteractions.buttonRipple.danger}}
                  </button>
                </div>
              </div>

              <!-- Glassmorphism + Fluent Buttons -->
              <div class="mb-8">
                <h4 class="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">{{t:demo.microInteractions.buttonRipple.glassStyle}}</h4>
                <div class="flex flex-wrap gap-3">
                  <button class="glass-btn relative px-6 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl text-gray-800 shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 active:scale-95">
                    {{t:demo.microInteractions.buttonRipple.glassButton}}
                  </button>
                  <button class="glass-btn relative px-6 py-3 bg-purple-500/20 backdrop-blur-md border border-purple-300/40 rounded-xl text-purple-900 shadow-lg hover:bg-purple-500/30 hover:scale-105 transition-all duration-300 active:scale-95">
                    {{t:demo.microInteractions.buttonRipple.fluentButton}}
                  </button>
                </div>
              </div>

              <!-- iOS Style Loading Button -->
              <div>
                <h4 class="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">{{t:demo.microInteractions.buttonRipple.iosStyle}}</h4>
                <button class="ios-loading-btn group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95 overflow-hidden">
                  <span class="relative z-10 flex items-center gap-2">
                    <svg class="w-5 h-5 animate-spin hidden group-active:inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    {{t:demo.microInteractions.buttonRipple.loadingButton}}
                  </span>
                  <div class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes ripple {
            0% {
              transform: scale(0);
              opacity: 0.6;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          .ripple-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }
          .ripple-btn:active::before {
            width: 300px;
            height: 300px;
            opacity: 0;
            transition: width 0.6s, height 0.6s, opacity 0.6s;
          }
        `
      },
      {
        id: 'toast-stack',
        name: 'data.components.interactive.micro-interactions.variants.toastStack.name',
        description: 'data.components.interactive.micro-interactions.variants.toastStack.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gray-900 rounded-2xl shadow-2xl p-8 min-h-[500px] relative overflow-hidden">
              <!-- Background pattern -->
              <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0" style="background-image: radial-gradient(circle, #ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
              </div>

              <div class="relative z-10">
                <h3 class="font-bold text-2xl mb-2 text-white">
                  {{t:demo.microInteractions.toastStack.title}}
                </h3>
                <p class="text-gray-400 mb-6 text-sm">{{t:demo.microInteractions.toastStack.subtitle}}</p>

                <!-- Toast Container -->
                <div class="space-y-3">
                  <!-- Success Toast (Glassmorphism) -->
                  <div class="toast-item animate-slide-in-right bg-green-500/20 backdrop-blur-md border border-green-400/50 rounded-xl p-4 shadow-xl hover:scale-105 transition-transform duration-300">
                    <div class="flex items-start gap-3">
                      <div class="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="font-semibold text-green-100">{{t:demo.microInteractions.toastStack.successTitle}}</p>
                        <p class="text-sm text-green-200/80">{{t:demo.microInteractions.toastStack.successMsg}}</p>
                      </div>
                      <button class="text-green-300 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Warning Toast (Bootstrap Style) -->
                  <div class="toast-item animate-slide-in-right bg-yellow-500/20 backdrop-blur-md border border-yellow-400/50 rounded-xl p-4 shadow-xl hover:scale-105 transition-transform duration-300" style="animation-delay: 0.1s;">
                    <div class="flex items-start gap-3">
                      <div class="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="font-semibold text-yellow-100">{{t:demo.microInteractions.toastStack.warningTitle}}</p>
                        <p class="text-sm text-yellow-200/80">{{t:demo.microInteractions.toastStack.warningMsg}}</p>
                      </div>
                      <button class="text-yellow-300 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Error Toast (macOS Style) -->
                  <div class="toast-item animate-slide-in-right bg-red-500/20 backdrop-blur-md border border-red-400/50 rounded-xl p-4 shadow-xl hover:scale-105 transition-transform duration-300" style="animation-delay: 0.2s;">
                    <div class="flex items-start gap-3">
                      <div class="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="font-semibold text-red-100">{{t:demo.microInteractions.toastStack.errorTitle}}</p>
                        <p class="text-sm text-red-200/80">{{t:demo.microInteractions.toastStack.errorMsg}}</p>
                      </div>
                      <button class="text-red-300 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Info Toast (Chakra UI Style) -->
                  <div class="toast-item animate-slide-in-right bg-blue-500/20 backdrop-blur-md border border-blue-400/50 rounded-xl p-4 shadow-xl hover:scale-105 transition-transform duration-300" style="animation-delay: 0.3s;">
                    <div class="flex items-start gap-3">
                      <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="font-semibold text-blue-100">{{t:demo.microInteractions.toastStack.infoTitle}}</p>
                        <p class="text-sm text-blue-200/80">{{t:demo.microInteractions.toastStack.infoMsg}}</p>
                      </div>
                      <button class="text-blue-300 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes slide-in-right {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.5s ease-out forwards;
          }
          .toast-item {
            animation-fill-mode: both;
          }
        `
      },
      {
        id: 'toggle-showcase',
        name: 'data.components.interactive.micro-interactions.variants.toggleShowcase.name',
        description: 'data.components.interactive.micro-interactions.variants.toggleShowcase.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl p-8">
              <h3 class="font-bold text-2xl mb-2 text-gray-800">
                {{t:demo.microInteractions.toggleShowcase.title}}
              </h3>
              <p class="text-gray-600 mb-8 text-sm">{{t:demo.microInteractions.toggleShowcase.subtitle}}</p>

              <div class="space-y-8">
                <!-- iOS Style Toggle -->
                <div class="bg-white rounded-xl p-6 shadow-lg">
                  <h4 class="font-semibold text-gray-700 mb-4">{{t:demo.microInteractions.toggleShowcase.iosStyle}}</h4>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-700">{{t:demo.microInteractions.toggleShowcase.darkMode}}</span>
                    <label class="relative inline-block w-14 h-8 cursor-pointer">
                      <input type="checkbox" class="sr-only peer" checked />
                      <div class="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors duration-300 ease-in-out peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-transform after:duration-300 after:ease-in-out after:shadow-md"></div>
                    </label>
                  </div>
                </div>

                <!-- Neumorphism Toggle -->
                <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl p-6 shadow-lg">
                  <h4 class="font-semibold text-gray-700 mb-4">{{t:demo.microInteractions.toggleShowcase.neumorphicStyle}}</h4>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-700">{{t:demo.microInteractions.toggleShowcase.notifications}}</span>
                    <label class="relative inline-block w-16 h-9 cursor-pointer">
                      <input type="checkbox" class="sr-only peer" />
                      <div class="w-16 h-9 bg-gray-200 rounded-full peer shadow-inner peer-checked:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] transition-all duration-300"></div>
                      <div class="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.2),-2px_-2px_5px_rgba(255,255,255,0.7)] peer-checked:translate-x-7 peer-checked:bg-blue-500 transition-all duration-300"></div>
                    </label>
                  </div>
                </div>

                <!-- Skeuomorphism 3D Toggle -->
                <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl">
                  <h4 class="font-semibold text-white mb-4">{{t:demo.microInteractions.toggleShowcase.skeuoStyle}}</h4>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-300">{{t:demo.microInteractions.toggleShowcase.autoSave}}</span>
                    <label class="relative inline-block w-20 h-10 cursor-pointer">
                      <input type="checkbox" class="sr-only peer" checked />
                      <div class="w-20 h-10 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full peer border-2 border-gray-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] peer-checked:bg-gradient-to-b peer-checked:from-green-400 peer-checked:to-green-600 transition-all duration-500"></div>
                      <div class="absolute top-1 left-1 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] peer-checked:translate-x-10 peer-checked:shadow-[0_4px_12px_rgba(34,197,94,0.6),inset_0_1px_2px_rgba(255,255,255,0.4)] transition-all duration-500 border border-gray-400"></div>
                    </label>
                  </div>
                </div>

                <!-- Material Design Toggle -->
                <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                  <h4 class="font-semibold text-gray-700 mb-4">{{t:demo.microInteractions.toggleShowcase.materialStyle}}</h4>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-700">{{t:demo.microInteractions.toggleShowcase.soundEffects}}</span>
                    <label class="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" class="sr-only peer" />
                      <div class="w-12 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:bg-purple-600 transition-all duration-300 ease-in-out"></div>
                      <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition-transform duration-300 ease-in-out"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: ``
      },
      {
        id: 'progress-ring',
        name: 'data.components.interactive.micro-interactions.variants.progressRing.name',
        description: 'data.components.interactive.micro-interactions.variants.progressRing.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-gray-950 rounded-2xl shadow-2xl p-8 overflow-hidden relative">
              <!-- Cyberpunk Grid Background -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute inset-0" style="background-image: linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px); background-size: 50px 50px;"></div>
              </div>

              <div class="relative z-10">
                <h3 class="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  {{t:demo.microInteractions.progressRing.title}}
                </h3>
                <p class="text-gray-400 mb-8 text-sm">{{t:demo.microInteractions.progressRing.subtitle}}</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Cyberpunk Circular Progress -->
                  <div class="flex flex-col items-center">
                    <div class="relative w-40 h-40">
                      <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(6, 182, 212, 0.1)" stroke-width="4" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient1)" stroke-width="4" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="70" class="progress-circle">
                          <animate attributeName="stroke-dashoffset" from="283" to="70" dur="2s" fill="freeze" />
                        </circle>
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-3xl font-bold text-cyan-400 neon-text">75%</div>
                          <div class="text-xs text-gray-500 uppercase tracking-wide mt-1">{{t:demo.microInteractions.progressRing.complete}}</div>
                        </div>
                      </div>
                    </div>
                    <p class="text-gray-400 mt-4 text-sm text-center">{{t:demo.microInteractions.progressRing.cyberpunkStyle}}</p>
                  </div>

                  <!-- Terminal Progress Bars -->
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between text-xs text-gray-400 mb-2">
                        <span>{{t:demo.microInteractions.progressRing.processing}}</span>
                        <span>80%</span>
                      </div>
                      <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-cyan-900/50">
                        <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full progress-bar-animate" style="width: 80%;"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between text-xs text-gray-400 mb-2">
                        <span>{{t:demo.microInteractions.progressRing.uploading}}</span>
                        <span>60%</span>
                      </div>
                      <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-purple-900/50">
                        <div class="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full progress-bar-animate" style="width: 60%; animation-delay: 0.2s;"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between text-xs text-gray-400 mb-2">
                        <span>{{t:demo.microInteractions.progressRing.analyzing}}</span>
                        <span>45%</span>
                      </div>
                      <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-green-900/50">
                        <div class="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full progress-bar-animate" style="width: 45%; animation-delay: 0.4s;"></div>
                      </div>
                    </div>

                    <!-- Step Progress -->
                    <div class="mt-6 pt-4 border-t border-gray-800">
                      <div class="flex items-center justify-between">
                        <div class="flex flex-col items-center relative flex-1">
                          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/50">
                            1
                          </div>
                          <span class="text-xs text-cyan-400 mt-2">{{t:demo.microInteractions.progressRing.step1}}</span>
                        </div>
                        <div class="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-2"></div>
                        <div class="flex flex-col items-center relative flex-1">
                          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/50 animate-pulse">
                            2
                          </div>
                          <span class="text-xs text-purple-400 mt-2">{{t:demo.microInteractions.progressRing.step2}}</span>
                        </div>
                        <div class="flex-1 h-1 bg-gray-700 mx-2"></div>
                        <div class="flex flex-col items-center relative flex-1">
                          <div class="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center text-gray-500 font-bold">
                            3
                          </div>
                          <span class="text-xs text-gray-600 mt-2">{{t:demo.microInteractions.progressRing.step3}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes progress-bar-fill {
            0% { width: 0; }
            100% { width: var(--target-width, 100%); }
          }
          .progress-bar-animate {
            animation: progress-bar-fill 1.5s ease-out forwards;
          }
          .neon-text {
            text-shadow: 0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.4);
          }
          .progress-circle {
            filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.8));
          }
        `
      },
      {
        id: 'input-focus',
        name: 'data.components.interactive.micro-interactions.variants.inputFocus.name',
        description: 'data.components.interactive.micro-interactions.variants.inputFocus.description',
        demoHTML: `
          <div class="w-full max-w-2xl mx-auto space-y-6 p-6">
            <div class="bg-white rounded-2xl shadow-2xl p-8 border-4 border-black">
              <h3 class="font-black text-3xl mb-2 text-black uppercase tracking-tight">
                {{t:demo.microInteractions.inputFocus.title}}
              </h3>
              <p class="text-gray-700 mb-8 font-mono text-sm">{{t:demo.microInteractions.inputFocus.subtitle}}</p>

              <div class="space-y-8">
                <!-- Brutalism Style Input -->
                <div class="group">
                  <label class="block font-black text-sm uppercase tracking-wide mb-2">{{t:demo.microInteractions.inputFocus.brutalLabel}}</label>
                  <input
                    type="text"
                    placeholder="{{t:demo.microInteractions.inputFocus.brutalPlaceholder}}"
                    class="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:border-red-500 focus:shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] transition-all duration-300 bg-yellow-200 focus:bg-white"
                  />
                </div>

                <!-- Material Design Floating Label -->
                <div class="relative group">
                  <input
                    type="email"
                    id="email-input"
                    class="peer w-full border-b-2 border-gray-400 p-4 text-lg focus:outline-none focus:border-purple-600 transition-all duration-300 placeholder-transparent"
                    placeholder="email@example.com"
                  />
                  <label
                    for="email-input"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-purple-600 peer-focus:text-sm peer-focus:font-semibold"
                  >
                    {{t:demo.microInteractions.inputFocus.emailLabel}}
                  </label>
                </div>

                <!-- Gradient Border Animation -->
                <div class="relative group">
                  <label class="block font-semibold text-sm mb-2 text-gray-700">{{t:demo.microInteractions.inputFocus.gradientLabel}}</label>
                  <div class="relative">
                    <input
                      type="password"
                      placeholder="{{t:demo.microInteractions.inputFocus.gradientPlaceholder}}"
                      class="w-full border-2 border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:border-transparent transition-all duration-300 relative z-10"
                    />
                    <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                  </div>
                </div>

                <!-- Neon Glow Input -->
                <div class="bg-gray-900 rounded-xl p-6 -mx-2">
                  <label class="block font-semibold text-sm mb-2 text-cyan-400">{{t:demo.microInteractions.inputFocus.neonLabel}}</label>
                  <input
                    type="text"
                    placeholder="{{t:demo.microInteractions.inputFocus.neonPlaceholder}}"
                    class="w-full bg-gray-800 border border-cyan-500/30 rounded-lg p-4 text-lg text-cyan-100 placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
                  />
                </div>

                <!-- Wave Animation Input -->
                <div class="relative group">
                  <label class="block font-semibold text-sm mb-2 text-gray-700">{{t:demo.microInteractions.inputFocus.waveLabel}}</label>
                  <div class="relative overflow-hidden rounded-lg">
                    <input
                      type="text"
                      placeholder="{{t:demo.microInteractions.inputFocus.wavePlaceholder}}"
                      class="w-full border-2 border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:border-blue-500 transition-all duration-300 relative z-10"
                    />
                    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes wave {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
          }
        `
      }
    ]
  },
  {
    id: 'tour-guide',
    title: 'data.components.interactive.tour-guide.title',
    description: 'data.components.interactive.tour-guide.description',
    variants: [
      {
        id: 'default',
        name: 'data.components.interactive.tour-guide.variants.default.name',
        description: 'data.components.interactive.tour-guide.variants.default.description',
demoHTML: `
          <div class="relative w-full h-[400px] bg-white flex items-center justify-center overflow-hidden">

            <!-- 進度條底部 -->
            <div class="absolute bottom-12 left-1/2 -translate-x-1/2 w-3/4 max-w-md h-px bg-gray-200">
              <div class="h-full bg-black transition-all duration-500" style="width: 66.66%; animation: progressGrow 2s ease-out;"></div>
            </div>

            <!-- 三步驟視覺化流程 -->
            <div class="flex items-center justify-center gap-20">

              <!-- Step 1: 完成狀態 -->
              <div class="flex flex-col items-center gap-8">
                <div class="relative" style="animation: fadeIn 0.6s ease-out;">
                  <!-- 完成圓點 -->
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                    <div class="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <!-- 步驟指示豎线 (1條) -->
                <div class="w-px h-20 bg-gray-800"></div>
              </div>

              <!-- 連接箭頭 1 -->
              <div class="relative w-16 h-px bg-gray-300" style="animation: fadeIn 0.8s ease-out;">
                <div class="absolute right-0 top-1/2 -translate-y-1/2 -mr-1">
                  <div class="w-2 h-2 border-r border-t border-gray-400 transform rotate-45"></div>
                </div>
                <!-- 流動點 -->
                <div class="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-gray-400 rounded-full" style="animation: flow 2s ease-in-out infinite;"></div>
              </div>

              <!-- Step 2: 活動狀態 -->
              <div class="flex flex-col items-center gap-8">
                <div class="relative" style="animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);">
                  <!-- 外圈脈衝動画 -->
                  <div class="absolute inset-0 -m-2 w-20 h-20 rounded-full border-2 border-black" style="animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
                  <!-- 主圓點 -->
                  <div class="relative w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-2xl">
                    <div class="w-8 h-8 rounded-full bg-white"></div>
                    <div class="absolute inset-0 rounded-full bg-black" style="animation: pulse 2s ease-in-out infinite;"></div>
                  </div>
                </div>
                <!-- 步驟指示豎线 (2條) -->
                <div class="flex gap-1.5">
                  <div class="w-px h-20 bg-black"></div>
                  <div class="w-px h-20 bg-black"></div>
                </div>
              </div>

              <!-- 連接箭頭 2 -->
              <div class="relative w-16 h-px bg-gray-200" style="animation: fadeIn 1s ease-out;">
                <div class="absolute right-0 top-1/2 -translate-y-1/2 -mr-1">
                  <div class="w-2 h-2 border-r border-t border-gray-300 transform rotate-45"></div>
                </div>
                <!-- 流動點（較慢） -->
                <div class="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-gray-300 rounded-full" style="animation: flow 3s ease-in-out infinite 0.5s;"></div>
              </div>

              <!-- Step 3: 等待狀態 -->
              <div class="flex flex-col items-center gap-8">
                <div class="relative" style="animation: fadeIn 1.2s ease-out;">
                  <!-- 等待圓圈 -->
                  <div class="w-10 h-10 rounded-full border-2 border-gray-300"></div>
                </div>
                <!-- 步驟指示豎线 (3條) -->
                <div class="flex gap-1.5">
                  <div class="w-px h-20 bg-gray-300"></div>
                  <div class="w-px h-20 bg-gray-300"></div>
                  <div class="w-px h-20 bg-gray-300"></div>
                </div>
              </div>
            </div>

            <!-- 方向指示器 (右下角) -->
            <div class="absolute right-8 bottom-8" style="animation: fadeIn 1.5s ease-out, float 3s ease-in-out infinite;">
              <div class="w-10 h-10 border border-black rounded-full flex items-center justify-center">
                <div class="w-3 h-3 border-r border-t border-black transform rotate-45"></div>
              </div>
            </div>

            <!-- 裝飾性网格背景 -->
            <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 20px 20px;"></div>

          </div>
        `,
        customStyles: `
          @keyframes ping {
            0% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.1;
            }
            100% {
              transform: scale(1.2);
              opacity: 0;
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }

          @keyframes flow {
            0% {
              left: 0;
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              left: 100%;
              opacity: 0;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes progressGrow {
            from {
              width: 0;
            }
            to {
              width: 66.66%;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `,
        reactComponent: TourGuideDemo
      }
    ]
  }

];