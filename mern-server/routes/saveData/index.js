const router = require('express').Router();

const {
  getDB
} = require('../../clientConnection');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


router.post('/', (req, res) => {
  console.log('/api/saveData called');

  const frontEndData = req.body;
  let hasId = false;
  if (req.body._id) {
    hasId = true;
  }
  frontEndData._id = hasId ? frontEndData._id : new ObjectID(); // one line expression

  const query = {
    _id: new ObjectID(frontEndData._id),
  }

  delete frontEndData._id;

  const collection = getDB().collection("tasks").updateOne(query, {
    $set: frontEndData
  }, {
    upsert: true
  }, (err, response) => {
    if (err) {
      console.log(err);
    }
    console.log('one document inserted');
    res.json({ result: true });
  });
});

module.exports = router;
