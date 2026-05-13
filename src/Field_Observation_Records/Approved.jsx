import React from 'react';

// Make sure 'export default' is right here!
export default function Approved({ onConfirm, onCancel }) {
  return (
    <div className="bg-[#EBF5EE] p-10 rounded-2xl border border-emerald-100 max-w-md w-full shadow-2xl text-center">
      <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Approve Entry</h2>
      {/* ... rest of your code ... */}
      <div className="flex gap-4">
        <button onClick={onConfirm} className="flex-1 bg-[#56765B] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-900 shadow-xl">
          Approve
        </button>
        <button onClick={onCancel} className="bg-white text-slate-400 border border-slate-200 px-8 py-4 rounded-xl font-black uppercase tracking-widest">
          Cancel
        </button>
      </div>
    </div>
  );
}