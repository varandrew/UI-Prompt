import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, SkipBack, SkipForward, Volume2, Power, Disc, Radio, Monitor, Wifi, Battery } from 'lucide-react';

export default function VHSApp() {
  const [power, setPower] = useState(false);
  const [channel, setChannel] = useState(1);
  const [playState, setPlayState] = useState('STOP'); // PLAY, PAUSE, STOP, REW, FF
  const [time, setTime] = useState(new Date());
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [volume, setVolume] = useState(80);
  const [tapeCounter, setTapeCounter] = useState(0);

  const channels = [
    { id: 1, name: 'HOME', desc: 'MAIN TERMINAL' },
    { id: 2, name: 'PROJECTS', desc: 'ARCHIVE TAPES' },
    { id: 3, name: 'ABOUT', desc: 'SIGNAL SOURCE' },
    { id: 4, name: 'CONTACT', desc: 'TRANSMISSION' }
  ];

  // Clock effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Tape Counter effect
  useEffect(() => {
    let interval;
    if (playState === 'PLAY') {
      interval = setInterval(() => setTapeCounter(c => c + 1), 1000);
    } else if (playState === 'FF') {
      interval = setInterval(() => setTapeCounter(c => c + 5), 100);
    } else if (playState === 'REW') {
      interval = setInterval(() => setTapeCounter(c => Math.max(0, c - 5)), 100);
    }
    return () => clearInterval(interval);
  }, [playState]);

  // Channel switching glitch effect
  const handleChannelChange = (newChannel) => {
    if (newChannel === channel) return;
    setGlitchIntensity(1);
    // Simulate static burst
    setTimeout(() => {
      setChannel(newChannel);
      setTimeout(() => setGlitchIntensity(0), 500);
    }, 300);
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const fmtHours = hours % 12 || 12;
    const fmtMin = minutes < 10 ? '0' + minutes : minutes;
    return `${fmtHours}:${fmtMin} ${ampm}`;
  };

  const formatCounter = (count) => {
    return count.toString().padStart(4, '0');
  };

  // Content Components
  const ChannelContent = () => {
    if (glitchIntensity > 0.5) return <div className="flex items-center justify-center h-full w-full bg-white opacity-10"></div>;

    switch (channel) {
      case 1: // HOME
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 z-10">
            <h1 className="text-6xl md:text-8xl mb-4 font-bold glitch-text font-press-start text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" data-text="RETRO.VISION">
              RETRO.VISION
            </h1>
            <div className="w-full max-w-2xl border-t-2 border-b-2 border-green-500 py-4 my-8 bg-black bg-opacity-40 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <p className="text-xl md:text-2xl text-green-400 font-vt323 tracking-widest leading-loose">
                SYSTEM READY...<br/>
                LOADED: VHS_AESTHETIC_V1.0<br/>
                INSERT TAPE TO BEGIN
              </p>
            </div>
            <div className="animate-pulse text-yellow-400 text-2xl font-vt323 mt-8">
              PRESS PLAY [▶] TO START
            </div>
          </div>
        );
      case 2: // PROJECTS
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 h-full overflow-y-auto pb-32">
             {[1, 2, 3, 4].map((item) => (
               <div key={item} className="border-4 border-purple-900 bg-black bg-opacity-60 p-4 relative group hover:border-pink-500 transition-colors cursor-pointer">
                 <div className="absolute top-2 left-2 text-xs bg-red-600 px-2 py-0.5 text-white animate-pulse">REC</div>
                 <div className="h-32 bg-gray-900 mb-4 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-50"></div>
                    <span className="text-4xl text-gray-700 font-vt323 group-hover:text-pink-400 transition-colors">TAPE_0{item}</span>
                    {/* Scanline on hover inside card */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white pointer-events-none mix-blend-overlay transition-opacity" style={{backgroundSize: '100% 2px', backgroundImage: 'linear-gradient(transparent 50%, black 50%)'}}></div>
                 </div>
                 <h3 className="text-2xl text-cyan-400 font-vt323 mb-2">PROJECT_{item}</h3>
                 <p className="text-green-300 font-vt323 text-lg leading-tight opacity-80">
                   Analog signal processing completed. Render time: 12:0{item}. Data integrity: 9{item}%.
                 </p>
               </div>
             ))}
          </div>
        );
      case 3: // ABOUT
        return (
          <div className="flex flex-col items-center justify-center h-full p-12 max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-cyan-500 p-8 bg-black bg-opacity-80 relative shadow-[0_0_20px_rgba(0,255,255,0.3)]">
               <div className="absolute -top-3 left-4 bg-black px-2 text-cyan-500 text-xl font-vt323">USER_PROFILE.DAT</div>
               <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="w-32 h-32 bg-purple-900 border-2 border-pink-500 flex items-center justify-center overflow-hidden">
                   <div className="text-6xl">👤</div>
                 </div>
                 <div className="text-left font-vt323">
                   <p className="text-2xl text-pink-500 mb-2">NAME: <span className="text-white">DESIGNER_X</span></p>
                   <p className="text-2xl text-pink-500 mb-2">CLASS: <span className="text-white">VISUAL_ENGINEER</span></p>
                   <p className="text-2xl text-pink-500 mb-2">LOC: <span className="text-white">SECTOR_7G</span></p>
                   <p className="text-xl text-green-400 mt-4 leading-relaxed">
                     Specializing in analog reconstruction and digital signal distortion.
                     Bringing the imperfection of magnetic tape to the sterile web.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 4: // CONTACT
        return (
          <div className="flex flex-col items-center justify-center h-full p-8">
             <div className="w-full max-w-md">
               <div className="bg-blue-900 p-2 mb-4 text-center text-white font-vt323 text-xl blink-animation">INCOMING TRANSMISSION...</div>
               <div className="border-2 border-green-600 p-6 bg-black bg-opacity-90">
                 <form className="flex flex-col gap-4 font-vt323 text-xl">
                   <div className="flex flex-col">
                     <label className="text-green-500 mb-1">FREQUENCY (EMAIL)</label>
                     <input type="text" className="bg-gray-900 border border-green-700 text-green-300 p-2 focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_#00ff00]" placeholder="ENTER_ID..." />
                   </div>
                   <div className="flex flex-col">
                     <label className="text-green-500 mb-1">MESSAGE_DATA</label>
                     <textarea rows="4" className="bg-gray-900 border border-green-700 text-green-300 p-2 focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_#00ff00]" placeholder="TYPE_MESSAGE..."></textarea>
                   </div>
                   <button type="button" className="bg-green-700 hover:bg-green-600 text-black font-bold py-2 mt-2 hover:shadow-[0_0_15px_#00ff00] transition-all btn-retro">
                     SEND SIGNAL
                   </button>
                 </form>
               </div>
             </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="crt-container font-vt323 select-none">
      {/* Visual Effects Layers */}
      <div className="scanlines"></div>
      <div className="vignette"></div>
      <div className="flicker-overlay"></div>
      <div className="tracking-line"></div>
      {power && glitchIntensity > 0 && (
        <div className="absolute inset-0 bg-white mix-blend-exclusion z-50 pointer-events-none"
             style={{opacity: Math.random() * 0.5}}></div>
      )}

      {/* --- UI Content Wrapper --- */}
      <div className={`relative w-full h-full flex flex-col transition-opacity duration-1000 ${power ? 'screen-on opacity-100' : 'screen-off opacity-0'}`}>

        {/* Top Info Bar (OSD) */}
        <div className="absolute top-8 left-8 right-8 z-40 flex justify-between items-start text-green-500 text-2xl md:text-3xl tracking-widest pointer-events-none">
          <div className="flex flex-col gap-2">
            <div className={`flex items-center gap-2 ${playState === 'PLAY' ? 'animate-pulse text-red-500' : 'text-white'}`}>
              {playState === 'PLAY' && <div className="w-4 h-4 bg-red-500 rounded-full"></div>}
              <span>{playState === 'PLAY' ? 'REC' : playState}</span>
            </div>
            <div className="text-white opacity-80 text-xl">SP MODE</div>
          </div>

          <div className="flex flex-col items-end gap-2 text-white osd-text">
            <div>{formatTime(time)}</div>
            <div className="text-xl text-yellow-300">CH {channel.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400 mt-1 font-mono">
              {formatTime(time).replace(/[: ]/g, '')}{Math.floor(Math.random()*99)}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-grow relative z-30 pt-24 pb-32 overflow-hidden">
          <ChannelContent />
        </main>

        {/* Bottom Controls / Dashboard */}
        <div className="absolute bottom-0 left-0 w-full bg-neutral-900 bg-opacity-90 border-t-4 border-gray-700 p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md">

          {/* Left: Tape Counter & Status */}
          <div className="flex items-center gap-6 bg-black p-3 rounded border border-gray-600 shadow-inner w-full md:w-auto justify-center md:justify-start">
             <div className="flex flex-col items-center">
               <span className="text-xs text-gray-400 mb-1">COUNTER</span>
               <span className="font-mono text-3xl text-red-600 bg-black px-2 font-bold tracking-widest" style={{textShadow: '0 0 5px red'}}>
                 {formatCounter(tapeCounter)}
               </span>
             </div>
             <div className="h-10 w-px bg-gray-600"></div>
             <div className="flex gap-4 text-green-500">
                <div className="flex flex-col items-center">
                  <Wifi size={20} className={glitchIntensity > 0 ? 'opacity-20' : 'opacity-100'} />
                  <span className="text-[10px]">SIGNAL</span>
                </div>
                <div className="flex flex-col items-center">
                  <Battery size={20} />
                  <span className="text-[10px]">BAT</span>
                </div>
             </div>
          </div>

          {/* Center: Playback Controls */}
          <div className="flex items-center gap-4">
             <button onClick={() => { setPlayState('REW'); setGlitchIntensity(0.8); setTimeout(()=>setGlitchIntensity(0.1), 200); }} className="btn-retro p-3 bg-gray-800 text-gray-300 rounded hover:text-white transition-all border border-gray-600 active:bg-gray-700 active:scale-95">
               <SkipBack size={24} />
             </button>
             <button onClick={() => { setPlayState('STOP'); setGlitchIntensity(0); }} className="btn-retro p-3 bg-gray-800 text-gray-300 rounded hover:text-white transition-all border border-gray-600 active:bg-gray-700 active:scale-95">
               <Square size={24} fill="currentColor" />
             </button>
             <button onClick={() => { setPlayState(playState === 'PLAY' ? 'PAUSE' : 'PLAY'); }} className="btn-retro p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 hover:text-green-400 transition-all border-2 border-gray-500 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
               {playState === 'PLAY' ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
             </button>
             <button onClick={() => { setPlayState('FF'); setGlitchIntensity(0.8); setTimeout(()=>setGlitchIntensity(0.1), 200); }} className="btn-retro p-3 bg-gray-800 text-gray-300 rounded hover:text-white transition-all border border-gray-600 active:bg-gray-700 active:scale-95">
               <SkipForward size={24} />
             </button>
          </div>

          {/* Right: Channel Select & Volume */}
          <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end">
             <div className="flex items-center gap-2">
               <Volume2 size={20} className="text-gray-400" />
               <div className="w-24 h-4 bg-gray-800 border border-gray-600 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-600 to-yellow-500" style={{width: `${volume}%`}}></div>
                  {/* Tick marks */}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-between px-1">
                    {[...Array(10)].map((_, i) => <div key={i} className="w-px h-full bg-black opacity-30"></div>)}
                  </div>
               </div>
             </div>

             <div className="flex gap-1 bg-gray-800 p-1 rounded border border-gray-600">
               {channels.map((ch) => (
                 <button
                   key={ch.id}
                   onClick={() => handleChannelChange(ch.id)}
                   className={`w-10 h-10 flex items-center justify-center font-bold font-vt323 text-xl transition-all ${channel === ch.id ? 'bg-green-600 text-black shadow-[0_0_10px_#00ff00]' : 'text-gray-400 hover:bg-gray-700'}`}
                 >
                   {ch.id}
                 </button>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Power Button (Always visible if off, overlay if on) */}
      {!power && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black">
          <button
            onClick={() => setPower(true)}
            className="flex flex-col items-center gap-4 group cursor-pointer"
          >
            <div className="w-24 h-24 rounded-full border-4 border-gray-800 bg-gray-900 flex items-center justify-center shadow-[0_0_50px_rgba(255,0,0,0.2)] group-hover:shadow-[0_0_80px_rgba(0,255,0,0.4)] group-hover:border-green-800 transition-all duration-500">
              <Power size={48} className="text-gray-600 group-hover:text-green-500 transition-colors" />
            </div>
            <span className="text-gray-600 font-vt323 text-2xl tracking-[0.5em] group-hover:text-green-500 transition-colors">POWER ON</span>
          </button>
        </div>
      )}

      {/* Helper for turning off */}
      {power && (
         <button
          onClick={() => setPower(false)}
          className="absolute top-4 right-4 z-[60] text-gray-800 opacity-20 hover:opacity-100 hover:text-red-500 transition-all"
          title="Power Off"
        >
          <Power size={24} />
        </button>
      )}

    </div>
  );
}
