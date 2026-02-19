
const fs = require("fs");


function readFileData(filename, callback) {
    fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
            
            return callback(err, null);
        }
        
        callback(null, data);
    });
}

readFileData("sample.txt", (err, result) => {
    if (err) {
        console.log(err);
        
    } else {
        console.log("File content:");
        console.log(result);
    }
});
