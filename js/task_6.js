

const input = document.querySelector('#validation-input');

const fk = () => {
  if (input.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
    return;
  }
  if (input.value.length !== 6) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    console.log(input.value.length);
    return;
  }
  input.classList.remove('invalid');
  input.classList.add('valid');
  console.log(input.value.length);
  return;
};

input.addEventListener('change', fk);