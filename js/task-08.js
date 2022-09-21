const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

let result = {
        email: '',
        password: '',
};
    
function changeValueObject (emailValue, passwordValue) {
        result.email = emailValue;
        result.password = passwordValue;
};

function onFormSubmit(event) {
    event.preventDefault();
    
    const { email, password } = event.target.elements;

    if (email.value === '' || password.value === '') {
        alert('All fields must be completed');
        return;
    };

    changeValueObject(email.value, password.value);
    console.log(result);

    event.target.reset();
};

