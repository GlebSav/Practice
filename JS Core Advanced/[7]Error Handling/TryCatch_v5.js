"use strict";

function handleReferenceError()
{
    try
    {
        console.log(nonExistentVariable);
    }
    catch (error)
    {
        if (error instanceof ReferenceError)
        {
            console.error("Ошибка ReferenceError: доступ к неопределенной переменной.");
        }
        else
        {
            throw error;
        }
    }
}

handleReferenceError();
