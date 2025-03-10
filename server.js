const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db'); // ✅ Import db from `db.js`

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Import storeRoutes AFTER initializing db
const storeRoutes = require('./routes/storeRoutes');
console.log("✅ storeRoutes loaded"); 
app.use('/api/stores', storeRoutes);

app._router.stack.forEach((route) => {
  if (route.route && route.route.path) {
      console.log(`✅ Route Loaded: ${route.route.path}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

async function testDB() {
  try {
      const connection = await db.getConnection();
      console.log("✅ Database connected successfully!");
      connection.release();
  } catch (error) {
      console.error("❌ Database connection failed:", error);
  }
}

testDB();
