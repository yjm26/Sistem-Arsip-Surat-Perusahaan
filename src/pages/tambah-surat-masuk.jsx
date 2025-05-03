import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSuratMasuk } from "@/services/suratMasukService";
import { AppSidebar } from "@/layouts/app-sidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import {MailPlus} from "lucide-react"
import { AppTitlePage } from "@/layouts/app-titlepage";
function TambahSuratMasuk() {
  const [formData, setFormData] = useState({
    nomorSurat: "",
    nomorAgenda: "",
    dari: "",
    kepada: "",
    tanggalSurat: "",
    tanggalDiterima: "",
    deskripsi: "",
    catatan: "",
    jenis: "",
    kodeKlasifikasi: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSuratMasuk(formData);
    navigate("/dashboard/surat-masuk");
  };

  return (

    <div className="flex h-screen">

       {/* Sidebar */}
       <aside>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </aside>

   
      <main className="flex-1  bg-gray-100 p-8 flex flex-col items-center justify-center">
      <section>
          <AppTitlePage title="Tambah Surat Masuk" Icon={MailPlus} /> 
        </section>

        {/* Section Tambah Surat Masuk */}
      <section className="flex flex-row bg-white shadow-md rounded-b-lg p-15 w-[1368px] h-[782px] shadow-slate-200">
  
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700">
              {key}
            </label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1  w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Tambah Surat
        </button>
      </form>
        </section>
    
    </main>
    </div>
  );
}

export default TambahSuratMasuk;