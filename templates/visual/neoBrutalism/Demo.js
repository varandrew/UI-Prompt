// Neo-Brutalism Demo - Mini 預覽（用於 StyleCard）

export const demoHTML = `
  <div class="border-b-12 border-r-12 border-b-black border-r-black bg-gradient-to-br from-yellow-200 via-lime-200 to-green-200 p-8 transform rotate-3">
    <div class="border-b-8 border-r-8 border-b-black border-r-black p-4 transform -rotate-2">
      <div class="border-b-4 border-r-4 border-b-black border-r-black p-2 transform rotate-1">
        <div class="space-y-6">
          <button class="neo-brutal-button">
            CLICK
          </button>
          <div class="flex gap-4 justify-center flex-wrap">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-black shadow-[6px_6px_0_#000] transform rotate-[25deg] transition-all duration-200 hover:scale-125 hover:rotate-[65deg] cursor-pointer"></div>
            <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 border-4 border-black shadow-[6px_6px_0_#000] transform -rotate-[20deg] transition-all duration-200 hover:scale-125 hover:-rotate-[60deg] cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const customStyles = `
  .neo-brutal-button {
    position: relative;
    padding: 1.5rem 3rem;
    background: linear-gradient(to bottom right, #ef4444, #ec4899, #dc2626);
    color: black;
    font-weight: 900;
    font-size: 1.25rem;
    border: 6px solid black;
    box-shadow: 8px 8px 0 #000;
    transform: rotate(-6deg);
    transition: all 0.2s;
    cursor: pointer;
  }
  .neo-brutal-button:hover {
    box-shadow: 16px 16px 0 #000;
    transform: scale(1.1) rotate(-12deg);
  }
  .neo-brutal-button:active {
    transform: rotate(0deg);
  }
`;
