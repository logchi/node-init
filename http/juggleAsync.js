'use strict';

const http = require('http');
const urls = process.argv.slice(2);

let result = [];
let count = 0;
urls.forEach((url, indice) => {
    http.get(url, (res) => {
        res.setEncoding('utf8');
        let content = '';
        res.on('data', (chunk) => {
            content += chunk;
        })
        res.on('end', () => {
            count += 1;
            result[indice] = content;
            if (count === 3) {
                result.forEach((item) => {
                    console.log(item);
                })
            }
        })
    })
})

