const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnIncrement.addEventListener('click', onValueIncrement);
refs.btnDecrement.addEventListener('click', onValueDecrement);

function onValueIncrement() {
    counterValue += 1;
    resultValue(counterValue);
};

function onValueDecrement() {
    if (result === 0) {
        return;
    }
    counterValue -= 1;
    resultValue(counterValue);
};

function resultValue(counterValue) {
    refs.value.textContent = counterValue;
};

