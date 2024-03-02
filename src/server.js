const express = require('express');
const { Pool } = require('pg');
const router = require('./router');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456789',
  port: 5432,
});

const app = express();

// Create 50 records in the database with dummy data
async function createDummyData() {
  try {
    const client = await pool.connect();
    for (let i = 1; i <= 50; i++) {
      await client.query(`INSERT INTO customers1 (sno, name, age, phone, location, created_at) 
                          VALUES (${i}, 'Customer${i}', ${Math.floor(Math.random() * 60) + 20}, 
                          '1234567890', 'Location${i}', CURRENT_TIMESTAMP)`);
    }
    client.release();
    console.log('Dummy data created successfully.');
  } catch (err) {
    console.error('Error creating dummy data:', err);
  }
}



createDummyData();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
