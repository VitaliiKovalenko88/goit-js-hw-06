const counterEl = document.querySelector('#counter');

const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;
const valueEl = document.querySelector('#value');

const counterValue = valueEl.textContent;

const counter = {
  value: counterValue === Number,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
incrementBtn.addEventListener('click', () => {
  counter.increment();
  console.log(counter.value);
  valueEl.textContent = counter.value;
});
decrementBtn.addEventListener('click', () => {
  counter.decrement();
  console.log(counter.value);
  valueEl.textContent = counter.value;
});
