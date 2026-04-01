import React from 'react';

export default function ViewPlant({ speciesData, onClose, onEdit, onArchive }) {
  // Use passed data or fall back to the orchid example from the image
  const data = speciesData || {
    commonName: 'Philippine Orchid',
    scientificName: 'Phalaenopsis amabilis',
    id: 'PLT-001',
    category: 'Flowering',
    conservationStatus: 'Vulnerable',
    description: 'Endemic orchid species with delicate white petals, plays crucial role in forest ecosystem as a pollinator attractant.',
    kingdom: 'Plantae',
    family: 'Orchidaceae',
    genus: 'Phalaenopsis',
    species: 'amabilis',
    heightRange: '30-60 cm',
    leafType: 'Simple',
    floweringPattern: 'Year-round',
    growthForm: 'Epiphyte',
    ecosystemType: 'Tropical Rainforest',
    ecologicalImportance: 'Serves as critical pollinator habitat, supports biodiversity by attracting butterflies and bees, and indicates healthy forest canopy conditions.',
    img: 'https://images.unsplash.com/photo-1599023240188-d4677717469a?q=80&w=150&h=150&auto=format&fit=crop'
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        
        {/* --- MODAL HEADER --- */}
        <div className="px-6 py-4 border-b border-emerald-50 flex justify-between items-center shrink-0 bg-white">
          <h2 className="text-lg font-black text-slate-800 tracking-tight">Plant Species Record</h2>
          <button onClick={onClose} className="text-slate-300 hover:text-slate-500 transition-colors text-xl font-bold">✕</button>
        </div>

        {/* --- CONTENT BODY --- */}
        <div className="px-6 py-6 overflow-y-auto custom-scrollbar space-y-6 bg-white">
          
          {/* Top Profile Section */}
          <div className="flex gap-5 items-start">
            <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 shrink-0">
               <img src={data.img} alt={data.commonName} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-black text-slate-800 leading-tight">{data.commonName}</h3>
                <span className="bg-orange-50 text-orange-500 border border-orange-100 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter">
                  {data.conservationStatus}
                </span>
                <span className="bg-[#56765B] text-white px-1.5 py-0.5 rounded text-[8px] font-black">AR</span>
              </div>
              <p className="text-sm font-bold text-slate-400 italic mt-0.5">{data.scientificName}</p>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">
                {data.id} • {data.category}
              </p>
            </div>
          </div>

          {/* Conservation Status Card */}
          <div className="bg-orange-50/30 border border-orange-100 p-4 rounded-xl">
             <p className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Conservation Status</p>
             <p className="text-base font-black text-orange-600 mt-1">{data.conservationStatus}</p>
          </div>

          {/* About Section */}
          <SectionWrapper title="About This Plant">
             <p className="text-xs font-medium text-slate-600 leading-relaxed">{data.description}</p>
          </SectionWrapper>

          {/* Scientific Classification */}
          <SectionWrapper title="Scientific Classification">
             <div className="grid grid-cols-1 divide-y divide-slate-50">
                <DataRow label="Kingdom" value={data.kingdom} />
                <DataRow label="Family" value={data.family} />
                <DataRow label="Genus" value={data.genus} />
                <DataRow label="Species" value={data.species} />
             </div>
          </SectionWrapper>

          {/* Physical Characteristics */}
          <SectionWrapper title="Physical Characteristics">
             <div className="grid grid-cols-2 gap-x-4 divide-x divide-slate-50">
                <div className="space-y-4">
                   <DataRow label="Height Range" value={data.heightRange} />
                   <DataRow label="Flowering Pattern" value={data.floweringPattern} />
                </div>
                <div className="space-y-4 pl-4">
                   <DataRow label="Leaf Type" value={data.leafType} />
                   <DataRow label="Growth Form" value={data.growthForm} />
                </div>
             </div>
          </SectionWrapper>

          {/* Habitat */}
          <SectionWrapper title="Habitat">
             <DataRow label="Ecosystem Type" value={data.ecosystemType} />
          </SectionWrapper>

          {/* Ecological Importance */}
          <SectionWrapper title="Ecological Importance">
             <div className="bg-white border border-emerald-50 p-4 rounded-xl">
                <p className="text-xs font-medium text-slate-600 leading-relaxed italic">{data.ecologicalImportance}</p>
             </div>
          </SectionWrapper>

        </div>

        {/* --- MODAL FOOTER --- */}
        <div className="p-6 border-t border-slate-50 flex gap-3 shrink-0 bg-white">
          <button 
            onClick={onEdit}
            className="flex-1 bg-[#56765B] text-white py-3.5 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-emerald-950/10 hover:bg-[#435D47] transition-all flex items-center justify-center gap-2"
          >
            <span className="text-base">✎</span> Edit Record
          </button>
          <button 
            onClick={onArchive}
            className="px-8 bg-orange-50 text-orange-500 py-3.5 rounded-xl font-black uppercase text-xs tracking-widest border border-orange-100 hover:bg-orange-100 transition-all flex items-center justify-center gap-2"
          >
            <span className="text-base">🗄️</span> Archive
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Internal Helper Components ---

const SectionWrapper = ({ title, children }) => (
  <div className="space-y-3">
    <div className="bg-emerald-50/50 px-3 py-1.5 rounded-md">
       <h4 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">{title}</h4>
    </div>
    <div className="px-1">{children}</div>
  </div>
);

const DataRow = ({ label, value }) => (
  <div className="py-2 first:pt-0 last:pb-0">
    <p className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">{label}</p>
    <p className="text-sm font-black text-slate-700">{value}</p>
  </div>
);