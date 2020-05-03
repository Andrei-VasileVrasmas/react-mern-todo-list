const router = require('express').Router();

router.use('/getData', require('./getData'));
router.use('/saveData', require('./saveData'));
router.use('/deleteData', require('./deleteData'));

module.exports = router;
