const path = require("path");
const fs = require("fs");

const uploadNotice = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  const fileUrl = `/uploads/notices/${req.file.filename}`;
  res.status(201).json({ message: "Notice uploaded", fileUrl });
};

const getAllNotices = async (req, res) => {
  const dirPath = path.join(__dirname, "../uploads/notices");
  const files = fs.readdirSync(dirPath);
  const fileLinks = files.map((file) => `/uploads/notices/${file}`);
  res.status(200).json(fileLinks);
};

module.exports = {
  uploadNotice,
  getAllNotices,
};
