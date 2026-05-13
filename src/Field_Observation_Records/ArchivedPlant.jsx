// src/Field_Observation_Records/ArchivedPlant.jsx
import React from 'react';

export default function ArchivedPlant({ recordId, onConfirm, onCancel }) {
  return (
    <div className="bg-[#EBF5EE] p-10 rounded-3xl border border-emerald-100 max-w-md w-full shadow-2xl animate-in zoom-in duration-300">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Archive Plant</h2>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 text-xl">✕</button>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-emerald-50 mb-8 shadow-sm">
        <p className="text-sm font-medium text-slate-600 leading-relaxed">
          Are you sure you want to archive observation record <span className="font-black text-emerald-800">{recordId || 'BMS-006'}</span>?
        </p>
        <p className="text-[10px] text-slate-400 font-bold uppercase mt-4 leading-relaxed">
          This will remove it from the active list but preserve it in the archive database.
        </p>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={onConfirm}
          className="flex-1 bg-[#56765B] text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-emerald-900 shadow-xl transition-all"
        >
          Yes, Archive
        </button>
        <button 
          onClick={onCancel}
          className="flex-1 bg-white text-slate-400 py-4 rounded-xl font-black uppercase text-xs tracking-widest border border-slate-100 hover:bg-slate-50 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}