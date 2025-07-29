// src/pages/Events.jsx
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) setEvents(storedEvents);
  }, []);

  return (
    <div className="container min-h-screen mx-auto px-6 py-8 dark:bg-slate-800">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 dark:text-white">Upcoming Events</h1>
      {events.length === 0 ? (
        <p className="text-gray-500">No events available yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-5 dark:bg-gray-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.desc}</p>
              <p className="text-sm text-gray-500">📅 {event.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
