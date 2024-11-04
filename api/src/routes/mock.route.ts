import { getOc } from "../controllers/mock.controller";
import express from "express";

const router = express.Router();

router.get("/oc", getOc);

export default router;
