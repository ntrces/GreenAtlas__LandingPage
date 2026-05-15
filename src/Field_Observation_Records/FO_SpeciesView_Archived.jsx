// src/Field_Observation_Records/FO__SpeciesView_Archived.jsx
import React from 'react';

export default function FO_SpeciesView_Archived() {
  const archivedSpecies = [
    { name: 'Philippine Orchid', scientific: 'Phalaenopsis amabilis', status: 'Vulnerable', obs: 1, last: '15/02/2026' }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden opacity-75">
      <div className="p-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Archived Species Records</h3>
        <span className="bg-slate-200 text-slate-500 px-2 py-0.5 rounded text-[8px] font-black uppercase">Archived</span>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50/30 border-b border-slate-100">
          <tr className="text-[10px] font-black text-slate-300 uppercase">
            <th className="px-8 py-4">Species Name</th>
            <th className="px-8 py-4">Scientific Name</th>
            <th className="px-8 py-4">Status</th>
            <th className="px-8 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[11px] font-bold text-slate-400">
          {archivedSpecies.map((s, i) => (
            <tr key={i} className="border-b border-slate-50 last:border-0">
              <td className="px-8 py-5 flex items-center gap-3">
                <span className="grayscale">🌿</span> {s.name}
              </td>
              <td className="px-8 py-5 italic">{s.scientific}</td>
              <td className="px-8 py-5">
                 <span className="bg-slate-100 text-slate-400 px-2 py-0.5 rounded text-[8px] uppercase tracking-tighter">
                   {s.status}
                 </span>
              </td>
              <td className="px-8 py-5 text-center">
                <button className="text-emerald-600 hover:text-emerald-800 transition-colors uppercase text-[9px] font-black tracking-widest">
                  Restore
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}