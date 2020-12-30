



const number = document.querySelector('input[type="number"]');
console.log(number);

const btnCreate = document.querySelector('button[data-action="render"]');

const btnDestroy = document.querySelector('button[data-action="destroy"]');
console.log(btnDestroy);

const boxes = document.querySelector('#boxes');

let amount = [];
let box;


const funcNumber = () => {
  amount.length = number.value;
  console.log(amount);
  // console.log(amount.length);

  const funcCreate = () => {
    for (let i = 0; i < amount.length; i += 1) {
      console.log(i);
      box = document.createElement('div');
      box.style.width = '30px';
      box.style.height = '30px';
      box.style.backgroundColor = 'red';
      box.style.margin = '3px';
      boxes.appendChild(box);
      box.textContent = '';
    }
    return amount.length = 0;       //------> !!!обнуляет длинну массива;
  }

  const funcDestroy = () => {
      box.remove();
  };

  btnCreate.addEventListener('click', funcCreate);
  btnDestroy.addEventListener('click', funcDestroy);

  // amount.forEach((i, index, arr) => {
  //   console.log(arr);
  //   console.log(i);
  //   console.log(index);
  //   let box = document.createElement('div');
  //   boxes.appendChild(box);
  //   box.textContent = i;
  //   return;
  // });
}

number.addEventListener('input', funcNumber);