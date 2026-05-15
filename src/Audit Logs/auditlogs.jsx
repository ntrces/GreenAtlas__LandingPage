export default function AuditLogs() {
  return (
    <div className="p-8">
      <div className="bg-zinc-900 rounded-lg p-6 font-mono text-sm text-emerald-400 h-[500px] overflow-y-auto">
        <p className="opacity-50 border-b border-zinc-800 pb-2 mb-4">// GREENATLAS SYSTEM LOGS - MARCH 2026</p>
        <p className="mb-2 uppercase text-xs text-gray-500">[2026-03-16 09:00]</p>
        <p className="mb-4 text-white">USER "AB_PORRAS" INITIATED DATABASE SYNC FOR CAVITE REGION 4A.</p>
        <p className="mb-2 uppercase text-xs text-gray-500">[2026-03-16 09:15]</p>
        <p className="mb-4">SYSTEM ALERT: NEW VIOLATION RECORDED IN MARAGONDON BY OBSERVER #12.</p>
        <p className="animate-pulse">_</p>
      </div>
    </div>
  );
}