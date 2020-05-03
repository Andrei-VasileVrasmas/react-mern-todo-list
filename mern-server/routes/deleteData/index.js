const router = require('express').Router()
const { getDB } = require('../../clientConnection.js')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

router.delete('/', (req, res, next) => {
  console.log('delete data API called')

  let id = ObjectID(req.body.id)

  const collection = getDB()
    .collection('tasks')
    .deleteOne({ _id: id }, (err, result) => {
      if (err) {
        throw err
      }
      res.send('task deleted')
    })
})

module.exports = router
