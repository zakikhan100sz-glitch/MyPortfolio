import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true, trim: true },
  category: { type: String, required: true, trim: true },
  summary: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  solution: { type: String, default: "", trim: true },
  image: { type: String, default: "/project-placeholder.svg", trim: true },
  techStack: { type: [String], default: [] },
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });
export const Project = mongoose.model("Project", schema);
