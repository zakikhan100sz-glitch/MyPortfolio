import { Router } from "express";
import { getSiteSettings } from "../controllers/siteSettings.controller.js";
const router = Router();
router.get("/", getSiteSettings);
export default router;
