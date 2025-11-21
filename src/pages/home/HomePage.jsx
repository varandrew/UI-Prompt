import { useEffect, useState } from 'react';
import { AIPromptDemo } from '../../components/demo';
import { FeaturesSection } from '../../components/home/FeaturesSection';
import { HowItWorksSection } from '../../components/home/HowItWorksSection';
import { BenefitsSection } from '../../components/home/BenefitsSection';
import { useLanguage } from '../../hooks/useLanguage';
import { getComponentsStatsAsync, getStylesStatsAsync } from '../../data/components/loaders';

/**
 * HomePage - 新首页
 * 展示 AI Prompt 演示区域和統計信息
 */
export function HomePage() {
  const { t } = useLanguage();
  const [stylesStats, setStylesStats] = useState({ total: 0, categories: [] })
  const [componentsStats, setComponentsStats] = useState({ total: 0, categories: [] })

  // 首次載入按需取統計資料（動態 import 資料）
  useEffect(() => {
    let active = true
    Promise.all([getStylesStatsAsync(), getComponentsStatsAsync()]).then(([s, c]) => {
      if (!active) return
      setStylesStats(s)
      setComponentsStats(c)
    })
    return () => { active = false }
  }, [])

  // 已移除页面載入時的自動聚焦功能

  return (
    <section className="min-h-screen flex flex-col">
      {/* AI Prompt 演示区域 */}
      <AIPromptDemo />

      {/* 功能特色区 */}
      <FeaturesSection />

      {/* 使用流程区 */}
      <HowItWorksSection />

      {/* 核心优势区 */}
      <BenefitsSection />

      {/* 底部统计信息 */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500 font-light">
          {t('common.totalCount', {
            styles: stylesStats.total,
            components: componentsStats.total,
            total: stylesStats.total + componentsStats.total
          })}
        </p>
      </div>
    </section>
  );
}
