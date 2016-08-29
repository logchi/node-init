'use strict';

const ls = require('./lss');

let dir = process.argv[2];
let ext = process.argv[3];

ls(dir, ext,
    (err, list) => {
        if (err) {
            console.error("There was an error:", err);
        } else {
            list.forEach((item) => { console.log(item); });
        }
    }
)