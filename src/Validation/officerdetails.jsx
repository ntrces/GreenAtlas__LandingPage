import React from 'react';

export default function OfficerDetails({ entry, onApprove, onReject, onClose }) {
  return (
    <div className="bg-[#EBF5EE] rounded-2xl border border-emerald-100 overflow-hidden shadow-2xl max-w-2xl w-full">
      {/* Header */}
      <div className="p-6 border-b border-emerald-50 bg-white flex justify-between items-start">
        <div>
          <h2 className="text-xl font-black text-emerald-950 uppercase">BMS Field Diary Entry</h2>
          <p className="text-xs font-bold text-slate-400 mt-1">{entry?.id} - Cavite Protected Area - 15/02/2026</p>
        </div>
        <button onClick={onClose} className="text-slate-300 hover:text-slate-600">✕</button>
      </div>

      <div className="p-6 space-y-6">
        {/* Basic Info Grid */}
        <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-emerald-50">
          <div>
             <p className="text-[10px] font-black text-slate-300 uppercase">Entry ID</p>
             <p className="font-bold text-slate-700">{entry?.id || 'FO-12345'}</p>
          </div>
          <div>
             <p className="text-[10px] font-black text-slate-300 uppercase">Status</p>
             <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-bold">Sent</span>
          </div>
          <div className="mt-4">
             <p className="text-[10px] font-black text-slate-300 uppercase">Submitted By</p>
             <p className="font-bold text-slate-700">👤 {entry?.submittedBy || 'Juan Dela Cruz'}</p>
          </div>
          <div className="mt-4">
             <p className="text-[10px] font-black text-slate-300 uppercase">Submitted At</p>
             <p className="font-bold text-slate-700">2026-02-15 08:30 AM</p>
          </div>
        </div>

        {/* Observer Team */}
        <div className="bg-white rounded-xl border border-emerald-50 overflow-hidden">
          <div className="bg-slate-50 px-4 py-2 text-[10px] font-black text-slate-400 uppercase">Observer Team (2)</div>
          <div className="p-4 space-y-4">
            <div><p className="font-bold text-slate-700">Juan Dela Cruz</p><p className="text-[10px] text-slate-400">Team Leader</p></div>
            <div className="border-t border-slate-50 pt-3"><p className="font-bold text-slate-700">Maria Santos</p><p className="text-[10px] text-slate-400">Field Assistant</p></div>
          </div>
        </div>

        {/* Detailed Observation Data */}
        <div className="bg-white rounded-xl border border-emerald-50 p-6">
          <div className="flex justify-between mb-4">
            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold italic">Observation #1</span>
            <span className="text-xs font-bold text-slate-300">🕒 09:30 AM</span>
          </div>
          <p className="text-[10px] font-black text-slate-300 uppercase">Observation Type</p>
          <p className="text-lg font-black text-slate-800 mb-4">Wildlife</p>
          
          <div className="flex gap-2 mb-6">
            <span className="bg-emerald-100/50 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded">Tropical lowland evergreen rain forest</span>
            <span className="bg-emerald-100/50 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded">Secondary growth forest</span>
          </div>

          <div className="bg-emerald-50/30 border border-emerald-100 rounded-lg p-4">
             <p className="text-[10px] font-black text-emerald-600 uppercase mb-3">Wildlife Data</p>
             <div className="grid grid-cols-2 gap-y-4 text-xs font-medium">
                <div><p className="text-slate-400">Taxon:</p><p className="text-slate-700">Aves</p></div>
                <div><p className="text-slate-400">Common Name:</p><p className="text-slate-700">Philippine Eagle</p></div>
                <div><p className="text-slate-400">Local Name:</p><p className="text-slate-700">Haribon</p></div>
                <div><p className="text-slate-400">Count:</p><p className="text-slate-700">2</p></div>
             </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={onApprove} className="bg-[#56765B] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 shadow-lg">
            ✓ APPROVE
          </button>
          <button onClick={onReject} className="bg-[#E12B47] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 shadow-lg">
            ✕ REJECT W/ FEEDBACK
          </button>
        </div>
      </div>
    </div>
  );
}