import mongoose from "mongoose";
const schema = new mongoose.Schema({ company: { type: String, required: true, trim: true }, role: { type: String, required: true, trim: true }, duration: { type: String, required: true, trim: true }, points: { type: [String], default: [] }, published: { type: Boolean, default: true }, sortOrder: { type: Number, default: 0 } }, { timestamps: true });
export const Experience = mongoose.model("Experience", schema);
