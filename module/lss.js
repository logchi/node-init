'use strict';

const fs = require('fs');
const path = require('path');

module.exports =
    (dir, ext, cb) => {
        ext = '.' + ext;
        fs.readdir(
            dir,
            (err, list) => {
                if (err) {
                    return cb(err);
                } else {
                    cb(
                        null,
                        list.filter((item) => {
                            return path.extname(item) === ext;
                        })
                    )
                }
            }
        )
    }