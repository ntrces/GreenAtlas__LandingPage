import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

// --- Auth & Navigation Components ---
import AdminPortal from './AdminPortal/AdminPortal';
import Sidebar from './Sidebar';

// --- Page Components ---
import Dashboard from './Dashboard/Dashboard';
import Analytics from './Analytics_and_Report/analytics_report';
import AuditLogs from './Audit Logs/auditlogs';
import Meetings from './Meeting/meeting';
import PlantManagement from './PlantManagement/plantmanagement';
import UserManagement from './UserManagement/usermanagement';
import Validation from './Validation/validation';
import FO_TimelineView from './Field_Observation_Records/FO_TimelineView';

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  // --- DATA FOR FIELD OBSERVATION RECORDS ---
  const mockObservations = [
    { 
      id: 'FO-12345', 
      date: '15/02/2026', 
      observer: 'Juan Dela Cruz', 
      type: '1 wildlife, 0 other observations', 
      location: 'Cavite Protected Area', 
      speciesCount: '1' 
    },
    { 
      id: 'BMS-005', 
      date: '2026-03-01', 
      observer: 'Ranger Reyes', 
      type: '2 observations', 
      location: 'Maragondon Range', 
      speciesCount: 'N/A' 
    }
  ];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // --- JSX DISPLAY LOGIC FOR EACH BUTTON ---
  const renderPage = () => {
    // We trim the string to ensure accidental spaces in Sidebar don't break the switch
    switch (currentPage.trim()) {
      case 'Dashboard': 
        return <Dashboard />;
      
      case 'Analytics & Reports': 
        return <Analytics />;
      
      case 'Validation': 
        return <Validation />;
      
      case 'Field Observation Records': 
        return (
          <FO_TimelineView 
            records={mockObservations} 
            onView={(rec) => console.log("Viewing record:", rec)}
            onArchive={(rec) => console.log("Archiving record:", rec)}
          />
        );

      case 'Plant Management': 
        return <PlantManagement />;
      
      case 'Meetings': 
        return <Meetings />;
      
      case 'Audit Logs': 
        return <AuditLogs />;
      
      case 'User Management': 
        return <UserManagement />;
      
      default: 
        return <Dashboard />;
    }
  };

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-slate-50 font-black text-emerald-900 uppercase tracking-widest">
      Loading GreenAtlas...
    </div>
  );

  if (!session) return <AdminPortal />;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar setPage={setCurrentPage} activePage={currentPage} onLogout={handleLogout} />
      
      <div className="flex-1 flex flex-col">
        {/* Dynamic Header */}
        <header className="h-16 bg-white border-b border-emerald-100 px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-emerald-300">/</span>
            <h2 className="font-bold text-emerald-900 tracking-tight">{currentPage}</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-black text-slate-400 uppercase tracking-tighter">Authorized Admin</p>
              <p className="text-sm font-bold text-slate-700">{session.user.email}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-100">
              {session.user.email.substring(0, 2).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Workspace Area */}
        <main className="flex-1 overflow-auto bg-[#F8FAFC]">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}