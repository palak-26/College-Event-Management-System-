// src/components/AdminSidebar.jsx
const AdminSideBar = () => {
  return (
    <div className="w-64 bg-indigo-700 text-white min-h-screen p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        <a href="/admin/dashboard" className="block hover:text-indigo-300">Dashboard</a>
        <a href="/admin/create-event" className="block hover:text-indigo-300">Create Event</a>
        <a href="/admin/registrations" className="block hover:text-indigo-300">View Registrations</a>
      </nav>
    </div>
  );
};

export default AdminSideBar;
