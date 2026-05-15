import React from 'react';

export default function Analytics() {
  const observers = [
    { name: 'Juan Dela Cruz', role: 'Field Officer', count: 34, trend: 'up' },
    { name: 'Maria Santos', role: 'Field Officer', count: 28, trend: 'up' },
    { name: 'Pedro Garcia', role: 'Field Officer', count: 25, trend: 'none' },
    { name: 'Ana Reyes', role: 'Field Officer', count: 22, trend: 'up' },
    { name: 'Carlos Lopez', role: 'Field Officer', count: 19, trend: 'none' },
    { name: 'Rosa Mendoza', role: 'Field Officer', count: 16, trend: 'none' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans text-slate-700">
      
      {/* 1. PAGE HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Analytics & Reports</h1>
          <p className="text-sm text-slate-400 mt-1 font-medium">Deeper analysis of monitoring data • Report generation</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <ExportIcon /> Export PDF
          </button>
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <ExportIcon /> Export CSV
          </button>
        </div>
      </div>

      {/* 2. STATS OVERVIEW */}
      <div className="grid grid-cols-4 gap-0 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
        <StatItem value="194" label="Total Observations" sub="Across all monitoring periods" />
        <StatItem value="37" label="Species Tracked" sub="Tracked plant species" />
        <StatItem value="6" label="Active Observers" sub="Field officers contributing" />
        <StatItem value="95" label="Approved Entries" sub="Validated submissions • 76.6%" color="text-emerald-600" last />
      </div>

      {/* 3. FILTERING OPTIONS */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FilterIcon />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Filtering Options</span>
        </div>
        <div className="grid grid-cols-4 gap-4 items-end">
          <FilterSelect label="Date Range" placeholder="Mar 8, 2026" />
          <FilterSelect label="Plant Species" placeholder="All Species" />
          <FilterSelect label="Observer" placeholder="All Observers" />
          <button className="bg-slate-100 text-slate-500 text-xs font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors">
            Reset Filters
          </button>
        </div>
      </div>

      {/* 4. MAIN ANALYTICS GRID */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* LEFT COLUMN (8 Units) */}
        <div className="col-span-8 space-y-8">
          
          {/* OBSERVATION TRENDS (LINE CHART) */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Observation Trends</h3>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[40, 30, 20, 10, 0].map(v => (
                  <div key={v} className="flex items-center gap-4">
                    <span className="text-[10px] text-slate-300 w-4 text-right">{v}</span>
                    <div className="flex-1 border-t border-slate-100 border-dashed"></div>
                  </div>
                ))}
              </div>

              {/* Fixed SVG Path and Coordinates */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <path 
                  d="M0,180 L150,140 L330,160 L500,100 L660,120 L830,80 L1000,50" 
                  fill="none" 
                  stroke="#4B6F52" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
                {[
                  {x: 0, y: 180}, {x: 150, y: 140}, {x: 330, y: 160}, 
                  {x: 500, y: 100}, {x: 660, y: 120}, {x: 830, y: 80}, {x: 1000, y: 50}
                ].map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="8" fill="#4B6F52" stroke="white" strokeWidth="3" />
                ))}
              </svg>

              <div className="absolute -bottom-6 w-full flex justify-between px-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span>
              </div>
            </div>
            <div className="mt-12 flex justify-center items-center gap-2 text-[10px] font-bold text-slate-500">
              <div className="w-2 h-2 rounded-full bg-[#4B6F52]"></div> Number of Observations
            </div>
          </div>

          {/* PLANT OBSERVATION DISTRIBUTION (BAR CHART) */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10">Plant Observation Distribution</h3>
            <div className="h-48 flex items-end justify-between px-4 gap-4">
               <Bar height="100%" label="Pterocarpus indicus" />
               <Bar height="80%" label="Swietenia macrophylla" />
               <Bar height="65%" label="Vitex parviflora" />
               <Bar height="55%" label="Shorea contorta" />
               <Bar height="45%" label="Dipterocarpus grandiflorus" />
               <Bar height="35%" label="Intsia bijuga" />
               <Bar height="30%" label="Toona calantas" />
            </div>
            <div className="mt-8 flex justify-center items-center gap-2 text-[10px] font-bold text-slate-500">
              <div className="w-4 h-2 bg-[#4B6F52]"></div> Observation Count
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (4 Units) */}
        <div className="col-span-4 space-y-8">
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Validation Outcomes</h3>
            <div className="flex flex-col items-center">
              <div className="w-44 h-44 rounded-full relative mb-8" 
                   style={{ background: 'conic-gradient(#10b981 0% 76%, #f59e0b 76% 88%, #ef4444 88% 100%)' }}>
                <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-black text-slate-800">124</p>
                    <p className="text-[9px] font-bold text-slate-300 uppercase">Total</p>
                  </div>
                </div>
              </div>
              <div className="w-full space-y-3">
                <LegendItem color="bg-emerald-500" label="Approved" value="95" />
                <LegendItem color="bg-amber-500" label="Pending" value="15" />
                <LegendItem color="bg-red-500" label="Rejected" value="14" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-50">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Observer Activity</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {observers.map((obs, i) => (
                <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="text-sm font-bold text-slate-700">{obs.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">{obs.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-slate-800">{obs.count}</span>
                    {obs.trend === 'up' && <TrendUpIcon />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Report Generation</h3>
            <p className="text-[11px] text-slate-400 font-medium leading-relaxed mb-6">
              Export comprehensive reports including observation summaries, species monitoring data, and observer activity metrics.
            </p>
            <div className="space-y-3">
              <ReportButton label="Observation Summary Report (PDF)" />
              <ReportButton label="Species Monitoring Data (CSV)" />
              <ReportButton label="Observer Activity Report (PDF)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function StatItem({ value, label, sub, color = "text-slate-800", last }) {
  return (
    <div className={`p-6 ${!last ? 'border-r border-slate-100' : ''}`}>
      <p className={`text-3xl font-black ${color}`}>{value}</p>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
      <p className="text-[10px] text-slate-300 font-medium mt-1">{sub}</p>
    </div>
  );
}

function FilterSelect({ label, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="text-[10px] font-bold text-slate-400 mb-2 ml-1">{label}</label>
      <select className="bg-white border border-slate-200 text-slate-600 text-xs py-3 px-4 rounded-lg outline-none focus:ring-1 focus:ring-emerald-500 appearance-none">
        <option>{placeholder}</option>
      </select>
    </div>
  );
}

function LegendItem({ color, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${color}`}></div>
        <span className="text-[11px] font-bold text-slate-400 uppercase">{label} ({value})</span>
      </div>
    </div>
  );
}

function Bar({ height, label }) {
  return (
    <div className="flex flex-col items-center flex-1 max-w-[80px] group">
      <div style={{ height }} className="w-full bg-[#4B6F52] rounded-t-md hover:bg-[#3d5a43] transition-all cursor-pointer"></div>
      <p className="text-[9px] text-slate-400 italic mt-3 text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
        {label}
      </p>
    </div>
  );
}

function ReportButton({ label }) {
  return (
    <button className="w-full bg-emerald-50 text-emerald-800 py-3 rounded-lg text-[10px] font-bold border border-emerald-100 flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors">
      <FileIcon /> {label}
    </button>
  );
}

// --- INLINE ICONS ---
const ExportIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
);
const FilterIcon = () => (
  <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
);
const TrendUpIcon = () => (
  <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
);
const FileIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
);