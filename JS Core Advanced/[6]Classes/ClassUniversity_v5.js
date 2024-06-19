"use strict";

class University
{
    constructor(name)
    {
        this.name = name;
        this.faculties = [];
    }

    addFaculty(facultyName)
    {
        if (!this.faculties.includes(facultyName))
        {
            this.faculties.push(facultyName);
            console.log(`Факультет '${facultyName}' добавлен.`);
        }
        else
        {
            console.log(`Факультет '${facultyName}' уже существует.`);
        }
    }

    removeFaculty(facultyName)
    {
        const index = this.faculties.indexOf(facultyName);
        if (index !== -1)
        {
            this.faculties.splice(index, 1);
            console.log(`Факультет '${facultyName}' удалён.`);
        }
        else
        {
            console.log(`Факультет '${facultyName}' не найден.`);
        }
    }

    listFaculty()
    {
        if (this.faculties.length > 0)
        {
            console.log(`Факультеты университета '${this.name}':`);
            this.faculties.forEach((faculty, index) =>
            {
                console.log(`${index + 1}. ${faculty}`);
            });
        }
        else
        {
            console.log(`В университете '${this.name}' нет факультетов.`);
        }
    }
}

const myUniversity = new University("БНТУ");

myUniversity.addFaculty("ФИТР");
myUniversity.addFaculty("МСФ");

myUniversity.addFaculty("МСФ");

myUniversity.listFaculty();

myUniversity.removeFaculty("МСФ");

myUniversity.removeFaculty("МСФ");

myUniversity.listFaculty();
