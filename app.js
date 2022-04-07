const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const path = require('path');
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'pages')));

// mongoose db config
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', ()=>{
  console.log("Connected to mongodb server");
})

mongoose.connect(DB_URL);

// run server
const server = app.listen(PORT, ()=>{
  console.log('Listening on port' + PORT);
})

// routes
app.use('/', indexRouter);

module.exports = app;