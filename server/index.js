const express = require('express');
const mongoose = require('mongoose');
const config = require('./dev');
const FakeDb = require('./models/fake-db');
const routes = require('./routes/rental');

mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app =express();


app.use('/api/v1/rentals',routes)


const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log('Server Started');
})