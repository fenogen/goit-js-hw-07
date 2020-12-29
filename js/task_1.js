



// --------------------Задание 1:
const category = document.querySelector('#categories')
// ------ создаем массив:
const array = category.children                     
console.log(`В списке ${array.length} категории`);


// --------------------Задание 2:
const f = function (index) {
    //-------Обратились к конкретной категории:
    const item = category.children[index];

    //-------Нашли заголовок внутри категории:
    const title = item.querySelector('h2');
    console.log(`Категория: ${title.textContent}`);

    //-------Нашли все элементы списка внутри категории:
    const list = item.querySelectorAll('li');
    console.log(`Количество элементов: ${list.length}`);
}

f(0);
f(1);
f(2);