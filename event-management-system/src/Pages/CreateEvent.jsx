import { useState, useEffect } from "react";

const CreateEvent = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  // 🟡 Load from localStorage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) setEvents(storedEvents);
  }, []);

  // 🔵 Save to localStorage every time events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !date) {
      alert("Please fill in all fields");
      return;
    }

    const newEvent = { title, desc, date };
    setEvents([...events, newEvent]);
    setTitle(""); setDesc(""); setDate(""); // Clear form
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Create New Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500" />
        <textarea placeholder="Event Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500" />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition">Create Event</button>
      </form>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Created Events</h3>
        {events.length === 0 ? (
          <p className="text-gray-500">No events created yet.</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="p-4 border rounded-md bg-gray-50">
                <h4 className="text-lg font-semibold">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.desc}</p>
                <p className="text-sm text-gray-500">📅 {event.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreateEvent;
