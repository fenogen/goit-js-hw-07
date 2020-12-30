

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const list = document.querySelector('#ingredients')

ingredients.forEach((i) => {                          //-----> Перебрали
  let item = document.createElement('li');            //-----> Создали элемент списка
  list.appendChild(item);                             //-----> Привязали к родителю
  item.textContent = i;                              //-----> Дали название
  return;
});
console.log(list.children);
