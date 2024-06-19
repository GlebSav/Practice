"use strict";

// Имитация асинхронного запроса к серверу с помощью fetch
async function fetchAndProcessData(url) {
    try {
        // Ожидание выполнения запроса к указанному URL
        const response = await fetch(url);

        // Проверка, успешен ли запрос
        if (!response.ok) {
            // Если запрос не успешен, выбрасываем ошибку
            throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
        }

        // Чтение данных в формате JSON
        const data = await response.json();

        // Возвращаем полученные данные
        return data;
    } catch (error) {
        // Логирование ошибки в консоль
        console.error("Произошла ошибка при загрузке данных:", error.message);

        // Возвращаем сообщение об ошибке
        return { error: error.message };
    }
}

// Пример использования функции fetchAndProcessData
const url = "https://api.example.com/data";

fetchAndProcessData(url).then(data => {
    if (data.error) {
        console.log("Ошибка:", data.error);
    } else {
        console.log("Полученные данные:", data);
    }
});
