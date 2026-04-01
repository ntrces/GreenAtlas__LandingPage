import React, { useState } from 'react';

// --- Modal Imports ---
import AddSpecies from './AddSpecies';
import EditSpecies from './EditSpecies';
import ViewPlant from './ViewPlant';
import ArchivedPlant from './ArchivedPlant';

export default function PlantManagement() {
  // --- MODAL VISIBILITY STATES ---
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  
  // --- DATA STATE ---
  // This tracks which plant is currently being Viewed, Edited, or Archived
  const [selectedPlant, setSelectedPlant] = useState(null);

  // --- MOCK DATA ---
  const plants = [
    {
      id: 'PLT-001',
      commonName: 'Philippine Orchid',
      scientificName: 'Phalaenopsis amabilis',
      conservationStatus: 'Vulnerable',
      statusColor: 'bg-orange-50 text-orange-500 border-orange-100',
      observations: '1',
      recordStatus: 'PUBLISHED',
      hasAR: true,
      img: 'https://images.unsplash.com/photo-1599023240188-d4677717469a?q=80&w=150&h=150&auto=format&fit=crop'
    },
    {
      id: 'PLT-002',
      commonName: 'Mountain Fern',
      scientificName: 'Nephrolepis cordifolia',
      conservationStatus: 'Least Concern (LC)',
      statusColor: 'bg-emerald-50 text-emerald-500 border-emerald-100',
      observations: '1',
      recordStatus: 'DRAFT',
      hasAR: false,
      img: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=150&h=150&auto=format&fit=crop'
    },
    {
      id: 'PLT-003',
      commonName: 'Jade Vine',
      scientificName: 'Strongylodon macrobotrys',
      conservationStatus: 'Critically Endangered',
      statusColor: 'bg-red-50 text-red-500 border-red-100',
      observations: 'N/A',
      recordStatus: 'PUBLISHED',
      hasAR: true,
      img: 'https://images.unsplash.com/photo-1599023240188-d4677717469a?q=80&w=150&h=150&auto=format&fit=crop'
    }
  ];

  // --- ACTION HANDLERS ---
  const handleViewClick = (plant) => {
    setSelectedPlant(plant);
    setIsViewModalOpen(true);
  };

  const handleEditClick = (plant) => {
    setSelectedPlant(plant);
    setIsEditModalOpen(true);
  };

  const handleArchiveClick = (plant) => {
    setSelectedPlant(plant);
    setIsArchiveModalOpen(true);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans text-slate-700">

      {/* 1. HEADER SECTION */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Plant Content Management</h1>
          <p className="text-[10px] text-slate-400 font-black mt-1 uppercase tracking-widest">Species profiles · AR content · Educational metadata</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-emerald-100 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-bold hover:bg-emerald-100 transition-all shadow-sm">
            📤 UPLOAD/REPLACE AR GARDEN
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-bold hover:bg-emerald-950 transition-all shadow-lg shadow-emerald-900/20"
          >
            + ADD SPECIES
          </button>
        </div>
      </div>

      {/* 2. SUMMARY STATS */}
      <div className="grid grid-cols-3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8 divide-x divide-slate-100">
        <StatCard value="3" label="Total Species" sub="In database" />
        <StatCard value="1" label="Threatened Species" sub="PRIORITY CONSERVATION" isAlert />
        <StatCard value="3" label="AR Models" sub="3D assets available" />
      </div>

      {/* 3. AR GARDEN ASSET BANNER */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-8 overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">AR Garden Asset</div>
        <div className="p-4 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-800 text-xl">📄</div>
              <div>
                 <p className="text-sm font-bold text-slate-800">Current AR Garden File</p>
                 <p className="text-[10px] text-slate-400 font-medium">/garden/ar-garden-cavite.glb</p>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <span className="bg-emerald-50 text-emerald-500 border border-emerald-100 px-3 py-1 rounded-lg text-[9px] font-black uppercase">ACTIVE</span>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                 📤 Replace File
              </button>
           </div>
        </div>
      </div>

      {/* 4. FILTER BAR */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 flex gap-4 shadow-sm">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-lg">🔍</span>
          <input type="text" placeholder="Search by ID, species name..." className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border-none rounded-lg text-xs font-medium outline-none focus:ring-1 focus:ring-emerald-500" />
        </div>
        <select className="bg-white border border-slate-200 text-slate-400 text-[10px] font-black px-4 rounded-lg outline-none cursor-pointer w-48"><option>Conservation Status</option></select>
        <select className="bg-white border border-slate-200 text-slate-400 text-[10px] font-black px-4 rounded-lg outline-none cursor-pointer w-48"><option>Record Status</option></select>
      </div>

      {/* 5. DATA TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 bg-slate-50/30">
              <th className="px-6 py-5">Plant ID</th>
              <th className="px-6 py-5">Image</th>
              <th className="px-6 py-5">Common Name</th>
              <th className="px-6 py-5">Scientific Name</th>
              <th className="px-6 py-5">Conservation Status</th>
              <th className="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-[11px] font-bold">
            {plants.map((plant) => (
              <tr key={plant.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5 font-black text-slate-800">{plant.id}</td>
                <td className="px-6 py-5 text-center">
                   <img src={plant.img} alt={plant.commonName} className="w-10 h-10 rounded-lg object-cover border border-slate-100 mx-auto" />
                </td>
                <td className="px-6 py-5">
                   {plant.commonName}
                   {plant.hasAR && <span className="text-[7px] bg-slate-800 text-white px-1 py-0.5 rounded ml-2 align-middle">AR</span>}
                </td>
                <td className="px-6 py-5 text-slate-400 italic">{plant.scientificName}</td>
                <td className="px-6 py-5">
                  <span className={`${plant.statusColor} border px-2 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-widest`}>
                    {plant.conservationStatus}
                  </span>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center gap-4 text-slate-300">
                    <button onClick={() => handleViewClick(plant)} className="hover:text-emerald-600 transition-colors text-lg">👁️</button>
                    <button onClick={() => handleEditClick(plant)} className="hover:text-emerald-800 transition-colors text-lg">✏️</button>
                    <button onClick={() => handleArchiveClick(plant)} className="hover:text-red-500 transition-colors text-lg">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MODAL RENDERING --- */}

      {/* ADD SPECIES MODAL */}
      {isAddModalOpen && (
        <AddSpecies onClose={() => setIsAddModalOpen(false)} />
      )}

      {/* EDIT SPECIES MODAL */}
      {isEditModalOpen && (
        <EditSpecies
          speciesData={selectedPlant}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedPlant(null);
          }}
          onPublish={() => setIsEditModalOpen(false)}
        />
      )}

      {/* VIEW PLANT MODAL */}
      {isViewModalOpen && (
        <ViewPlant
          speciesData={selectedPlant}
          onClose={() => {
            setIsViewModalOpen(false);
            setSelectedPlant(null);
          }}
          onEdit={() => {
            setIsViewModalOpen(false);
            setIsEditModalOpen(true);
          }}
          onArchive={() => {
            setIsViewModalOpen(false);
            setIsArchiveModalOpen(true);
          }}
        />
      )}

      {/* ARCHIVE CONFIRMATION MODAL */}
      {isArchiveModalOpen && (
        <ArchivedPlant 
          plantData={selectedPlant}
          onClose={() => {
            setIsArchiveModalOpen(false);
            setSelectedPlant(null);
          }}
          onConfirm={(data) => {
            console.log("Record Archived:", data.id);
            setIsArchiveModalOpen(false);
            setSelectedPlant(null);
          }}
        />
      )}
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ value, label, sub, isAlert }) {
  return (
    <div className="p-8 flex items-start gap-6 hover:bg-slate-50 transition-colors">
      <span className={`text-3xl font-black ${isAlert ? 'text-red-500' : 'text-slate-800'}`}>{value}</span>
      <div>
        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        <p className={`text-[9px] font-black mt-1 uppercase ${isAlert ? 'text-red-500' : 'text-slate-300'}`}>{sub}</p>
      </div> 
    </div>
  );
}