const path = require("path");
const fs = require("fs");

const uploadProject = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  const fileUrl = `/uploads/projects/${req.file.filename}`;
  res.status(201).json({ message: "Project uploaded", fileUrl });
};

const getAllProjects = async (req, res) => {
  const dirPath = path.join(__dirname, "../uploads/projects");
  const files = fs.readdirSync(dirPath);
  const fileLinks = files.map((file) => `/uploads/projects/${file}`);
  res.status(200).json(fileLinks);
};

module.exports = {
  uploadProject,
  getAllProjects,
};