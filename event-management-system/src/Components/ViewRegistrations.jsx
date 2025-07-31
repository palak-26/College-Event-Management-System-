import { useEffect, useState } from "react";

const ViewRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    // Load mock data or from localStorage
    const stored = JSON.parse(localStorage.getItem("registrations")) || [
      {
        name: "Palak Neekhra",
        email: "palak@example.com",
        event: "Tech Fest 2025",
        date: "2025-08-10"
      },
      {
        name: "Ritesh Kumar",
        email: "ritesh@example.com",
        event: "Designathon",
        date: "2025-08-12"
      }
    ];
    setRegistrations(stored);
  }, []);

  return (
    <div className=" p-4 min-h-screen dark:bg-slate-800">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 dark:text-white">View Registrations</h1>

      {registrations.length === 0 ? (
        <p className="text-gray-500">No registrations found.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {registrations.map((reg, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{reg.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{reg.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{reg.event}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{reg.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewRegistrations;
