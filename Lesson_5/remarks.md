Идеально. numbers.hasOwnProperty(key) можно не проверять, так как мы знаем, что в нашем объекте ничего лишнего не будет.
"Сначала думал вот так написать, но мне это показалось слишком просто =)" - так и нужно было :)) Отлично все сделали :)
Идеально.
"Но как она это делает не понятно." - нас это не должно волновать, там свой алгоритм. Внутри sort он сам выбираем значения, которые нужно сравнить, передает в функцию и понимает, какое меньше, какое больше. Нас не должно волновать, какие значения нам передадутся, нам нужно просто сравнить два значения в функции и все, не более того. По сортировке - для сравнения чисел и правда можно просто одно из другого вычесть:
products.sort((a, b) => a.price - b.price);
Такое возможно потому что в этой функции, которую передаем в .sort принимается 2 значения из массива (можно считать два случайных значения) и функция должна вернуть отрицательное число, если первое значение (первый параметр) меньше второго, положительное значение надо вернуть, если первый параметр больше второго и 0, если значения равны между собой. При вычитании как раз будет возвращаться либо отриц. число, либо положительное, либо 0, если два элемента равны по цене. В целом, мы это и написали :)
Свои реализации сортировки в js будут работать дольше, чем встроенный вариант sort. 5. Красота, в нескольких вариантах :)
Приятно работать с вами, Вячеслав. Вы молодец