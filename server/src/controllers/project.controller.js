import { Project } from "../models/Project.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";
import { ApiError } from "../utils/ApiError.js";
export const getProjects = asyncHandler(async (req, res) => {
  const filter = { published: true };
  if (req.query.featured === "true") filter.featured = true;
  if (req.query.category) filter.category = req.query.category;
  const projects = await Project.find(filter).sort({ sortOrder: 1, createdAt: -1 });
  return sendSuccess(res, projects, "Projects fetched successfully");
});
export const getProjectBySlug = asyncHandler(async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug, published: true });
  if (!project) throw new ApiError(404, "Project not found");
  return sendSuccess(res, project, "Project fetched successfully");
});
