const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let clipboardText = '';

app.use(cors());
app.use(express.json());

app.get('/clipboard', (req, res) => {
  res.send({ text: clipboardText });
});

app.post('/clipboard', (req, res) => {
  const { text } = req.body;
  clipboardText = text;
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});