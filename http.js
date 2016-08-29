'use strict';

const http = require('http');

let url = process.argv[2];
http.get(url, (resp) => {
    resp.setEncoding('utf8');
    resp.on('data', (chunk) => {
        console.log(chunk);
    })
})