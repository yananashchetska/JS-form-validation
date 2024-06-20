// KEYDOWN

// 1. document.body.addEventListener('keydown', function(ev) {

//     if (ev.key === "ArrowDown") {

//         console.log('you pressed down');

//         document.body.insertAdjacentHTML(
//             "beforeend", 
//             "<h1> You pressed arrow down.</h1>"
//         );
//     }
// });


// 2. just pressing down some keys

// document.body.addEventListener('keydown', () => {
//     console.log('you pressed down..');
// });

// 3. displaying the key was pressed

// document.body.addEventListener('keydown', function(ev) {
//     console.log(`${ev.key} was pressed on a keyword`);
// })

// 4. special key was pressed

// document.body.addEventListener('keydown', function(ev) {
//     if (ev.key === 'y') {
//         console.log('you won!');
//     }

//     else {
//         console.log('you lost!');
//     }
// })


// KEYUP

// 1. document.addEventListener('keyup', () => {
//     console.log('you released the key!');
// });

// KEYPRESS  (not reccomended to use since 2023)

// 1. document.addEventListener('keypress', () => {
//     console.log('you PRESSED the key!');
// });

// INPUTS (very similar to keyboard event, but NOT keyboard event)

// const inputField = document.getElementById('muInput');

// inputField.addEventListener('input', () => {
//     console.log('input was inputted');
// })

// document.body.addEventListener('keyup', (ev) => {
//     if (ev.key === 'a' && ev.ctrlKey) {
        
//         document.body.insertAdjacentHTML(
//                         "beforeend", 
//                         `<h1> You pressed ${ev.key} + CTRL </h1>`
//                     );
//     }
// });