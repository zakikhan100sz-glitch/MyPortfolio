import mongoose from "mongoose";
const schema = new mongoose.Schema({ title: { type: String, required: true, trim: true }, description: { type: String, required: true, trim: true }, icon: { type: String, default: "Globe" }, published: { type: Boolean, default: true }, sortOrder: { type: Number, default: 0 } }, { timestamps: true });
export const Service = mongoose.model("Service", schema);
