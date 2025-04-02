import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.get("/api/financial-data", (req, res) => {
  res.json({ revenue: 100000, expenses: 60000, profit: 40000 });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});