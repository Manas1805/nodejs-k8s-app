const express = require('express');
const app = express();
const hostname ='127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Kubernetes!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
