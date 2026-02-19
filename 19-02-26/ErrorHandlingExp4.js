// ErrorHandlingExp4.js

const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const dbName = "collegeDB";

const client = new MongoClient(url);

client.connect((err) => {

    if (err) {
        console.log("Database connection failed!");
        console.log("Error:", err.message);
        return;
    }

    console.log("Connected successfully to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("students");

    collection.insertOne(
        { name: "Akash", course: "MCA", marks: 85 },
        (err, result) => {

            if (err) {
                console.log("Error inserting document:");
                console.log(err.message);
            } else {
                console.log("Document inserted successfully");
                console.log("Inserted ID:", result.insertedId);
            }

            client.close();
        }
    );
});
