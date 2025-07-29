// src/pages/Dashboard.jsx
import AdminSideBar from "../Components/AdminSideBar";

const Dashboard = () => {
  return (
    <div className="flex dark:bg-slate-800">
      <AdminSideBar />
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Welcome, Admin 👋</h1>
        <p className="text-gray-600 dark:text-gray-300">Here you can manage all events and view registrations.</p>
      </div>
    </div>
  );
};

export default Dashboard;
