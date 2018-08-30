const express = require('express');

//set up express app

const app = express();

//initiliaze routes
app.use('/api', require('./routes/api.js'));

//listen for requests

app.listen(process.env.port || 4000, function () {
  console.log('now listening for requests');
});