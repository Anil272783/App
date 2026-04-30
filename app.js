const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD via GitHub Actionssss 🚀');
});

app.listen(3000, () => console.log('Running'));
