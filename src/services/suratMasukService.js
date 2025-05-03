import { suratMasukData } from "@/data/surat-masuk";

// Fungsi untuk mendapatkan semua data
export const getSuratMasuk = () => {
  return suratMasukData;
};

// Fungsi untuk menambah data baru
export const addSuratMasuk = (newData) => {
  const newId = suratMasukData.length ? suratMasukData[suratMasukData.length - 1].id + 1 : 1;
  const newEntry = { id: newId, ...newData };
  suratMasukData.push(newEntry);
  return newEntry;
};

// Fungsi untuk memperbarui data berdasarkan ID
export const updateSuratMasuk = (id, updatedData) => {
  const index = suratMasukData.findIndex((item) => item.id === id);
  if (index !== -1) {
    suratMasukData[index] = { ...suratMasukData[index], ...updatedData };
    return suratMasukData[index];
  }
  return null;
};

export const deleteSuratMasuk = (id) => {
  const index = suratMasukData.findIndex((item) => item.id === id);
  if (index !== -1) {
    suratMasukData.splice(index, 1); // Hapus data dari array
    return true;
  }
  return false; // Jika ID tidak ditemukan
};