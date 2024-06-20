const registrationForm = document.querySelector('form[name="login"]');
// or via document.forms.login; 
registrationForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(registrationForm);
    // or const data = new FormData(event.currentTarget);
    console.log({
        name: formData.get('userName'),
        surname: formData.get('userSurname'),
        email: formData.get('email'),
        // or form.elements.email.value
        password: formData.get('password'),
    });
});

