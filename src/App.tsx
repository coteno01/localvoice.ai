import React, { useState } from 'react';
import { Mic, Video } from 'lucide-react';
import Header from './components/Header';
import VoiceClone from './components/VoiceClone';
import MarketingStudio from './components/MarketingStudio';

function App() {
  const [activeTab, setActiveTab] = useState<'voice' | 'marketing'>('voice');

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'voice' ? 'tab-active' : 'tab-inactive'
            }`}
            onClick={() => setActiveTab('voice')}
          >
            <Mic size={20} />
            Voice Clone
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'marketing' ? 'tab-active' : 'tab-inactive'
            }`}
            onClick={() => setActiveTab('marketing')}
          >
            <Video size={20} />
            Marketing Studio
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 rounded-xl p-6">
          {activeTab === 'voice' ? <VoiceClone /> : <MarketingStudio />}
        </div>
      </main>
    </div>
  );
}

export default App;