'use strict';

let nums = process.argv.slice(2);
let sum = nums.reduce( (prev, curr) => {
    return (+prev) + (+curr)
});
console.log(sum);
