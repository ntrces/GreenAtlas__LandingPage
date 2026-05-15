
// --- Imports from your folder (Cleaned) ---
import React, { useState } from 'react';
import FO_TimelineView_Archived from "./FO_TimelineView_Archived";
import FOSpeciesView from "./FO_SpeciesView";
// FIX: Changed from double __ to single _
import FO_SpeciesView_Archived from "./FO_SpeciesView_Archived"; 
import ArchivedPlant from "./ArchivedPlant";
import RecordView from "./officerdetails";
import SpeciesDetail from "./FO_SpeciesView";

export default function FO_TimelineView() {
  const [view, setView] = useState('timeline'); 
  const [statusFilter, setStatusFilter] = useState('Active'); 
  const [activeModal, setActiveModal] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const records = [
    { id: 'FO-12345', date: '15/02/2026', observer: 'Juan Dela Cruz', type: '1 wildlife, 0 other observations', location: 'Cavite Protected Area', speciesCount: '1', status: 'VALIDATED' },
    { id: 'BMS-005', date: '2026-03-01', observer: 'Ranger Reyes', type: '2 observations', location: 'Cavite Protected Area', speciesCount: 'N/A', status: 'VALIDATED' }
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans text-slate-700">
      
      {/* 1. HEADER & STATS (Persistent across views) */}
      <header className="flex justify-between items-center mb-10">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">🌿</div>
          Welcome, Admin Andrew
        </h2>
        <div className="flex items-center gap-4">
          <span className="opacity-40">🔔</span>
          <button className="bg-white border border-slate-100 px-4 py-2 rounded-lg text-xs font-bold shadow-sm">👤 DENR Admin</button>
        </div>
      </header>

      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Field Observation Records</h1>
          <p className="text-[10px] text-slate-400 font-black mt-1 uppercase tracking-widest">Validated entries · 2 total records</p>
        </div>
        
        {/* VIEW TOGGLE BUTTONS */}
        <div className="flex bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
          <button 
            onClick={() => setView('timeline')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[10px] font-black uppercase transition-all ${view === 'timeline' ? 'bg-[#4B6F52] text-white shadow-md' : 'text-slate-400'}`}
          >
            Timeline View
          </button>
          <button 
            onClick={() => setView('species')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[10px] font-black uppercase transition-all ${view === 'species' ? 'bg-[#4B6F52] text-white shadow-md' : 'text-slate-400'}`}
          >
            Species View
          </button>
        </div>
      </div>

      {/* 2. FILTER BAR */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 flex gap-4 shadow-sm">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30">🔍</span>
          <input type="text" placeholder="Search records..." className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border-none rounded-lg text-xs font-medium outline-none" />
        </div>
        <select onChange={(e) => setStatusFilter(e.target.value)} className="bg-white border border-slate-200 text-slate-400 text-[10px] font-black px-4 rounded-lg outline-none cursor-pointer">
          <option value="Active">Active</option>
          <option value="Archived">Archived</option>
        </select>
      </div>

      {/* 3. DYNAMIC CONTENT SWITCHING */}
      <div className="animate-in fade-in duration-500">
        {view === 'timeline' ? (
          statusFilter === 'Active' ? (
            <TimelineTable records={records} onEye={(r) => { setSelectedItem(r); setActiveModal('details'); }} onBox={(r) => { setSelectedItem(r); setActiveModal('archive'); }} />
          ) : (
            <FO_TimelineView_Archived />
          )
        ) : (
          statusFilter === 'Active' ? (
            <FOSpeciesView onDetails={(s) => { setSelectedItem(s); setActiveModal('species_list'); }} onArchive={() => setActiveModal('archive')} />
          ) : (
            <FO_SpeciesView_Archived />
          )
        )}
      </div>

      {/* 4. MODALS */}
      {activeModal && (
        <div className="fixed inset-0 bg-emerald-950/20 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          {activeModal === 'archive' && <ArchivedPlant recordId={selectedItem?.id || selectedItem?.name} onCancel={() => setActiveModal(null)} />}
          {activeModal === 'details' && <RecordView entry={selectedItem} onClose={() => setActiveModal(null)} />}
          {activeModal === 'species_list' && <SpeciesDetail speciesName={selectedItem?.name} onClose={() => setActiveModal(null)} />}
        </div>
      )}
    </div>
  );
}

// Inner Table for Timeline to keep code clean
function TimelineTable({ records, onEye, onBox }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 bg-slate-50/30">
            <th className="px-6 py-5">Observation ID</th>
            <th className="px-6 py-5">Date</th>
            <th className="px-6 py-5">Observer</th>
            <th className="px-6 py-5">Observation Type</th>
            <th className="px-6 py-5">Location</th>
            <th className="px-6 py-5">Species</th>
            <th className="px-6 py-5">Status</th>
            <th className="px-6 py-5 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 text-[11px] font-bold">
          {records.map((rec) => (
            <tr key={rec.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-5 font-black text-slate-800">{rec.id}</td>
              <td className="px-6 py-5 text-slate-400">📅 {rec.date}</td>
              <td className="px-6 py-5 text-slate-600">👤 {rec.observer}</td>
              <td className="px-6 py-5 text-slate-400">{rec.type}</td>
              <td className="px-6 py-5 text-slate-400">📍 {rec.location}</td>
              <td className="px-6 py-5 font-black text-slate-800">{rec.speciesCount}</td>
              <td className="px-6 py-5"><span className="bg-emerald-50 text-emerald-500 border border-emerald-100 px-2 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-widest">VALIDATED</span></td>
              <td className="px-6 py-5 text-center">
                <div className="flex justify-center gap-4 text-slate-300">
                  <button onClick={() => onEye(rec)} className="hover:text-emerald-600 transition-colors text-lg">👁️</button>
                  <button onClick={() => onBox(rec)} className="hover:text-red-500 transition-colors text-lg">📦</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}