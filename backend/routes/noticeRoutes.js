const express = require("express");
const router = express.Router();
const createUpload = require("../middleware/upload"); // ✅ correct
const { uploadNotice } = require("../controllers/noticeController");

// Upload middleware initialize karo folder name ke saath
const upload = createUpload("notices"); // ✅ notice ke liye folder

router.post("/", upload.single("file"), uploadNotice);

module.exports = router;
