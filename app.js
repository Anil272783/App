const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD working 🚀');
});

app.get('/health', (req, res) => {
  res.json({ status: "UP" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
