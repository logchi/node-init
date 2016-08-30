'use strict';

const net = require('net');

const port = process.argv[2];

function zeroFill(n) {
    return n >= 10 ? n : '0'+n;
}
function listener(socket) {
    let d = new Date();
    let result = `${d.getFullYear()}-${zeroFill(d.getMonth()+1)}-${zeroFill(d.getDate())} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}\n`;

    socket.end(result);
}

net
    .createServer(listener)
    .listen(port);