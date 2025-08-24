import express from 'express';

const PORT = 5000;

const app = express();

function logger(req, res, next) {
  console.log(req.method, req.path);
  next();
}

app.use(logger);
app.use((req, res) => res.send('Server Ok'));
app.listen(PORT, () => console.log(`Started server on port ${PORT}`));
