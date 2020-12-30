



const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const fn = () => {
    if (input.value === '') {
        output.textContent = 'незнакомец';
        return;
    }
    output.textContent = input.value;
}

input.addEventListener('input', fn);