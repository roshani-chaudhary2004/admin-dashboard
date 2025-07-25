const express = require("express");
const router = express.Router();
const { getAllStudents, createStudent } = require("../controllers/studentController");

// GET all students
router.get("/", getAllStudents);

// POST new student
router.post("/", createStudent);

module.exports = router;
