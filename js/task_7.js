



const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const fr = () => {
  if (range.value <= 5) {
    text.style.fontSize = '5px';
    return;
  }
  if (range.value <= 10) {
    text.style.fontSize = '10px';
    return;
  }
  if (range.value <= 20) {
    text.style.fontSize = '15px';
    return;
  }
  if (range.value <= 30) {
    text.style.fontSize = '25px';
    return;
  }
  if (range.value <= 40) {
    text.style.fontSize = '30px';
    return;
  }
  if (range.value <= 50) {
    text.style.fontSize = '35px';
    return;
  }
  if (range.value <= 60) {
    text.style.fontSize = '40px';
    return;
  }
  if (range.value <= 70) {
    text.style.fontSize = '45px';
    return;
  }
  if (range.value <= 80) {
    text.style.fontSize = '50px';
    return;
  }
  if (range.value <= 90) {
    text.style.fontSize = '55px';
    return;
  }
  if (range.value <= 100) {
    text.style.fontSize = '60px';
    return;
  }
};

range.addEventListener('input', fr);