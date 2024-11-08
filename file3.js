const express = require('express');
const app = express();
const port = 3000;
let data = require('./data/data.json');

app.use(express.json());

// Create
app.post('/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).json(newData);
});

// Read
app.get('/data', (req, res) => {
  res.json(data);
});

// Update
app.put('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  data = data.map(item => (item.id === id ? updatedData : item));
  res.json(updatedData);
});


// Delete
app.delete('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
