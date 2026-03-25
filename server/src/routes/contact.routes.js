import { Router } from "express";
import { createContactMessage } from "../controllers/contact.controller.js";
import { validate } from "../middleware/validate.js";
import { contactSchema } from "../validations/contact.validation.js";
const router = Router();
router.post("/", validate(contactSchema), createContactMessage);
export default router;
