const mongoose = require('mongoose');
const validUrl = require('valid-url');
const UrlShort = mongoose.model('UrlShort');
const shortid = require('shortid');
const errorUrl='http://localhost/error';

module.exports = app => {
    app.get('/api/item/:code', async (req, res) => {
        const urlCode = req.params.code;
        const item = await UrlShort.findOne({ urlCode: urlCode });
        if (item) {
            return res.redirect(item.originalUrl);
        } else {
            return res.redirect(errorUrl);
        }
    });

    app.get('/api/items', async (req, res) => {
        const result = await UrlShort.find();
        if (!result) {
            res.status(404).json('Can"t find short URL"s');
        }
        res.status(200).json(result);
    });

    app.post('/api/item', async (req, res) => {
        const { originalUrl, shortBaseUrl } = req.body;
        if (!validUrl.isUri(shortBaseUrl)) {
            return res.status(400).json('Invalid Base Url');
        }
        const urlCode = shortid.generate();
        const updatedAt = new Date();
        if (validUrl.isUri(originalUrl)) {
            try {
                const item = await UrlShort.findOne({ originalUrl: originalUrl });
                if (item) {
                    res.status(200).json(item);
                } else {
                    shortUrl = shortBaseUrl + '/' + urlCode;
                    const item = new UrlShort({
                        originalUrl,
                        shortUrl,
                        urlCode,
                        updatedAt
                    });
                    await item.save();
                    res.status(200).json(item);
                }
            } catch (err) {
                res.status(400).json('Invalid User Id');
            }
        } else {
            // TODO по идее в type должен быть enum
            return res.status(400).json({ message: 'Invalid Original Url', type: 1 });
        }
    });
};