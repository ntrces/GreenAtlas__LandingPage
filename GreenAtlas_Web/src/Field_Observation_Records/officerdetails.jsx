import React from 'react';

export default function RecordView({ entry, onClose }) {
  return (
    <div className="bg-[#EBF5EE] rounded-2xl border border-emerald-100 overflow-hidden shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300">
      <div className="p-6 border-b border-emerald-50 bg-white flex justify-between items-start sticky top-0 z-10">
        <div>
          <h2 className="text-lg font-black text-emerald-950 uppercase">Observation Record Details</h2>
          <p className="text-xs font-bold text-slate-400 mt-1">Entry ID: {entry?.id}</p>
        </div>
        <button onClick={onClose} className="text-slate-300 hover:text-slate-600 text-xl font-bold">✕</button>
      </div>

      <div className="p-6 space-y-4">
        <div className="bg-white p-4 rounded-xl border border-emerald-50 shadow-sm">
           <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase">
             <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div> VALIDATED ENTRY
           </div>
           <p className="text-xs text-emerald-800/60 font-bold mt-1">Approved on Mar 9, 2026 by Admin User</p>
        </div>

        {/* Section Wrapper */}
        <div className="bg-white rounded-xl border border-emerald-50 overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Submitted By</div>
          <div className="p-4 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-black">JD</div>
             <div>
                <p className="text-sm font-black text-slate-700">{entry?.observer || 'Juan Dela Cruz'}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">User ID: {entry?.id}</p>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-emerald-50 p-6 space-y-4 shadow-sm">
          <DetailRow label="Date of Observation" value={entry?.date || '15/02/2026'} icon="📅" />
          <DetailRow label="Location" value="Cavite Protected Area" subValue="Cavite, Region IV-A (CALABARZON)" icon="📍" />
          <DetailRow label="Weather Conditions" value="Sunny, 28°C" icon="☀️" />
        </div>

        {/* Observations Section */}
        <div className="bg-white rounded-xl border border-emerald-50 overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Observations (1)</div>
          <div className="p-6">
             <div className="flex gap-2 mb-4">
               <span className="bg-slate-100 text-slate-400 text-[10px] font-black px-2 py-1 rounded">09:30 AM</span>
               <span className="bg-[#4B6F52] text-white text-[10px] font-black px-2 py-1 rounded">Wildlife</span>
             </div>
             <p className="text-[11px] text-slate-400 font-bold italic mb-4">Habitat: Tropical lowland evergreen rain forest, Secondary growth forest</p>
             <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                <p className="font-black text-emerald-900 text-base">Philippine Eagle</p>
                <div className="grid grid-cols-2 gap-y-3 mt-4 text-[10px] font-bold text-emerald-800/40">
                  <p>Local Name: <span className="text-emerald-800">Haribon</span></p>
                  <p>Taxon: <span className="text-emerald-800">Aves</span></p>
                  <p>Count: <span className="text-emerald-800">2</span></p>
                  <p>Observation Type: <span className="text-emerald-800">Seen, Heard</span></p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailRow = ({ label, value, subValue, icon }) => (
  <div className="border-b border-slate-50 last:border-0 pb-3">
    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{label}</p>
    <p className="text-sm font-black text-slate-700 mt-1">{icon} {value}</p>
    {subValue && <p className="text-[10px] text-slate-400 font-bold italic mt-0.5">{subValue}</p>}
  </div>
);