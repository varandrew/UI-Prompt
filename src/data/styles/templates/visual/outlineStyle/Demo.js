// Demo.js - StyleCard 預覽組件
// 用於在 AllStylesPage 的瀑布流中显示 outlineStyle 的縮略圖

export const demoHTML = `
  <div class="w-full h-full flex flex-col items-center justify-center p-6 gap-6 bg-white">
    <svg width="120" height="120" viewBox="0 0 120 120" class="outline-icon">
      <circle cx="60" cy="60" r="55" fill="none" stroke="#000" stroke-width="2"/>
      <circle cx="45" cy="50" r="5" fill="none" stroke="#000" stroke-width="2"/>
      <circle cx="75" cy="50" r="5" fill="none" stroke="#000" stroke-width="2"/>
      <path d="M 40 75 Q 60 85 80 75" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <div class="flex gap-4">
      <div class="outline-card w-16 h-16 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"></div>
      <div class="outline-card w-16 h-16 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"></div>
      <div class="outline-card w-16 h-16 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"></div>
    </div>
  </div>
`;

export const customStyles = `
  .outline-icon {
    animation: outline-draw 3s ease-in-out infinite;
  }

  @keyframes outline-draw {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  .outline-card {
    position: relative;
  }

  .outline-card::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    transition: border-color 0.3s ease;
  }

  .outline-card:hover::after {
    border-color: #3b82f6;
  }
`;
