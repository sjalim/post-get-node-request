var express = require('express');
var router = express.Router();

var insertController = require("../controller/insert");

router.get("/data/:id",insertController.update);

router.get("/data/:id/updated",insertController.updated);

module.exports = router;