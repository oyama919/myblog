var express = require('express');
var router = express.Router();

var data = [
  {name:'yamada', age:25, email:'test@example.com'},
  {name:'satou', age:34, email:'test@example.com'},
  {name:'takahashi', age:28, email:'test@example.com'}
];

router.get('/', function(req, res, next) {
  var n = req.query.id;
  res.json(data[n]);
});

module.exports = router;
