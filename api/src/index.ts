import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mockRoutes from "./routes/mock.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/api", mockRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server Yes");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
