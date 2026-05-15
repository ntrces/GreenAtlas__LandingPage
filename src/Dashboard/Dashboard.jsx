import React from 'react';

export default function Dashboard() {
  const submissions = [
    { name: 'Pterocarpus indicus', observer: 'Juan Dela Cruz', date: 'Mar 8, 2026', status: 'Pending' },
    { name: 'Swietenia macrophylla', observer: 'Maria Santos', date: 'Mar 7, 2026', status: 'Approved' },
    { name: 'Vitex parviflora', observer: 'Pedro Garcia', date: 'Mar 7, 2026', status: 'Pending' },
    { name: 'Shorea contorta', observer: 'Ana Reyes', date: 'Mar 6, 2026', status: 'Approved' },
    { name: 'Dipterocarpus grandiflorus', observer: 'Carlos Lopez', date: 'Mar 6, 2026', status: 'Pending' },
  ];

  const activities = [
    { title: 'Approved field diary entry', user: 'Admin Silva', time: '2 hours ago', icon: 'check', color: 'bg-green-100 text-green-600' },
    { title: 'Updated plant profile: Narra', user: 'Admin Silva', time: '3 hours ago', icon: 'wave', color: 'bg-blue-100 text-blue-600' },
    { title: 'Created new meeting', user: 'Admin Silva', time: '5 hours ago', icon: 'plus', color: 'bg-gray-100 text-gray-600' },
    { title: 'Rejected field diary entry', user: 'Admin Silva', time: '6 hours ago', icon: 'alert', color: 'bg-red-100 text-red-600' },
    { title: 'Added new user account', user: 'Admin Silva', time: '1 day ago', icon: 'plus', color: 'bg-gray-100 text-gray-600' },
  ];

  const chartData = [
    { name: 'Pterocarpus indicus', count: 24, height: '100%' },
    { name: 'Swietenia macrophylla', count: 18, height: '75%' },
    { name: 'Vitex parviflora', count: 15, height: '62%' },
    { name: 'Shorea contorta', count: 12, height: '50%' },
    { name: 'Dipterocarpus grandiflorus', count: 10, height: '42%' },
  ];

  return (
    <div className="flex flex-col bg-[#F9FAFB] min-h-screen font-sans text-slate-700">
      {/* 1. TOP HEADER */}
      <header className="h-16 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 border border-emerald-100">
            <LeafIcon size={18} />
          </div>
          <h2 className="text-lg font-semibold text-slate-800 tracking-tight">Welcome, Admin</h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer hover:bg-slate-50 p-2 rounded-full transition-colors">
            <BellIcon size={20} />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">2</span>
          </div>
          
          <button className="flex items-center gap-2 bg-[#F0FDF4] border border-emerald-100 px-3 py-1.5 rounded-full hover:bg-emerald-50 transition-colors">
            <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white">
              <UserIcon size={14} />
            </div>
            <span className="text-sm font-semibold text-emerald-900">DENR Admin</span>
            <ChevronDown size={14} className="text-emerald-700" />
          </button>
        </div>
      </header>

      <div className="p-8">
        {/* 2. PAGE TITLE SECTION */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Admin Dashboard</h1>
            <p className="text-sm text-slate-400 mt-1">System overview • Monitoring status</p>
          </div>
          <p className="text-xs text-slate-400 font-medium">Last updated: 05:22 AM</p>
        </div>

        {/* 3. KEY STATISTICS ROW */}
        <div className="grid grid-cols-4 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8">
          <StatCard value="124" label="Total Observations" sub="From all field officers" />
          <StatCard value="15" label="Pending Validation" sub="ACTION REQUIRED" color="text-amber-500" indicator="bg-amber-500" />
          <StatCard value="95" label="Approved" sub="Successfully validated • 76.6%" color="text-emerald-600" />
          <StatCard value="14" label="Rejected" sub="Quality control • 11.3%" color="text-red-500" last />
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* LEFT CONTENT (8 COLUMNS) */}
          <div className="col-span-8 space-y-8">
            
            {/* OBSERVATION SUMMARY */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Observation Summary</h3>
              <div className="grid grid-cols-3 divide-x divide-slate-100">
                <div className="px-4">
                  <p className="text-2xl font-bold text-slate-800">124</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Total Observations</p>
                </div>
                <div className="px-8 text-center">
                  <p className="text-2xl font-bold text-slate-800">37</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Unique Species Observed</p>
                </div>
                <div className="px-8 text-right">
                  <p className="text-2xl font-bold text-emerald-600">18</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Observations This Month</p>
                </div>
              </div>
            </div>

            {/* RECENT SUBMISSIONS TABLE */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 flex justify-between items-center border-b border-slate-50">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Field Submissions</h3>
                <button className="text-xs font-bold text-slate-400 hover:text-emerald-600 flex items-center gap-1 transition-colors">
                  View All <ArrowRight size={12} />
                </button>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-6 py-3 font-semibold">Plant Name</th>
                    <th className="px-6 py-3 font-semibold">Observer</th>
                    <th className="px-6 py-3 font-semibold">Date Submitted</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-[13px]">
                  {submissions.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 italic font-medium text-slate-700">{row.name}</td>
                      <td className="px-6 py-4 text-slate-500">{row.observer}</td>
                      <td className="px-6 py-4 text-slate-400">{row.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          row.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOST OBSERVED PLANTS CHART */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Most Observed Plants</h3>
              <div className="h-[200px] flex items-end justify-between px-4 relative">
                {/* Y-AXIS GRID LINES */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[24, 18, 12, 6, 0].map(val => (
                    <div key={val} className="flex items-center gap-4 w-full">
                      <span className="text-[10px] text-slate-300 w-4 text-right">{val}</span>
                      <div className="flex-1 border-t border-slate-100 border-dashed"></div>
                    </div>
                  ))}
                </div>
                {/* BARS */}
                {chartData.map((bar, i) => (
                  <div key={i} className="flex flex-col items-center group relative z-10 flex-1 max-w-[120px]">
                    <div 
                      style={{ height: bar.height }} 
                      className="w-[80%] bg-[#4B6F52] rounded-t-sm transition-all group-hover:bg-[#3d5a43] cursor-pointer"
                    ></div>
                    <p className="text-[9px] text-slate-400 italic mt-3 whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                      {bar.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (4 COLUMNS) */}
          <div className="col-span-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-fit sticky top-24">
              <div className="p-6 border-b border-slate-50">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent System Activity</h3>
              </div>
              <div className="divide-y divide-slate-50">
                {activities.map((act, i) => (
                  <div key={i} className="p-5 flex gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${act.color}`}>
                      <ActivityIcon type={act.icon} size={14} />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">{act.title}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{act.user} • {act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// HELPER COMPONENTS
function StatCard({ value, label, sub, color = "text-slate-800", indicator, last }) {
  return (
    <div className={`p-6 flex flex-col justify-center relative ${!last ? 'border-r border-slate-100' : ''}`}>
      <p className={`text-3xl font-bold tracking-tight ${color}`}>{value}</p>
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2">{label}</p>
      <div className="flex items-center gap-2 mt-2">
        {indicator && <div className={`w-full h-[2px] rounded-full ${indicator} opacity-50`}></div>}
        <p className="text-[10px] text-slate-300 font-medium whitespace-nowrap uppercase tracking-tighter">{sub}</p>
      </div>
    </div>
  );
}

// INLINE SVG ICONS (No external dependencies)
const LeafIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a8 8 0 0 1-8 8Z"/><path d="M11 20c0-2.5 2-5.5 2-5.5"/><path d="M7 2h1v4"/><path d="M4 6h4"/><path d="M5.7 9l-1.4 1.4"/></svg>
);

const BellIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

const UserIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const ChevronDown = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const ActivityIcon = ({ type, size }) => {
  if (type === 'check') return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;
  if (type === 'plus') return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>;
  if (type === 'alert') return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><path d="m4.93 4.93 14.14 14.14M4.93 19.07 19.07 4.93"/></svg>;
};