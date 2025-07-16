# Pengarsipan

**Pengarsipan** adalah aplikasi web untuk solusi digital pengarsipan surat dan data referensi organisasi. Dibangun menggunakan **React** dan **Vite** untuk frontend, serta API backend (Node.js/Express, lihat folder `backend/`), aplikasi ini membantu pengguna dalam pencatatan, pengelolaan, dan pelacakan surat resmi serta klasifikasi referensi.

---

## Fitur Utama

- **Dashboard:** Ringkasan statistik arsip dan aktivitas terbaru.
- **Transaksi Surat:** Pengelolaan surat masuk dan keluar.
  - Surat Masuk
  - Surat Keluar
- **Buku Agenda:** Agenda surat masuk dan keluar.
- **Referensi:** Pengelolaan klasifikasi referensi pengarsipan.
- **Kelola Pengguna:** Manajemen akun dan peran pengguna.

## Teknologi yang Digunakan

<table>
  <tr>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="40" /> <br/> React
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg" alt="Vite" width="40" /> <br/> Vite
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" /> <br/> Node.js
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" width="40" /> <br/> Express
    </td>
    <td align="center">
      <img src="https://tailwindcss.com/_next/static/media/mark.b1c7ef6e.svg" alt="Tailwind CSS" width="40" /> <br/> Tailwind CSS
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" alt="ESLint" width="40" /> <br/> ESLint
    </td>
    <td align="center">
      <img src="https://lucide.dev/logo.svg" alt="Lucide" width="40" /> <br/> Lucide
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" /> <br/> JavaScript
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" width="40" /> <br/> MySQL
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" /> <br/> npm
    </td>
  </tr>
</table>

- **Frontend:** React + Vite
- **Backend:** Node.js, Express (lihat folder `backend/`)
- **Styling:** Tailwind CSS
- **Ikon:** Lucide React
- **Linting:** ESLint
- **State Management:** React Context API
- **Database:** MySQL

---

## Cara Memulai

### Prasyarat

- Node.js & npm
- Clone repositori ini

### Instalasi

1. **Install Dependency**

   ```bash
   npm install
   ```

2. **Jalankan Backend**

   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Jalankan Frontend**

   ```bash
   npm run dev
   ```

   Frontend akan berjalan di [http://localhost:5173](http://localhost:5173) (port default Vite).

### API Endpoint

- **Akun:** `/api/accounts` (CRUD untuk user)
- **Referensi:** `/api/refrensi` (pengelolaan klasifikasi)
- Lihat file di `src/services/` untuk detail penggunaan.

---

## Struktur Folder

```
pengarsipan/
├── backend/                # Backend API Express
├── src/
│   ├── components/ui/      # Komponen UI (Sidebar, Table, Skeleton, dll.)
│   ├── data/               # Data statis dan menu
│   ├── layouts/            # Layout halaman
│   ├── lib/                # Fungsi utilitas
│   ├── pages/              # Komponen halaman utama
│   ├── services/           # Logika API service
│   └── main.jsx            # Entry point utama
├── index.html
├── package.json
└── README.md
```

---

## ESLint & TypeScript

- ESLint sudah tersedia untuk pengecekan kode.
- Untuk produksi, disarankan menggunakan TypeScript ([lihat template TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)) agar pengecekan tipe lebih ketat.

---

## Kontribusi

Pull request sangat terbuka! Untuk perubahan besar, silakan buka issue terlebih dahulu untuk diskusi perubahan yang diinginkan.

---

## Lisensi

[MIT](LICENSE)
