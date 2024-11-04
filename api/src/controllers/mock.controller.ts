import { Request, Response } from "express";

export const getOc = (req: Request, res: Response) => {
  res.json({ name: "API Open Cover" });
};
