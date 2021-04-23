var express = require('express');
var router = express.Router();

var insertController = require("../controller/insert");


/* GET home page. */
router.get('/', insertController.data);

router.get('/show/data/:id',insertController.show);


module.exports = router;
