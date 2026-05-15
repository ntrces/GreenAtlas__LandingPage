import React, { useState } from 'react';

export default function EditSpecies({ speciesData, onClose, onPublish, onSaveDraft }) {
  // Pre-populating state with existing speciesData or defaults from the image
  const [formData, setFormData] = useState({
    commonName: speciesData?.commonName || 'Philippine Orchid',
    scientificName: speciesData?.scientificName || 'Phalaenopsis amabilis',
    category: speciesData?.category || 'Flowering Plant',
    conservationStatus: speciesData?.conservationStatus || 'Vulnerable',
    description: speciesData?.description || 'Detailed description of the plant...',
    habitat: speciesData?.habitat || 'Tropical rainforest, Zone A',
    conservationNotes: speciesData?.conservationNotes || 'Protected species under DENR',
    kingdom: speciesData?.kingdom || 'Plantae',
    family: speciesData?.family || 'Orchidaceae',
    genus: speciesData?.genus || 'Phalaenopsis',
    species: speciesData?.species || 'amabilis',
    height: speciesData?.height || '30-60 cm',
    leafType: speciesData?.leafType || 'Simple',
    flowering: speciesData?.flowering || 'Year-round',
    growthForm: speciesData?.growthForm || 'Epiphyte',
    ecosystemType: speciesData?.ecosystemType || 'Tropical Rainforest',
    ecologicalImportance: speciesData?.ecologicalImportance || "Describe the plant's ecological role, benefits to biodiversity, soil..."
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <div className="bg-[#EBF5EE] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[95vh]">
        
        {/* --- MODAL HEADER --- */}
        <div className="px-6 py-5 flex justify-between items-start shrink-0">
          <div>
            <h2 className="text-lg font-black text-[#2D3E33] uppercase tracking-tight">Edit Plant Content</h2>
            <p className="text-[#56765B] text-[10px] font-bold mt-0.5">Update plant information and AR content</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors text-xl font-bold">✕</button>
        </div>

        {/* --- FORM BODY --- */}
        <div className="px-6 pb-6 overflow-y-auto custom-scrollbar space-y-5">
          
          {/* Top Row: Common & Scientific */}
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Common Name" name="commonName" required value={formData.commonName} onChange={handleChange} />
            <InputField label="Scientific Name" name="scientificName" required value={formData.scientificName} onChange={handleChange} />
          </div>

          {/* Category & Status */}
          <div className="grid grid-cols-2 gap-4">
            <SelectField label="Category" name="category" required options={['Flowering Plant', 'Fern', 'Tree', 'Shrub']} value={formData.category} onChange={handleChange} />
            <SelectField label="Conservation Status" name="conservationStatus" required options={['Vulnerable', 'Critically Endangered', 'Endangered', 'Least Concern']} value={formData.conservationStatus} onChange={handleChange} />
          </div>

          <TextArea label="Description" name="description" required value={formData.description} onChange={handleChange} />

          {/* Habitat & Notes */}
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Habitat" name="habitat" required value={formData.habitat} onChange={handleChange} />
            <InputField label="Conservation Notes" name="conservationNotes" value={formData.conservationNotes} onChange={handleChange} />
          </div>

          {/* SCIENTIFIC CLASSIFICATION */}
          <div className="pt-2">
            <p className="text-[9px] font-black text-[#56765B] uppercase tracking-widest mb-3">Scientific Classification</p>
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Kingdom" name="kingdom" value={formData.kingdom} onChange={handleChange} />
              <InputField label="Family" name="family" value={formData.family} onChange={handleChange} />
              <InputField label="Genus" name="genus" value={formData.genus} onChange={handleChange} />
              <InputField label="Species" name="species" value={formData.species} onChange={handleChange} />
            </div>
          </div>

          {/* PHYSICAL CHARACTERISTICS */}
          <div className="pt-2">
            <p className="text-[9px] font-black text-[#56765B] uppercase tracking-widest mb-3">Physical Characteristics</p>
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Height" name="height" value={formData.height} onChange={handleChange} />
              <SelectField label="Leaf Type" name="leafType" options={['Simple', 'Compound', 'Needle']} value={formData.leafType} onChange={handleChange} />
              <SelectField label="Flowering" name="flowering" options={['Year-round', 'Seasonal', 'No']} value={formData.flowering} onChange={handleChange} />
              <InputField label="Growth Form" name="growthForm" value={formData.growthForm} onChange={handleChange} />
            </div>
          </div>

          <SelectField label="Ecosystem Type" name="ecosystemType" options={['Tropical Rainforest', 'Mangrove', 'Grassland']} value={formData.ecosystemType} onChange={handleChange} />

          <TextArea label="Ecological Importance" name="ecologicalImportance" value={formData.ecologicalImportance} onChange={handleChange} />

          {/* IMAGE PREVIEW & UPLOAD */}
          <div className="pt-2">
            <p className="text-[9px] font-black text-[#56765B] uppercase tracking-widest mb-2">Plant Photo *</p>
            <div className="border-2 border-dashed border-[#D1E7D6] bg-white/40 rounded-xl p-6 flex flex-col items-center justify-center group hover:border-[#56765B] transition-all cursor-pointer">
              <span className="text-2xl mb-2 opacity-40">🖼️</span>
              <p className="text-xs font-bold text-[#56765B]">Click to upload plant photo or drag and drop</p>
              <p className="text-[9px] text-slate-400 font-bold mt-1 uppercase">JPG, PNG, JPEG (max 5MB)</p>
            </div>
            
            {/* Existing Image Preview (Matches image_674208.png) */}
            <div className="mt-4 rounded-xl overflow-hidden border border-[#D1E7D6] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1599023240188-d4677717469a?q=80&w=600&auto=format&fit=crop" 
                alt="Current Preview" 
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="px-6 py-6 bg-transparent flex gap-3 shrink-0">
          <button 
            onClick={onSaveDraft}
            className="flex-1 bg-transparent text-[#56765B] py-3 rounded-xl font-black uppercase text-[10px] tracking-widest border border-[#D1E7D6] hover:bg-[#D1E7D6]/30 transition-all"
          >
            Save as Draft
          </button>
          <button 
            onClick={() => onPublish(formData)}
            className="flex-1 bg-[#56765B] text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-[#56765B]/20 hover:bg-[#3E5542] transition-all"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Internal Helper Components (Scoped for this modal) ---

const InputField = ({ label, name, required, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[9px] font-black text-[#56765B] uppercase tracking-widest ml-1">
      {label} {required && "*" }
    </label>
    <input 
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="bg-white border border-transparent focus:border-[#56765B]/30 rounded-lg px-3 py-2.5 text-xs font-medium outline-none transition-all shadow-sm"
    />
  </div>
);

const SelectField = ({ label, name, required, options, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[9px] font-black text-[#56765B] uppercase tracking-widest ml-1">
      {label} {required && "*" }
    </label>
    <select 
      name={name}
      value={value}
      onChange={onChange}
      className="bg-white border border-transparent focus:border-[#56765B]/30 rounded-lg px-3 py-2.5 text-xs font-bold text-slate-700 outline-none appearance-none cursor-pointer shadow-sm"
    >
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const TextArea = ({ label, name, required, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[9px] font-black text-[#56765B] uppercase tracking-widest ml-1">
      {label} {required && "*" }
    </label>
    <textarea 
      name={name}
      rows="3"
      value={value}
      onChange={onChange}
      className="bg-white border border-transparent focus:border-[#56765B]/30 rounded-xl px-4 py-3 text-xs font-medium outline-none transition-all resize-none shadow-sm"
    />
  </div>
);