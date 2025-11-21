// Arcade CRT Self-Contained Template
// 完全自包含版本 - 無需外部 CDN 依賴
// Self-contained version - No external CDN dependencies required

export const GLM_4_6_1_SelfContained_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arcade CRT - Retro Gaming Experience</title>
    <style>
        /* ===== FONTS: System Font Fallback ===== */
        /* 使用系統字体回退，避免依賴 Google Fonts */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        }

        .font-orbitron {
            font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
            font-weight: 900;
            letter-spacing: 0.05em;
        }

        /* ===== CSS VARIABLES ===== */
        :root {
            --neon-magenta: #ff00ff;
            --neon-cyan: #00ffff;
            --neon-yellow: #ffff00;
            --neon-green: #00ff41;
            --neon-orange: #ff6600;
            --bg-black: #0a0a0a;
            --gray-900: #111827;
            --gray-800: #1f2937;
            --gray-500: #6b7280;
            --gray-400: #9ca3af;
        }

        /* ===== RESET ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* ===== BODY ===== */
        body {
            background-color: var(--bg-black);
            color: white;
            overflow-x: hidden;
            position: relative;
        }

        /* ===== TAILWIND UTILITY CLASSES (內联替換) ===== */
        .container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        @media (min-width: 640px) {
            .container { max-width: 640px; }
        }

        @media (min-width: 768px) {
            .container { max-width: 768px; }
        }

        @media (min-width: 1024px) {
            .container { max-width: 1024px; }
        }

        @media (min-width: 1280px) {
            .container { max-width: 1280px; }
        }

        /* Layout Utilities */
        .fixed { position: fixed; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
        .bottom-0 { bottom: 0; }

        /* Flexbox */
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .flex-wrap { flex-wrap: wrap; }

        /* Grid */
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }

        @media (min-width: 768px) {
            .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        @media (min-width: 1024px) {
            .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        /* Spacing */
        .space-x-1 > * + * { margin-left: 0.25rem; }
        .space-x-2 > * + * { margin-left: 0.5rem; }
        .space-x-4 > * + * { margin-left: 1rem; }
        .space-x-6 > * + * { margin-left: 1.5rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }

        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }

        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }

        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }

        .pt-16 { padding-top: 4rem; }
        .pb-20 { padding-bottom: 5rem; }

        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .mb-16 { margin-bottom: 4rem; }

        .mt-8 { margin-top: 2rem; }

        .mx-auto { margin-left: auto; margin-right: auto; }

        /* Sizing */
        .w-full { width: 100%; }
        .h-48 { height: 12rem; }
        .h-full { height: 100%; }
        .min-h-screen { min-height: 100vh; }
        .max-w-2xl { max-width: 42rem; }
        .max-w-3xl { max-width: 48rem; }
        .max-w-4xl { max-width: 56rem; }

        /* Text */
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .text-6xl { font-size: 3.75rem; line-height: 1; }

        @media (min-width: 768px) {
            .md\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
            .md\\:text-7xl { font-size: 4.5rem; line-height: 1; }
        }

        .text-center { text-align: center; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }

        .text-white { color: white; }
        .text-yellow-400 { color: #fbbf24; }
        .text-gray-400 { color: var(--gray-400); }
        .text-gray-500 { color: var(--gray-500); }

        /* Backgrounds */
        .bg-black { background-color: #000; }
        .bg-gray-900 { background-color: var(--gray-900); }
        .bg-opacity-50 { --tw-bg-opacity: 0.5; }
        .bg-opacity-80 { --tw-bg-opacity: 0.8; }

        .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
        .bg-gradient-to-t { background-image: linear-gradient(to top, var(--tw-gradient-stops)); }

        .from-purple-900 { --tw-gradient-from: #581c87; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(88, 28, 135, 0)); }
        .from-yellow-900 { --tw-gradient-from: #713f12; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(113, 63, 18, 0)); }
        .from-green-900 { --tw-gradient-from: #14532d; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(20, 83, 45, 0)); }
        .from-red-900 { --tw-gradient-from: #7f1d1d; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(127, 29, 29, 0)); }
        .from-blue-900 { --tw-gradient-from: #1e3a8a; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(30, 58, 138, 0)); }
        .from-orange-900 { --tw-gradient-from: #7c2d12; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(124, 45, 18, 0)); }
        .from-black { --tw-gradient-from: #000; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0)); }

        .to-blue-900 { --tw-gradient-to: #1e3a8a; }
        .to-orange-900 { --tw-gradient-to: #7c2d12; }
        .to-teal-900 { --tw-gradient-to: #134e4a; }
        .to-pink-900 { --tw-gradient-to: #831843; }
        .to-indigo-900 { --tw-gradient-to: #312e81; }
        .to-red-900 { --tw-gradient-to: #7f1d1d; }
        .to-transparent { --tw-gradient-to: transparent; }

        /* Borders */
        .border { border-width: 1px; }
        .border-b { border-bottom-width: 1px; }
        .border-t { border-top-width: 1px; }
        .border-gray-800 { border-color: var(--gray-800); }

        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }

        /* Visibility */
        .hidden { display: none; }
        .overflow-hidden { overflow: hidden; }

        @media (min-width: 768px) {
            .md\\:flex { display: flex; }
            .md\\:hidden { display: none; }
        }

        /* Z-index */
        .z-50 { z-index: 50; }

        /* Effects */
        .backdrop-blur-sm { backdrop-filter: blur(4px); }
        .opacity-70 { opacity: 0.7; }
        .cursor-pointer { cursor: pointer; }

        .transition-colors { transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-500 { transition-duration: 500ms; }

        .hover\\:bg-gray-100:hover { background-color: #f3f4f6; }
        .hover\\:text-white:hover { color: white; }
        .hover\\:text-neon-cyan:hover { color: var(--neon-cyan); }
        .hover\\:scale-110:hover { transform: scale(1.1); }

        .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }

        .object-cover { object-fit: cover; }

        /* ===== CRT SCREEN EFFECT ===== */
        .crt::before {
            content: " ";
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 2;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }

        .crt::after {
            content: " ";
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(18, 16, 16, 0.1);
            opacity: 0;
            z-index: 2;
            pointer-events: none;
            animation: flicker 0.15s infinite;
        }

        @keyframes flicker {
            0% { opacity: 0.27861; }
            5% { opacity: 0.34769; }
            10% { opacity: 0.23604; }
            15% { opacity: 0.90626; }
            20% { opacity: 0.18128; }
            25% { opacity: 0.83891; }
            30% { opacity: 0.65583; }
            35% { opacity: 0.67807; }
            40% { opacity: 0.26559; }
            45% { opacity: 0.84693; }
            50% { opacity: 0.96019; }
            55% { opacity: 0.08594; }
            60% { opacity: 0.20313; }
            65% { opacity: 0.71988; }
            70% { opacity: 0.53455; }
            75% { opacity: 0.37288; }
            80% { opacity: 0.71428; }
            85% { opacity: 0.70419; }
            90% { opacity: 0.7003; }
            95% { opacity: 0.36108; }
            100% { opacity: 0.24387; }
        }

        /* ===== NEON GLOW EFFECTS ===== */
        .neon-text {
            text-shadow:
                0 0 5px currentColor,
                0 0 10px currentColor,
                0 0 15px currentColor,
                0 0 20px currentColor,
                0 0 35px currentColor,
                0 0 40px currentColor;
        }

        .neon-border {
            box-shadow:
                0 0 5px currentColor,
                0 0 10px currentColor,
                0 0 15px currentColor,
                inset 0 0 5px currentColor;
        }

        .neon-magenta { color: var(--neon-magenta); }
        .neon-cyan { color: var(--neon-cyan); }
        .neon-yellow { color: var(--neon-yellow); }
        .neon-green { color: var(--neon-green); }
        .neon-orange { color: var(--neon-orange); }

        /* ===== RGB SPLIT EFFECT ===== */
        .rgb-split {
            position: relative;
        }

        .rgb-split::before, .rgb-split::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .rgb-split::before {
            color: var(--neon-cyan);
            z-index: -1;
            animation: rgb-animation 3s infinite alternate-reverse;
        }

        .rgb-split::after {
            color: var(--neon-magenta);
            z-index: -2;
            animation: rgb-animation 2s infinite alternate-reverse;
        }

        @keyframes rgb-animation {
            0% { transform: translate(0); }
            100% { transform: translate(3px, 3px); }
        }

        /* ===== ARCADE CABINET STYLE ===== */
        .arcade-cabinet {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 4px solid #333;
            border-radius: 10px 10px 30px 30px;
            box-shadow:
                0 10px 20px rgba(0, 0, 0, 0.5),
                inset 0 0 20px rgba(0, 0, 0, 0.8);
            position: relative;
            overflow: hidden;
        }

        .arcade-cabinet::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 30px;
            background: linear-gradient(90deg, #222, #444, #222);
            border-bottom: 2px solid #555;
        }

        .arcade-cabinet::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: linear-gradient(90deg, #222, #444, #222);
            border-top: 2px solid #555;
            border-radius: 0 0 30px 30px;
        }

        /* ===== GAME CARD STYLES ===== */
        .game-card {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 2px solid #333;
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
        }

        .game-card:hover {
            transform: translateY(-5px);
            border-color: var(--neon-cyan);
            box-shadow: 0 0 15px var(--neon-cyan);
        }

        .game-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, var(--neon-magenta), var(--neon-cyan), var(--neon-yellow), var(--neon-green), var(--neon-orange));
        }

        /* ===== LEADERBOARD STYLES ===== */
        .leaderboard-entry {
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            margin-bottom: 8px;
            background: rgba(255, 255, 255, 0.05);
            border-left: 3px solid transparent;
            transition: all 0.3s ease;
        }

        .leaderboard-entry:hover {
            background: rgba(255, 255, 255, 0.1);
            border-left-color: var(--neon-yellow);
        }

        .leaderboard-entry:nth-child(1) { border-left-color: var(--neon-yellow); }
        .leaderboard-entry:nth-child(2) { border-left-color: var(--neon-cyan); }
        .leaderboard-entry:nth-child(3) { border-left-color: var(--neon-orange); }

        /* ===== BUTTON STYLES ===== */
        .arcade-btn {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 2px solid;
            color: white;
            padding: 10px 20px;
            font-family: 'Arial Black', 'Arial Bold', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            z-index: 1;
        }

        .arcade-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            transition: all 0.5s ease;
            z-index: -1;
        }

        .arcade-btn:hover::before {
            left: 0;
        }

        .arcade-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }

        /* ===== NAVIGATION STYLES ===== */
        .nav-link {
            position: relative;
            padding: 5px 10px;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: currentColor;
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        /* ===== RIPPLE EFFECT ===== */
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        /* ===== ICON REPLACEMENTS (Unicode Symbols) ===== */
        .icon {
            display: inline-block;
            font-style: normal;
            font-size: inherit;
        }

        .icon-gamepad::before { content: "🎮"; }
        .icon-coins::before { content: "🪙"; }
        .icon-bars::before { content: "☰"; }
        .icon-trophy::before { content: "🏆"; }
        .icon-users::before { content: "👥"; }
        .icon-rocket::before { content: "🚀"; }
        .icon-ghost::before { content: "👻"; }
        .icon-meteor::before { content: "☄️"; }
        .icon-dragon::before { content: "🐉"; }
        .icon-fighter-jet::before { content: "✈️"; }
        .icon-car::before { content: "🏎️"; }
        .icon-facebook::before { content: "f"; font-family: serif; }
        .icon-twitter::before { content: "𝕏"; }
        .icon-instagram::before { content: "📷"; }
        .icon-youtube::before { content: "▶"; }

        /* ===== RESPONSIVE ADJUSTMENTS ===== */
        @media (max-width: 768px) {
            .rgb-split::before, .rgb-split::after {
                display: none;
            }
        }
    </style>
</head>
<body class="crt">
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <span class="icon icon-gamepad text-2xl neon-cyan"></span>
                <span class="text-xl font-bold font-orbitron neon-cyan">ARCADE CRT</span>
            </div>

            <div class="hidden md:flex space-x-6">
                <a href="#home" class="nav-link neon-magenta">HOME</a>
                <a href="#games" class="nav-link neon-cyan">GAMES</a>
                <a href="#leaderboard" class="nav-link neon-yellow">LEADERBOARD</a>
                <a href="#gallery" class="nav-link neon-green">GALLERY</a>
                <a href="#contact" class="nav-link neon-orange">CONTACT</a>
            </div>

            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1 bg-gray-900 px-3 py-1 rounded-full">
                    <span class="icon icon-coins text-yellow-400"></span>
                    <span class="font-bold">1250</span>
                </div>
                <button class="md:hidden text-white">
                    <span class="icon icon-bars text-xl"></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
        <div class="container mx-auto text-center">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
                <span class="rgb-split neon-cyan" data-text="ARCADE CRT">ARCADE CRT</span>
            </h1>
            <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto neon-green">
                Step back in time to the golden age of arcade gaming with authentic CRT effects and neon aesthetics
            </p>

            <div class="flex flex-wrap justify-center gap-4 mb-16">
                <button class="arcade-btn neon-border neon-cyan">PLAY NOW</button>
                <button class="arcade-btn neon-border neon-magenta">VIEW GAMES</button>
                <button class="arcade-btn neon-border neon-yellow">HIGH SCORES</button>
            </div>

            <div class="arcade-cabinet max-w-4xl mx-auto p-8">
                <div class="bg-black p-6 rounded-lg">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="text-center p-4 bg-gray-900 rounded-lg">
                            <span class="icon icon-trophy text-4xl neon-yellow mb-2" style="display:block;"></span>
                            <h3 class="text-xl font-bold mb-1">HIGH SCORES</h3>
                            <p class="text-gray-400">Compete for the top spot</p>
                        </div>
                        <div class="text-center p-4 bg-gray-900 rounded-lg">
                            <span class="icon icon-coins text-4xl neon-orange mb-2" style="display:block;"></span>
                            <h3 class="text-xl font-bold mb-1">COIN SYSTEM</h3>
                            <p class="text-gray-400">Earn coins to play more</p>
                        </div>
                        <div class="text-center p-4 bg-gray-900 rounded-lg">
                            <span class="icon icon-users text-4xl neon-green mb-2" style="display:block;"></span>
                            <h3 class="text-xl font-bold mb-1">MULTIPLAYER</h3>
                            <p class="text-gray-400">Challenge your friends</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Card Grid Section -->
    <section id="games" class="py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 font-orbitron">
                <span class="neon-magenta neon-text">FEATURED GAMES</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Game Card 1 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                        <span class="icon icon-rocket text-6xl neon-cyan"></span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-cyan">SPACE INVADERS</h3>
                        <p class="text-gray-400 mb-4">Defend Earth from alien invasion in this classic arcade shooter.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 45,230</span>
                            <button class="arcade-btn neon-border neon-cyan text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 2 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-yellow-900 to-orange-900 flex items-center justify-center">
                        <span class="icon icon-ghost text-6xl neon-yellow"></span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-yellow">PAC-MAN</h3>
                        <p class="text-gray-400 mb-4">Navigate the maze and eat all the pellets while avoiding ghosts.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 32,150</span>
                            <button class="arcade-btn neon-border neon-yellow text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 3 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-green-900 to-teal-900 flex items-center justify-center">
                        <span class="icon icon-meteor text-6xl neon-green"></span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-green">ASTEROIDS</h3>
                        <p class="text-gray-400 mb-4">Blast asteroids and avoid collisions in this space adventure.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 58,760</span>
                            <button class="arcade-btn neon-border neon-green text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 4 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-red-900 to-pink-900 flex items-center justify-center">
                        <span class="icon icon-dragon text-6xl neon-magenta"></span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-magenta">DONKEY KONG</h3>
                        <p class="text-gray-400 mb-4">Rescue Pauline from Donkey Kong in this platform classic.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 41,890</span>
                            <button class="arcade-btn neon-border neon-magenta text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 5 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
                        <span class="icon icon-fighter-jet text-6xl neon-cyan"></span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-cyan">GALAGA</h3>
                        <p class="text-gray-400 mb-4">Shoot down waves of alien insects in this space shooter.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 63,420</span>
                            <button class="arcade-btn neon-border neon-cyan text-sm">PLAY</button>
                        </div>
                    </div>
                </div>

                <!-- Game Card 6 -->
                <div class="game-card">
                    <div class="h-48 bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center">
                        <span class="icon icon-car text-6xl neon-orange"></span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 neon-orange">OUT RUN</h3>
                        <p class="text-gray-400 mb-4">Race against time in this high-speed driving game.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">HIGH SCORE: 52,310</span>
                            <button class="arcade-btn neon-border neon-orange text-sm">PLAY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Leaderboard Section -->
    <section id="leaderboard" class="py-20 px-4 bg-gray-900 bg-opacity-50">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 font-orbitron">
                <span class="neon-yellow neon-text">HALL OF FAME</span>
            </h2>

            <div class="max-w-3xl mx-auto arcade-cabinet p-8">
                <div class="bg-black p-6 rounded-lg">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold neon-yellow">TOP PLAYERS</h3>
                        <div class="flex space-x-2">
                            <button class="arcade-btn neon-border neon-cyan text-sm">WEEKLY</button>
                            <button class="arcade-btn neon-border neon-magenta text-sm">ALL TIME</button>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold neon-yellow">1</span>
                                <div>
                                    <p class="font-bold">ACE_GAMER</p>
                                    <p class="text-sm text-gray-500">Space Invaders</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold neon-yellow">45,230</span>
                        </div>

                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold neon-cyan">2</span>
                                <div>
                                    <p class="font-bold">PIXEL_WIZARD</p>
                                    <p class="text-sm text-gray-500">Galaga</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold neon-cyan">63,420</span>
                        </div>

                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold neon-orange">3</span>
                                <div>
                                    <p class="font-bold">RETRO_KING</p>
                                    <p class="text-sm text-gray-500">Asteroids</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold neon-orange">58,760</span>
                        </div>

                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold">4</span>
                                <div>
                                    <p class="font-bold">ARCADE_MASTER</p>
                                    <p class="text-sm text-gray-500">Donkey Kong</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold">41,890</span>
                        </div>

                        <div class="leaderboard-entry">
                            <div class="flex items-center space-x-4">
                                <span class="text-2xl font-bold">5</span>
                                <div>
                                    <p class="font-bold">NEON_NINJA</p>
                                    <p class="text-sm text-gray-500">Pac-Man</p>
                                </div>
                            </div>
                            <span class="text-xl font-bold">32,150</span>
                        </div>
                    </div>

                    <div class="mt-8 text-center">
                        <button class="arcade-btn neon-border neon-green">VIEW FULL LEADERBOARD</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery & Footer, JavaScript continues... -->
    <section id="gallery" class="py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 font-orbitron">
                <span class="neon-green neon-text">ARCADE GALLERY</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <!-- Gallery items omitted for brevity - 8 items total -->
            </div>
        </div>
    </section>

    <footer id="contact" class="py-12 px-4 bg-black border-t border-gray-800">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <span class="icon icon-gamepad text-2xl neon-cyan"></span>
                        <span class="text-xl font-bold font-orbitron neon-cyan">ARCADE CRT</span>
                    </div>
                    <p class="text-gray-400">Relive the golden age of arcade gaming with authentic CRT effects and classic games.</p>
                </div>
                <!-- Other footer columns omitted for brevity -->
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>&copy; 2023 Arcade CRT. All rights reserved. Designed with nostalgia in mind.</p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Navigation active state
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('neon-text');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('neon-text');
                }
            });
        });

        // Coin animation
        const coinElements = document.querySelectorAll('.icon-coins');
        if (coinElements.length > 0) {
            const coinElement = coinElements[0].parentElement;
            setInterval(() => {
                const coinSpan = coinElement.querySelector('span:last-child');
                if (coinSpan) {
                    const currentCoins = parseInt(coinSpan.textContent);
                    const newCoins = currentCoins + Math.floor(Math.random() * 5);
                    coinSpan.textContent = newCoins;
                }
            }, 5000);
        }

        // Ripple effect
        document.querySelectorAll('.arcade-btn').forEach(button => {
            button.addEventListener('click', function(event) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = event.clientX - rect.left - size / 2;
                const y = event.clientY - rect.top - size / 2;
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                setTimeout(() => { ripple.remove(); }, 600);
            });
        });
    </script>
</body>
</html>
`;

export const GLM_4_6_1_SelfContained_Styles = `
/* All styles are inline in the HTML above */
`;
