import React from 'react';
import { Languages, Sparkles, Video } from 'lucide-react';

function MarketingStudio() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Marketing Studio</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Product Description</label>
          <textarea
            className="input-field h-32 resize-none"
            placeholder="Write your product description here..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Target Language</label>
            <div className="relative">
              <select className="input-field appearance-none pr-10">
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="pt">Portuguese</option>
              </select>
              <Languages className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tone</label>
            <div className="relative">
              <select className="input-field appearance-none">
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="friendly">Friendly</option>
                <option value="formal">Formal</option>
              </select>
            </div>
          </div>
        </div>

        <button className="btn-primary w-full flex items-center justify-center gap-2">
          <Sparkles size={20} />
          Generate Marketing Video
        </button>

        {/* Preview Section */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Preview</h3>
            <button className="btn-secondary flex items-center gap-2">
              <Video size={20} />
              Download Video
            </button>
          </div>
          
          <div className="bg-gray-950 rounded-lg aspect-video flex items-center justify-center">
            <p className="text-gray-500">Video preview will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingStudio;