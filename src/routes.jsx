import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SuratMasuk from "@/pages/surat-masuk";
import SuratKeluar from "@/pages/surat-keluar";
import Agenda from "@/pages/agenda";
import Login from "@/pages/login";
import TambahSuratMasuk from "./pages/tambah-surat-masuk";
import TambahSuratKeluar from "./pages/tambah-surat-keluar";
import EditSuratMasuk from "./pages/edit-surat-masuk";
import Dashboard from "./pages/dashboard";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Redirect "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Sub Route Dashboard */}
        <Route path="/dashboard/surat-masuk" element={<SuratMasuk />} />
        <Route path="/dashboard/surat-keluar" element={<SuratKeluar />} />
        <Route path="/dashboard/agenda" element={<Agenda />} />

        {/* Sub Route Surat */}
        <Route path="/dashboard/surat-masuk/tambah-surat-masuk" element={<TambahSuratMasuk />} />
        <Route path="/dashboard/surat-keluar/tambah-surat-keluar" element={<TambahSuratKeluar />} />
        {/* Perbaiki path di bawah ini */}
        <Route path="/dashboard/surat-masuk/edit/:nomorSurat" element={<EditSuratMasuk />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;