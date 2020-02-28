"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import test = require('./test/test');
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(process.env.PORT || 4000, function () {
    console.log('Example app listening on port 300!');
});
