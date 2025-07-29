// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Events from "./Pages/Events";
import Dashboard from "./Pages/Dashboard";
import CreateEvent from "./Pages/CreateEvent";

function App() {
  return (
    <Router>
      <div className="font-body bg-gray-50 min-h-screen">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/create-event" element={<CreateEvent />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
