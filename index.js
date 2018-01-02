var express = require('express');
var app = express();

app.get('/', (req,res) => {
  res.send('test');
});

app.listen(3000, () => {
  console.log('startin server port:3000');
});
