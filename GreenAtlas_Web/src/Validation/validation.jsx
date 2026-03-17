import React, { useState } from 'react';

// --- Import the Modular Components ---
import ReviewPanel from './reviewpanel';
import OfficerDetails from './officerdetails';
import Approved from './approved';
import Reject from './reject';
import History from './history';

export default function Validation() {
  // --- States for Navigation & Modals ---
  const [activeModal, setActiveModal] = useState(null); // 'details', 'approve', 'reject', 'history'
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'split-view'

  // --- Mock Data ---
  const queueItems = [
    { id: 'FO-12345', submittedBy: 'Juan Dela Cruz', dateTime: '2026-02-15 08:30 AM', count: 1, location: 'Cavite Protected Area' },
    { id: 'FO-12346', submittedBy: 'Maria Santos', dateTime: '2026-02-16 09:15 AM', count: 3, location: 'Maragondon Range' },
    { id: 'FO-12347', submittedBy: 'Althea Abonado', dateTime: '2026-02-16 10:00 AM', count: 2, location: 'Trece Martires' },
  ];

  const handleAction = (type, entry) => {
    setSelectedEntry(entry);
    setActiveModal(type);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-8 font-sans text-slate-700 relative">
      
      {/* 1. PAGE HEADER */}
      <div className="mb-10">
        <h1 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Validation Queue</h1>
        <p className="text-sm text-slate-400 mt-1 font-medium">BMS Field Diary Review • Scientific Accuracy Verification</p>
      </div>

      {/* 2. STATISTICS SUMMARY CARDS */}
      <div className="grid grid-cols-4 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-10">
        <div className="p-6 border-r border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-black text-amber-500">5</span>
            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded">In Queue</span>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pending Review</p>
          <div className="w-full h-1 bg-amber-500 mt-3 rounded-full opacity-30"></div>
        </div>
        <StatCard value="14" label="Validated Today" sub="Published to BMS database" />
        <StatCard value="2" label="Rejected Today" sub="Returned with feedback" />
        <StatCard value="127" label="Month Total" sub="Last 30 days" last />
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">BMS Entry Queue</h3>
          <span className="text-xs font-bold text-slate-300">{queueItems.length} items</span>
        </div>

        {/* Search and Filters Bar */}
        <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input 
              type="text" 
              placeholder="Search by id, name, etc..." 
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <select className="bg-white border border-slate-200 text-slate-500 text-sm px-4 rounded-lg outline-none"><option>All Officers</option></select>
          <select className="bg-white border border-slate-200 text-slate-500 text-sm px-4 rounded-lg outline-none"><option>All Dates</option></select>
        </div>

        {/* Data Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-white border-b border-slate-100">
              <th className="px-8 py-4">Entry ID</th>
              <th className="px-8 py-4">Submitted By</th>
              <th className="px-8 py-4">Date & Time</th>
              <th className="px-8 py-4">Observation Count</th>
              <th className="px-8 py-4">Location</th>
              <th className="px-8 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-[13px]">
            {queueItems.map((item, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-8 py-5 font-black text-slate-800">{item.id}</td>
                <td className="px-8 py-5">
                  <button 
                    onClick={() => handleAction('history', item)}
                    className="flex items-center gap-2 font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    <UserCircleIcon /> {item.submittedBy}
                  </button>
                </td>
                <td className="px-8 py-5 text-slate-400 font-medium">{item.dateTime}</td>
                <td className="px-8 py-5 font-bold text-slate-700">{item.count}</td>
                <td className="px-8 py-5 text-slate-400 font-medium">{item.location}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center justify-center gap-4">
                    <button onClick={() => handleAction('details', item)} className="text-slate-300 hover:text-emerald-600 transition-all hover:scale-125"><EyeIcon /></button>
                    <button onClick={() => handleAction('approve', item)} className="text-slate-300 hover:text-emerald-600 transition-all hover:scale-125"><CheckIcon /></button>
                    <button onClick={() => handleAction('reject', item)} className="text-slate-300 hover:text-red-500 transition-all hover:scale-125"><CrossIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MODAL OVERLAYS --- */}
      {activeModal && (
        <div className="fixed inset-0 bg-emerald-950/20 backdrop-blur-sm z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="max-h-[90vh] overflow-y-auto custom-scrollbar">
            {activeModal === 'details' && (
              <OfficerDetails 
                entry={selectedEntry} 
                onClose={() => setActiveModal(null)}
                onApprove={() => setActiveModal('approve')}
                onReject={() => setActiveModal('reject')}
              />
            )}
            {activeModal === 'approve' && (
              <Approved 
                onCancel={() => setActiveModal(null)} 
                onConfirm={() => {
                  alert("Entry Validated!");
                  setActiveModal(null);
                }}
              />
            )}
            {activeModal === 'reject' && (
              <Reject 
                onCancel={() => setActiveModal(null)} 
                onConfirm={(msg) => {
                  alert("Entry Rejected with feedback: " + msg);
                  setActiveModal(null);
                }}
              />
            )}
            {activeModal === 'history' && (
              <History 
                officerName={selectedEntry?.submittedBy} 
                onClose={() => setActiveModal(null)} 
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// --- Internal Helper Components ---
function StatCard({ value, label, sub, last }) {
  return (
    <div className={`p-6 ${!last ? 'border-r border-slate-100' : ''}`}>
      <p className="text-3xl font-black text-slate-800">{value}</p>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
      <p className="text-[10px] text-slate-300 font-medium mt-1">{sub}</p>
    </div>
  );
}

// --- Icons ---
const SearchIcon = ({ className }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const UserCircleIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-40"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const EyeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
const CheckIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>;
const CrossIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>;