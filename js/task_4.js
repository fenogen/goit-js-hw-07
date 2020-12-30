

const counter = document.querySelector('#value')

const btnInc = document.querySelector('button[data-action="increment"]');
const btnDec = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
  console.log(counter.textContent);
  return;
}

const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
  console.log(counter.textContent);
  return;
}

btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);
