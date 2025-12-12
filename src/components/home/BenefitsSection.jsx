import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

/**
 * BenefitsSection - 核心優勢區（Paper/Scrapbook 筆記本風格）
 * 採用問題→解決方案的配對展示方式
 * 使用 Washi Tape 裝飾、筆記本橫線背景、Push Pin 裝飾
 */

// Washi Tape Component
const WashiTape = ({ className = "" }) => (
  <div
    className={`absolute h-10 w-48 opacity-60 mix-blend-multiply dark:mix-blend-screen shadow-sm bg-stone-300 dark:bg-stone-600 ${className}`}
    style={{
      clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%, 1% 5%, 0% 10%, 2% 20%, 0% 30%, 1% 40%, 0% 50%, 2% 60%, 0% 70%, 1% 80%, 0% 90%)'
    }}
  />
);

// Push Pin Component
const PushPin = ({ color = "bg-green-500", className = "" }) => (
  <div className={`absolute w-4 h-4 rounded-full shadow-md dark:shadow-lg dark:shadow-black/40 z-20 ${color} border-2 border-white/30 dark:border-white/20 ${className}`}>
    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/40 dark:bg-white/30 rounded-full"></div>
    <div className="absolute top-3 left-1.5 w-1 h-3 bg-black/20 dark:bg-black/40 -z-10 transform skew-x-12"></div>
  </div>
);

// Benefit Row Component
const BenefitRow = ({ negative, positive, isDarkMode, t }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 relative">
    {/* Negative Side */}
    <div
      className="relative p-4 rounded-sm border transform rotate-1 opacity-80 hover:opacity-100 transition-opacity"
      style={{
        backgroundColor: isDarkMode ? '#2d2d30' : '#f3f4f6',
        borderColor: isDarkMode ? '#4b5563' : '#e5e7eb'
      }}
    >
      <div className="flex items-start gap-3">
        <XCircle className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1" />
        <div>
          <h5 className="font-bold font-handwriting text-gray-500 dark:text-gray-400 mb-1">
            {t(`home.benefits.${negative.titleKey}`)}
          </h5>
          <p className="text-sm font-handwriting text-gray-400 dark:text-gray-500">
            {t(`home.benefits.${negative.descKey}`)}
          </p>
        </div>
      </div>
    </div>

    {/* Positive Side */}
    <div
      className="relative p-4 rounded-sm shadow-sm transform -rotate-1 ring-2"
      style={{
        backgroundColor: isDarkMode ? '#3d3520' : '#fefce8',
        borderColor: isDarkMode ? 'rgba(161, 98, 7, 0.5)' : '#fef08a',
        boxShadow: isDarkMode ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' : undefined,
        '--tw-ring-color': isDarkMode ? 'rgba(120, 53, 15, 0.3)' : 'rgba(254, 249, 195, 0.5)'
      }}
    >
      <PushPin color={positive.pinColor} className="-top-2 -right-2" />
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
        <div>
          <h5 className="font-bold font-handwriting text-gray-800 dark:text-gray-100 mb-1">
            {t(`home.benefits.${positive.titleKey}`)}
          </h5>
          <p className="text-sm font-handwriting text-gray-600 dark:text-gray-300">
            {t(`home.benefits.${positive.descKey}`)}
          </p>
        </div>
      </div>
    </div>

    {/* Connector Arrow (Desktop only) */}
    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <ArrowRight className="w-6 h-6 text-gray-300 dark:text-gray-600" />
    </div>
  </div>
);

export function BenefitsSection() {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const benefits = [
    {
      neg: { titleKey: 'problem1Title', descKey: 'problem1' },
      pos: { titleKey: 'solution1Title', descKey: 'solution1', pinColor: 'bg-green-500' }
    },
    {
      neg: { titleKey: 'problem2Title', descKey: 'problem2' },
      pos: { titleKey: 'solution2Title', descKey: 'solution2', pinColor: 'bg-blue-500' }
    },
    {
      neg: { titleKey: 'problem3Title', descKey: 'problem3' },
      pos: { titleKey: 'solution3Title', descKey: 'solution3', pinColor: 'bg-orange-500' }
    },
    {
      neg: { titleKey: 'problem4Title', descKey: 'problem4' },
      pos: { titleKey: 'solution4Title', descKey: 'solution4', pinColor: 'bg-purple-500' }
    }
  ];

  return (
    <section
      className="w-full py-16 px-6"
      style={{
        background: isDarkMode
          ? 'linear-gradient(to bottom, #1a1815, #15130f)'
          : 'linear-gradient(to bottom, #ffffff, #f9fafb)'
      }}
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Lined Paper Container */}
        <div
          className="p-8 md:p-12 shadow-2xl relative transform -rotate-1"
          style={{
            backgroundColor: isDarkMode ? '#2a2520' : '#ffffff',
            backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(148, 163, 184, 0.5)'} 31px, ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(148, 163, 184, 0.5)'} 32px)`,
            backgroundAttachment: 'local',
            boxShadow: isDarkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : undefined
          }}
        >
          {/* Top Tape */}
          <WashiTape className="-top-4 left-1/2 -translate-x-1/2 rotate-0" />

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-800 dark:text-gray-100 font-marker mb-4">
              {t('home.benefits.title')}
            </h2>
            <p
              className="text-lg font-handwriting text-gray-600 dark:text-gray-300 inline-block px-2"
              style={{ backgroundColor: isDarkMode ? '#2a2520' : '#ffffff' }}
            >
              {t('home.benefits.subtitle')}
            </p>
          </div>

          {/* Benefits Comparison */}
          <div className="space-y-2">
            {benefits.map((item, idx) => (
              <BenefitRow key={idx} negative={item.neg} positive={item.pos} isDarkMode={isDarkMode} t={t} />
            ))}
          </div>

          {/* Binder Rings decoration */}
          <div className="absolute top-1/2 -left-4 md:-left-6 space-y-16 -translate-y-1/2">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full border-4 bg-transparent shadow-inner"
                style={{
                  borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
                  boxShadow: isDarkMode ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)' : undefined
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/styles"
            className="inline-block px-10 py-5 rounded-full font-bold text-white text-lg relative overflow-hidden group transform transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)',
              border: '3px solid #F57C00',
              boxShadow: `
                0 6px 12px rgba(255, 152, 0, 0.4),
                0 3px 6px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.5),
                inset 0 -2px 0 rgba(0, 0, 0, 0.15)
              `,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Highlight Effect */}
            <span
              className="absolute top-0 left-0 w-full h-1/2 opacity-30"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent)'
              }}
            />

            {/* Button Text */}
            <span className="relative z-10 font-handwriting">
              {t('home.benefits.cta')}
            </span>

            {/* Hover Shine Effect */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent 70%)'
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
