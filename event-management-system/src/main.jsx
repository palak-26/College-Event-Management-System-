// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind styles
import { DarkModeProvider } from "./Context/DarkModeContext";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> 
      <DarkModeProvider>
      <App />
    </DarkModeProvider>
    </AuthProvider>
  </React.StrictMode>
);
