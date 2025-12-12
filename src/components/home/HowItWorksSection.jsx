import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Search, Eye, Copy, Code } from 'lucide-react';

/**
 * HowItWorksSection - 使用流程區（Paper/Scrapbook 索引卡片風格）
 * 展示 4 步使用流程
 * 使用 Washi Tape 裝飾、手寫字體風格、虛線連接路徑
 */

// Washi Tape Component
const WashiTape = ({ className = "" }) => (
  <div
    className={`absolute h-6 w-16 opacity-80 mix-blend-multiply dark:mix-blend-screen shadow-sm bg-white/50 dark:bg-white/20 ${className}`}
    style={{
      clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%, 1% 5%, 0% 10%, 2% 20%, 0% 30%, 1% 40%, 0% 50%, 2% 60%, 0% 70%, 1% 80%, 0% 90%)'
    }}
  />
);

// Step Card Component
const HowItWorksStep = ({ number, titleKey, descKey, rotate, bgColor, icon, t }) => {
  const IconComponent = icon;
  return (
    <div
      className={`relative flex flex-col items-center p-6 shadow-lg rounded-sm w-full md:w-64 transform ${rotate} transition-transform hover:scale-105 hover:z-10 border border-black/5 dark:border-white/10`}
      style={{ backgroundColor: bgColor }}
    >
      <WashiTape className="-top-3 left-1/2 -translate-x-1/2 rotate-1" />
      <div
        className="absolute -top-4 -left-4 w-10 h-10 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full flex items-center justify-center font-marker text-xl shadow-md border-2 border-white dark:border-gray-700 transform -rotate-12"
      >
        {number}
      </div>
      <div className="mb-4 p-3 bg-white/40 dark:bg-white/10 rounded-full border border-black/5 dark:border-white/10">
        <IconComponent className="w-8 h-8 text-gray-700 dark:text-gray-200" strokeWidth={1.5} />
      </div>
      <h4 className="text-xl font-bold font-handwriting text-gray-800 dark:text-gray-100 mb-2 text-center">
        {t(`home.howItWorks.${titleKey}`)}
      </h4>
      <p className="text-sm font-handwriting text-gray-700 dark:text-gray-300 text-center leading-relaxed">
        {t(`home.howItWorks.${descKey}`)}
      </p>
    </div>
  );
};

export function HowItWorksSection() {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const steps = [
    {
      number: '01',
      titleKey: 'step1Title',
      descKey: 'step1Desc',
      icon: Search,
      color: '#e0f2fe', // sky-100
      darkColor: '#1e3a4f',
      rotate: '-rotate-2'
    },
    {
      number: '02',
      titleKey: 'step2Title',
      descKey: 'step2Desc',
      icon: Eye,
      color: '#ecfccb', // lime-100
      darkColor: '#1e2d20',
      rotate: 'rotate-1'
    },
    {
      number: '03',
      titleKey: 'step3Title',
      descKey: 'step3Desc',
      icon: Copy,
      color: '#ffe4e6', // rose-100
      darkColor: '#3d2035',
      rotate: '-rotate-1'
    },
    {
      number: '04',
      titleKey: 'step4Title',
      descKey: 'step4Desc',
      icon: Code,
      color: '#fef3c7', // amber-100
      darkColor: '#3d2d1a',
      rotate: 'rotate-2'
    }
  ];

  return (
    <section className="w-full py-24 px-6 bg-white dark:bg-[#1f1c18] relative overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-gray-100 font-marker mb-2 transform rotate-1 inline-block bg-white dark:bg-[#2a2520] px-4 py-2 border-2 border-black/10 dark:border-white/10 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.05)]">
          {t('home.howItWorks.title')}
        </h2>
        <p className="mt-4 text-xl font-handwriting text-gray-600 dark:text-gray-300">
          {t('home.howItWorks.subtitle')}
        </p>
      </div>

      {/* Dashed Path (SVG Background) */}
      <div className="absolute top-1/2 left-0 w-full h-20 hidden lg:block -z-10 opacity-30 dark:opacity-20 pointer-events-none translate-y-8">
        <svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M50 50 Q 300 10, 600 50 T 1150 50" stroke="currentColor" className="text-black dark:text-white" strokeWidth="2" fill="none" strokeDasharray="10,10" />
        </svg>
      </div>

      {/* Steps Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 lg:px-4">
          {steps.map((step, idx) => (
            <HowItWorksStep
              key={idx}
              number={step.number}
              titleKey={step.titleKey}
              descKey={step.descKey}
              rotate={step.rotate}
              icon={step.icon}
              bgColor={isDarkMode ? step.darkColor : step.color}
              t={t}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="inline-block text-lg font-handwriting text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 px-6 py-2 rounded-full border border-dashed border-gray-400 dark:border-gray-600">
            {t('home.howItWorks.note') || 'Just four steps to easily generate professional UI design'}
          </p>
        </div>
      </div>
    </section>
  );
}
