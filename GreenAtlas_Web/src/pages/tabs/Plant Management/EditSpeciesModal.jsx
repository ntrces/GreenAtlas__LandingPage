import { useRef, useState } from "react";

function ChevronDownIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M3.33 5.33L8 10l4.67-4.67"
        stroke="#517156"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

function Label({ children, required = false, section = false }) {
  const cls = section
    ? "text-xs font-semibold tracking-[0.3px] text-[#517156]"
    : "text-xs font-medium tracking-[0.3px] text-[#303d32]";
  return (
    <label className={cls}>
      {children}
      {required ? " *" : ""}
    </label>
  );
}

function TextInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-9 w-full rounded border border-transparent bg-white px-3 text-sm text-[#517156] outline-none placeholder:text-[#517156]"
    />
  );
}

function TextArea({ value, onChange, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
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

function makeInitialForm(plant) {
  const scientificParts = (plant?.scientificName || "").trim().split(" ");
  return {
    commonName: plant?.commonName || "",
    scientificName: plant?.scientificName || "",
    category: "Flowering",
    conservationStatus: plant?.conservationStatus || "",
    description:
      "Endemic orchid species with delicate white petals, plays crucial role in forest ecosystem as a pollinator attractant.",
    habitat: "Tropical rainforest, Zone A",
    conservationNotes: "Protected species",
    kingdom: "Plantae",
    family: "Orchidaceae",
    genus: scientificParts[0] || "",
    species: scientificParts.slice(1).join(" ") || "",
    height: "30-50 cm",
    leafType: "Simple",
    flowering: "Perennial",
    growthForm: "Epiphyte, climbing, upright",
    ecosystemType: "Tropical Rainforest",
    ecologicalImportance:
      "Serves as critical pollinator habitat, supports biodiversity by attracting butterflies and bees, and indicates healthy forest canopy conditions.",
  };
}

function EditSpeciesModal({ plant, onClose, onSave }) {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [form, setForm] = useState(makeInitialForm(plant));

  if (!plant) {
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
    "Data Deficient",
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

  const setField = (field) => (value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

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

  const makeRecordTone = (recordStatus) => {
    return recordStatus === "DRAFT"
      ? "bg-gray-50 border-[#d1d5dc] text-[#4a5565]"
      : "bg-green-50 border-[#7bf1a8] text-[#008236]";
  };

  const handleSave = (recordStatus) => {
    onSave({
      ...plant,
      commonName: form.commonName,
      scientificName: form.scientificName,
      conservationStatus: form.conservationStatus || plant.conservationStatus,
      recordStatus,
      recordTone: makeRecordTone(recordStatus),
      image: uploadedFile ? URL.createObjectURL(uploadedFile) : plant.image,
    });
    onClose();
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
              <h3 className="text-lg font-semibold tracking-[0.45px] text-[#303d32]">EDIT SPECIES</h3>
              <p className="text-sm text-[#517156]">Update species information and publication state</p>
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
              <Label required>COMMON NAME</Label>
              <TextInput value={form.commonName} onChange={setField("commonName")} placeholder="e.g., Philippine Orchid" />
            </div>
            <div className="space-y-2">
              <Label required>SCIENTIFIC NAME</Label>
              <TextInput value={form.scientificName} onChange={setField("scientificName")} placeholder="e.g., Phalaenopsis amabilis" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label required>CATEGORY</Label>
              <SelectInput value={form.category} onChange={setField("category")} placeholder="Select category" options={categoryOptions} />
            </div>
            <div className="space-y-2">
              <Label required>CONSERVATION STATUS</Label>
              <SelectInput value={form.conservationStatus} onChange={setField("conservationStatus")} placeholder="Select status" options={conservationStatusOptions} />
            </div>
          </div>

          <div className="space-y-2">
            <Label required>DESCRIPTION</Label>
            <TextArea value={form.description} onChange={setField("description")} placeholder="Detailed description of the plant..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label required>HABITAT</Label>
              <TextInput value={form.habitat} onChange={setField("habitat")} placeholder="e.g., Tropical rainforest, Zone A" />
            </div>
            <div className="space-y-2">
              <Label>CONSERVATION NOTES</Label>
              <TextInput value={form.conservationNotes} onChange={setField("conservationNotes")} placeholder="e.g., Protected species" />
            </div>
          </div>

          <div className="space-y-3">
            <Label section>SCIENTIFIC CLASSIFICATION</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label required>KINGDOM</Label>
                <TextInput value={form.kingdom} onChange={setField("kingdom")} placeholder="e.g., Plantae" />
              </div>
              <div className="space-y-2">
                <Label required>FAMILY</Label>
                <TextInput value={form.family} onChange={setField("family")} placeholder="e.g., Orchidaceae" />
              </div>
              <div className="space-y-2">
                <Label required>GENUS</Label>
                <TextInput value={form.genus} onChange={setField("genus")} placeholder="e.g., Phalaenopsis" />
              </div>
              <div className="space-y-2">
                <Label required>SPECIES</Label>
                <TextInput value={form.species} onChange={setField("species")} placeholder="e.g., amabilis" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label section>PHYSICAL CHARACTERISTICS</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label required>HEIGHT</Label>
                <TextInput value={form.height} onChange={setField("height")} placeholder="e.g., 30-50 cm" />
              </div>
              <div className="space-y-2">
                <Label required>LEAF TYPE</Label>
                <SelectInput value={form.leafType} onChange={setField("leafType")} placeholder="Select leaf type" options={leafTypeOptions} />
              </div>
              <div className="space-y-2">
                <Label required>FLOWERING</Label>
                <SelectInput value={form.flowering} onChange={setField("flowering")} placeholder="Select flowering type" options={floweringOptions} />
              </div>
              <div className="space-y-2">
                <Label required>GROWTH FORM</Label>
                <TextInput value={form.growthForm} onChange={setField("growthForm")} placeholder="e.g., Epiphyte, climbing, upright" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label section required>ECOSYSTEM TYPE</Label>
            <SelectInput value={form.ecosystemType} onChange={setField("ecosystemType")} placeholder="Select ecosystem type" options={ecosystemTypeOptions} />
          </div>

          <div className="space-y-2">
            <Label section required>ECOLOGICAL IMPORTANCE</Label>
            <TextArea value={form.ecologicalImportance} onChange={setField("ecologicalImportance")} placeholder="Describe the plant's ecological role..." />
          </div>

          <div className="space-y-2">
            <Label section required>PLANT PHOTO</Label>
            <div
              className="flex h-34 cursor-pointer flex-col items-center justify-center rounded border-2 border-neutral-200 px-6"
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
            <button className="h-9 flex-1 rounded border border-[#303d3226] bg-[#e5f5e8] text-sm font-medium text-[#303d32]" onClick={() => handleSave("DRAFT")}>
              SAVE AS DRAFT
            </button>
            <button className="h-9 flex-1 rounded bg-[#517156] text-sm font-medium text-white" onClick={() => handleSave("PUBLISHED")}>
              PUBLISH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSpeciesModal;
