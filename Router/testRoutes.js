const express = require('express');
const { testFunction } = require('../Controller/testController');

const router = express.Router()

router.get('/demo', testFunction)

module.exports = router //Default Method to Export 