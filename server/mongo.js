const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://80ba5ea13ce5eba905676576ca2943e5:123321123321123321@9a.mongo.evennode.com:27017/80ba5ea13ce5eba905676576ca2943e5',
    { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.db = {
    mongoPassword: "123321123321123321",
    dbName:"80ba5ea13ce5eba905676576ca2943e5",
    putMessage(value){
        let promise = new Promise(((resolve, reject) => {
            mongoClient.connect((err, client) => {
                const db = client.db(this.dbName);
                const collection = db.collection("messages");
                resolve(collection);
                promise.then((dataObject)=>{
                    dataObject.insertOne(value, function (err, result) {
                        if (err) {
                            return console.log(err);
                        }
                    });
                })
            })
            resolve();
        }))
    },
    getMessages(req, res){
        let promise = new Promise(((resolve, reject) => {
            mongoClient.connect((err, client) => {
                const db = client.db(this.dbName);
                const collection = db.collection("messages");
                resolve(collection)
                promise.then((data)=>{
                    const messages = data.find().toArray(function(err, results){
                        res.send(JSON.stringify({messages: results}))
                    });
                })
            })
        }))
    }
};
