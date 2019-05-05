const express = require('express');
const { getMoviesByYear } = require('./util/moviehelper');
const app = express();

const port = process.env.PORT || 8000;

app.get('/movies/:year', async function(req, res) {

  const year = req.params.year;
  const movies = await getMoviesByYear(year);

  res.send(movies);
});

app.listen(port);
console.log(`Listening on port ${port}...`);
module.exports = app;