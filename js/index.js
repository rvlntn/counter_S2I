// DISPLAY
let displayNumber = document.createElement ('div');
document.getElementById ('container').appendChild(displayNumber);
displayNumber.classList.add('displayNumber');

let p = document.createElement('p');
let text = document.createTextNode('0');
p.classList.add('textNumber');
displayNumber.appendChild(p).appendChild(text);

// DIV BUTTON
let boxBtn = document.createElement('div');
document.getElementById('container').appendChild(boxBtn);
boxBtn.classList.add('boxBtn');

//- BUTTON 
let buttonMinus = document.createElement ('button');
let buttonMinusText = document.createTextNode('-');
boxBtn.appendChild(buttonMinus).appendChild(buttonMinusText);
buttonMinus.classList.add('buttonMinus');

// RESET BUTTON
let resetButton = document.createElement ('button');
let resetText = document.createTextNode('reset');
boxBtn.appendChild(resetButton).appendChild(resetText);
resetButton.classList.add('resetButton');

// + BUTTON 
let buttonPlus = document.createElement ('button');
let addText = document.createTextNode('+');
boxBtn.appendChild(buttonPlus).appendChild(addText);
buttonPlus.classList.add('buttonPlus');


let i = 0;
function increment () {
    i++;
    displayNumber.textContent = i;
}

function reset () {
    i = 0;
    displayNumber.textContent = i;
}

function decrement () {
    i--;
    displayNumber.textContent = i;
}

boxBtn.addEventListener ('click', (e) => {
    displayNumber.style.fontWeight = '400';
    displayNumber.style.fontSize = '60px';

    if (e.target.className === 'buttonPlus') {
        increment();
        if (i >= 0) {
            displayNumber.style.color = '#aed6ae';
        }
    } else if (e.target.className === 'buttonMinus'){
        decrement();
        if (i < 0) {
            displayNumber.style.color = '#ff8870';
        }
    } else if (e.target.className === 'resetButton') {
        reset();
    }
})



