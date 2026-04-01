import React, { useState } from 'react';

export default function Reject({ entry, onConfirm, onCancel }) {
  const [feedback, setFeedback] = useState('');

  return (
    <div className="bg-[#EBF5EE] p-8 rounded-2xl border border-emerald-100 max-w-md w-full shadow-2xl animate-in zoom-in duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight">Reject Entry</h2>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 text-lg">✕</button>
      </div>
      <p className="text-slate-400 text-xs font-bold leading-relaxed mb-6">
        Provide detailed feedback to help the field officer improve their documentation.
      </p>
      
      {/* Entry Info Card */}
      <div className="bg-white p-5 rounded-xl border border-emerald-50 mb-6 shadow-sm">
        <p className="font-black text-slate-800 text-sm">{entry?.speciesName || 'Jade Vine'}</p>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">
          {entry?.id || 'FD-004'} • by {entry?.observer || 'Ranger Silva'}
        </p>
      </div>

      {/* Feedback Form */}
      <div className="space-y-2">
        <label className="text-[9px] font-black text-emerald-800 uppercase tracking-widest ml-1">
          Feedback for Field Officer *
        </label>
        <textarea 
          placeholder="Explain what needs to be corrected or improved..."
          className="w-full h-32 p-4 bg-white border border-emerald-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20 text-xs font-medium placeholder:text-slate-300 transition-all resize-none"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter px-1">
          Provide specific, constructive feedback (minimum 10 characters)
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-8">
        <button 
          onClick={() => onConfirm(feedback)}
          disabled={feedback.length < 10}
          className="flex-1 bg-[#E12B47] text-white py-3.5 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-red-700 disabled:opacity-30 disabled:hover:bg-[#E12B47] transition-all shadow-lg"
        >
          Reject
        </button>
        <button 
          onClick={onCancel}
          className="px-6 bg-[#E6F3EA] text-emerald-900 py-3.5 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-emerald-100 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}