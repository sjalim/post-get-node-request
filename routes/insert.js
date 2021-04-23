var express = require('express');
var router = express.Router();

var insertController = require("../controller/insert");

router.post('/data',insertController.insert);

module.exports = router;
