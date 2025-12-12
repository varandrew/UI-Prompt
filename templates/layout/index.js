// Aggregator for Layout templates
import { layoutStyles } from './layoutStyles'

// Note: styles.layout.title doesn't exist in i18n yet, using nav.layout for now
export const name = 'nav.layout'

// Demo UI for style card display (from first template)
export const demoUI = layoutStyles[0].demoHTML

// Custom styles for demo UI
export const customStyles = layoutStyles[0].customStyles

// Description for style card (category level)
export const description = 'styles.layout.description'

export const layoutTemplateStyles = layoutStyles

export default layoutTemplateStyles