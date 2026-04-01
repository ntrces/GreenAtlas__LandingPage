import React from 'react';

export default function ArchivedPlant({ plantData, onClose, onConfirm }) {
  // Fallback data if no plant is selected
  const plantName = plantData?.commonName || "Philippine Orchid";
  const plantId = plantData?.id || "PLT-001";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-[#EBF5EE] w-full max-w-md rounded-[2rem] shadow-2xl p-8 animate-in zoom-in duration-200 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors text-xl font-bold"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-black text-[#2D3E33] mb-8">Archive Plant</h2>
          
          <p className="text-[#56765B] text-lg font-medium leading-relaxed px-2">
            Are you sure you want to archive "{plantName}" ({plantId})?
          </p>

          <p className="text-[#56765B]/60 text-sm font-medium mt-8 leading-relaxed italic">
            *This will remove it from the active list but preserve it in the archive.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-10">
          <button 
            onClick={() => onConfirm(plantData)}
            className="flex-1 bg-[#56765B] text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-[#56765B]/20 hover:bg-[#3E5542] transition-all active:scale-95"
          >
            Yes
          </button>
          <button 
            onClick={onClose}
            className="flex-1 bg-[#F1F9F3] text-[#56765B] py-4 rounded-xl font-black text-lg border border-[#D1E7D6] hover:bg-[#D1E7D6]/30 transition-all active:scale-95"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}