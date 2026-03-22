function ArchivePlantModal({ plant, onClose, onConfirm }) {
  if (!plant) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/25 p-4" onClick={onClose}>
      <div
        className="mx-auto mt-20 w-full max-w-105 rounded-lg border border-[#303d3226] bg-[#dbe8de] p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <h3 className="text-center text-2xl font-semibold text-[#303d32]">Archive Plant</h3>
          <button className="absolute right-0 top-0 text-[#517156]/70" onClick={onClose} title="Close" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-xl leading-tight text-[#517156]">
          Are you sure you want to archive "{plant.commonName}" ({plant.id})?
        </p>

        <p className="mt-4 text-l leading-tight text-[#517156]">
          *This will remove it from the active list but preserve it in the archive.
        </p>

        <div className="mt-6 flex gap-2">
          <button
            className="h-12 flex-1 rounded-xl bg-[#5a7d5f] text-m font-medium text-white"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="h-12 flex-1 rounded-xl border border-[#b8cac0] bg-transparent text-m font-normal text-[#2f3a33]"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArchivePlantModal;
