const express = require('express');
const app = express();
const port = 3000;
const data = require('./data/data.json');

// Route to display JSON contents
app.get('/names', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
