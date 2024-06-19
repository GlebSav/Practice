"use strict";

function getWords(str)
{
    const words = str.match(/\b\w+\b/g);
    return words ? words : [];
}

console.log(getWords("Hello, world!"));

