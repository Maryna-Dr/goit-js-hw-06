const refs = {
    inputSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.inputSizeControl.addEventListener('input', onInputSizeControlChange);


function onInputSizeControlChange(event) {
    const fontSizeResult = Number(event.target.value) + 'px';
    refs.text.style.fontSize = fontSizeResult;
};