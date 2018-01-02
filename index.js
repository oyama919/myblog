var express = require('express');
var app = express();
var ejs = require("ejs");
var bodyParser = require('body-parser');

app.engine('ejs', ejs.renderFile);
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended: false}));

var data = {
  'Data1':"test data 1",
  'Data2':"test data 2",
  'Data3':"test data 3"
};
app.get('/', (req,res) => {
  var msg = 'No Message';
  res.render('index.ejs',
    {
      title:'Index Page',
      content:'Index Page Contents',
      message: msg,
      data:data,
      link:{href:'/show',text:'show page'}
    }
  );
});

app.post('/',(req,res) => {
  var msg = req.body.massage;
  res.render('index.ejs',
    {
      title:'Index Page',
      content:'Index Page Contents',
      message: msg,
      data:data,
      link:{href:'/show',text:'show page'}
    }
  );
});

app.get('/show', (req,res) => {
  res.render('index.ejs',
    {
      title:'Show Page',
      content:'Show Page Contents',
      message: '',
      data:'',
      link:{href:'/',text:'index page'}
    }
  );
});

app.listen(3000, () => {
  console.log('startin server port:3000');
});
