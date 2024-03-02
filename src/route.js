// API to get customers with search and sort options
const express = require('express');
const router = express.Router();
app.get('/api/customers1', async (req, res) => {
    try {
      let query = `SELECT * FROM customers1`;
  
      const { search, sortBy } = req.query;
      if (search) {
        query += ` WHERE name ILIKE '%${search}%' OR location ILIKE '%${search}%'`;
      }
  
      if (sortBy) {
        if (sortBy === 'date') {
          query += ` ORDER BY created_at::date`;
        } else if (sortBy === 'time') {
          query += ` ORDER BY created_at::time`;
        }
      }
  
      const result = await pool.query(query);
      res.json(result.rows);
    } catch (err) {
      console.error('Error fetching customers:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.get('/api/customers1', (req, res) => {
    // Handle GET request to /api/customers
    // Implement logic to fetch customers from the database
    res.json({ message: 'Get all customers' });
  });
  
  module.exports = router;
  