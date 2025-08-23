import express from 'express';

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Test 123 express');
});

app.listen(PORT);
