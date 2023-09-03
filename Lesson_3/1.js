"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const userNumber = Number(prompt("Введите число:"));

/**
 *
 * @param {number} number входящее число
 * @returns {number} число возведенное в куб
 */
function cube(number) {
  return Math.pow(number, 3); // number ** 3
}

console.log(cube(userNumber));
