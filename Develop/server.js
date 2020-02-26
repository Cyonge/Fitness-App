const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use("/", routes);



module.exports = app;