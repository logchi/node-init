'use strict';

const http = require('http');
const url = require('url');
const post = process.argv[2];

http.createServer((req, res) => {
    console.log(req.url);
})