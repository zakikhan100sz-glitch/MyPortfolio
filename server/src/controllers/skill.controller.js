import { Skill } from "../models/Skill.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";
export const getSkills = asyncHandler(async (req, res) => sendSuccess(res, await Skill.find({ published: true }).sort({ sortOrder: 1, createdAt: 1 }), "Skills fetched successfully"));
