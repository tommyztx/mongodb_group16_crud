// Connect to Mongo DB client, connect function
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = "mongodb_crud_nosqllab";
const url = "mongodb+srv://tommyztx:koJpZu2gCCeMh8rk@cluster0.ylfmjnf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoOptions = {useNewUrlParser : true};

const state = {
    db : null
};

const connect = (cb) =>{
    if(state.db)
        cb();
    else {
        MongoClient.connect(url,mongoOptions, (err,client)=>{
            if(err) {
                cb(err);
            } else {
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=> {
    return ObjectID(_id);
}

const getDB = ()=>{
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey}