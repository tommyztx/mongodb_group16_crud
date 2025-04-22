const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

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

app.post('/submitVote', async (req,res)=>{
    console.log(req.body);
    //const {voterID, regPIN, fchoice, schoice, tchoice} = req.body;
    try {
        const result = await db.getDB().collection(collection).insertOne( {
            voterID:req.body.voterID,
            regPIN:req.body.regPIN,
            firstChoice:req.body.firstChoice,
            secondChoice:req.body.secondChoice,
            thirdChoice:req.body.thirdChoice
        });
        return res.json(req.body);
    } catch(err) {
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




// document.getElementById("reset").onclick = function () {
//       document.getElementById("voterID").value = "";
//       document.getElementById("pin").value = "";
//       document.getElementById("choice1").value = "null";
//       document.getElementById("choice2").value = "null";
//       document.getElementById("choice3").value = "null";
//     };
//   };

