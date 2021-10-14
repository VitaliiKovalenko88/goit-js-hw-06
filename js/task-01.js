const itemsEl = document.querySelectorAll('.item');

const getCategoriesEl = ({ length }) =>
  console.log(`В списке ${length} категории.`);

const getItemsEl = items => {
  return items.forEach(({ firstElementChild, lastElementChild }) => {
    const title = firstElementChild.textContent;
    const number = lastElementChild.children.length;
    console.log(`Категория: ${title}
  Количество елементов: ${number}`);
  });
};
getCategoriesEl(itemsEl);
getItemsEl(itemsEl);
