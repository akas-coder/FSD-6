
function divideNumbers(a, b, callback) {
    if (b === 0) {
       
        return callback(new Error("Division by zero is not allowed"), null);
    }

    let result = a / b;
    callback(null, result);
}



divideNumbers(10, 2, (err, result) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log("Result:", result);
    }
});

divideNumbers(10, 0, (err, result) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log("Result:", result);
    }
});
