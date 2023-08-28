import { Router } from "express";
import { newStudent } from "../controllers/studentController.js";

const studentRoutes = Router();

studentRoutes.post("/new", newStudent);

export default studentRoutes;
