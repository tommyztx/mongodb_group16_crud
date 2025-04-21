// Connect to Mongo DB client, connect function
const {MongoClient,ServerApiVersion }= require("mongodb");
const ObjectID = require('mongodb').ObjectID;
const dbname = "mongodb_crud_nosqllab";
const url = "mongodb+srv://tommyzheng:.2W9LnzVY-wGq9K@cluster0.ylfmjnf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url, {
    serverApi: ServerApiVersion.v1,
});

let db;

async function connect(){

    await client.connect();
    db = client.db(dbname);
    await db.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

}
connect().catch(console.dir);

const getPrimaryKey = (_id)=> {
    return ObjectID(_id);
}

const getDB = ()=>{
    return db;
}

module.exports = {getDB, connect, getPrimaryKey}