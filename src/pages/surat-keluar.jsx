import React, { useState } from "react";
import { MailPlus } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AppSidebar } from "@/layouts/app-sidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppTitlePage } from "@/layouts/app-titlepage";
import { AppTable } from "@/layouts/app-table";
import { getSuratMasuk, deleteSuratMasuk } from "@/services/suratMasukService";

function SuratKeluar() {
  const [data, setData] = useState(getSuratMasuk());
  const navigate = useNavigate(); 

  const handleDelete = (id) => {
    const success = deleteSuratMasuk(id); // Hapus data
    if (success) {
      setData(getSuratMasuk()); // Perbarui state jika berhasil
    } else {
      console.error("Failed to delete data with ID:", id); // Debug log jika gagal
    }
  };

  const columns = [
    { key: "nomorSurat", title: "Nomor Surat" },
    { key: "pengirim", title: "Pengirim" },
    { key: "nomorAgenda", title: "Nomor Agenda" },
    { key: "tanggalSurat", title: "Tanggal Surat" },
    { key: "tanggalDiterima", title: "Tanggal Diterima" },
    { key: "ringkasan", title: "Ringkasan" },
    { key: "kodeKlasifikasi", title: "Kode Klasifikasi" },
    { key: "keterangan", title: "Keterangan" },
    {
      key: "lampiran",
      title: "Lampiran",
      render: (row) => {
        if (!row.lampiran) return <span className="text-gray-400">-</span>;
        if (typeof row.lampiran === "string") {
          // Jika lampiran berupa URL string
          return (
            <a
              href={row.lampiran}
              download
              className="text-blue-600 underline"
            >
              {row.lampiran.split("/").pop() || "Lampiran"}
            </a>
          );
        }
        // Jika lampiran berupa File object
        const url = URL.createObjectURL(row.lampiran);
        return (
          <a
            href={url}
            download={row.lampiran.name || "lampiran"}
            className="text-blue-600 underline"
            onClick={() => setTimeout(() => URL.revokeObjectURL(url), 1000)}
          >
            {row.lampiran.name || "Lampiran"}
          </a>
        );
      },
    },
    {
      key: "actions",
      title: "Actions",
      render: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => alert(`Edit ${row.nomorSurat}`)}
            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.id)}
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

export default SuratKeluar;