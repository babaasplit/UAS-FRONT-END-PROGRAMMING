const pgp = require('pg-promise')();
require('dotenv').config();

// Membuat koneksi menggunakan pg-promise
const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Mengekspor koneksi database
module.exports = db;

// Mengecek koneksi database
const checkDbConnection = async () => {
  try {
    const res = await db.query('SELECT NOW()'); // Gunakan db.query untuk memeriksa koneksi
    console.log('Database connection successful:', res);  // Tampilkan hasil koneksi
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
};
checkDbConnection();