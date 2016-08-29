'use strict';

const http = require('http');
const urls = process.argv.slice(2);

let result = [];
urls.forEach((url, indice) => {
    http.get(url, (res) => {
        res.setEncoding('utf8');
        let content = '';
        res.on('data', (chunk) => {
            content += chunk;
        })
        res.on('end', () => {
            result[indice] = content;
            if (result.length === 2) {
                result.forEach((item) => {
                    console.log(item);
                })
            }
        })
    })
})

