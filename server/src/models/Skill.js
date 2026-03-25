import mongoose from "mongoose";
const schema = new mongoose.Schema({ category: { type: String, required: true, trim: true }, items: { type: [String], default: [] }, published: { type: Boolean, default: true }, sortOrder: { type: Number, default: 0 } }, { timestamps: true });
export const Skill = mongoose.model("Skill", schema);
