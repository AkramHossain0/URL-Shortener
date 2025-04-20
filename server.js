import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/db.js';
import shortUrlRouter from './api/shortUrl.js';
import ShortUrl from './model/shortUrl.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));

app.use('/', shortUrlRouter);

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find().sort({ _id: -1 });
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  res.render('index', { shortUrls, baseUrl });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});