'use strict';

const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const filePath = process.argv[3];

http
    .createServer((req, res) => {
        let src = fs.createReadStream(filePath);
        src.pipe(res);
        req.on('end', () => {
            res.end();
        })
    })
    .listen(port);