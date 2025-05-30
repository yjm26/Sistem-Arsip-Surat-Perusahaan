import React, { useState, useEffect } from "react";
import { MailPlus } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AppSidebar } from "@/layouts/app-sidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppTitlePage } from "@/layouts/app-titlepage";
import { AppTable } from "@/layouts/app-table";
import { getSuratMasuk, deleteSuratMasuk } from "@/services/suratMasukService";

function SuratMasuk() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const surat = await getSuratMasuk();
      setData(surat);
    } catch (err) {
      alert("Gagal mengambil data surat masuk: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSuratMasuk(id);
      fetchData();
    } catch (err) {
      alert("Gagal menghapus surat masuk: " + err.message);
    }
  };

  const columns = [
    { key: "nomor_surat", title: "Nomor Surat" },
    { key: "pengirim", title: "Pengirim" },
    { key: "nomor_agenda", title: "Nomor Agenda" },
    { key: "tanggal_surat", 
      title: "Tanggal Surat",
      render: (row) =>
        row.tanggal_surat
          ? new Date(row.tanggal_surat).toLocaleDateString("id-ID")
          : "-",
    },
    {
      key: "tanggal_diterima",
      title: "Tanggal Diterima",
      render: (row) =>
        row.tanggal_diterima
          ? new Date(row.tanggal_diterima).toLocaleDateString("id-ID")
          : "-",
    },
    { key: "ringkasan", title: "Ringkasan" },
    { key: "kode_klasifikasi", title: "Kode Klasifikasi" },
    { key: "keterangan", title: "Keterangan" },
    {
      key: "lampiran",
      title: "Lampiran",
      render: (row) => {
        if (typeof row.lampiran === "string" && row.lampiran !== "") {
          return (
            <a
              href={`http://localhost:5000/uploads/${row.lampiran}`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              PDF
            </a>
          );
        }
        return <span className="text-gray-400">-</span>;
      },
    },
    {
      key: "actions",
      title: "Actions",
      render: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/dashboard/surat-masuk/edit/${row.nomor_surat}`)}
            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.nomor_surat)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8 flex flex-col items-center justify-center">
        <section>
          <AppTitlePage title="Surat Masuk" Icon={MailPlus} />
        </section>

        {/* Table Section */}
        <section className=" bg-white shadow-md rounded-b-lg p-15 w-[1368px] h-[782px] shadow-slate-200">
          <button
            onClick={() => navigate("/dashboard/surat-masuk/tambah-surat-masuk")}
            className="px-4 py-2 mb-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Surat
          </button>
          <AppTable columns={columns} data={data} />
        </section>
      </main>
    </div>
  );
}

export default SuratMasuk;