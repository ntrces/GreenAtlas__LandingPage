import React from 'react';

export default function Approved({ onConfirm, onCancel }) {
  return (
    <div className="bg-[#EBF5EE] p-10 rounded-2xl border border-emerald-100 max-w-md w-full shadow-2xl text-center">
      <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Approve Entry</h2>
      <p className="text-slate-400 text-sm mt-2 font-medium">This entry will be published to the permanent scientific record.</p>
      
      <div className="my-8 bg-white p-6 rounded-xl border border-emerald-50 text-left">
        <p className="font-black text-slate-800">Jade Vine</p>
        <p className="text-xs text-slate-400 font-bold">FD-004 • by Ranger Silva</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-center gap-4 text-left mb-8">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm font-bold">✓</div>
        <p className="text-emerald-800 text-xs font-bold leading-tight">This entry meets scientific standards and will be added to the validated database.</p>
      </div>

      <div className="flex gap-4">
        <button onClick={onConfirm} className="flex-1 bg-[#56765B] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-xl">
          Approve
        </button>
        <button onClick={onCancel} className="bg-white text-slate-400 border border-slate-200 px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-slate-50">
          Cancel
        </button>
      </div>
    </div>
  );
}