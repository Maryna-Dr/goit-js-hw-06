const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', onInputNameChange);

function onInputNameChange(event) {
    refs.outputName.textContent = event.target.value;
    if (event.target.value === '') {
        refs.outputName.textContent = 'Anonymous';
    };
};