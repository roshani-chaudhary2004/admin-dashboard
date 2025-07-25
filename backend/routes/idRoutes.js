const express = require("express");
const router = express.Router();
const { generateId } = require("../controllers/idController");

router.get("/", generateId);

module.exports = router;