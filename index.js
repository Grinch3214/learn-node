import express from 'express';
import morgan from 'morgan';

const PORT = 5000;

const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
  let data = '';

  req.on('data', (chunk) => (data += chunk));
  req.on('end', () => console.log(JSON.parse(data)));
  next();
});

app.use((req, res) => res.send('Server Ok'));

app.listen(PORT, () => console.log(`Started server on port ${PORT}`));
