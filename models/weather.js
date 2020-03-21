const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    st: { type: String },
    ts: { type: Date },
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;