import express from 'express';

const app = express();

const PORT = 5000;

function getRoothandler(req, res) {
  res.send('getRoothandler');
}

function getCommentsHandler(req, res) {
  res.send('getCommentsHandler');
}

function postCommentsHandler(req, res) {
  res.send('postCommentsHandler');
}

app.get('/', getRoothandler);
app.get('/comments', getCommentsHandler);
app.post('/comments', postCommentsHandler);

app.listen(PORT, () => console.log(`Started server on port ${PORT}`));
