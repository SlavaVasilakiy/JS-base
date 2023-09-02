"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @returns максимальное из трёх чисел
 */
function maximum(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

const userNumber1 = Number(prompt("Введите первое число:"));
const userNumber2 = Number(prompt("Введите второе число:"));
const userNumber3 = Number(prompt("Введите третье число:"));

alert(
  `Максимальное значение среди чисел ${userNumber1}, ${userNumber2}, ${userNumber3} равно ${maximum(
    userNumber1,
    userNumber2,
    userNumber3
  )}.`
);
