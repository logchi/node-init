'use strict';

const http = require('http');

let url = process.argv[2];
http
    .get(url, (res) => {
        res.setEncoding('utf8');
        let content = '';
        res.on('data', (chunk) => {
            content = content + chunk;
        })
        res.on('end', () => {
            console.log(content.length);
            console.log(content);
        })
    })
    .on('error', (e) => {
        console.log(`request error: ${e.message}`);
    })