const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://80ba5ea13ce5eba905676576ca2943e5:123321123321123321@9a.mongo.evennode.com:27017/80ba5ea13ce5eba905676576ca2943e5',
    { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.db = {
    mongoPassword: "123321123321123321",
    dbName:"80ba5ea13ce5eba905676576ca2943e5",
    putMessage(value){
        mongoClient.connect((err, client) => {
            const db = client.db(this.dbName);
            const collection = db.collection("messages");
            collection.insertOne(value, function (err, result) {
                if (err) {
                    return console.log(err);
                }
            });
        })
    },
    getMessages(req, res){
        mongoClient.connect((err, client) => {
            const db = client.db(this.dbName);
            const collection = db.collection("messages");
            const messages = collection.find().toArray(function(err, results){
                res.send(JSON.stringify({messages: results}))
            });
        })
    }
};
