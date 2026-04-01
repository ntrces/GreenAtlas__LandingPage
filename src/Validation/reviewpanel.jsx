import React from 'react';

export default function ReviewPanel() {
  return (
    <div className="w-full h-full min-h-[400px] bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center p-12 shadow-sm">
      <div className="p-4 border border-slate-100 rounded-full mb-6">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
      <h2 className="text-xl font-black text-slate-300 uppercase tracking-[0.2em]">Select Entry to Review</h2>
    </div>
  );
}