// src/pages/Login.jsx or Register.jsx
const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-slate-800">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md dark:bg-slate-500">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600 dark:text-gray-300">Register</h2>
        <form>
          <input
            type="name"
            placeholder="Name"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="name"
            placeholder="Role"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
