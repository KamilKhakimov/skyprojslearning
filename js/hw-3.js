// Задание 1
let password = 'qwerty123456';
let answer = String(prompt('Введите пароль'));

if (password === answer) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
let d = 123;
let e = 321;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
// let newNum = parseInt(a) + parseInt(b);
// alert(newNum);
alert(parseInt(a) + parseInt(b));

// Задание 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    case 12:
        console.log('зима');
        break;
    default:
        console.log('Такого месяца не бывает <3');
        break;
}