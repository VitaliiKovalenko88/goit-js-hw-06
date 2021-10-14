const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingradientsEl = document.querySelector('#ingredients');

const makeListIngredientsOption = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    itemEl.classList.add('item');
    return itemEl;
  });
};

const items = makeListIngredientsOption(ingredients);
ingradientsEl.append(...items);
