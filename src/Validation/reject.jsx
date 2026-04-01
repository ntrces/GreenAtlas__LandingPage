import React, { useState } from 'react';

export default function Reject({ onConfirm, onCancel }) {
  const [feedback, setFeedback] = useState('');

  return (
    <div className="bg-[#EBF5EE] p-10 rounded-2xl border border-emerald-100 max-w-md w-full shadow-2xl">
      <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Reject Entry</h2>
      <p className="text-slate-400 text-sm mt-2 font-medium">Provide detailed feedback to help the field officer improve their documentation.</p>
      
      <div className="my-6 bg-white p-6 rounded-xl border border-emerald-50">
        <p className="font-black text-slate-800">Jade Vine</p>
        <p className="text-xs text-slate-400 font-bold">FD-004 • by Ranger Silva</p>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-emerald-700 uppercase ml-1">Feedback for Field Officer *</label>
        <textarea 
          placeholder="Explain what needs to be corrected or improved..."
          className="w-full h-32 p-4 bg-white border border-emerald-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Provide specific, constructive feedback (minimum 10 characters)</p>
      </div>

      <div className="flex gap-4 mt-8">
        <button 
          onClick={() => onConfirm(feedback)}
          className="flex-1 bg-[#E12B47] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl"
        >
          Reject
        </button>
        <button onClick={onCancel} className="bg-[#E6F3EA] text-emerald-900 px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-100 transition-all">
          Cancel
        </button>
      </div>
    </div>
  );
}