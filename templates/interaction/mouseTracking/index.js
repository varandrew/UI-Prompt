// Aggregator for Interaction templates
import { mouseTracking } from './mouseTracking';
import { mouseTrackingDemo } from './mouseTrackingDemo';

// Category name
export const name = 'styles.interaction.title';

// Demo UI for style card display (using dedicated demo panel)
export const demoUI = mouseTrackingDemo.demoHTML;

// Custom styles for demo UI
export const customStyles = mouseTrackingDemo.customStyles;

// Description for style card (category level)
export const description = 'styles.interaction.description';

// Export only the actual templates (not including demo panel)
export const interactionTemplateStyles = [
  mouseTracking
];

export default interactionTemplateStyles;
