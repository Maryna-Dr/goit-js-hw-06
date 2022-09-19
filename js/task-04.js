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
    console.log(counterValue);
}

function onValueDecrement() {
    counterValue -= 1;
    resultValue(counterValue);
    console.log(counterValue);
}

function resultValue(counterValue) {
    refs.value.textContent = counterValue;
}

