const router = require('express').Router();

router.use('/getData', require('./getData'));
//router.use('/saveData', require('./saveData'));

module.exports = router;
