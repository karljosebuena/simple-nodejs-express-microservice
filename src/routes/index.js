
const router = require('express').Router();

const helloRoute = require('./helllo');

router.use('/hello', helloRoute);

module.exports = router;