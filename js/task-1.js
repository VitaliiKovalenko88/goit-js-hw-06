const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории.`);

itemsEl.forEach(item => {
  const title = item.firstElementChild.textContent;
  const number = item.lastElementChild.children.length;
  console.log(`Категория: ${title} 
  Количество елементов: ${number}`);
});
