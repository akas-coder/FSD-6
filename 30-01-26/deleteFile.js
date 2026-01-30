const fs = require("fs");

fs.unlink("backup", (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File deleted successfully");
  }
});
