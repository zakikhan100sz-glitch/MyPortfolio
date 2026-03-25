import { SiteSettings } from "../models/SiteSettings.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";
export const getSiteSettings = asyncHandler(async (req, res) => sendSuccess(res, await SiteSettings.findOne().sort({ createdAt: -1 }), "Site settings fetched successfully"));
