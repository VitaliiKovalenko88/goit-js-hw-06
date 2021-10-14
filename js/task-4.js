const refs = {
  counterEl: document.querySelector('#counter'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

const counterValue = 0;
const counter = {
  value: counterValue,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

refs.incrementBtn.addEventListener('click', () => {
  counter.increment();
  refs.valueEl.textContent = counter.value;
});

refs.decrementBtn.addEventListener('click', () => {
  counter.decrement();
  refs.valueEl.textContent = counter.value;
});
