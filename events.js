// Events Delegation

const buttonsContainer = document.querySelector('.buttons');

document.addEventListener('click', function(ev) {

    if (ev.target.matches('.click-me')) {
        console.log('yeah, that`s correct!');
        buttonsContainer.style.backgroundColor = 'green';
    }

    else {
        console.log('nooo, that`s not right button');
        buttonsContainer.style.backgroundColor = 'red';


    }
})
