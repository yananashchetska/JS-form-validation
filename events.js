const childButton = document.getElementById('child');
const parentButton = document.getElementById('parent');
const grandButton = document.getElementById('grand-parent');

const clickHandler = function(e) {
    console.log(`current target: ${e.currentTarget.id}`);
    // e.stopPropagation();
    console.log(`target: ${e.target.id}`);
}

const myButtons = [childButton, parentButton, grandButton];

// for (const button of myButtons) {
//     button.addEventListener('click', clickHandler);
// } 
// parentButton.removeEventListener('click', clickHandler);

document.getElementById('parent').addEventListener('click', clickHandler, {capture: true});
