// https://fierce-gorge-04058.herokuapp.com/
// https://git.heroku.com/fierce-gorge-04058.git

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({'hello': 'world!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
