import { useRef, useState } from 'react'
import { TourGuide } from './TourGuide'
import { useLanguage } from '../../hooks/useLanguage'

/**
 * TourGuideDemo - React 版示範页（i18n）
 */
export function TourGuideDemo({ autoStart = true, mode = 'card' }) {
  const { t } = useLanguage()

  // 共用 refs（不同模式會使用不同組合）
  const navRef = useRef(null)
  const heroRef = useRef(null)
  const featureRef = useRef(null)
  const actionRef = useRef(null)

  const [open, setOpen] = useState(autoStart)

  // 依模式組裝 steps
  const steps = mode === 'full'
    ? [
        { targetRef: navRef,   title: t('demo.interactive.tourGuide.navTitle'),   content: t('demo.interactive.tourGuide.navContent') },
        { targetRef: heroRef,  title: t('demo.interactive.tourGuide.heroTitle'),  content: t('demo.interactive.tourGuide.heroContent') },
        { targetRef: featureRef, title: t('demo.interactive.tourGuide.featureTitle'), content: t('demo.interactive.tourGuide.featureContent'), placement: 'top' },
        { targetRef: actionRef, title: t('demo.interactive.tourGuide.actionTitle'),  content: t('demo.interactive.tourGuide.actionContent'), placement: 'top-left' },
      ]
    : [
        { targetRef: heroRef,  title: t('demo.interactive.tourGuide.title'),  content: t('demo.interactive.tourGuide.welcomeDesc') },
        { targetRef: featureRef, title: t('demo.interactive.tourGuide.featureTitle'), content: t('demo.interactive.tourGuide.featureContent') },
        { targetRef: actionRef, title: t('demo.interactive.tourGuide.actionTitle'),content: t('demo.interactive.tourGuide.actionContent') },
      ]

  if (mode === 'full') {
    return (
      <div className="min-h-[600px] h-full w-full bg-gray-50">
        {/* 頂部导覽列 */}
        <header ref={navRef} className="sticky top-0 z-10 bg-white border-b">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-black" />
              <span className="font-semibold">{t('demo.interactive.tourGuide.title')}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 text-sm rounded border hover:bg-gray-100"
                onClick={() => setOpen(true)}
              >
                {t('demo.interactive.tourGuide.restart')}
              </button>
            </div>
          </div>
        </header>

        {/* Hero 区域 */}
        <section ref={heroRef} className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-light mb-2">{t('demo.interactive.tourGuide.welcomeTitle')}</h1>
          <p className="text-gray-600 mb-6">{t('demo.interactive.tourGuide.welcomeDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">01</div>
              <div className="font-semibold mb-1">{t('demo.interactive.tourGuide.feature1Title')}</div>
              <p className="text-sm text-gray-600">{t('demo.interactive.tourGuide.feature1Desc')}</p>
            </div>
            <div className="bg-white rounded-xl border p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">02</div>
              <div className="font-semibold mb-1">{t('demo.interactive.tourGuide.feature2Title')}</div>
              <p className="text-sm text-gray-600">{t('demo.interactive.tourGuide.feature2Desc')}</p>
            </div>
            <div className="bg-white rounded-xl border p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">03</div>
              <div className="font-semibold mb-1">{t('demo.interactive.tourGuide.feature3Title')}</div>
              <p className="text-sm text-gray-600">{t('demo.interactive.tourGuide.feature3Desc')}</p>
            </div>
          </div>
        </section>

        {/* 主內容区域 */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <div ref={featureRef} className="bg-white rounded-xl border p-6 shadow-sm mb-6">
            <h3 className="text-lg font-semibold mb-2">{t('demo.interactive.tourGuide.featureTitle')}</h3>
            <p className="text-gray-600 mb-4">{t('demo.interactive.tourGuide.featureContent')}</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>{t('demo.interactive.tourGuide.featureList1')}</li>
              <li>{t('demo.interactive.tourGuide.featureList2')}</li>
              <li>{t('demo.interactive.tourGuide.featureList3')}</li>
            </ul>
          </div>

          <div className="flex justify-end">
            <button
              ref={actionRef}
              className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
              onClick={() => alert(t('demo.form.submit') + ' OK')}
            >
              {t('demo.form.submit')}
            </button>
          </div>
        </section>

        {open && (
          <TourGuide steps={steps} autoStart={true} onClose={() => setOpen(false)} />
        )}
      </div>
    )
  }

  // card 模式（原精简版）
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 ref={heroRef} className="text-2xl md:text-3xl font-light">{t('demo.interactive.tourGuide.title')}</h1>
        <button
          className="px-3 py-1.5 text-sm rounded border hover:bg-gray-100"
          onClick={() => setOpen(true)}
        >
          {t('demo.interactive.tourGuide.restart')}
        </button>
      </div>

      <div ref={featureRef} className="bg-white border rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold mb-2">{t('demo.interactive.tourGuide.featureTitle')}</h3>
        <p className="text-gray-600 mb-4">{t('demo.interactive.tourGuide.featureContent')}</p>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>{t('demo.interactive.tourGuide.featureList1')}</li>
          <li>{t('demo.interactive.tourGuide.featureList2')}</li>
          <li>{t('demo.interactive.tourGuide.featureList3')}</li>
        </ul>
      </div>

      <div className="flex justify-end">
        <button
          ref={actionRef}
          className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
          onClick={() => alert(t('demo.form.submit') + ' OK')}
        >
          {t('demo.form.submit')}
        </button>
      </div>

      {open && (
        <TourGuide steps={steps} autoStart={true} onClose={() => setOpen(false)} />)
      }
    </div>
  )
}

export default TourGuideDemo
