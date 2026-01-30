const fs = require("fs");
const path = require("path");

if (!fs.existsSync("backup")) {
  fs.mkdirSync("backup");
}

fs.rename("notes.txt", path.join("backup", "notes.txt"), (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File moved to backup folder");
  }
});
