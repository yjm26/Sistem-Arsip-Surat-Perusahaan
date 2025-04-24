

// Fungsi untuk mendapatkan semua data
export const getSuratMasuk = (data) => {
  return data;
};

// Fungsi untuk menambah data baru
export const addSuratMasuk = (data, newData) => {
  const newId = data.length ? data[data.length - 1].id + 1 : 1;
  const newEntry = { id: newId, ...newData };
  return [...data, newEntry];
};

// Fungsi untuk memperbarui data berdasarkan ID
export const updateSuratMasuk = (data, id, updatedData) => {
  return data.map((item) =>
    item.id === id ? { ...item, ...updatedData } : item
  );
};

// Fungsi untuk menghapus data berdasarkan ID
export const deleteSuratMasuk = (data, id) => {
  return data.filter((item) => item.id !== id);
};