import React from 'react';

export default function FOSpeciesView({ onDetails, onArchive }) {
  const speciesData = [
    { name: 'Philippine Orchid', scientific: 'Phalaenopsis amabilis', status: 'Vulnerable', obs: 1, count: 2, last: '15/02/2026' },
    { name: 'Philippine Orchid', scientific: 'Phalaenopsis amabilis', status: 'Vulnerable', obs: 1, count: 2, last: '15/02/2026' },
    { name: 'Philippine Orchid', scientific: 'Phalaenopsis amabilis', status: 'Vulnerable', obs: 1, count: 2, last: '15/02/2026' }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden animate-in slide-in-from-right duration-500">
      <div className="p-4 border-b border-slate-50 flex justify-between items-center bg-white">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Species View</h3>
        <span className="text-[9px] font-black text-slate-300 uppercase bg-slate-50 px-2 py-1 rounded">2 Records</span>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 bg-slate-50/30">
            <th className="px-8 py-4">Species Name</th>
            <th className="px-8 py-4">Scientific Name</th>
            <th className="px-8 py-4">Conservation Status</th>
            <th className="px-8 py-4">Observations</th>
            <th className="px-8 py-4">Latest Species Count</th>
            <th className="px-8 py-4">Last Observed</th>
            <th className="px-8 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 text-[11px] font-bold">
          {speciesData.map((s, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5 flex items-center gap-3">
                <span className="text-emerald-600 opacity-50">🌿</span>
                <span className="font-black text-slate-800">{s.name}</span>
              </td>
              <td className="px-8 py-5 text-slate-400 italic">{s.scientific}</td>
              <td className="px-8 py-5">
                <span className="bg-orange-50 text-orange-500 border border-orange-100 px-2 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-widest">
                  {s.status}
                </span>
              </td>
              <td className="px-8 py-5 font-black text-slate-700">{s.obs}</td>
              <td className="px-8 py-5 text-slate-500">{s.count}</td>
              <td className="px-8 py-5 text-slate-400">📅 {s.last}</td>
              <td className="px-8 py-5 text-center">
                <div className="flex justify-center gap-4 text-slate-300">
                  <button onClick={() => onDetails(s)} className="hover:text-emerald-600 transition-colors text-lg">👁️</button>
                  <button onClick={() => onArchive(s)} className="hover:text-red-500 transition-colors text-lg">📦</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}