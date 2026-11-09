import { NextFunction, Request, Response } from "express";

interface CustomError {
  name: string;
  status: number;
}

export class NotFoundError extends Error implements CustomError {
  name: string;
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
    this.status = 404;
  }
}

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof NotFoundError) return res.status(err.status).render("404");

  console.error(err);
  res.status(500).json({ error: "Server Error" });
};
