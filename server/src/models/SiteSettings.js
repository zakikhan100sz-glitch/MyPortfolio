import mongoose from "mongoose";
const schema = new mongoose.Schema({ name: String, role: String, tagline: String, email: String, phone: String, location: String, resumeUrl: String }, { timestamps: true });
export const SiteSettings = mongoose.model("SiteSettings", schema);
