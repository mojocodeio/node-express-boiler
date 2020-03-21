require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

/** controllers */
const auth = require('./controllers/auth');

const app = express();

const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
})

/** routes */
app.use('/auth', auth);

app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT');
    client.connect(err => {
        console.log('successfully connected to database')
        const database = client.db('sample_weatherdata')
        const collection = database.collection('data')
        console.log(collection)
    });
});