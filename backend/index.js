const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // ganti jika user MySQL kamu berbeda
  password: '',         // ganti jika ada password
  database: 'pengarsipan'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database!');
});

// Export db jika perlu diakses di routes
module.exports = db;

// Import routes
const suratMasukRoutes = require('./routes/suratMasuk');
const loginRoutes = require('./routes/login');
const suratKeluarRouter = require('./routes/suratKeluar');
const refrensiRouter = require('./routes/refrensi'); 
const chartRouter = require('./routes/chart');
const accountsRouter=require('./routes/accounts');

app.use('/api/surat-masuk', suratMasukRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/surat-keluar', suratKeluarRouter);
app.use('/api/refrensi', refrensiRouter); 
app.use('/api/chart', chartRouter);
app.use('/api/accounts', accountsRouter);
app.use('/uploads', express.static('uploads'));

// ...endpoint lain jika ada...

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

