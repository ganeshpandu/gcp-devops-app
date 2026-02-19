const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

// Root check
app.get("/", (req, res) => {
  res.json({ message: "Backend Running..." });
});

// Health endpoint
app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({ status: "DB Connected" });
  } catch (err) {
    res.status(500).json({ status: "DB Failed", error: err.message });
  }
});

// Movies endpoint
app.get("/movies", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM movies");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
