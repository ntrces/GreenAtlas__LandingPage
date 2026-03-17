// src/Field_Observation_Records/FO_TimelineView_Archived.jsx
import React from 'react';

export default function FO_TimelineView_Archived({ records = [] }) {
  // Filter for only archived records if they are passed in
  const archivedRecords = records.filter(r => r.status === 'ARCHIVED');

  if (archivedRecords.length === 0) {
    return (
      <div className="p-20 text-center bg-white rounded-xl border border-dashed border-slate-200">
        <span className="text-4xl opacity-20">📦</span>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-4">No archived records found</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden animate-in fade-in duration-500">
      <div className="p-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Archived Records</h3>
        <span className="text-[9px] font-black text-slate-300 uppercase">{archivedRecords.length} Items</span>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50/50 border-b border-slate-100">
          <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Observer</th>
            <th className="px-6 py-4">Location</th>
            <th className="px-6 py-5 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 text-[11px] font-bold text-slate-400">
          {archivedRecords.map((rec) => (
            <tr key={rec.id} className="opacity-70 hover:opacity-100 transition-opacity">
              <td className="px-6 py-4">{rec.id}</td>
              <td className="px-6 py-4">{rec.date}</td>
              <td className="px-6 py-4">{rec.observer}</td>
              <td className="px-6 py-4">{rec.location}</td>
              <td className="px-6 py-4 text-center">
                <button className="text-emerald-600 hover:scale-110 transition-transform">🔄 Unarchive</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}