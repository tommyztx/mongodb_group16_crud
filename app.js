const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const path = require("path");

const db = require("./db");
const collection = "votes"

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'frontend.html'));
});

app.get('/Votes', async (req,res) => {
    try {
        const docs = await db.getDB().collection(collection).find({}).toArray();
        console.log("Recieved Request successfully");
        res.json(docs);
    }catch(err) {
        console.log(err);
    }
});

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

(async () => {
    await db.connect();
    app.listen(3000, () => {
        console.log("Listening on port 3000, connected");
    })
})();


