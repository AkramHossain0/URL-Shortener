import ShortUrl from "../model/shortUrl.js";
import { nanoid } from 'nanoid';

const createShortUrl = async (req, res) => {
    try {
        const { full } = req.body;

        if (!full) {
            return res.status(400).json({ message: 'Full URL is required' });
        }

        const existingUrl = await ShortUrl.findOne({ full });

        if (existingUrl) {
            return res.json(existingUrl);
        }

        const short = nanoid(7);

        const shortUrl = new ShortUrl({ full, short });
        await shortUrl.save();

        res.status(201).json(shortUrl);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getShortUrl = async (req, res) => {
    try {
        const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

        if (shortUrl == null) {
            return res.sendStatus(404);
        }

        shortUrl.clicks++;
        shortUrl.save();

        res.redirect(shortUrl.full);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createShortUrl, getShortUrl };
