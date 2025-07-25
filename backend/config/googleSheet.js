const { google } = require("googleapis");
const path = require("path");
require("dotenv").config();

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "credentials.json"), // Path to your downloaded credentials
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const getAuthClient = async () => {
  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
};

module.exports = getAuthClient;
