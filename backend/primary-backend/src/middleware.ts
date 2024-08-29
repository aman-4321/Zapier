import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

interface CustomRequest extends Request {
  id?: string;
}

export function authmiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers.authorization;

  if (!token || typeof token !== "string") {
    return res.status(403).json({
      message: "No token provided",
    });
  }

  try {
    const payload = jwt.verify(token, JWT_PASSWORD) as { id: string };

    req.id = payload.id;

    next();
  } catch (e) {
    return res.status(403).json({
      message: "You are not logged in or token is invalid",
    });
  }
}
