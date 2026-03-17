import React from 'react';

export default function History({ officerName, onClose }) {
  return (
    <div className="bg-[#EBF5EE] p-8 rounded-2xl border border-emerald-100 max-w-xl w-full shadow-2xl relative">
      <button onClick={onClose} className="absolute right-6 top-6 text-slate-400 hover:text-slate-600">✕</button>
      
      <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Field Officer Submission History</h2>
      <p className="text-emerald-700/60 text-sm mt-1 font-bold">All BMS field diary entries submitted by {officerName || 'Juan Dela Cruz'}</p>

      <div className="mt-8 space-y-4">
        {/* Entry Card */}
        <div className="bg-white border border-emerald-50 p-6 rounded-2xl hover:shadow-md transition-shadow cursor-pointer group">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <span className="text-lg font-black text-slate-800">FO-12345</span>
              <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-full">1 observations</span>
            </div>
            <span className="text-slate-300 group-hover:text-emerald-600 transition-colors">👁</span>
          </div>
          
          <p className="text-lg font-bold text-slate-600 mt-2 italic">Cavite Protected Area</p>
          
          <div className="flex items-center gap-6 mt-4 text-[11px] font-bold text-slate-300 uppercase tracking-tighter">
             <span>📅 15/02/2026</span>
             <span>🕒 2026-02-15 08:30 AM</span>
             <span>👥 2 observers</span>
          </div>
          <p className="text-xs font-bold text-emerald-600/40 mt-3">1 wildlife, 0 other observations</p>
        </div>

        {/* You can map more entries here */}
      </div>
    </div>
  );
}