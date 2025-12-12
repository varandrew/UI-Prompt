import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Github, Globe, Mail } from 'lucide-react';

/**
 * AboutPage - 关于页面
 * 延续纸张/剪贴簿风格，介绍项目使命和开发者
 */

// Washi Tape Component - supports dark mode
const WashiTape = ({ color = "bg-rose-300", darkColor = "bg-rose-400", className = "" }) => (
  <div
    className={`absolute h-8 w-24 opacity-80 dark:opacity-60 mix-blend-multiply dark:mix-blend-normal shadow-sm ${color} dark:${darkColor} ${className}`}
    style={{
      clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%, 1% 5%, 0% 10%, 2% 20%, 0% 30%, 1% 40%, 0% 50%, 2% 60%, 0% 70%, 1% 80%, 0% 90%)'
    }}
  />
);

// Push Pin Component - supports dark mode
const PushPin = ({ color = "bg-red-500", className = "" }) => (
  <div className={`absolute w-4 h-4 rounded-full shadow-md z-20 ${color} border-2 border-white/30 dark:border-black/20 ${className}`}>
    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/40 dark:bg-white/50 rounded-full"></div>
    <div className="absolute top-3 left-1.5 w-1 h-3 bg-black/20 dark:bg-black/40 -z-10 transform skew-x-12"></div>
  </div>
);

export function AboutPage() {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  // Mission cards with light and dark mode color variants
  const missionCards = [
    {
      id: 1,
      color: "bg-[#fff9c4]",
      darkColor: "dark:bg-[#4a4522]",
      rotate: "rotate-2",
      tapeColor: "bg-rose-300",
      tapeDarkColor: "bg-rose-400",
      titleKey: 'problemTitle',
      descKey: 'problemDesc'
    },
    {
      id: 2,
      color: "bg-[#bbdefb]",
      darkColor: "dark:bg-[#1e3a5f]",
      rotate: "-rotate-1",
      tapeColor: "bg-yellow-300",
      tapeDarkColor: "bg-yellow-400",
      titleKey: 'solutionTitle',
      descKey: 'solutionDesc'
    },
    {
      id: 3,
      color: "bg-[#c8e6c9]",
      darkColor: "dark:bg-[#2d4a2e]",
      rotate: "rotate-1",
      tapeColor: "bg-purple-300",
      tapeDarkColor: "bg-purple-400",
      titleKey: 'philosophyTitle',
      descKey: 'philosophyDesc'
    }
  ];

  const contactLinks = [
    {
      icon: Github,
      label: t('pages.about.githubRepo'),
      url: 'https://github.com/TonnyWong1052/UI-Prompt',
      color: 'bg-gray-800 hover:bg-gray-700'
    },
    {
      icon: Globe,
      label: t('pages.about.website'),
      url: 'https://uiprompt.site',
      color: 'bg-blue-600 hover:bg-blue-500'
    }
  ];

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-stone-100 dark:bg-gray-900 font-sans selection:bg-yellow-200 dark:selection:bg-yellow-700 py-16 px-6 transition-colors duration-300">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
        style={{ backgroundImage: isDarkMode
          ? 'radial-gradient(#888 1px, transparent 1px)'
          : 'radial-gradient(#444 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <PushPin color="bg-red-500" className="-top-2 left-1/2 -translate-x-1/2" />
            <h1 className="text-5xl md:text-6xl text-gray-800 dark:text-gray-100 font-marker mb-4 transform -rotate-1 pt-6">
              {t('pages.about.title')}
            </h1>
            <svg className="absolute -bottom-2 left-0 w-full h-6 text-rose-400 dark:text-rose-500 opacity-80" viewBox="0 0 200 9" fill="none">
              <path d="M2 7C48.5 1.8 122.4-4.7 198 5.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-handwriting max-w-2xl mx-auto mt-8 leading-relaxed bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-sm shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 transform rotate-1">
            {t('pages.about.subtitle')}
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {missionCards.map((card) => (
            <div
              key={card.id}
              className={`
                group relative
                ${card.rotate} hover:rotate-0 hover:scale-105
                transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
              `}
            >
              <div className={`
                ${card.color} ${card.darkColor}
                p-6 pt-10 min-h-[280px]
                paper-shadow group-hover:paper-shadow-hover dark:shadow-lg dark:shadow-black/30
                flex flex-col
                relative rounded-sm
                border border-black/5 dark:border-white/10
                transition-colors duration-300
              `}>
                <WashiTape color={card.tapeColor} darkColor={card.tapeDarkColor} className="-top-3 left-1/2 -translate-x-1/2" />

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 font-handwriting mb-4">
                  {t(`pages.about.${card.titleKey}`)}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-handwriting leading-relaxed text-base">
                  {t(`pages.about.${card.descKey}`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="relative bg-[#f8bbd0] dark:bg-[#5c3d4a] p-8 rounded-sm paper-shadow dark:shadow-lg dark:shadow-black/30 transform -rotate-1 hover:rotate-0 transition-all duration-300">
          <PushPin color="bg-blue-500" className="-top-2 right-8" />
          <WashiTape color="bg-green-300" darkColor="bg-green-400" className="-top-4 left-10 rotate-3" />

          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 font-handwriting mb-6 text-center">
            {t('pages.about.contactTitle')}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-2 px-5 py-3
                  ${link.color} text-white
                  font-handwriting text-lg
                  rounded-sm shadow-md dark:shadow-black/30
                  transform hover:scale-105 hover:-rotate-1
                  transition-all duration-200
                `}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
