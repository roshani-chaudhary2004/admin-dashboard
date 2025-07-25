const { getSheetData, appendToSheet } = require("../services/sheetService");

const getAllStudents = async (req, res) => {
  try {
    const data = await getSheetData("Students");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, email, course } = req.body;
    await appendToSheet("Students", [name, email, course]);
    res.status(201).json({ message: "Student added" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add student" });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
};
