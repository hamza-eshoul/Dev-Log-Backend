import { Request, Response, NextFunction } from "express";

const API_KEY = process.env.API_KEY;

export const apiKeyAuth = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({
      message: "Unauthorized Invalid API Key",
    });
  }

  next();
};
