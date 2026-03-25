import mongoose from "mongoose";
const schema = new mongoose.Schema({ name: { type: String, required: true, trim: true }, role: { type: String, required: true, trim: true }, quote: { type: String, required: true, trim: true }, published: { type: Boolean, default: true }, sortOrder: { type: Number, default: 0 } }, { timestamps: true });
export const Testimonial = mongoose.model("Testimonial", schema);
