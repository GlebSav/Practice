"use strict";

function squareAfter3Seconds(number)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            const result = number * number;
            console.log(`Результат: ${result}`);
            resolve(result);
        }, 3000);
    });
}

const initialPromise = Promise.resolve(2);

initialPromise
    .then((result) =>
    {
        console.log(`Начальное значение: ${result}`);
        return squareAfter3Seconds(result);
    })
    .then((result) =>
    {
        return squareAfter3Seconds(result);
    })
    .then((result) =>
    {
        return squareAfter3Seconds(result);
    })
    .then((finalResult) =>
    {
        console.log(`Финальный результат: ${finalResult}`);
    })
    .catch((error) =>
    {
        console.error("Ошибка:", error);
    });
