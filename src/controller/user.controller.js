// import db from "../config/db.js";

// export const testConnection = async (req, res) => {
//   try {
//     const [rows] = await db.query("SELECT 1 + 1 AS result");

//     res.status(200).json({
//       message: "Database connected successfully",
//       result: rows[0].result
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Database connection failed",
//       error: error.message
//     });
//   }
// };
