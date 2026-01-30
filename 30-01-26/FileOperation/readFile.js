const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File content:");
    console.log(data);
  }
});
