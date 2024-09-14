import express from "express";
import { Express } from "express";
import cors from "cors";
import blogPostsRouter from "./routes/blogPosts";
import { apiKeyAuth } from "./middleware/apiKeyAuth";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// Initialize app
const app: Express = express();

// middleware functions
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again after 15 minutes",
  })
);

app.use(apiKeyAuth);

// routes
app.use("/api/posts", blogPostsRouter);

export default app;
