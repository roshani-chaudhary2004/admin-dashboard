// backend/middleware/upload.js

const multer = require("multer");
const path = require("path");
const fs = require("fs");

function createMulter(folderName) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const dir = path.join(__dirname, "..", "uploads", folderName);

      // Folder agar nahi hai to bana do
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      cb(null, dir);
    },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    },
  });

  return multer({ storage });
}

module.exports = createMulter;

