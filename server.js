const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ CORS (important for frontend connection)
app.use(cors({
  origin: "*"
}));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/expense"));

// ✅ Test route (optional but useful)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Dynamic port (Render compatible)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});