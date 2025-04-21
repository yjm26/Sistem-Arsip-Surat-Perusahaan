import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/components/pages/login";
import Dashboard from "@/components/pages/dashboard";


function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman login */}
        <Route path="/" element={<Login />} />
        {/* Route untuk halaman dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;