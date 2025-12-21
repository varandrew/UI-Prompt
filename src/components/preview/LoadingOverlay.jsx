import PropTypes from 'prop-types';
import { LoadingDots } from '../ui/LoadingDots';

/**
 * LoadingOverlay component - Simple loading overlay with animated dots
 *
 * Displays a full-screen overlay with a minimalist loading animation.
 * Used during async preview content loading.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isVisible - Whether to show the overlay
 * @returns {JSX.Element|null} Loading overlay or null if not visible
 */
export function LoadingOverlay({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-900 z-10 flex items-center justify-center">
      <LoadingDots size="medium" />
    </div>
  );
}

LoadingOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired
};
