import { Message } from "../models/Message.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";
export const createContactMessage = asyncHandler(async (req, res) => {
  const saved = await Message.create(req.body);
  return sendSuccess(res, { id: saved._id }, "Message sent successfully", 201);
});
