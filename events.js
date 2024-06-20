// Events Delegation

const buttonsContainer = document.querySelector('.buttons');
const mainLink = document.querySelector('.buttons__link');

document.addEventListener('click', function(ev) {

    if (ev.target.matches('.click-me')) {
        console.log('yeah, that`s correct!');
        buttonsContainer.style.backgroundColor = 'green';
    }

    else if (ev.target.matches('.buttons__link')) {
        console.log('you clicled on the link');
        buttonsContainer.style.backgroundColor = 'white';
    }

    else {
        console.log('nooo, that`s not right button');
        buttonsContainer.style.backgroundColor = 'red';


    }
})

// practicing preventDefault

mainLink.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log(ev);
});