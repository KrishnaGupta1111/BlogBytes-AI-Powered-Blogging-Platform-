import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

// ✅ Connect to MongoDB
await connectDB();

// ✅ Use CORS – allow your Vercel frontend only
app.use(
  cors({
    origin: "https://blogbytesai.vercel.app", 
  })
);

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Test Route
app.get("/", (req, res) => res.send("API IS WORKING"));

// ✅ App Routes
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

export default app;
