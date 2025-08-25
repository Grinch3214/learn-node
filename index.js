import express from 'express';
import morgan from 'morgan';

const PORT = 5000;

const app = express();

// middleware funcs
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for query (forms)

app.use((req, res) => {
  console.log(req.body);
  return res.send('Server Ok');
});

app.listen(PORT, () => console.log(`Started server on port ${PORT}`));
