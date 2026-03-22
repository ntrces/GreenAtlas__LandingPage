function PlantRecordModal({ plant, onClose }) {
  if (!plant) {
    return null;
  }

  const scientificClassification = [
    { label: "Kingdom", value: "Plantae", bg: "" },
    { label: "Family", value: "Orchidaceae", bg: "bg-neutral-50" },
    { label: "Genus", value: "Phalaenopsis", bg: "" },
    { label: "Species", value: "amabilis", bg: "bg-neutral-50" },
  ];

  const physicalCharacteristicsRow1 = [
    { label: "Height Range", value: "30-60 cm" },
    { label: "Leaf Type", value: "Simple" },
  ];

  const physicalCharacteristicsRow2 = [
    { label: "Flowering Pattern", value: "Year-round" },
    { label: "Growth Form", value: "Epiphyte" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/35 p-6" onClick={onClose}>
      <div className="mx-auto w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col items-start border border-[#303d3226] bg-white">
          <div className="flex w-full items-center justify-between gap-2 bg-green-50 p-4">
            <h3 className="text-lg font-semibold text-[#303d32]">Plant Species Record</h3>

            <button className="rounded p-1 text-[#517156] hover:bg-[#dfece1]" onClick={onClose} title="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="w-full border-b border-[#303d3226] p-4">
            <div className="flex items-start gap-3">
              <div className="h-14 w-14 shrink-0 rounded border border-[#303d3226] bg-neutral-100">
                <div className="h-full w-full rounded bg-cover bg-center" style={{ backgroundImage: `url(${plant.image})` }} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base font-semibold text-[#303d32]">{plant.commonName}</h4>
                  <span className="rounded-md border border-[#ffd6a8] bg-[#ffedd4] px-2 py-0.5 text-xs font-medium text-[#ca3500]">
                    {plant.conservationStatus}
                  </span>
                  {plant.hasAR && <span className="rounded-md bg-[#517156] px-1.5 py-0.5 text-[10px] font-medium text-white">AR</span>}
                </div>

                <p className="text-sm text-[#517156]">{plant.scientificName}</p>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-[#517156]">
                  <span>{plant.id}</span>
                  <span>•</span>
                  <span>Flowering</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 p-4">
            <div className="rounded border border-[#ffd6a8] bg-orange-50 p-3">
              <div className="text-[10px] font-semibold leading-3 text-[#ca3500]">CONSERVATION STATUS</div>
              <div className="mt-1 text-sm font-medium text-[#7e2a0c]">{plant.conservationStatus}</div>
            </div>

            <div className="rounded border border-[#303d3226]">
              <div className="border-b border-[#303d3226] bg-green-50 px-3 py-2 text-[10px] font-semibold leading-3 text-[#517156]">ABOUT THIS PLANT</div>
              <div className="bg-neutral-50 p-3 text-sm leading-[16.8px] text-[#303d32]">
                Endemic orchid species with delicate white petals, plays crucial role in forest ecosystem as a pollinator attractant.
              </div>
            </div>

            <div className="rounded border border-[#303d3226]">
              <div className="border-b border-[#303d3226] bg-green-50 px-3 py-2 text-[10px] font-semibold leading-3 text-[#517156]">Scientific Classification</div>
              {scientificClassification.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-3 py-2 ${item.bg} ${index < scientificClassification.length - 1 ? "border-b border-[#303d3226]" : ""}`}
                >
                  <div className="text-xs text-[#517156]">{item.label}</div>
                  <div className="text-sm font-medium text-[#303d32]">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="rounded border border-[#303d3226]">
              <div className="border-b border-[#303d3226] bg-green-50 px-3 py-2 text-[10px] font-semibold leading-3 text-[#517156]">Physical Characteristics</div>
              <div className="grid grid-cols-2 border-b border-[#303d3226]">
                {physicalCharacteristicsRow1.map((item, index) => (
                  <div key={item.label} className={`px-3 py-2 ${index === 0 ? "border-r border-[#303d3226]" : ""}`}>
                    <div className="text-xs text-[#517156]">{item.label}</div>
                    <div className="text-sm font-medium text-[#303d32]">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 bg-neutral-50">
                {physicalCharacteristicsRow2.map((item, index) => (
                  <div key={item.label} className={`px-3 py-2 ${index === 0 ? "border-r border-[#303d3226]" : ""}`}>
                    <div className="text-xs text-[#517156]">{item.label}</div>
                    <div className="text-sm font-medium text-[#303d32]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded border border-[#303d3226]">
              <div className="border-b border-[#303d3226] bg-green-50 px-3 py-2 text-[10px] font-semibold leading-3 text-[#517156]">HABITAT</div>
              <div className="bg-neutral-50 px-3 py-2">
                <div className="text-[10px] leading-3 text-[#517156]">ECOSYSTEM TYPE</div>
                <div className="mt-1 text-sm text-[#303d32]">Tropical Rainforest</div>
              </div>
            </div>

            <div className="rounded border border-[#303d3226] bg-neutral-50">
              <div className="border-b border-[#d3e0d7] bg-green-50 px-3 py-2 text-[10px] font-semibold leading-3 text-[#517156]">ECOLOGICAL IMPORTANCE</div>
              <div className="p-3 text-sm leading-[16.8px] text-[#303d32]">
                Serves as critical pollinator habitat, supports biodiversity by attracting butterflies and bees, and indicates healthy forest canopy conditions.
              </div>
            </div>
          </div>

          <div className="flex w-full items-center gap-2 border-t border-[#303d3226] p-4">
            <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded bg-[#517156] text-sm font-medium text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.116 4.54126C14.4685 4.18888 14.6665 3.71091 14.6666 3.2125C14.6666 2.71409 14.4687 2.23607 14.1163 1.8836C13.7639 1.53112 13.286 1.33307 12.7876 1.33301C12.2892 1.33295 11.8111 1.53088 11.4587 1.88326L2.56133 10.7826C2.40654 10.9369 2.29207 11.127 2.228 11.3359L1.34733 14.2373C1.3301 14.2949 1.3288 14.3562 1.34356 14.4145C1.35833 14.4728 1.38861 14.5261 1.43119 14.5686C1.47378 14.6111 1.52708 14.6413 1.58544 14.656C1.64379 14.6707 1.70504 14.6693 1.76266 14.6519L4.66466 13.7719C4.87344 13.7084 5.06345 13.5947 5.218 13.4406L14.116 4.54126Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 3.3335L12.6667 6.00016" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              EDIT RECORD
            </button>

            <button className="flex h-9 w-40 items-center justify-center gap-2 rounded bg-[#ffeebd] text-sm font-medium text-[#e17100]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 2H1.99992C1.63173 2 1.33325 2.29848 1.33325 2.66667V4.66667C1.33325 5.03486 1.63173 5.33333 1.99992 5.33333H13.9999C14.3681 5.33333 14.6666 5.03486 14.6666 4.66667V2.66667C14.6666 2.29848 14.3681 2 13.9999 2Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.66675 5.3335V12.6668C2.66675 13.0205 2.80722 13.3596 3.05727 13.6096C3.30732 13.8597 3.64646 14.0002 4.00008 14.0002H12.0001C12.3537 14.0002 12.6928 13.8597 12.9429 13.6096C13.1929 13.3596 13.3334 13.0205 13.3334 12.6668V5.3335" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66675 8H9.33341" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantRecordModal;
