const fs = require("fs");

fs.unlink("data.txt", (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File deleted successfully");
  }
}
);
