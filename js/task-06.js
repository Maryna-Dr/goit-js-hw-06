const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);
const inputLength = Number(input.dataset.length);

function onInputBlur(event) {
    if (event.target.value.length !== inputLength) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    };
};