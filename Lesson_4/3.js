"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

let array = [];

/**
 * Функция заполнения массива рандомными числами [0, 9], длина массива = 5
 * @param {array} arr массив
 */
function arrayFill(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(Math.trunc(Math.random() * 10));
  }
}

/**
 * Функция для подсчета суммы элементов массива
 * @param {array} arr массив
 * @returns {number} сумму
 */
function arraySum(arr) {
  return arr.reduce((acc, current) => acc + current);
}

/**
 * Функция поиска максимального числа в массиве
 * @param {array} arr массив
 * @returns {number} максимальное число в массиве
 */
function arrayMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Функция создания нового массива с индексами содержащими цифру 3 из оригинального массива
 * @param {array} arr массив
 * @returns {array} массив
 */
function arrayOfThree(arr) {
  const arrayOfThree = []; // я почему-то подумал, что если мы записываем в него значения, значит мы его изменяем, следовательно let

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
      arrayOfThree.push(i);
    }
  }
  return arrayOfThree;
}

arrayFill(array);
const maxNumber = Math.max(array);

console.log(`Original array: ${array}`);

console.log(`Array summary = ${arraySum(array)}`);

console.log(`The maximum number in the array is: ${arrayMax(array)}`);

console.log(`Indexes in which the number 3 is located: ${arrayOfThree(array)}`);
