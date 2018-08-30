const express = require('express');

//set up express app

const app = express();

//GET request

app.get('/api', function (req, res) {
  console.log('GET request');
  res.send({ name: 'Adam' });
})


//listen for requests

app.listen(process.env.port || 4000, function () {
  console.log('now listening for requests');
});