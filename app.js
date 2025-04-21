const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const path = require("path");

const db = require("./db");
const collection = "votes"

db.connect((err)=>{
    if(err) {
        console.log("Failed to connect to database");
        process.exit(1);
    } else {
        console.log("Connected");
        app.listen(3000, ()=> {
            console.log("Listening to port 3000, connected to database");
        });
    }
});


