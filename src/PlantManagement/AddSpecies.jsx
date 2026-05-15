import React, { useState } from 'react';

export default function AddSpecies({ onClose, onPublish, onSaveDraft }) {
  const [formData, setFormData] = useState({
    commonName: '',
    scientificName: '',
    category: '',
    conservationStatus: '',
    description: '',
    habitat: '',
    conservationNotes: '',
    kingdom: '',
    family: '',
    genus: '',
    species: '',
    height: '',
    leafType: '',
    flowering: '',
    growthForm: '',
    ecosystemType: '',
    ecologicalImportance: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <div className="bg-[#EBF5EE] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        
        {/* --- MODAL HEADER --- */}
        <div className="px-6 py-5 flex justify-between items-start shrink-0">
          <div>
            <h2 className="text-lg font-black text-[#2D3E33] uppercase tracking-tight">Add Species</h2>
            <p className="text-[#56765B] text-[10px] font-bold mt-0.5">Add a new species to the database</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors text-xl font-bold">✕</button>
        </div>

        {/* --- FORM BODY --- */}
        <div className="px-6 pb-6 overflow-y-auto custom-scrollbar space-y-5">
          
          {/* Top Row: Common & Scientific */}
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Common Name" name="commonName" required placeholder="e.g., Philippine Orchid" value={formData.commonName} onChange={handleChange} />
            <InputField label="Scientific Name" name="scientificName" required placeholder="e.g., Phalaenopsis amabilis" value={formData.scientificName} onChange={handleChange} />
          </div>

          {/* Category & Status */}
          <div className="grid grid-cols-2 gap-4">
            <SelectField label="Category" name="category" required options={['Orchid', 'Fern', 'Tree', 'Shrub']} value={formData.category} onChange={handleChange} />
            <SelectField label="Conservation Status" name="conservationStatus" required options={['Critically Endangered', 'Endangered', 'Vulnerable', 'Least Concern']} value={formData.conservationStatus} onChange={handleChange} />
          </div>

          <TextArea label="Description" name="description" required placeholder="Detailed description of the plant..." value={formData.description} onChange={handleChange} />

          {/* Habitat & Notes */}
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Habitat" name="habitat" required placeholder="e.g., Tropical rainforest, Zone A" value={formData.habitat} onChange={handleChange} />
            <InputField label="Conservation Notes" name="conservationNotes" placeholder="e.g., Protected species" value={formData.conservationNotes} onChange={handleChange} />
          </div>

          {/* SCIENTIFIC CLASSIFICATION Section */}
          <div className="pt-2">
            <p className="text-[9px] font-black text-[#56765B] uppercase tracking-widest mb-3">Scientific Classification</p>
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Kingdom" name="kingdom" required placeholder="e.g., Plantae" value={formData.kingdom} onChange={handleChange} />
              <InputField label="Family" name="family" required placeholder="e.g., Orchidaceae" value={formData.family} onChange={handleChange} />
              <InputField label="Genus" name="genus" required placeholder="e.g., Phalaenopsis" value={formData.genus} onChange={handleChange} />
              <InputField label="Species" name="species" required placeholder="e.g., amabilis" value={formData.species} onChange={handleChange} />
            </div>
          </div>

          {/* PHYSICAL CHARACTERISTICS Section */}
          <div className="pt-2">
            <p className="text-[9px] font-black text-[#56765B] uppercase tracking-widest mb-3">Physical Characteristics</p>
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Height" name="height" required placeholder="e.g., 30-50 cm" value={formData.height} onChange={handleChange} />
              <SelectField label="Leaf Type" name="leafType" required options={['Broad', 'Needle', 'Compound']} value={formData.leafType} onChange={handleChange} />
              <SelectField label="Flowering" name="flowering" required options={['Yes', 'No', 'Seasonal']} value={formData.flowering} onChange={handleChange} />
              <InputField label="Growth Form" name="growthForm" required placeholder="e.g., Epiphyte, climbing, upright" value={formData.growthForm} onChange={handleChange} />
            </div>
          </div>

          <SelectField label="Ecosystem Type" name="ecosystemType" required options={['Rain Forest', 'Mangrove', 'Grassland']} value={formData.ecosystemType} onChange={handleChange} />

          <TextArea label="Ecological Importance" name="ecologicalImportance" required placeholder="Describe the plant's ecological role, benefits to biodiversity, soil..." value={formData.ecologicalImportance} onChange={handleChange} />

          {/* IMAGE UPLOAD AREA */}
          <div className="pt-2">
            <p className="text-[9px] font-black text-[#56765B] uppercase tracking-widest mb-2">Plant Photo *</p>
            <div className="border-2 border-dashed border-[#D1E7D6] bg-white/40 rounded-xl p-8 flex flex-col items-center justify-center group hover:border-[#56765B] hover:bg-white transition-all cursor-pointer">
              <span className="text-3xl mb-3 opacity-40 group-hover:opacity-100 transition-opacity">🖼️</span>
              <p className="text-xs font-bold text-[#56765B]">Click to upload plant photo or drag and drop</p>
              <p className="text-[9px] text-slate-400 font-bold mt-1 uppercase">JPG, PNG, JPEG (max 5MB)</p>
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

// --- Internal Helper Components ---

const InputField = ({ label, name, required, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[9px] font-black text-[#56765B] uppercase tracking-widest ml-1">
      {label} {required && "*" }
    </label>
    <input 
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-white border border-transparent focus:border-[#56765B]/30 rounded-lg px-3 py-2.5 text-xs font-medium outline-none transition-all placeholder:text-slate-300 shadow-sm"
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
      <option value="">Select {label.toLowerCase()}</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const TextArea = ({ label, name, required, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[9px] font-black text-[#56765B] uppercase tracking-widest ml-1">
      {label} {required && "*" }
    </label>
    <textarea 
      name={name}
      rows="3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-white border border-transparent focus:border-[#56765B]/30 rounded-xl px-4 py-3 text-xs font-medium outline-none transition-all resize-none placeholder:text-slate-200 shadow-sm"
    />
  </div>
);