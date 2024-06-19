"use strict";

function findMin(arr)
{
    return Math.min.apply(null, arr);
}

console.log(findMin([3, 1, 4, 1, 5, 9, -2]));
console.log(findMin([10, 20, 30]));
console.log(findMin([-10, -20, -30]));