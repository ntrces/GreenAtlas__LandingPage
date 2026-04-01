const Sidebar = ({ activePage, setPage, onLogout }) => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Analytics & Reports', icon: '📈' },
    { name: 'Validation', icon: '⚠️' },
    // --- FIX: Add "Records" to the name below ---
    { name: 'Field Observation Records', icon: '🌿' }, 
    { name: 'Plant Management', icon: '🌳' },
    { name: 'Meetings', icon: '📅' },
    { name: 'Audit Logs', icon: '📋' },
    { name: 'User Management', icon: '👥' },
  ];

  return (
    <aside className="w-64 bg-emerald-950 text-white flex flex-col h-screen sticky top-0 shadow-2xl">
      <div className="p-8 text-2xl font-black border-b border-emerald-900/50">
        GreenAtlas
      </div>
      
      <nav className="flex-1 mt-6 px-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setPage(item.name)}
            className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center gap-4 transition-all duration-200 ${
              activePage === item.name 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50' 
                : 'text-emerald-100/60 hover:bg-emerald-900 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-bold tracking-wide">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-emerald-900/50">
        <button onClick={onLogout} className="w-full px-4 py-3 text-left text-red-400 hover:bg-red-500/10 rounded-xl font-bold flex items-center gap-3">
          <span>🚪</span> Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;