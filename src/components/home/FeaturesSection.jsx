import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import {
  Palette,
  FileText,
  Eye,
  Copy,
  Accessibility,
  Smartphone,
  X,
  Scissors
} from 'lucide-react';

/**
 * FeaturesSection - 功能特色區（Paper/Scrapbook 紙張剪貼風格）
 * 展示網站的 6 個核心功能
 * 使用 Washi Tape、Push Pin 裝飾、手寫字體風格
 */

// Washi Tape Component
const WashiTape = ({ color = "bg-rose-300", darkColor = "bg-rose-700", className = "" }) => (
  <div
    className={`absolute h-8 w-24 opacity-80 mix-blend-multiply dark:mix-blend-screen shadow-sm ${color} dark:${darkColor} ${className}`}
    style={{
      clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%, 1% 5%, 0% 10%, 2% 20%, 0% 30%, 1% 40%, 0% 50%, 2% 60%, 0% 70%, 1% 80%, 0% 90%)'
    }}
  />
);

// Push Pin Component
const PushPin = ({ color = "bg-red-500", className = "" }) => (
  <div className={`absolute w-4 h-4 rounded-full shadow-md dark:shadow-lg dark:shadow-black/40 z-20 ${color} border-2 border-white/30 dark:border-white/20 ${className}`}>
    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/40 dark:bg-white/30 rounded-full"></div>
    <div className="absolute top-3 left-1.5 w-1 h-3 bg-black/20 dark:bg-black/40 -z-10 transform skew-x-12"></div>
  </div>
);

// Paper Modal for feature details
const PaperModal = ({ feature, onClose, t }) => {
  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg bg-[#fdfbf7] dark:bg-[#2a2520] p-8 md:p-12 shadow-2xl transform rotate-1 transition-all"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
        <WashiTape color="bg-yellow-200" darkColor="bg-yellow-700" className="-top-4 left-1/2 -translate-x-1/2 rotate-2" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors group"
        >
          <X className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-red-500" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className={`p-4 rounded-full mb-6 ${feature.iconBg} dark:bg-gray-700/50 border-2 border-dashed border-gray-300 dark:border-gray-600 transform -rotate-3`}>
            <feature.icon className="w-10 h-10 text-gray-700 dark:text-gray-200" strokeWidth={1.5} />
          </div>

          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 font-handwriting mb-4 relative inline-block">
            {t(`home.features.${feature.titleKey}`)}
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-300 dark:bg-yellow-600 opacity-60 transform -skew-x-12"></span>
          </h3>

          <p className="text-lg text-gray-600 dark:text-gray-300 font-handwriting leading-relaxed mb-6">
            {t(`home.features.${feature.descKey}`)}
          </p>

          <div className="w-full bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-600 shadow-inner rounded-sm">
            <h4 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 font-sans mb-2">
              {t('home.features.techSpecs') || 'Technical Specs'}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
              {t('home.features.techSpecsDesc') || 'This component is fully responsive and adheres to the latest WCAG standards.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-8 px-6 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 font-handwriting text-lg rounded-sm hover:bg-gray-700 dark:hover:bg-gray-300 hover:shadow-lg transition-all transform hover:-rotate-1"
          >
            {t('common.gotIt') || 'Got it, thanks!'}
          </button>
        </div>
      </div>
    </div>
  );
};

export function FeaturesSection() {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: Palette,
      color: "#fff9c4", // Pale Yellow (light)
      darkColor: "#3d3520", // Dark warm yellow
      rotate: "rotate-1",
      tapeColor: "bg-rose-300",
      tapeDarkColor: "bg-rose-700",
      tapePos: "-top-3 left-10 -rotate-2",
      pinColor: "bg-red-500",
      iconBg: "bg-yellow-50",
      titleKey: 'styles',
      descKey: 'stylesDesc'
    },
    {
      id: 2,
      icon: FileText,
      color: "#f8bbd0", // Pale Pink
      darkColor: "#3d2035", // Dark warm pink
      rotate: "-rotate-2",
      tapeColor: "bg-blue-300",
      tapeDarkColor: "bg-blue-700",
      tapePos: "-top-3 right-10 rotate-3",
      pinColor: "bg-blue-500",
      iconBg: "bg-pink-50",
      titleKey: 'prompts',
      descKey: 'promptsDesc'
    },
    {
      id: 3,
      icon: Eye,
      color: "#bbdefb", // Pale Blue
      darkColor: "#1e3a4f", // Dark warm blue
      rotate: "rotate-2",
      tapeColor: "bg-yellow-300",
      tapeDarkColor: "bg-yellow-700",
      tapePos: "-top-4 left-1/2 -translate-x-1/2",
      pinColor: "bg-yellow-500",
      iconBg: "bg-blue-50",
      titleKey: 'preview',
      descKey: 'previewDesc'
    },
    {
      id: 4,
      icon: Copy,
      color: "#e1bee7", // Pale Purple
      darkColor: "#2d2035", // Dark warm purple
      rotate: "-rotate-1",
      tapeColor: "bg-green-300",
      tapeDarkColor: "bg-green-700",
      tapePos: "-top-3 right-8 -rotate-6",
      pinColor: "bg-purple-500",
      iconBg: "bg-purple-50",
      titleKey: 'copy',
      descKey: 'copyDesc'
    },
    {
      id: 5,
      icon: Accessibility,
      color: "#c8e6c9", // Pale Green
      darkColor: "#1e2d20", // Dark warm green
      rotate: "rotate-3",
      tapeColor: "bg-orange-300",
      tapeDarkColor: "bg-orange-700",
      tapePos: "-top-3 left-6 rotate-12",
      pinColor: "bg-green-600",
      iconBg: "bg-green-50",
      titleKey: 'accessibility',
      descKey: 'accessibilityDesc'
    },
    {
      id: 6,
      icon: Smartphone,
      color: "#ffe0b2", // Pale Orange
      darkColor: "#3d2d1a", // Dark warm orange
      rotate: "-rotate-3",
      tapeColor: "bg-purple-300",
      tapeDarkColor: "bg-purple-700",
      tapePos: "-top-4 right-1/2 translate-x-1/2 -rotate-3",
      pinColor: "bg-orange-600",
      iconBg: "bg-orange-50",
      titleKey: 'responsive',
      descKey: 'responsiveDesc'
    }
  ];

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-stone-100 dark:bg-[#1a1815] font-sans selection:bg-yellow-200 dark:selection:bg-yellow-800 py-20 px-6">
      {/* Background Texture (Dot Grid) */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      {/* Decorative Background Scribbles */}
      <div className="absolute top-20 left-10 opacity-5 dark:opacity-[0.02] pointer-events-none rotate-12 hidden lg:block">
        <Scissors size={200} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl text-gray-800 dark:text-gray-100 font-marker mb-6 transform -rotate-2">
              {t('home.features.title')}
            </h2>
            {/* Underline Scribble */}
            <svg className="absolute -bottom-4 left-0 w-full h-6 text-rose-400 dark:text-rose-600 opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00025 6.99999C48.5529 1.76106 122.365 -4.71714 197.989 5.56708" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-handwriting max-w-2xl mx-auto mt-6 leading-relaxed bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-sm shadow-sm border border-gray-100 dark:border-gray-700 transform rotate-1">
            {t('home.features.subtitle')}
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-20 pb-24 border-b-2 border-dashed border-gray-300/50 dark:border-gray-700/50">
          {features.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedFeature(item)}
              className={`
                group relative cursor-pointer
                ${item.rotate} hover:rotate-0 hover:z-20 hover:scale-105
                transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
              `}
            >
              {/* The "Paper" Card */}
              <div
                className="p-8 pt-12 min-h-[300px] paper-shadow group-hover:paper-shadow-hover flex flex-col items-center relative rounded-sm border border-black/5 dark:border-white/10"
                style={{ backgroundColor: isDarkMode ? item.darkColor : item.color }}
              >
                {/* Visual Anchors: Tape or Pin */}
                {item.id % 2 === 0 ? (
                  <WashiTape color={item.tapeColor} darkColor={item.tapeDarkColor} className={item.tapePos} />
                ) : (
                  <PushPin color={item.pinColor} className="top-[-8px] left-1/2 -translate-x-1/2" />
                )}

                {/* Content */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-3 bg-white/40 dark:bg-white/10 rounded-full border border-black/5 dark:border-white/10 shadow-sm">
                    <item.icon className="w-10 h-10 text-gray-800 dark:text-gray-200 opacity-80" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 font-handwriting mb-3 text-center">
                  {t(`home.features.${item.titleKey}`)}
                </h3>

                <p className="text-lg text-gray-700 dark:text-gray-300 font-handwriting leading-relaxed text-center opacity-90">
                  {t(`home.features.${item.descKey}`)}
                </p>

                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-handwriting text-gray-500 dark:text-gray-400 underline decoration-wavy decoration-rose-400 dark:decoration-rose-600">
                    {t('home.features.clickToExplore') || 'Click to explore more feature details'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedFeature && (
        <PaperModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
          t={t}
        />
      )}
    </section>
  );
}
