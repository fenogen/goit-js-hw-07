

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const list = document.querySelector('#ingredients')

ingredients.forEach((i, index) => {                   //-----> Перебрали
  let item = document.createElement('li');            //-----> Создали элемент списка
  list.appendChild(item);                             //-----> Привязали к родителю
  item.textContent = ingredients[index];              //-----> Дали название (привязка по индексу)
  return;
});
console.log(list.children);
