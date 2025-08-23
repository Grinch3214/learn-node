import express from 'express';
import commentsRouter from './routes/comments.js';

const app = express();

const PORT = 5000;

function getRootHandler(req, res) {
  res.send('getRootHandler');
}

app.get('/', getRootHandler);
app.use('/comments', commentsRouter);

app.listen(PORT, () => console.log(`Started server on port ${PORT}`));
