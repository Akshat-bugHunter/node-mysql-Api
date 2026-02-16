import express from "express";
import pool from "./src/config/db.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT name from student");
    res.json(rows);
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
