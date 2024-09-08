import express from "express";
import { Express } from "express";
import cors from "cors";
import blogPostsRouter from "./routes/blogPosts";
import { apiKeyAuth } from "./middleware/apiKeyAuth";

// Initialize app
const app: Express = express();

// middleware functions
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(apiKeyAuth);

// routes
app.use("/api/posts", blogPostsRouter);

export default app;
