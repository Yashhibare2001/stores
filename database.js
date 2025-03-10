const mysql = require('mysql2');

// ✅ Create MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Use your actual MySQL password
  database: 'store_rating'
});

// ✅ Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL Database');
  }
});

// ✅ Export the db connection
module.exports = db;
