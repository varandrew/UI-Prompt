import { AnimatedWrapper } from './AnimatedWrapper';

/**
 * CyberBackground - Cyberpunk 黑色背景
 */
export function CyberBackground({ progress }) {
  return (
    <AnimatedWrapper
      componentName="background"
      progress={progress}
      animationType="fadeIn"
      className="cyber-background"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0a0a0a',
          zIndex: 0,
        }}
      />
    </AnimatedWrapper>
  );
}

/**
 * CyberGrid - 背景网格效果
 */
export function CyberGrid({ progress }) {
  return (
    <AnimatedWrapper
      componentName="grid"
      progress={progress}
      animationType="fadeIn"
      className="cyber-grid"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          perspective: '1000px',
          transform: 'rotateX(60deg) translateZ(-100px)',
        }}
      />
    </AnimatedWrapper>
  );
}

/**
 * CyberScanLine - 掃描线動画效果
 */
export function CyberScanLine({ progress }) {
  return (
    <AnimatedWrapper
      componentName="scanline"
      progress={progress}
      animationType="fadeIn"
      className="cyber-scanline"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          background: 'linear-gradient(transparent 50%, rgba(0, 255, 65, 0.03) 50%)',
          backgroundSize: '100% 4px',
          animation: 'cyber-scan 8s linear infinite',
        }}
      />
    </AnimatedWrapper>
  );
}
