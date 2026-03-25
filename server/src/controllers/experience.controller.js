import { Experience } from "../models/Experience.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";
export const getExperiences = asyncHandler(async (req, res) => sendSuccess(res, await Experience.find({ published: true }).sort({ sortOrder: 1, createdAt: 1 }), "Experiences fetched successfully"));
