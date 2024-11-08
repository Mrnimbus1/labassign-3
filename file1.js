const express = require('express');
const app = express();
const port = 3000;

// Route to display group names
app.get('/', (req, res) => {
  res.send('<h1>Group Names</h1><p>Ayomide Musa, Gerald Aguyaoy, Lucas Nunes</p>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
