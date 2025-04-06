// Задание 1
let i = 1;
do {
    console.log('Привет');
    i++;
} while (i === 2);

// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (let employee in obj) {
    console.log(`${employee} — зарплата ${obj[employee]} долларов`);
}

// Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${num}`);

// Задание 6
let firstFridayNumber = 4;

for (let day = 1; day <= 31; day++) {
    let date = new Date(2025, 3, day); // апрель 2025 года
    if (date.getDay() === 5 && day >= firstFridayNumber) { // Если день недели пятница и день больше или равен первому числу пятницы
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }
}