var express = require('express');
var router = express.Router();

var http = require('https');
var sqlite3 = require('sqlite3');

/* GET home page. */
router.get('/', function(req, res, next) {

  var db = new sqlite3.Database('myblog.sqlite3');

  db.serialize(() => {
    db.all("select * from mydata", (err, rows) => {
      if (!err){
        var data = {
          title: 'title',
          content: rows
        }
        res.render('show', data);
      }
    });
  });

});

module.exports = router;
