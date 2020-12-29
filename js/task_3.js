

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const list = document.querySelector('#gallery');

images.forEach((img) => {                                  //-----> Перебрали
  const string = '<li></li>';                              //-----> Создали нужный тег в виде строки
  list.insertAdjacentHTML('afterbegin', string);           //-----> Добавили тег в нужное место
  const li = list.querySelector('li');                     //-----> Выбрали нужный тег для дальнейшей привязки атрибутов

  li.setAttribute('url', img['url']);                      //-----> Добавили первый атрибут по имени "ключа" обьекта
  li.setAttribute('alt', img['alt']);                      //-----> Добавили второй атрибут
  li.setAttribute('class', 'gallery');
  return console.log(img);
});
