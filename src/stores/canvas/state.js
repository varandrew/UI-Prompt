/**
 * Canvas Store - Initial State Definitions
 *
 * This module defines the initial state for the canvas store, including:
 * - Component tree structure (root page container)
 * - Default component properties mapping
 */

/**
 * Initial component tree structure
 * Represents the root page container with an empty children array
 *
 * @type {Object}
 * @property {string} id - Unique identifier for the root component
 * @property {string} componentType - Type of component (Page)
 * @property {Array} children - Child components array
 */
export const initialComponentTree = {
  id: 'root',
  componentType: 'Page',
  children: []
};

/**
 * Initial component properties mapping
 * Stores the default styling and layout properties for the root component
 *
 * @type {Object.<string, Object>}
 * @property {Object} root - Root component properties
 * @property {Object} root.baseProps - Base styling properties
 * @property {Object} root.baseProps.style - CSS style properties
 * @property {Object} root.layoutProps - Flexbox layout properties
 */
export const initialComponentProps = {
  'root': {
    id: 'root',
    baseProps: {
      style: {
        minHeight: '100vh',
        backgroundColor: '#FFFFFF'
      }
    },
    layoutProps: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
};
