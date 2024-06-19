"use strict";

function processData(data)
{
    return new Promise((resolve, reject) =>
    {
        if (typeof data !== "number")
        {
            return reject(new Error("Error"));
        }

        if (data % 2 === 0)
        {
            setTimeout(() =>
            {
                resolve("Even");
            }, 2000);
        }
        else
        {
            setTimeout(() =>
            {
                resolve("Odd");
            }, 1000);
        }
    });
}

processData(3)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });

processData(4)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });

processData("test")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });
