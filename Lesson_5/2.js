"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
	author: "John", // вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2, // вывести это число
			},
		},
		{
			userId: 5, // вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", // вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1,
			},
		},
	],
};

/**
 * Функция принимает объект и рекурсивно проходит по всем значениям, включая вложенные, затем записывает их в переменную value. Если значение соответсвует условию, то оно выводится в консоль.
 * @param {object} obj Объект
 */
function printObjectValues(obj) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key];

			if (typeof value === "object") {
				printObjectValues(value);
			}

			if (
				value === "John" ||
				value === 2 ||
				value === 5 ||
				value === "lorem ipsum 2"
			) {
				console.log(value);
			}
		}
	}
}

printObjectValues(post);

/*
Сначала думал вот так написать, но мне это показалось слишком просто =)

console.log(post.author);

console.log(post.comments[0].rating.dislikes);

console.log(post.comments[1].userId);

console.log(post.comments[1].text);
*/
