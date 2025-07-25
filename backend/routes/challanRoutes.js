const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload"); // import function
const challanController = require("../controllers/challanController");

// use the function to create multer instance
const challanUpload = upload("challans");

router.post("/", challanUpload.single("file"), challanController.uploadChallan);

module.exports = router;
