"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
	"понедельник",
	"вторник",
	"среда",
	"четверг",
	"пятница",
	"суббота",
	"воскресенье",
];

//////////////////////////////// 1. for //////////////////////////////

const daysOfWeek = {};

for (let i = 0; i < en.length; i++) {
	const enDay = en[i];
	const ruDay = ru[i];
	daysOfWeek[enDay] = ruDay;
}

//////////////////////////////// 2. Цикл forEach, который перебирает элементы массива en. На каждой итерации мы добавляем текущий день на английском языке как ключ и соответствующий день на русском языке как значение в объект daysOfWeek. /////////////////////////////////////////

// const daysOfWeek = {};

// en.forEach((day, index) => {
// 	daysOfWeek[day] = ru[index];
// });

//////////////////////////////// 3. Метод reduce применяет функцию к аккумулятору (obj) и каждому элементу массива en функция просто добавляет текущий день на английском языке как ключ и соответствующий день на русском языке как значение /////////////////////////////////////////

// const daysOfWeek = en.reduce((obj, day, index) => {
// 	obj[day] = ru[index];
// 	return obj;
// }, {});

//////////////////////////////// 4. Здесь мы используем метод map, чтобы создать массив пар ключ-значение, а затем передаем его в Object.fromEntries, чтобы создать объект daysOfWeek. map применяет функцию к каждому элементу массива en, создавая массив пар ключ-значение вида [ключ, значение]. Object.fromEntries преобразует этот массив в объект. /////////////////////////////

// const daysOfWeek = Object.fromEntries(en.map((day, index) => [day, ru[index]]));

////////////////////////////////////////////////////////////////////////////////////

console.log(daysOfWeek);
