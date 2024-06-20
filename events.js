const upperColor = document.querySelector('.flag__line--upper');
const lowerColor = document.querySelector('.flag__line--lower');


document.addEventListener('keydown', ev => {

    ev.preventDefault();

    if (ev.key.toLowerCase() === 'b' && ev.shiftKey) {
        upperColor.style.backgroundColor = 'blue';
    }

    if (ev.key.toLowerCase() === 'w' && ev.shiftKey) {
        upperColor.style.backgroundColor = 'white';
    }

    if (ev.key.toLowerCase() === 'r' && ev.shiftKey) {
        upperColor.style.backgroundColor = 'red';
    }

    if (ev.key.toLowerCase() === 'b' && ev.ctrlKey) {
        lowerColor.style.backgroundColor = 'black';
    }

    if (ev.key.toLowerCase() === 'r' && ev.ctrlKey) {
        lowerColor.style.backgroundColor = 'red';
    }

    if (ev.key.toLowerCase() === 'y' && ev.ctrlKey) {
        lowerColor.style.backgroundColor = 'yellow';
    }

});