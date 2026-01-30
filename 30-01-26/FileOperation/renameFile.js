const fs = require("fs");

fs.rename("data.txt", "notes.txt", (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File renamed to notes.txt");
  }
});
