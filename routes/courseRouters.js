import { Router } from "express";
import { newCourse } from "../controllers/courseController.js";

const courseRoutes = Router();

courseRoutes.post("/new", newCourse);

export default courseRoutes;
