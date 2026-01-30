const fs = require("fs");

fs.writeFile("data.txt", "This file is created using Node.js\n", (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File created and data written");
  }
});
