const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');


mongoose.connect(config.DB_URI2, { useNewUrlParser: true }).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

const app = express();

app.get('/rentals', function (req, res) {
  res.json({'success': true});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('App is running');
});
