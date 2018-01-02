var express = require('express');
var router = express.Router();

var http = require('https');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('myblog.sqlite3');

/* GET index */
router.get('/', function(req, res, next) {
  db.serialize(() => {
    db.all("select * from mydata", (err, rows) => {
      if (!err){
        var data = {
          title: 'title',
          content: rows
        }
        res.render('blog/index', data);
      }
    });
  });
});

/* GET new */
router.get('/new', function(req, res, next) {
  var data = {
    title: 'new blog',
    content: 'create new blog'
  }
  res.render('blog/new',data);
});

/* Post new */
router.post('/new', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var age = req.body.age;

  db.run('insert into mydata (name, email ,age) values (?, ?, ?)', name, email, age);
  res.redirect('/blog');
});

/* GET edit */
router.get('/edit', function(req, res, next) {
  var id = req.query.id;
  db.serialize(() => {
    var q = "select * from mydata where id = ?";
    db.get(q, [id], (err, row) => {
      if (!err){
        var data = {
          title: 'edit blog'+id,
          content: 'id = ' +id+ ' のレコードを編集',
          blog: row
        }
        res.render('blog/edit', data);
      }
    });
  });
});

/* Post edit */
router.post('/edit', function(req, res, next) {
  var id = req.body.id;
  var name = req.body.name;
  var email = req.body.email;
  var age = req.body.age;

  var q = "update mydata set name=?, email=? ,age=? where id=?";
  db.run(q,name,email,age,id);
  res.redirect('/blog');
});

/* GET show */
router.get('/show', function(req, res, next) {
  var id = req.query.id;
  db.serialize(() => {
    var q = "select * from mydata where id = ?";
    db.get(q, [id], (err, row) => {
      if (!err){
        var data = {
          title: 'blog'+id,
          content: 'id = ' +id+ ' のレコード',
          blog: row
        }
        res.render('blog/show', data);
      }
    });
  });
});

/* GET delete */
router.get('/delete', function(req, res, next) {
  var id = req.query.id;
  db.serialize(() => {
    var q = "select * from mydata where id = ?";
    db.get(q, [id], (err, row) => {
      if (!err){
        var data = {
          title: 'delete blog'+id,
          content: 'id = ' +id+ ' のレコードを編集',
          blog: row
        }
        res.render('blog/delete', data);
      }
    });
  });
});

/* Post delete */
router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  var q = "delete from mydata where id=?";
  db.run(q,id);
  res.redirect('/blog');
});

module.exports = router;
