export default function UserManagement() {
  const team = [
    { name: 'Andrew Barce Porras', role: 'System Admin', email: 'andrew@greenatlas.com', status: 'Active' },
    { name: 'Arc Angell Porras', role: 'Lead Developer', email: 'arc@greenatlas.com', status: 'Active' },
    { name: 'Angel Geraldine Mendigoria', role: 'Field Supervisor', email: 'angel@greenatlas.com', status: 'Active' },
    { name: 'Althea Abonado', role: 'Botanical Analyst', email: 'althea@greenatlas.com', status: 'Away' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm">Add New Member</button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Team Member</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Role</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Settings</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {team.map((user) => (
              <tr key={user.email} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-600">{user.role}</td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                    user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-emerald-600 hover:text-emerald-800 font-bold">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}