const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD via GitHub Actions 🚀');
});

app.listen(3000, () => console.log('Running'));