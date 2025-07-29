// src/pages/Home.jsx
const Home = () => {
  return (
    <section className="bg-gray-50 h-screen flex flex-col justify-center items-center text-center px-4 dark:text-white dark:bg-slate-800">
      <h1 className="text-4xl md:text-6xl font-heading text-gray-800 mb-4 dark:text-slate-50">
        Manage & Discover College Events
      </h1>
      <p className="text-gray-600 text-lg mb-6 max-w-xl dark: text-slate-400">
        A modern platform for students and admins to manage and register for campus events seamlessly.
      </p>
      <a href="/events" className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-500 transition">
        Explore Events
      </a>
    </section>
  );
};

export default Home;
