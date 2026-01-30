const fs = require("fs");

fs.appendFile("data.txt", "This line is appended\n", (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Data appended successfully");
  }
});

