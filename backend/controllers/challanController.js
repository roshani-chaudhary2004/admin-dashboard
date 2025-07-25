const path = require("path");
const fs = require("fs");

const uploadChallan = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const fileUrl = `/uploads/challans/${req.file.filename}`;

    res.status(201).json({ message: "Challan uploaded", fileUrl });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Failed to upload challan" });
  }
};

const getAllChallans = async (req, res) => {
  try {
    const dirPath = path.join(__dirname, "../uploads/challans");
    const files = fs.readdirSync(dirPath);
    const fileLinks = files.map((file) => `/uploads/challans/${file}`);
    res.status(200).json(fileLinks);
  } catch (error) {
    console.error("Read Error:", error);
    res.status(500).json({ error: "Failed to list challans" });
  }
};

module.exports = {
  uploadChallan,
  getAllChallans,
};
