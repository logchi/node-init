'use strict';

const http = require('http');
let res = http.request({
    hostname: 'localhost',
    port: 8000,
    method: 'post'
}, (res) => {
    res.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    })
})
res.write('hehehahi');
res.end("Hello Server");