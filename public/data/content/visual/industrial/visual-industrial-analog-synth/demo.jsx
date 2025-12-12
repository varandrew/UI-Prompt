import React, { useState, useEffect, useRef } from 'react';
// Import lucide icons as needed
// import { Settings, Menu, X } from 'lucide-react';

export default function DemoComponent() {
  const [state, setState] = useState(false);

  return (
    <div className="demo-container p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">React Template Demo</h2>
        {/* TODO: 添加您的 React JSX 代碼 */}
        <button
          onClick={() => setState(!state)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle: {state ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
}
