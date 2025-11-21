import { AnimatedWrapper } from './AnimatedWrapper';

/**
 * CyberHero - Hero 区塊
 */
export function CyberHero({ progress }) {
  return (
    <AnimatedWrapper
      componentName="hero"
      progress={progress}
      animationType="fadeInUp"
    >
      <section
        data-stage="hero"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, rgba(0, 255, 255, 0.05) 100%)',
          padding: '4rem 2rem',
          borderBottom: '1px solid #00ff41',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Title */}
          <AnimatedWrapper
            componentName="heroTitle"
            progress={progress}
            animationType="fadeInUp"
          >
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 900,
                color: '#00ff41',
                textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
                margin: 0,
                lineHeight: 1.2,
                position: 'relative',
              }}
            >
              SYSTEM_ACCESS_GRANTED
            </h1>
          </AnimatedWrapper>

          {/* Subtitle */}
          <AnimatedWrapper
            componentName="heroSubtitle"
            progress={progress}
            animationType="fadeInUp"
          >
            <p
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#00ffff',
                marginTop: '1rem',
                maxWidth: '600px',
                textShadow: '0 0 5px #00ffff',
              }}
            >
              // Welcome to the Matrix, Neo. Your monitoring dashboard is online.
            </p>
          </AnimatedWrapper>

          {/* Buttons */}
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <AnimatedWrapper
              componentName="heroButton1"
              progress={progress}
              animationType="scaleIn"
            >
              <button
                style={{
                  padding: '0.75rem 2rem',
                  background: 'transparent',
                  color: '#00ff41',
                  border: '2px solid #00ff41',
                  fontWeight: 900,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px rgba(0, 255, 65, 0.3)',
                  transition: 'all 0.3s',
                  fontFamily: "'Courier New', monospace",
                }}
              >
                [ INITIALIZE ]
              </button>
            </AnimatedWrapper>

            <AnimatedWrapper
              componentName="heroButton2"
              progress={progress}
              animationType="scaleIn"
            >
              <button
                style={{
                  padding: '0.75rem 2rem',
                  background: 'rgba(0, 255, 255, 0.1)',
                  color: '#00ffff',
                  border: '2px solid #00ffff',
                  fontWeight: 900,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
                  transition: 'all 0.3s',
                  fontFamily: "'Courier New', monospace",
                }}
              >
                [ CONNECT ]
              </button>
            </AnimatedWrapper>
          </div>
        </div>

        {/* Dataflow Background */}
        <AnimatedWrapper
          componentName="heroDataflow"
          progress={progress}
          animationType="fadeIn"
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              opacity: 0.1,
              overflow: 'hidden',
            }}
          >
            {['010101010101', '110110110110', '101010101010', '011011011011', '100100100100'].map((text, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: `${10 + i * 20}%`,
                  fontSize: '12px',
                  animation: `cyber-flow ${15 + i * 2}s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </section>
    </AnimatedWrapper>
  );
}
