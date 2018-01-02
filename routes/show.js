var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name = req.query.name;
  var email = req.query.email;
  var data = {
    title: 'show',
    content: 'this is show page',
    message:''
  }
  res.render('show', data);
});
router.post('/post', function(req, res, next) {
  var msg = req.body['message'];
  var data = {
    title: 'show',
    content: 'this is show page posted!',
    message: msg
  }
  res.render('show', data);
});

module.exports = router;
