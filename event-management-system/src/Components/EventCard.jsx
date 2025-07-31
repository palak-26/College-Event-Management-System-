// src/components/EventCard.jsx
const EventCard = ({ title, desc, date }) => {
  return (
    <div className="bg-white h-1/3 shadow-md rounded-xl p-6 hover:shadow-lg transition-all  hover:scale-105 transition-all duration-1000 ">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-slate-100">{title}</h3>
      <p className="text-gray-600 mb-2 dark:text-slate-200">{desc}</p>
      <p className="text-sm text-gray-500 mb-4 dark:text-slate-300">📅 {date}</p>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-500 transition ">
        Register
      </button>
    </div>
  );
};

export default EventCard;
