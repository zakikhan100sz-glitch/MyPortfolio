import { Router } from "express";
import { getExperiences } from "../controllers/experience.controller.js";
const router = Router();
router.get("/", getExperiences);
export default router;
