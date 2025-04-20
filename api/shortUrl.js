import express from 'express';
import {createShortUrl, getShortUrl} from '../controllers/shortUrl.js';

const shortUrlRouter = express.Router();

shortUrlRouter.post('/shortUrls', createShortUrl);
shortUrlRouter.get('/:shortUrl', getShortUrl);

export default shortUrlRouter;