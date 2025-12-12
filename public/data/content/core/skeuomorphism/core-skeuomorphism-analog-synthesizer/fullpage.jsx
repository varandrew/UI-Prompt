// Analog Synthesizer - Skeuomorphism Style
// Using Preact h() function

function DemoComponent() {
  const { useState, useEffect, useRef } = window.preact;

  // State management for the "Machine"
  const [power, setPower] = useState(true);
  const [masterVol, setMasterVol] = useState(75);
  const [filterCutoff, setFilterCutoff] = useState(40);
  const [resonance, setResonance] = useState(60);
  const [fader1, setFader1] = useState(80);
  const [fader2, setFader2] = useState(30);
  const [fader3, setFader3] = useState(55);
  const [fader4, setFader4] = useState(90);
  const [mode, setMode] = useState('ANALOG_01');
  const [isPlaying, setIsPlaying] = useState(false);

  // Derived Visual State
  const opacity = power ? 'opacity-100' : 'opacity-40 grayscale';

  // 1. The Screw Component
  const Screw = ({ className }) => {
    return h('div', {
      className: `relative w-4 h-4 rounded-full bg-zinc-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_1px_1px_rgba(0,0,0,0.8)] flex items-center justify-center ${className}`
    },
      h('div', { className: 'absolute w-full h-full rounded-full bg-gradient-to-br from-zinc-300 to-zinc-600 opacity-80' }),
      h('div', { className: 'relative w-2.5 h-0.5 bg-zinc-700/60 rotate-45 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]' }),
      h('div', { className: 'absolute w-2.5 h-0.5 bg-zinc-700/60 -rotate-45 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]' })
    );
  };

  // 2. The LED Component
  const LED = ({ active, color = 'red', size = 'sm' }) => {
    const sizeClasses = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3';

    const getGlow = () => {
      if (!active) return 'bg-zinc-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] border-zinc-900';
      if (color === 'red') return 'bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.6),inset_0_1px_4px_rgba(255,255,255,0.5)] border-red-700';
      if (color === 'green') return 'bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6),inset_0_1px_4px_rgba(255,255,255,0.5)] border-emerald-600';
      if (color === 'blue') return 'bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6),inset_0_1px_4px_rgba(255,255,255,0.5)] border-cyan-600';
      return 'bg-yellow-400 shadow-[0_0_10px_2px_rgba(250,204,21,0.6),inset_0_1px_4px_rgba(255,255,255,0.5)] border-yellow-600';
    };

    return h('div', { className: `rounded-full border ${sizeClasses} transition-all duration-150 ${getGlow()}` });
  };

  // 3. The Metal Toggle Switch
  const ToggleSwitch = ({ label, active, onToggle }) => {
    return h('div', { className: 'flex flex-col items-center gap-2' },
      h('div', {
        className: 'relative w-12 h-20 bg-zinc-800 rounded-lg shadow-[inset_0_2px_5px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)] p-1 cursor-pointer group',
        onClick: onToggle
      },
        h('div', { className: 'absolute inset-x-3 top-2 bottom-2 bg-black rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,1)]' }),
        h('div', {
          className: `absolute left-1 right-1 h-10 rounded shadow-[0_4px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-200 ease-out z-10 ${active ? 'top-1 bg-gradient-to-b from-zinc-200 to-zinc-400' : 'bottom-1 bg-gradient-to-b from-zinc-400 to-zinc-600'}`
        },
          h('div', { className: 'w-full h-full flex flex-col justify-center items-center gap-0.5 opacity-30' },
            h('div', { className: 'w-8 h-[1px] bg-black' }),
            h('div', { className: 'w-8 h-[1px] bg-black' }),
            h('div', { className: 'w-8 h-[1px] bg-black' })
          )
        )
      ),
      h('span', { className: 'text-[10px] font-bold tracking-widest text-zinc-400 uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' }, label)
    );
  };

  // 4. The Rotary Knob
  const Knob = ({ label, value, min = 0, max = 100, onChange }) => {
    const [isDragging, setIsDragging] = useState(false);
    const knobRef = useRef(null);
    const startY = useRef(0);
    const startValue = useRef(0);

    const rotation = -135 + (value / (max - min)) * 270;

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!isDragging) return;
        const sensitivity = 0.5;
        const deltaY = startY.current - e.clientY;
        let newValue = startValue.current + (deltaY * sensitivity);
        newValue = Math.min(Math.max(newValue, min), max);
        onChange(newValue);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = 'default';
      };

      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'ns-resize';
      }

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, min, max, onChange]);

    const handleMouseDown = (e) => {
      setIsDragging(true);
      startY.current = e.clientY;
      startValue.current = value;
    };

    return h('div', { className: 'flex flex-col items-center gap-3' },
      h('div', { className: 'relative w-20 h-20 flex items-center justify-center' },
        [...Array(11)].map((_, i) => {
          const tickRot = -135 + (i * 27);
          return h('div', {
            key: i,
            className: `absolute w-1 h-2 bg-zinc-500 origin-bottom shadow-[0_1px_1px_rgba(0,0,0,1)] ${i % 5 === 0 ? 'h-3 w-1.5 bg-zinc-300' : ''}`,
            style: {
              transform: `rotate(${tickRot}deg) translateY(-42px)`,
              bottom: '50%'
            }
          });
        }),
        h('div', {
          ref: knobRef,
          onMouseDown: handleMouseDown,
          className: 'relative w-16 h-16 rounded-full cursor-ns-resize active:cursor-ns-resize shadow-[0_8px_15px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4)] z-10',
          style: { background: 'conic-gradient(from 180deg, #27272a, #52525b, #27272a)' }
        },
          h('div', { className: 'absolute inset-1 rounded-full bg-gradient-to-b from-zinc-600 to-zinc-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]' },
            h('div', {
              className: 'absolute inset-0.5 rounded-full bg-zinc-800 opacity-90',
              style: { backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '4px 4px' }
            }),
            h('div', {
              className: 'absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-orange-500 rounded-sm shadow-[0_0_5px_rgba(249,115,22,0.5)]',
              style: { transformOrigin: '50% 28px', transform: `rotate(${rotation}deg)` }
            })
          )
        )
      ),
      h('span', { className: 'text-[10px] font-bold tracking-widest text-zinc-400 uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] select-none' }, label)
    );
  };

  // 5. The Fader (Slider)
  const Fader = ({ label, value, onChange }) => {
    const [isDragging, setIsDragging] = useState(false);
    const trackRef = useRef(null);

    const handleInteraction = (clientY) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const height = rect.height;
      const bottom = rect.bottom;
      let percentage = (bottom - clientY) / height;
      percentage = Math.min(Math.max(percentage, 0), 1);
      onChange(Math.round(percentage * 100));
    };

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (isDragging) {
          handleInteraction(e.clientY);
        }
      };
      const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = 'default';
      };

      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'pointer';
      }
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging]);

    return h('div', { className: 'flex flex-col items-center h-48 w-12 gap-3' },
      h('div', {
        className: 'relative flex-1 w-full flex justify-center py-2',
        ref: trackRef,
        onMouseDown: (e) => { setIsDragging(true); handleInteraction(e.clientY); }
      },
        h('div', { className: 'w-2 h-full bg-black rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.1)] relative' },
          h('div', { className: 'absolute -left-4 top-0 bottom-0 flex flex-col justify-between py-1' },
            [...Array(6)].map((_, i) => h('div', { key: i, className: 'w-2 h-[1px] bg-zinc-600' }))
          ),
          h('div', { className: 'absolute -right-4 top-0 bottom-0 flex flex-col justify-between py-1' },
            [...Array(6)].map((_, i) => h('div', { key: i, className: 'w-2 h-[1px] bg-zinc-600' }))
          )
        ),
        h('div', {
          className: 'absolute left-1/2 -translate-x-1/2 w-8 h-12 bg-zinc-300 rounded shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-2px_10px_rgba(0,0,0,0.1)] cursor-pointer z-20 group',
          style: { bottom: `${value}%`, transform: 'translate(-50%, 50%)' }
        },
          h('div', { className: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-black opacity-80' }),
          h('div', { className: 'absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-400 opacity-50 rounded' })
        )
      ),
      h('span', { className: 'text-[10px] font-bold tracking-widest text-zinc-400 uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] select-none' }, label)
    );
  };

  // 6. Tangible Push Button
  const PushButton = ({ icon, label, active, onClick, color = 'zinc' }) => {
    const gradient = color === 'orange' ? 'from-orange-500 to-orange-700' : 'from-zinc-600 to-zinc-800';

    return h('div', { className: 'flex flex-col items-center gap-2' },
      h('button', {
        onClick: onClick,
        className: `relative w-14 h-14 rounded-lg outline-none group transition-all duration-75 ${active ? 'translate-y-0.5' : '-translate-y-0'}`
      },
        h('div', {
          className: `absolute inset-0 rounded-lg ${active ? 'shadow-[inset_0_3px_6px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.05)]' : 'shadow-[0_4px_6px_rgba(0,0,0,0.6),0_8px_15px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]'}`
        }),
        h('div', { className: `absolute inset-0 rounded-lg bg-gradient-to-b ${gradient} flex items-center justify-center text-zinc-200 ${active ? 'opacity-80' : 'opacity-100'}` },
          h('div', { className: 'absolute inset-2 rounded bg-gradient-to-br from-black/20 to-white/10 opacity-50' }),
          h('div', {
            className: `relative z-10 transition-all ${active ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-zinc-300 drop-shadow-[0_-1px_0_rgba(0,0,0,0.5)]'}`,
            dangerouslySetInnerHTML: { __html: icon }
          })
        )
      ),
      label && h('span', { className: 'text-[10px] font-bold tracking-widest text-zinc-500 uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' }, label)
    );
  };

  // 7. The Retro Display
  const Display = ({ mode, bpm, volume }) => {
    return h('div', { className: 'relative w-full h-32 bg-black rounded-lg p-1 shadow-[inset_0_2px_8px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.1)] overflow-hidden' },
      h('div', { className: 'absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20' }),
      h('div', { className: 'w-full h-full bg-[#1a1a1c] relative rounded overflow-hidden flex flex-col p-4 border border-[#333]' },
        h('div', {
          className: 'absolute inset-0 opacity-10',
          style: { backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '10px 10px' }
        }),
        h('div', { className: 'flex justify-between items-end mb-2 z-10' },
          h('div', null,
            h('div', { className: 'text-[10px] text-cyan-700 uppercase mb-1' }, 'Mode Select'),
            h('div', { className: 'text-xl font-mono text-cyan-400 tracking-wider drop-shadow-[0_0_5px_rgba(34,211,238,0.6)]' }, mode)
          ),
          h('div', { className: 'text-right' },
            h('div', { className: 'text-[10px] text-cyan-700 uppercase mb-1' }, 'Master Output'),
            h('div', { className: 'flex gap-0.5 items-end h-8' },
              [...Array(8)].map((_, i) =>
                h('div', {
                  key: i,
                  className: `w-2 rounded-sm ${i < (volume / 12) ? 'bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'bg-cyan-900/30'}`,
                  style: { height: `${(i+1) * 10}%` }
                })
              )
            )
          )
        ),
        h('div', { className: 'mt-auto flex justify-between items-center z-10 border-t border-cyan-900/30 pt-2' },
          h('div', { className: 'flex items-center gap-2' },
            h('svg', {
              width: '12',
              height: '12',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              className: 'text-cyan-600',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            },
              h('polyline', { points: '22 12 18 12 15 21 9 3 6 12 2 12' })
            ),
            h('span', { className: 'text-cyan-500 font-mono text-xs' }, `${bpm} BPM`)
          ),
          h('span', { className: 'text-[10px] text-cyan-800 font-mono' }, 'SYS.READY')
        )
      )
    );
  };

  // Icon SVG strings
  const iconDisc = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>';
  const iconPower = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>';
  const iconZap = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>';

  // Main Return
  return h('div', { className: 'min-h-screen bg-zinc-900 flex items-center justify-center p-4 md:p-8 font-sans selection:bg-none' },
    h('div', { className: 'relative bg-zinc-800 rounded-3xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)] border-b-8 border-zinc-950 max-w-4xl w-full p-2' },
      h('div', {
        className: 'absolute inset-2 rounded-2xl bg-gradient-to-b from-[#3a3a40] to-[#27272a] overflow-hidden pointer-events-none z-0'
      },
        h('div', {
          className: 'absolute inset-0 opacity-20 mix-blend-overlay bg-repeat',
          style: { backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }
        })
      ),
      h('div', { className: `relative z-10 rounded-xl p-6 md:p-10 transition-all duration-700 ${opacity}` },
        h(Screw, { className: 'absolute top-4 left-4' }),
        h(Screw, { className: 'absolute top-4 right-4' }),
        h(Screw, { className: 'absolute bottom-4 left-4' }),
        h(Screw, { className: 'absolute bottom-4 right-4' }),

        h('div', { className: 'grid grid-cols-1 md:grid-cols-12 gap-8 mb-10' },
          h('div', { className: 'md:col-span-3 flex flex-col justify-between' },
            h('div', null,
              h('h1', { className: 'text-2xl font-black italic tracking-tighter text-zinc-300 drop-shadow-[0_-1px_0_rgba(0,0,0,0.8)] mb-1' },
                'CHROMA',
                h('span', { className: 'text-orange-500' }, 'SYNTH')
              ),
              h('p', { className: 'text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase' }, 'Tactile Audio Workstation')
            ),
            h('div', { className: 'mt-8 flex items-center gap-6 p-4 bg-black/20 rounded-xl shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] border-b border-white/5' },
              h(ToggleSwitch, { label: 'Power', active: power, onToggle: () => setPower(!power) }),
              h('div', { className: 'flex flex-col items-center gap-2' },
                h(LED, { active: power, color: 'red', size: 'md' }),
                h('span', { className: 'text-[9px] font-bold text-zinc-500' }, 'MAINS')
              )
            )
          ),
          h('div', { className: 'md:col-span-6' },
            h(Display, { mode: mode, bpm: 128, volume: masterVol })
          ),
          h('div', { className: 'md:col-span-3 flex flex-col items-center justify-end' },
            h('div', { className: 'bg-zinc-700/30 p-4 rounded-xl border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]' },
              h(Knob, { label: 'Master Vol', value: masterVol, onChange: setMasterVol })
            )
          )
        ),

        h('div', { className: 'h-px w-full bg-gradient-to-r from-transparent via-zinc-950 to-transparent opacity-50 mb-1 border-b border-white/5 mb-10' }),

        h('div', { className: 'grid grid-cols-1 md:grid-cols-12 gap-8' },
          h('div', { className: 'md:col-span-4 bg-[#232326] rounded-xl p-6 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.05)] border border-black/40 relative' },
            h('div', { className: 'absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none' }),
            h(Screw, { className: 'absolute top-2 left-2 w-3 h-3' }),
            h(Screw, { className: 'absolute bottom-2 right-2 w-3 h-3' }),
            h('h3', { className: 'text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 text-center border-b border-zinc-700 pb-2' }, 'Filter Section'),
            h('div', { className: 'flex justify-around items-center' },
              h(Knob, { label: 'Cutoff', value: filterCutoff, onChange: setFilterCutoff }),
              h(Knob, { label: 'Resonance', value: resonance, onChange: setResonance })
            )
          ),

          h('div', { className: 'md:col-span-4 flex flex-col items-center justify-center gap-6' },
            h('div', { className: 'flex gap-4 p-4 rounded-2xl bg-black/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] border-b border-white/5' },
              h(PushButton, { icon: iconDisc, label: 'Play', active: isPlaying, onClick: () => { setIsPlaying(!isPlaying); setMode('PLAYING'); }, color: 'orange' }),
              h(PushButton, { icon: iconPower, label: 'Stop', active: !isPlaying, onClick: () => { setIsPlaying(false); setMode('STOPPED'); } }),
              h(PushButton, { icon: iconZap, label: 'Rec', active: mode === 'RECORDING', onClick: () => setMode('RECORDING') })
            ),
            h('div', { className: 'flex gap-4' },
              h('div', { className: 'flex flex-col items-center gap-1' },
                h(LED, { active: isPlaying, color: 'green' }),
                h('span', { className: 'text-[8px] text-zinc-600 font-bold' }, 'RUN')
              ),
              h('div', { className: 'flex flex-col items-center gap-1' },
                h(LED, { active: mode === 'RECORDING', color: 'red' }),
                h('span', { className: 'text-[8px] text-zinc-600 font-bold' }, 'REC')
              )
            )
          ),

          h('div', { className: 'md:col-span-4 bg-[#2a2a2d] rounded-xl p-6 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)] relative border-t border-white/5' },
            h('h3', { className: 'text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center' }, 'Mixer'),
            h('div', { className: 'flex justify-between px-2' },
              h(Fader, { label: 'CH 1', value: fader1, onChange: setFader1 }),
              h(Fader, { label: 'CH 2', value: fader2, onChange: setFader2 }),
              h(Fader, { label: 'CH 3', value: fader3, onChange: setFader3 }),
              h(Fader, { label: 'CH 4', value: fader4, onChange: setFader4 })
            )
          )
        )
      ),
      h('div', { className: 'absolute -bottom-1 left-10 w-12 h-2 bg-[#111] rounded-b-lg shadow-lg' }),
      h('div', { className: 'absolute -bottom-1 right-10 w-12 h-2 bg-[#111] rounded-b-lg shadow-lg' })
    ),
    h('div', { className: 'fixed top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-blue-900/10 to-orange-900/10 z-50' })
  );
}
