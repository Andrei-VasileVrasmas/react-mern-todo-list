const router = require('express').Router();
const {
  getDB
} = require('../../clientConnection.js');

router.get('/', (req, res) => {
  console.log('/api/getData called');

  const collection = getDB().collection("tasks").find({}).toArray((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

module.exports = router;
