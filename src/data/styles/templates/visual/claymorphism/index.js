// Claymorphism - Clay Texture Effect

import { demoHTML, customStyles } from './Demo'
import { dashboardFullPageHTML, dashboardFullPageStyles } from './FullPageDashboard'
import { ecommerceFullPageHTML, ecommerceFullPageStyles } from './FullPageEcommerce'
import { dashboardCustomPrompt, ecommerceCustomPrompt } from './customPrompts'
import { claymorphismStylePrompt } from './stylePrompt'

export const claymorphism = {
  id: 'visual-claymorphism',
  title: 'styles.visual.claymorphism.title',
  description: 'styles.visual.claymorphism.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML,
  customStyles,

  // Legacy support: Keep fullPageHTML/fullPageStyles for backward compatibility
  // These point to the Dashboard page
  fullPageHTML: dashboardFullPageHTML,
  fullPageStyles: dashboardFullPageStyles,

  // Previews (Two full-page templates)
  previews: [
    {
      id: 'claymorphism-dashboard',
      name: 'Creative Dashboard',
      type: 'full',
      html: dashboardFullPageHTML,
      styles: dashboardFullPageStyles,
      customPrompt: dashboardCustomPrompt  // Unique prompt for Dashboard
    },
    {
      id: 'claymorphism-ecommerce',
      name: 'E-Commerce Showcase',
      type: 'full',
      html: ecommerceFullPageHTML,
      styles: ecommerceFullPageStyles,
      customPrompt: ecommerceCustomPrompt  // Unique prompt for E-Commerce
    }
  ],

  // Custom Prompt (default for StyleCard, points to Dashboard)
  customPrompt: dashboardCustomPrompt,

  // Style Prompt (shared narrative description for all templates)
  stylePrompt: claymorphismStylePrompt
}

export default claymorphism
