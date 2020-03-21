const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    st: { type: String },
    ts: { type: Date },
    name: { type: String },
}, { collection: 'data' });

const Weather = mongoose.model('Weather', weatherSchema, 'data');

module.exports = Weather;