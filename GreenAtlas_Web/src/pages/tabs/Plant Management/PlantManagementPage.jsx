import { useState } from "react";
import Orchid from "../../../assets/Orchid.png";
import Herb from "../../../assets/Herb.png";
import PlantRecordModal from "./PlantRecordModal";
import AddSpeciesModal from "./AddSpeciesModal";
import EditSpeciesModal from "./EditSpeciesModal";
import ArchivePlantModal from "./ArchivePlantModal";


function Icon({ children, className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function EyeIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H0V0H16V16Z" />
<path d="M1.37468 8.23224C1.31912 8.08256 1.31912 7.91792 1.37468 7.76824C1.91581 6.45614 2.83435 5.33427 4.01386 4.54484C5.19336 3.75541 6.58071 3.33398 8.00001 3.33398C9.41932 3.33398 10.8067 3.75541 11.9862 4.54484C13.1657 5.33427 14.0842 6.45614 14.6253 7.76824C14.6809 7.91792 14.6809 8.08256 14.6253 8.23224C14.0842 9.54434 13.1657 10.6662 11.9862 11.4556C10.8067 12.2451 9.41932 12.6665 8.00001 12.6665C6.58071 12.6665 5.19336 12.2451 4.01386 11.4556C2.83435 10.6662 1.91581 9.54434 1.37468 8.23224Z" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </Icon>
  );
}

function PencilIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_405_3802)">
<path d="M14.1161 4.54126C14.4686 4.18888 14.6666 3.71091 14.6667 3.2125C14.6668 2.71409 14.4688 2.23607 14.1165 1.8836C13.7641 1.53112 13.2861 1.33307 12.7877 1.33301C12.2893 1.33295 11.8113 1.53088 11.4588 1.88326L2.56145 10.7826C2.40667 10.9369 2.29219 11.127 2.22812 11.3359L1.34745 14.2373C1.33022 14.2949 1.32892 14.3562 1.34369 14.4145C1.35845 14.4728 1.38873 14.5261 1.43132 14.5686C1.4739 14.6111 1.5272 14.6413 1.58556 14.656C1.64392 14.6707 1.70516 14.6693 1.76279 14.6519L4.66479 13.7719C4.87357 13.7084 5.06357 13.5947 5.21812 13.4406L14.1161 4.54126Z" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 3.3335L12.6667 6.00016" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_405_3802">
<path d="M0 0H16V16H0V0Z" fill="white"/>
</clipPath>
</defs>
</svg>
    </Icon>
  );
}

function ArchiveIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H0V0H16V16Z" />
<path d="M13.9999 2H1.99992C1.63173 2 1.33325 2.29848 1.33325 2.66667V4.66667C1.33325 5.03486 1.63173 5.33333 1.99992 5.33333H13.9999C14.3681 5.33333 14.6666 5.03486 14.6666 4.66667V2.66667C14.6666 2.29848 14.3681 2 13.9999 2Z" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.66675 5.3335V12.6668C2.66675 13.0205 2.80722 13.3596 3.05727 13.6096C3.30732 13.8597 3.64646 14.0002 4.00008 14.0002H12.0001C12.3537 14.0002 12.6928 13.8597 12.9429 13.6096C13.1929 13.3596 13.3334 13.0205 13.3334 12.6668V5.3335" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66675 8H9.33341" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </Icon>
  );
}

function SearchIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#517156" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14L11.1333 11.1333" stroke="#517156" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </Icon>
  );
}

function ChevronDownIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M4 6L8 10L12 6" stroke="#517156" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </Icon>
  );
}

function UploadIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3334 5.33333L8.00008 2L4.66675 5.33333" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2V10" stroke="#303D32" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </Icon>
  );
}

function PlusIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H0V0H16V16Z" />
<path d="M3.33325 8H12.6666" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 3.33325V12.6666" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </Icon>
  );
}

function FileTextIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M15 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7L15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2V6C14 7.1 14.9 8 16 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stats = [
  {
    value: "3",
    valueColor: "text-[#303d32]",
    label: "Total Species",
    subLabel: "In database",
    subLabelColor: "text-[#517156]",
    borderColor: "border-[#303d3226]",
  },
  {
    value: "1",
    valueColor: "text-[#e7000b]",
    label: "Threatened Species",
    subLabel: "PRIORITY CONSERVATION",
    subLabelColor: "text-[#e7000b]",
    borderColor: "border-[#e0e2e0]",
  },
  {
    value: "3",
    valueColor: "text-[#303d32]",
    label: "AR Models",
    subLabel: "3D assets available",
    subLabelColor: "text-[#517156]",
    borderColor: "border-[#303d3226]",
  },
];

const observerOptions = [
  "All Observers",
  "Observer 1",
  "Observer 2",
  "Observer 3",
];
const timeOptions = ["All Time", "Last 7 Days", "Last 30 Days", "Last Year"];
const statusOptions = ["Active", "Archived"];

const initialSpeciesData = [
  {
    id: "PLT-001",
    image: Orchid,
    commonName: "Philippine Orchid",
    hasAR: true,
    scientificName: "Phalaenopsis amabilis",
    conservationStatus: "Vulnerable",
    conservationTone: "bg-orange-50 border-[#ffd6a8] text-[#f54900]",
    observations: "1",
    recordStatus: "PUBLISHED",
    recordTone: "bg-green-50 border-[#7bf1a8] text-[#008236]",
    actions: [
      { icon: "eye", title: "View" },
      { icon: "pencil", title: "Edit" },
      { icon: "archive", title: "Archive" },
    ],
  },
  {
    id: "PLT-002",
    image: Herb,
    commonName: "Mountain Fern",
    hasAR: false,
    scientificName: "Nephrolepis cordifolia",
    conservationStatus: "Least Concern (LC)",
    conservationTone: "bg-green-50 border-[#7bf1a8] text-[#008236]",
    observations: "1",
    recordStatus: "DRAFT",
    recordTone: "bg-gray-50 border-[#d1d5dc] text-[#4a5565]",
    actions: [
      { icon: "eye", title: "View" },
      { icon: "pencil", title: "Edit" },
      { icon: "archive", title: "Archive" },
    ],
  },
  {
    id: "PLT-003",
    image: Orchid,
    commonName: "Jade Vine",
    hasAR: true,
    scientificName: "Strongylodon macrobotrys",
    conservationStatus: "Critically Endangered",
    conservationTone: "bg-[#ffe2e2] border-[#ffa2a2] text-[#c10007]",
    observations: "N/A",
    recordStatus: "PUBLISHED",
    recordTone: "bg-green-50 border-[#7bf1a8] text-[#008236]",
    actions: [
      { icon: "eye", title: "View" },
      { icon: "pencil", title: "Edit" },
      { icon: "archive", title: "Archive" },
    ],
  },
];

function ActionIcon({ icon, title, onClick }) {
  const buttonClass =
    "flex h-7 w-7 items-center justify-center rounded text-[#303d32] transition-colors hover:bg-neutral-100";

  if (icon === "eye") {
    return (
      <button title={title} className={buttonClass} onClick={onClick}>
        <EyeIcon className="h-4 w-4" />
      </button>
    );
  }

  if (icon === "pencil") {
    return (
      <button title={title} className={buttonClass} onClick={onClick}>
        <PencilIcon className="h-4 w-4" />
      </button>
    );
  }

  if (icon === "archive") {
    return (
      <button title={title} className={buttonClass} onClick={onClick}>
        <ArchiveIcon className="h-4 w-4" />
      </button>
    );
  }

  return null;
}

function SelectField({ value, onChange, options }) {
  return (
    <div className="relative h-9 w-51.75 rounded border border-[#00000026] bg-white">
      <select
        className="h-full w-full cursor-pointer appearance-none bg-transparent px-3 text-left text-xs text-[#303d32] outline-none"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#517156]/50" />
    </div>
  );
}

function PlantManagementPage() {
  const [searchValue, setSearchValue] = useState("");
  const [observer, setObserver] = useState("All Observers");
  const [time, setTime] = useState("All Time");
  const [status, setStatus] = useState("Active");
  const [speciesList, setSpeciesList] = useState(initialSpeciesData);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [editingPlant, setEditingPlant] = useState(null);
  const [archivingPlant, setArchivingPlant] = useState(null);
  const [isAddSpeciesOpen, setIsAddSpeciesOpen] = useState(false);

  const handleAction = (action, species) => {
    if (action === "eye" && species.recordStatus === "DRAFT") {
      setEditingPlant(species);
      return;
    }

    if (action === "eye") {
      setSelectedPlant(species);
      return;
    }

    if (action === "pencil") {
      setEditingPlant(species);
      return;
    }

    if (action === "archive") {
      setArchivingPlant(species);
    }
  };

  const handleSavePlant = (updatedPlant) => {
    setSpeciesList((prev) =>
      prev.map((plant) => (plant.id === updatedPlant.id ? { ...plant, ...updatedPlant } : plant)),
    );
  };

  const handleConfirmArchive = () => {
    if (!archivingPlant) {
      return;
    }

    setSpeciesList((prev) =>
      prev.map((plant) =>
        plant.id === archivingPlant.id
          ? {
              ...plant,
              recordStatus: "DRAFT",
              recordTone: "bg-gray-50 border-[#d1d5dc] text-[#4a5565]",
            }
          : plant,
      ),
    );
    setArchivingPlant(null);
  };

  return (
    <section className="border border-[#e0e2e0] bg-white">
      <div className="flex items-start justify-between gap-4 border-b border-[#303d3226] px-6 py-5">
        <div>
          <h1 className="text-lg font-semibold text-[#303d32]">PLANT CONTENT MANAGEMENT</h1>
          <p className="text-xs text-[#517156]">Species profiles - AR content - Educational metadata</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex h-8 items-center gap-2 rounded border border-[#303d3226] bg-[#e5f5e8] px-3 text-sm font-medium text-[#303d32]">
            <UploadIcon className="h-4 w-4" />
            UPLOAD/REPLACE AR GARDEN
          </button>
          <button
            className="inline-flex h-8 items-center gap-2 rounded bg-[#517156] px-3 text-sm font-medium text-white"
            onClick={() => setIsAddSpeciesOpen(true)}
          >
            <PlusIcon className="h-4 w-4" />
            ADD SPECIES
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 border-b border-[#303d3226] px-6 py-2">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-4 py-2 ${index < stats.length - 1 ? `border-r ${stat.borderColor}` : ""}`}
          >
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold leading-none ${stat.valueColor}`}>{stat.value}</span>
              <span className="text-xs text-[#517156]">{stat.label}</span>
            </div>
            <p className={`mt-1 text-[10px] ${stat.subLabelColor}`}>{stat.subLabel}</p>
          </div>
        ))}
      </div>

      <div className="border-b border-[#303d3226] bg-neutral-50 px-6 py-3">
        <div className="rounded border border-[#303d3226] bg-white">
          <div className="border-b border-[#303d3226] bg-neutral-50 px-4 py-2">
            <h2 className="text-xs font-semibold tracking-wide text-[#303d32]">AR GARDEN ASSET</h2>
          </div>

          <div className="flex items-center justify-between px-3 py-3">
            <div className="flex items-center gap-3">
              <FileTextIcon className="h-6 w-6 text-[#517156]" />
              <div>
                <p className="text-sm font-semibold text-[#303d32]">Current AR Garden File</p>
                <p className="font-mono text-xs text-[#517156]">/garden/ar-garden-cavite.glb</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-md border border-[#7bf1a8] bg-green-50 px-2 py-0.5 text-xs font-medium text-[#008236]">
                ACTIVE
              </span>
              <button className="inline-flex h-8 items-center gap-2 rounded border border-[#303d3226] bg-[#e5f5e8] px-3 text-sm font-medium text-[#303d32]">
                <UploadIcon className="h-4 w-4" />
                Replace File
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#517156]" />
            <input
              className="h-9 w-full rounded border border-[#00000026] bg-white pl-9 pr-3 text-sm text-[#517156] outline-none transition-colors focus:border-[#517156]"
              placeholder="Search by ID, species name, scientific name..."
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <SelectField
            value={observer}
            onChange={(e) => setObserver(e.target.value)}
            options={observerOptions}
          />
          <SelectField value={time} onChange={(e) => setTime(e.target.value)} options={timeOptions} />
          <SelectField
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={statusOptions}
          />
        </div>
      </div>

      <div className="p-6 pt-2">
        <div className="overflow-x-auto border border-[#e0e2e0]">
          <table className="min-w-full table-fixed border-collapse">
            <thead className="bg-neutral-50">
              <tr className="border-b border-[#dcdedc] text-left text-sm font-medium text-[#303d32]">
                <th className="px-4 py-2">Plant ID</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Common Name</th>
                <th className="px-4 py-2">Scientific Name</th>
                <th className="px-4 py-2">Conservation Status</th>
                <th className="px-4 py-2">Observations</th>
                <th className="px-4 py-2">Record Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {speciesList.map((species) => (
                <tr key={species.id} className="h-18 border-b border-[#303d3226] last:border-b-0">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-[#303d32]">{species.id}</td>

                  <td className="px-4 py-3">
                    <div className="h-12 w-12 overflow-hidden rounded bg-neutral-100">
                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${species.image})` }}
                      />
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-[#303d32]">{species.commonName}</p>
                    {species.hasAR && (
                      <span className="mt-1 inline-flex rounded-md bg-[#517156] px-1.5 py-0 text-[10px] font-medium text-white">
                        AR
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-xs italic text-[#517156]">{species.scientificName}</td>

                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-md border px-2 py-0.5 text-[10px] font-medium ${species.conservationTone}`}
                    >
                      {species.conservationStatus}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-xs text-[#517156]">{species.observations}</td>

                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-md border px-2 py-0.5 text-[10px] font-medium ${species.recordTone}`}>
                      {species.recordStatus}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      {species.actions.map((action) => (
                        <ActionIcon
                          key={action.icon}
                          icon={action.icon}
                          title={action.title}
                          onClick={() => handleAction(action.icon, species)}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PlantRecordModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      <EditSpeciesModal
        key={editingPlant?.id || "edit-modal"}
        plant={editingPlant}
        onClose={() => setEditingPlant(null)}
        onSave={handleSavePlant}
      />
      <ArchivePlantModal
        plant={archivingPlant}
        onClose={() => setArchivingPlant(null)}
        onConfirm={handleConfirmArchive}
      />
      <AddSpeciesModal isOpen={isAddSpeciesOpen} onClose={() => setIsAddSpeciesOpen(false)} />
    </section>
  );
}

export default PlantManagementPage;