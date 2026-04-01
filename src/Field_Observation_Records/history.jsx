import React from 'react';

export default function History({ officerName, onClose, onSelectRecord }) {
  // Mock data to match image_b9dabe.png
  const historyRecords = [
    { 
      id: 'FO-12345', 
      obsCount: 1, 
      location: 'Cavite Protected Area', 
      date: '15/02/2026', 
      time: '2026-02-15 08:30 AM', 
      observers: 2, 
      details: '1 wildlife, 0 other observations' 
    }
  ];

  return (
    <div className="bg-[#EBF5EE] p-8 rounded-2xl border border-emerald-100 max-w-xl w-full shadow-2xl relative animate-in zoom-in duration-300">
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors text-xl"
      >
        ✕
      </button>
      
      {/* Header */}
      <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Field Officer Submission History</h2>
      <p className="text-emerald-700/60 text-sm mt-1 font-bold">
        All BMS field diary entries submitted by <span className="text-emerald-900">{officerName || 'Juan Dela Cruz'}</span>
      </p>

      <div className="mt-8 space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {historyRecords.map((rec) => (
          <div 
            key={rec.id} 
            className="bg-white border border-emerald-50 p-6 rounded-2xl hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <span className="text-lg font-black text-slate-800">{rec.id}</span>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {rec.obsCount} observations
                </span>
              </div>
              <button 
                onClick={() => onSelectRecord(rec)}
                className="text-slate-300 group-hover:text-emerald-600 transition-colors text-lg"
              >
                👁️
              </button>
            </div>
            
            <p className="text-lg font-bold text-slate-600 mt-2 italic">{rec.location}</p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-[11px] font-bold text-slate-300 uppercase tracking-tighter">
               <span className="flex items-center gap-1">📅 {rec.date}</span>
               <span className="flex items-center gap-1">🕒 {rec.time}</span>
               <span className="flex items-center gap-1">👥 {rec.observers} observers</span>
            </div>
            
            <p className="text-xs font-bold text-emerald-600/40 mt-3 italic">{rec.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}