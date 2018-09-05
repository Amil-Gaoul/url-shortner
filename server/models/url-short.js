const mongoose = require('mongoose');
const { Schema } = mongoose;
const urlShortSchema = new Schema({
    originalUrl: String,
    urlCode: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
mongoose.model('UrlShort', urlShortSchema);