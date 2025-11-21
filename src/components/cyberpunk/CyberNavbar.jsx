import { AnimatedWrapper } from './AnimatedWrapper';

/**
 * CyberNavbar - Cyberpunk 風格导航欄
 */
export function CyberNavbar({ progress }) {
  const navLinks = ['MONITOR', 'TERMINAL', 'SYSTEMS', 'CONFIG'];

  return (
    <AnimatedWrapper
      componentName="navbar"
      progress={progress}
      animationType="slideDown"
      className="cyber-navbar"
    >
      <nav
        data-stage="navbar"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(10, 10, 10, 0.95)',
          borderBottom: '2px solid #00ff41',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <AnimatedWrapper
            componentName="navbarLogo"
            progress={progress}
            animationType="scaleIn"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#00ff41',
                  border: '2px solid #00ffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  animation: 'cyber-pulse 2s ease-in-out infinite',
                }}
              >
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 900,
                    color: '#0a0a0a',
                  }}
                >
                  C
                </span>
                <div
                  style={{
                    position: 'absolute',
                    inset: '-2px',
                    border: '1px solid #00ff41',
                    animation: 'cyber-rotate 3s linear infinite',
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 900,
                  color: '#00ff41',
                  textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41',
                }}
              >
                CYBER_TERMINAL
              </span>
            </div>
          </AnimatedWrapper>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((text, i) => (
              <AnimatedWrapper
                key={text}
                componentName={`navbarLink${i + 1}`}
                progress={progress}
                animationType="fadeInRight"
              >
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    fontWeight: 700,
                    color: i === 0 ? '#00ff41' : '#00ffff',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    border: '1px solid transparent',
                    transition: 'all 0.3s',
                    textShadow: i === 0 ? '0 0 5px #00ff41' : 'none',
                  }}
                >
                  {text}
                </a>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Toolbar */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Search Box */}
            <AnimatedWrapper
              componentName="navbarSearch"
              progress={progress}
              animationType="fadeInRight"
            >
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="SEARCH..."
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(0, 255, 65, 0.1)',
                    border: '1px solid #00ff41',
                    color: '#00ff41',
                    fontFamily: "'Courier New', monospace",
                    fontSize: '14px',
                    width: '180px',
                    boxShadow: '0 0 10px rgba(0, 255, 65, 0.3)',
                    outline: 'none',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#00ff41',
                  }}
                >
                  🔍
                </span>
              </div>
            </AnimatedWrapper>

            {/* Notification */}
            <AnimatedWrapper
              componentName="navbarNotif"
              progress={progress}
              animationType="scaleIn"
            >
              <div style={{ position: 'relative', cursor: 'pointer' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(0, 255, 65, 0.1)',
                    border: '1px solid #00ff41',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'cyber-pulse 2s ease-in-out infinite',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>🔔</span>
                </div>
                <span
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    background: '#00ff41',
                    color: '#0a0a0a',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 900,
                  }}
                >
                  7
                </span>
              </div>
            </AnimatedWrapper>

            {/* Avatar */}
            <AnimatedWrapper
              componentName="navbarAvatar"
              progress={progress}
              animationType="scaleIn"
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(0, 255, 255, 0.2)',
                  border: '2px solid #00ffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ffff',
                  fontWeight: 900,
                  fontSize: '14px',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
                }}
              >
                H4X
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </nav>
    </AnimatedWrapper>
  );
}
