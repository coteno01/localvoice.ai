import React, { useState } from 'react';
import { Languages, Mic, Play, Square } from 'lucide-react';

function VoiceClone() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setRecordingComplete(true);
    } else {
      setIsRecording(true);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Voice Cloning</h2>
      
      {/* Recording Section */}
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Record Your Voice</h3>
          <span className="text-sm text-gray-400">
            {isRecording ? 'Recording...' : recordingComplete ? 'Recording complete' : 'Ready to record'}
          </span>
        </div>
        
        <div className="flex justify-center mb-6">
          <button
            onClick={handleRecord}
            className={`p-6 rounded-full transition-colors ${
              isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isRecording ? <Square size={24} /> : <Mic size={24} />}
          </button>
        </div>
      </div>

      {/* Language and Text Section */}
      <div className="space-y-4">
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
          <label className="block text-sm font-medium mb-2">Text to Convert</label>
          <textarea
            className="input-field h-32 resize-none"
            placeholder="Enter the text you want to convert..."
          />
        </div>

        <button className="btn-primary w-full flex items-center justify-center gap-2">
          <Play size={20} />
          Generate Voice
        </button>
      </div>
    </div>
  );
}

export default VoiceClone;