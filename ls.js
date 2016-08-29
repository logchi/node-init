'use strict';

const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = '.' + process.argv[3];
fs.readdir(dir,
    (err, list) => {
        if (err) {
            console.log(err);
        } else {
            list.forEach((item) => {
                console.log(item);
                if (path.extname(item) === ext) {
                    console.log(item);
                }
            })
        }
    }
)