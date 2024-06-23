const form = document.getElementById('form');
const userName = document.getElementById('nameField');
const userSurname = document.getElementById('surnameField');
const email = document.getElementById('emailField');
const password = document.getElementById('passwordField');

form.addEventListener('submit', e => {

    e.preventDefault();

    validateFormInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorElement = inputControl.querySelector('.error');

    errorElement.innerText = message;
    element.classList.add('errored');
    element.classList.remove('success');

    element.addEventListener('input', ev => {
        ev.preventDefault();
        setSuccess(element);
    })
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorElement = inputControl.querySelector('.error');

    errorElement.innerText = '';
    element.classList.remove('errored');
    element.classList.add('success');
};

const isValidEmail = email => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
};

const validateFormInputs = () => {
    const userNameValue = userName.value.trim();
    const userSurnameValue = userSurname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (userNameValue === '') {
        setError(userName, 'Username is required');
    } else {
        setSuccess(userName);
    }

    if (userSurnameValue === '') {
        setError(userSurname, 'Surname is required');
    } else {
        setSuccess(userSurname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address!');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required!');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters!');
    } else {
        setSuccess(password);
    }
};
