'use strict';

const http = require('http');
const fs = require('fs');

let methods = Object.create(null);

function urlToPath(url) {
    let path = require('url').parse(url).pathname;
    return '.' + decodeURIComponent(path);
}

http.createServer((req, res) => {
    function respond (code, body, type) {
        if (!type) type = 'text/plain';
        res.writeHead(code, {"Content-Type": type});
        if (body && body.pipe) {
            body.pipe(res);
        } else {
            res.end(body);
        }
    }

    let m = res.method;
    if (m in methods) {
        methods[m](urlToPath(req.url), respond, req);
    } else {
        respond(405, `Method ${m} not allowd`);
    }
}).listen(8000);