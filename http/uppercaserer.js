'use strict';

const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

http
    .createServer((req, res) => {
        if (req.method === 'POST') {
            req.pipe(map(function (chunk) {
                return chunk.toString().toUpperCase();
            })).pipe(res);
        } else {
            return res.end('send me a POST\n');
        }
    })
    .listen(Number(port));