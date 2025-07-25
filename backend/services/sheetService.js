const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const SHEET_ID = process.env.SHEET_ID;

// Load credentials
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "../config/credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Get sheet instance
async function getSheet(sheetName) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });
  const meta = await sheets.spreadsheets.get({
    spreadsheetId: SHEET_ID,
  });

  const sheet = meta.data.sheets.find((s) => s.properties.title === sheetName);
  if (!sheet) throw new Error(`Sheet "${sheetName}" not found`);
  return sheets;
}

// Get all rows
async function getAllRows(sheetName) {
  const sheets = await getSheet(sheetName);
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${sheetName}`,
  });

  const rows = response.data.values;
  const [header, ...data] = rows;
  return data.map((row) => {
    const obj = {};
    header.forEach((key, i) => {
      obj[key] = row[i] || "";
    });
    return obj;
  });
}

// Append a row
async function appendRow(sheetName, data) {
  const sheets = await getSheet(sheetName);
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${sheetName}`,
    valueInputOption: "RAW",
    resource: {
      values: [data],
    },
  });
}

// Update a row (by index)
async function updateRowById(sheetName, rowIndex, data) {
  const sheets = await getSheet(sheetName);
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `${sheetName}!A${parseInt(rowIndex) + 1}`,
    valueInputOption: "RAW",
    resource: {
      values: [data],
    },
  });
}

// Delete a row (by blanking it out)
async function deleteRowById(sheetName, rowIndex) {
  const sheets = await getSheet(sheetName);
  const blankRow = new Array(10).fill(""); // You can increase the array size as per your sheet columns

  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `${sheetName}!A${parseInt(rowIndex) + 1}`,
    valueInputOption: "RAW",
    resource: {
      values: [blankRow],
    },
  });
}

module.exports = {
  getSheet,
  getAllRows,
  appendRow,
  updateRowById,
  deleteRowById,
};
