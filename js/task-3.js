const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeTransactionItemsGallary = ({ url, alt }) => {
  const imageItemsEl = `
   <li class='gallery-list__item list'><img class='gallery-list__img' src="${url}" alt="${alt}" width='420'></li>
   
   `;
  return imageItemsEl;
};

const listGalleryEl = document.querySelector('#gallery');
console.log(listGalleryEl);
listGalleryEl.classList.add('gallery-list');

const transactionItemsGallary = images.map(makeTransactionItemsGallary);
listGalleryEl.insertAdjacentHTML('beforeend', transactionItemsGallary);
