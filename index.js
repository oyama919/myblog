var express = require('express');
var app = express();
var ejs = require("ejs");

app.engine('ejs', ejs.renderFile);
app.use(express.static('assets'));

app.get('/', (req,res) => {
  res.render('index.ejs',
    {
      title:'Index Page',
      content:'Index Page Contents',
      link:{href:'/show',text:'show page'}
    }
  );
});

app.get('/show', (req,res) => {
  res.render('index.ejs',
    {
      title:'Show Page',
      content:'Show Page Contents',
      link:{href:'/',text:'index page'}
    }
  );
});

app.listen(3000, () => {
  console.log('startin server port:3000');
});
