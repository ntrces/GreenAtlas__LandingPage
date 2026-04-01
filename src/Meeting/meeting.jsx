export default function Meetings() {
  const schedule = [
    { title: 'DENR Monthly Progress Sync', date: 'March 20, 2026', time: '10:00 AM', location: 'Trece Martires Office', type: 'External' },
    { title: 'GreenAtlas Dev Team Sprint', date: 'March 22, 2026', time: '2:00 PM', location: 'NU Dasmariñas Lab', type: 'Internal' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Meetings & Schedules</h1>
        <button className="bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-medium">+ Schedule Meeting</button>
      </div>

      <div className="space-y-4">
        {schedule.map((meet, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 text-emerald-700 w-16 h-16 rounded-xl flex flex-col items-center justify-center border border-emerald-100">
              <span className="text-[10px] uppercase font-bold tracking-tighter">{meet.date.split(' ')[0]}</span>
              <span className="text-xl font-black">{meet.date.split(' ')[1].replace(',', '')}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-gray-900">{meet.title}</h4>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                  meet.type === 'External' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                }`}>
                  {meet.type}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{meet.time} • {meet.location}</p>
            </div>
            <button className="text-gray-400 hover:text-emerald-600 font-medium text-sm">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}