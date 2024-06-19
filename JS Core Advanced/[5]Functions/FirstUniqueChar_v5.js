"use strict";

function findFirstUniqueChar(str)
{
    for (let i = 0; i < str.length; i++)
    {
        const char = str[i];
        if (str.indexOf(char) === i && str.lastIndexOf(char) === i)
        {
            return char;
        }
    }
    return null;
}

console.log(findFirstUniqueChar("world"));
console.log(findFirstUniqueChar("aabbcc"));
console.log(findFirstUniqueChar("teeth"));