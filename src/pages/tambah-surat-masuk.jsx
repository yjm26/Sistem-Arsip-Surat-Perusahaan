import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSuratMasuk } from "@/services/suratMasukService";
import { AppSidebar } from "@/layouts/app-sidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MailPlus } from "lucide-react";
import { AppTitlePage } from "@/layouts/app-titlepage";

function TambahSuratMasuk() {
  const [formData, setFormData] = useState({
    nomorSurat: "",
    pengirim: "",
    nomorAgenda: "",
    tanggalSurat: "",
    tanggalDiterima: "",
    ringkasan: "",
    kodeKlasifikasi: "",
    keterangan: "",
    lampiran: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "lampiran") {
      setFormData((prev) => ({ ...prev, lampiran: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lampiran bisa di-handle sesuai kebutuhan (misal: upload ke server)
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

      <main className="flex-1 bg-gray-100 p-8 flex flex-col items-center justify-center">
        <section>
          <AppTitlePage title="Tambah Surat Masuk" Icon={MailPlus} />
        </section>

        {/* Section Tambah Surat Masuk */}
        <section className="flex flex-row bg-white shadow-md rounded-b-lg p-15 w-[1368px] h-[782px] shadow-slate-200">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Surat
                </label>
                <input
                  type="text"
                  name="nomorSurat"
                  placeholder="Nomor Surat"
                  value={formData.nomorSurat}
                  onChange={handleChange}
                  className="w-full  h-full input-text rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pengirim
                </label>
                <input
                  type="text"
                  name="pengirim"
                  placeholder="Nama Pengirim"
                  value={formData.pengirim}
                  onChange={handleChange}
                  className="w-full  h-full input-text rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Agenda
                </label>
                <input
                  type="text"
                  name="nomorAgenda"
                  placeholder="Nomer Agenda"
                  value={formData.nomorAgenda}
                  onChange={handleChange}
                  className="w-full h-full input-text rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Surat
                </label>
                <input
                  type="date"
                  name="tanggalSurat"
                  value={formData.tanggalSurat}
                  onChange={handleChange}
                  className="w-full h-full input-text rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Diterima
                </label>
                <input
                  type="date"
                  name="tanggalDiterima"
                  value={formData.tanggalDiterima}
                  onChange={handleChange}
                  className="w-full h-full input-text rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ringkasan
              </label>
              <textarea
                name="ringkasan"
                placeholder="0×000001"
                value={formData.ringkasan}
                onChange={handleChange}
                className="w-full h-[350px] input-text border-[0.3px] rounded-md shadow-sm"
                rows={4}
              />
            </div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kode Klasifikasi
                </label>
                <input
                  type="text"
                  name="kodeKlasifikasi"
                  placeholder="0×000001"
                  value={formData.kodeKlasifikasi}
                  onChange={handleChange}
                  className="w-full input-text rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Keterangan
                </label>
                <input
                  type="text"
                  name="keterangan"
                  placeholder="Keterangan"
                  value={formData.keterangan}
                  onChange={handleChange}
                  className="w-full input-text rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lampiran
                </label>
                <input
                  type="file"
                  name="lampiran"
                  onChange={handleChange}
                  className="w-full input-text rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => navigate("/dashboard/surat-masuk")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default TambahSuratMasuk;