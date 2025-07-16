const API_URL = "http://localhost:5000/api/chart";

// Ambil total surat masuk & keluar
export async function getChartData() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Gagal mengambil data chart");
  return await res.json();
}

