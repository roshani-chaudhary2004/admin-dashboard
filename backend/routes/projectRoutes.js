const express = require("express");
const router = express.Router();
const createUpload = require("../middleware/upload");
const { uploadProject } = require("../controllers/projectController");

// Correct usage:
const upload = createUpload("projects");

router.post("/", upload.single("file"), uploadProject);

module.exports = router;
