var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1, username: "hoge"},
    {id:2, username: "fuga"},
  ]);
});

module.exports = router;
