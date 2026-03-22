import { useRef, useState } from "react";

function ChevronDownIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3.33 5.33L8 10l4.67-4.67" stroke="#517156" strokeWidth="1.5" strokeLinecap="round"  strokeLinejoin="round" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="3" stroke="#517156" strokeWidth="1.5" />
      <circle cx="11" cy="12" r="2.5" stroke="#517156" strokeWidth="1.5" />
      <path d="M3 22l7-7 5 5 4-4 8 8" stroke="#517156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10v6M17 13h6" stroke="#517156" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FieldLabel({ children, required = false, section = false }) {
  const base = section
    ? "text-xs font-semibold tracking-[0.3px] text-[#517156]"
    : "text-xs font-medium tracking-[0.3px] text-[#303d32]";

  return (
    <label className={base}>
      {children}
      {required && " *"}
    </label>
  );
}

function TextInput({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-9 w-full rounded border border-transparent bg-white px-3 text-sm text-[#517156] outline-none placeholder:text-[#517156]"
    />
  );
}

function TextArea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="h-16 w-full resize-none rounded border border-transparent bg-white px-3 py-2 text-sm leading-5 text-[#517156] outline-none placeholder:text-[#517156]"
    />
  );
}

function SelectInput({ value, onChange, placeholder, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 w-full appearance-none rounded border border-transparent bg-white px-3 pr-9 text-sm text-[#517156] outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-60">
        <ChevronDownIcon />
      </div>
    </div>
  );
}

function AddSpeciesModal({ isOpen, onClose }) {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [leafType, setLeafType] = useState("");
  const [flowering, setFlowering] = useState("");
  const [ecosystem, setEcosystem] = useState("");

  if (!isOpen) {
    return null;
  }

  const categoryOptions = ["Flowering", "Tree", "Fern"];
  const conservationStatusOptions = [
    "Not Threatened",
    "Least Concern",
    "Near Threatened",
    "Other Threatened Status",
    "Vulnerable",
    "Endangered",
    "Critically Endangered",
    "Data Deficient"
  ];
  const leafTypeOptions = ["Simple", "Compound", "Needle", "Scale", "Lobed"];
  const floweringOptions = ["Annual", "Biennial", "Perennial", "Non-flowering"];
  const ecosystemTypeOptions = [
    "Tropical Rainforest",
    "Temperate Forest",
    "Grassland",
    "Desert",
    "Wetland",
    "Marine",
    "Freshwater",
  ];

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/25 p-4" onClick={onClose}>
      <div
        className="mx-auto max-h-[95vh] w-full max-w-140 overflow-y-auto rounded border border-[#303d3226] bg-[#e5f5e8]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 border-b border-[#303d3226] bg-[#e5f5e8] px-4 py-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-[0.45px] text-[#303d32]">ADD SPECIES</h3>
              <p className="text-sm text-[#517156]">Add a new species to the database</p>
            </div>
            <button className="rounded p-1 text-[#517156]/80 hover:bg-[#dbe8de]" onClick={onClose} title="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M15 5L5 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FieldLabel required>COMMON NAME</FieldLabel>
              <TextInput placeholder="e.g., Philippine Orchid" />
            </div>
            <div className="space-y-2">
              <FieldLabel required>SCIENTIFIC NAME</FieldLabel>
              <TextInput placeholder="e.g., Phalaenopsis amabilis" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FieldLabel required>CATEGORY</FieldLabel>
              <SelectInput value={category} onChange={setCategory} placeholder="Select category" options={categoryOptions} />
            </div>
            <div className="space-y-2">
              <FieldLabel required>CONSERVATION STATUS</FieldLabel>
              <SelectInput value={status} onChange={setStatus} placeholder="Select status" options={conservationStatusOptions} />
            </div>
          </div>

          <div className="space-y-2">
            <FieldLabel required>DESCRIPTION</FieldLabel>
            <TextArea placeholder="Detailed description of the plant..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FieldLabel required>HABITAT</FieldLabel>
              <TextInput placeholder="e.g., Tropical rainforest, Zone A" />
            </div>
            <div className="space-y-2">
              <FieldLabel>CONSERVATION NOTES</FieldLabel>
              <TextInput placeholder="e.g., Protected species" />
            </div>
          </div>

          <div className="space-y-3">
            <FieldLabel section>SCIENTIFIC CLASSIFICATION</FieldLabel>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FieldLabel required>KINGDOM</FieldLabel>
                <TextInput placeholder="e.g., Plantae" />
              </div>
              <div className="space-y-2">
                <FieldLabel required>FAMILY</FieldLabel>
                <TextInput placeholder="e.g., Orchidaceae" />
              </div>
              <div className="space-y-2">
                <FieldLabel required>GENUS</FieldLabel>
                <TextInput placeholder="e.g., Phalaenopsis" />
              </div>
              <div className="space-y-2">
                <FieldLabel required>SPECIES</FieldLabel>
                <TextInput placeholder="e.g., amabilis" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <FieldLabel section>PHYSICAL CHARACTERISTICS</FieldLabel>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FieldLabel required>HEIGHT</FieldLabel>
                <TextInput placeholder="e.g., 30-50 cm" />
              </div>
              <div className="space-y-2">
                <FieldLabel required>LEAF TYPE</FieldLabel>
                <SelectInput value={leafType} onChange={setLeafType} placeholder="Select leaf type" options={leafTypeOptions} />
              </div>
              <div className="space-y-2">
                <FieldLabel required>FLOWERING</FieldLabel>
                <SelectInput value={flowering} onChange={setFlowering} placeholder="Select flowering type" options={floweringOptions} />
              </div>
              <div className="space-y-2">
                <FieldLabel required>GROWTH FORM</FieldLabel>
                <TextInput placeholder="e.g., Epiphyte, climbing, upright" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <FieldLabel section required>ECOSYSTEM TYPE</FieldLabel>
            <SelectInput value={ecosystem} onChange={setEcosystem} placeholder="Select ecosystem type" options={ecosystemTypeOptions} />
          </div>

          <div className="space-y-2">
            <FieldLabel section required>ECOLOGICAL IMPORTANCE</FieldLabel>
            <TextArea placeholder="Describe the plant's ecological role, benefits to biodiversity, soil conservation, wildlife support, etc..." />
          </div>

          <div className="space-y-2">
            <FieldLabel section required>PLANT PHOTO</FieldLabel>
            <div
              className="flex h-34 cursor-pointer flex-col items-center justify-center rounded border-2 border-neutral-200 bg-transparent px-6"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <input ref={fileInputRef} type="file" accept=".jpg,.jpeg,.png" className="hidden" onChange={handleFileChange} />
              <UploadIcon />
              <p className="mt-2 text-center text-sm text-[#517156]">
                {uploadedFile ? (
                  <span className="font-medium">{uploadedFile.name}</span>
                ) : (
                  <>
                    <span className="font-medium">Click to upload plant photo</span> or drag and drop
                  </>
                )}
              </p>
              <p className="mt-1 text-xs text-[#517156]">JPG, PNG, JPEG (max 5MB)</p>
            </div>
          </div>

          <div className="flex gap-3 pb-1">
            <button className="h-9 flex-1 rounded border border-[#303d3226] bg-[#e5f5e8] text-sm font-medium text-[#303d32]">
              SAVE AS DRAFT
            </button>
            <button className="h-9 flex-1 rounded bg-[#517156] text-sm font-medium text-white">PUBLISH</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSpeciesModal;
