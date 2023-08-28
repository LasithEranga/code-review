import { Router } from "express";
import { report } from "../controllers/reportController.js";

const reportRoutes = Router();

reportRoutes.post("/generate-report", report);

export default reportRoutes;
