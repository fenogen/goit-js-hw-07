

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const list = document.querySelector('#ingredients')

ingredients.forEach((i, index) => {
  let item = document.createElement('li');
  list.appendChild(item);
  item.textContent = ingredients[index];
  return;
});
console.log(list.children);
