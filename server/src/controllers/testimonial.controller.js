import { Testimonial } from "../models/Testimonial.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";
export const getTestimonials = asyncHandler(async (req, res) => sendSuccess(res, await Testimonial.find({ published: true }).sort({ sortOrder: 1, createdAt: 1 }), "Testimonials fetched successfully"));
