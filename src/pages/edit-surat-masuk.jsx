import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSuratMasukById, updateSuratMasuk } from "@/services/suratMasukService";
import { getKlasifikasi } from "@/services/refrensiService"; // Tambahkan import ini
import { AppSidebar } from "@/layouts/app-sidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MailPlus } from "lucide-react";
import { AppTitlePage } from "@/layouts/app-titlepage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditSuratMasuk() {
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

  const [klasifikasiList, setKlasifikasiList] = useState([]); // Tambahkan state ini

  const navigate = useNavigate();
  const { nomorSurat } = useParams();

  // Ambil data surat yang akan diedit
  useEffect(() => {
    async function fetchData() {
      try {
        const surat = await getSuratMasukById(nomorSurat);
        setFormData({
          nomorSurat: surat.nomor_surat,
          pengirim: surat.pengirim,
          nomorAgenda: surat.nomor_agenda,
          tanggalSurat: surat.tanggal_surat ? surat.tanggal_surat.slice(0, 10) : "",
          tanggalDiterima: surat.tanggal_diterima ? surat.tanggal_diterima.slice(0, 10) : "",
          ringkasan: surat.ringkasan,
          kodeKlasifikasi: surat.kode_klasifikasi,
          keterangan: surat.keterangan,
          lampiran: null,
        });
      } catch {
        toast.error("Data surat tidak ditemukan");
        navigate("/dashboard/surat-masuk");
      }
    }
    fetchData();
  }, [nomorSurat, navigate]);

  // Ambil data klasifikasi dari refrensi
  useEffect(() => {
    const fetchKlasifikasi = async () => {
      try {
        const data = await getKlasifikasi();
        setKlasifikasiList(data);
      } catch {
        toast.error("Gagal mengambil data klasifikasi");
      }
    };
    fetchKlasifikasi();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "lampiran") {
      setFormData((prev) => ({ ...prev, lampiran: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toISOString().split("T")[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("nomorSurat", formData.nomorSurat);
    formDataToSend.append("pengirim", formData.pengirim);
    formDataToSend.append("nomorAgenda", formData.nomorAgenda);
    formDataToSend.append("tanggalSurat", formatDate(formData.tanggalSurat));
    formDataToSend.append("tanggalDiterima", formatDate(formData.tanggalDiterima));
    formDataToSend.append("ringkasan", formData.ringkasan);
    formDataToSend.append("kodeKlasifikasi", formData.kodeKlasifikasi);
    formDataToSend.append("keterangan", formData.keterangan);
    if (formData.lampiran) {
      formDataToSend.append("lampiran", formData.lampiran);
    }

    try {
      await updateSuratMasuk(nomorSurat, formDataToSend);
      toast.success("Surat masuk berhasil diupdate!");
      setTimeout(() => navigate("/dashboard/surat-masuk"), 1500);
    } catch (err) {
      if (
        (err.response && err.response.data && err.response.data.error && err.response.data.error.includes("Nomor surat sudah ada")) ||
        (err.message && err.message.includes("Nomor surat sudah ada"))
      ) {
        toast.error("Nomor surat duplikat");
      } else if (err.response && err.response.data && err.response.data.error) {
        toast.error(err.response.data.error);
      } else if (err.message) {
        toast.error(err.message);
      } else {
        toast.error("Terjadi kesalahan.");
      }
    }
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
          <AppTitlePage title="Edit Surat Masuk" Icon={MailPlus} />
        </section>

        {/* Section Edit Surat Masuk */}
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
                  className="w-full h-full input-text rounded-md shadow-sm"
                  required
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
                  className="w-full h-full input-text rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Agenda
                </label>
                <input
                  type="text"
                  name="nomorAgenda"
                  placeholder="Nomor Agenda"
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
                  required
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
                placeholder="Ringkasan"
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
                <select
                  name="kodeKlasifikasi"
                  value={formData.kodeKlasifikasi}
                  onChange={handleChange}
                  className="w-full input-text rounded-md shadow-sm"
                >
                  <option value="">Pilih Kode Klasifikasi</option>
                  {klasifikasiList.map((item) => (
                    <option key={item.id} value={item.klasifikasi}>
                      {item.klasifikasi}
                    </option>
                  ))}
                </select>
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
                  Lampiran (PDF, max 2MB)
                </label>
                <input
                  type="file"
                  name="lampiran"
                  accept="application/pdf"
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
      <ToastContainer />
    </div>
  );
}

export default EditSuratMasuk;