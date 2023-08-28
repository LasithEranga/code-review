import { Router } from "express";
import { newEnrollment } from "../controllers/enrollmentController.js";

const enrollmentRoutes = Router();

enrollmentRoutes.post("/new", newEnrollment);

export default enrollmentRoutes;
