# goit-js-hw-07

Задание 1.

 <!--В HTML есть список категорий ul#categories. Напиши скрипт, который
выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть
элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
текст заголовка элемента (тега h2) и количество элементов в категории (всех
вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные Количество элементов: 4. -->

Задание 2

<!-- В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement(). -->

Задание 3

<!-- Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы. -->

Задание 4

<!--Счетчик состоит из спана и кнопок, которые должны увеличивать и
уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение
счетчика. Создай функции increment и decrement для увеличения и уменьшения
значения счетчика Добавь слушатели кликов на кнопки, вызовы функций и обновление
интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> -->

Задание 5

<!-- Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> -->
