var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    title: 'show',
    content: 'this is show page'
  }
  res.render('show', data);
});

module.exports = router;
