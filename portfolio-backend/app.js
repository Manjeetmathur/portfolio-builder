import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173","https://portfolio-builder-manjeetmathurs-projects.vercel.app"],
    credentials: true,
  })
);
// app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use("/f",express.static("./portfolio-backend/pic/"))
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/certificate", certificateRoutes);
app.use("/blog", blogRoutes);

export { app };
