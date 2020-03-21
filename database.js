const mongoose = require('mongoose');

const dbUri = process.env.MONGODB_URL || 'mongodb://localhost/weather_data';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'sample_weatherdata'
};
mongoose.connect(dbUri, options)
    .then(() => console.log('Database connection established!'))
    .catch(err => console.log(err))

require('./models/weather');