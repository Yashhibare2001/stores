const express = require('express');
const router = express.Router();
const db = require('../db');  // ✅ Import the database connection

router.get('/test', (req, res) => {
  res.send('✅ storeRoutes is working!');
});

// ✅ Get all stores
router.get('/', async (req, res) => {
  console.log("✅ Route /api/stores hit!"); // Debugging log
  try {
      const [rows] = await db.query("SELECT * FROM stores"); 
      res.json(rows);
  } catch (error) {
      console.error("❌ Database query failed:", error);
      res.status(500).json({ message: "Database query failed" });
  }
});

// ✅ Add a new store
router.post('/stores', async (req, res) => {
  const { name, location, rating } = req.body;
  try {
      const result = await db.query(
          "INSERT INTO stores (name, location, rating) VALUES (?, ?, ?)",
          [name, location, rating]
      );
      res.status(201).json({ message: "Store added successfully", storeId: result.insertId });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error inserting store" });
  }
});

// ✅ Delete a store
router.delete('/:id', (req, res) => {
  const storeId = req.params.id;
  db.query('DELETE FROM stores WHERE id = ?', [storeId], (err, result) => {
    if (err) {
      console.error('Error deleting store:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Store deleted successfully!' });
    }
  });
});

module.exports = router;
