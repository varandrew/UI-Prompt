import { X } from 'lucide-react';

/**
 * PaperElements - 紙張剪貼風格共用組件
 * 包含 WashiTape、PushPin、PaperModal 等裝飾元素
 */

// Washi Tape Component - Adds a semi-transparent tape look
export const WashiTape = ({ color = "bg-rose-300", className = "" }) => (
  <div
    className={`absolute h-8 w-24 opacity-80 mix-blend-multiply shadow-sm ${color} ${className}`}
    style={{
      clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%, 1% 5%, 0% 10%, 2% 20%, 0% 30%, 1% 40%, 0% 50%, 2% 60%, 0% 70%, 1% 80%, 0% 90%)'
    }}
  />
);

// Push Pin Component
export const PushPin = ({ color = "bg-red-500", className = "" }) => (
  <div className={`absolute w-4 h-4 rounded-full shadow-md z-20 ${color} border-2 border-white/30 ${className}`}>
    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
    <div className="absolute top-3 left-1.5 w-1 h-3 bg-black/20 -z-10 transform skew-x-12"></div>
  </div>
);

// The Modal for Details (Looks like a zoomed-in paper)
export const PaperModal = ({ feature, onClose }) => {
  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#fdfbf7] p-8 md:p-12 shadow-2xl transform rotate-1 transition-all"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
        {/* Modal Tape */}
        <WashiTape color="bg-yellow-200" className="-top-4 left-1/2 -translate-x-1/2 rotate-2" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors group"
        >
          <X className="w-6 h-6 text-gray-500 group-hover:text-red-500" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className={`p-4 rounded-full mb-6 ${feature.iconBg} border-2 border-dashed border-gray-300 transform -rotate-3`}>
            <feature.icon className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          </div>

          <h3 className="text-3xl font-bold text-gray-800 font-handwriting mb-4 relative inline-block">
            {feature.title}
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-300 opacity-60 transform -skew-x-12"></span>
          </h3>

          <p className="text-lg text-gray-600 font-handwriting leading-relaxed mb-6">
            {feature.description}
          </p>

          <div className="w-full bg-white p-4 border border-gray-200 shadow-inner rounded-sm">
            <h4 className="text-sm uppercase tracking-widest text-gray-400 font-sans mb-2">Technical Specs</h4>
            <p className="text-sm text-gray-500 font-sans">
              This component is fully responsive and adheres to the latest WCAG standards.
              Designed to be drop-in ready for your {feature.title.toLowerCase()} needs.
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-8 px-6 py-2 bg-gray-800 text-white font-handwriting text-lg rounded-sm hover:bg-gray-700 hover:shadow-lg transition-all transform hover:-rotate-1"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

// Paper Card Wrapper with shadow effects
export const PaperCard = ({
  children,
  color = "bg-[#fff9c4]",
  rotation = "rotate-1",
  className = "",
  onClick
}) => (
  <div
    onClick={onClick}
    className={`
      ${color}
      ${rotation}
      p-8 pt-12 min-h-[300px]
      paper-shadow group-hover:paper-shadow-hover
      flex flex-col items-center
      relative rounded-sm
      border border-black/5
      cursor-pointer
      group
      hover:rotate-0 hover:z-20 hover:scale-105
      transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      ${className}
    `}
  >
    {children}
  </div>
);
