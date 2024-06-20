const registrationForm = document.querySelector('form[name="login"]');

registrationForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(registrationForm);

    console.log({
        name: formData.get('userName'),
        surname: formData.get('userSurname'),
        email: formData.get('email'),
        password: formData.get('password'),
    });
});

