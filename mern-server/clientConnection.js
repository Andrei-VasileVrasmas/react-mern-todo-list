const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const uri = "mongodb+srv://andrei:andrei@cluster0-t0ssv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db;

connectDB = (callback) => {
  client.connect((err, database1) => {
    if (err) {
      console.log(err)
    }
    db = client.db('database1');
    callback();
  });
}

getDB = () => {
  return db;
}

closeDB = () => {
  db.close();
}

module.exports = {
  connectDB,
  getDB,
  closeDB
};
