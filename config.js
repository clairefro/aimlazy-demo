require("dotenv").config({ path: __dirname + "/.env" });

const config = {
  apiKey: process.env.API_KEY,
};

module.exports = { config };
