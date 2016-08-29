'use strict';

const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let lineCount = buf.toString().split('\n').length - 1;
console.log(lineCount);