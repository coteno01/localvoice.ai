import React from 'react';
import { Mic2 } from 'lucide-react';

function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <Mic2 size={32} className="text-blue-500" />
          <h1 className="text-2xl font-bold text-white">LocalVoice</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;