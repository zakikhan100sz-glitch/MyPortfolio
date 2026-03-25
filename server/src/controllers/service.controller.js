import { Service } from "../models/Service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";
export const getServices = asyncHandler(async (req, res) => sendSuccess(res, await Service.find({ published: true }).sort({ sortOrder: 1, createdAt: 1 }), "Services fetched successfully"));
