const fs = require("fs");

const writeDataToFile = (data, filename) => {
  fs.writeFileSync(filename, data);
};

module.exports = { writeDataToFile };
