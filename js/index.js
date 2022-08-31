// DISPLAY
let displayNum = document.createElement('div');
document.getElementById ('container').appendChild(displayNum);
displayNum.classList.add('displayNum');

let p = document.createElement ('p');
let text = document.createTextNode ('0');
displayNum.appendChild(p).appendChild(text);
p.classList.add('text');


// DIV BUTTON
let boxBtn = document.createElement ('div');
document.getElementById('container').appendChild(boxBtn);
boxBtn.classList.add('boxBtn');


//- BUTTON 
let subtractBtn = document.createElement ('button');
let subtractText = document.createTextNode('-');
subtractBtn.appendChild(subtractText);
boxBtn.appendChild(subtractBtn);
subtractBtn.classList.add('subtractBtn');


// RESET BUTTON
let reset = document.createElement ('button');
let resetText = document.createTextNode('reset');
reset.appendChild(resetText);
boxBtn.appendChild(reset);
reset.classList.add('reset');


// + BUTTON 
let addBtn = document.createElement ('button');
let addText = document.createTextNode('+');
addBtn.appendChild(addText);
boxBtn.appendChild(addBtn);
addBtn.classList.add('addBtn');

// COUNTER FUNCTION 
let i = 0;

subtractBtn.addEventListener ('click', () => {
    i--;
    if (i < 0) {
        displayNum.style.fontSize = "60px";
        displayNum.style.color = "#ff8870";
        displayNum.style.fontWeight = "400";
    }
    displayNum.innerHTML = i;
});

reset.addEventListener ('click', () => {
    i = 0;
    if (i = 0) {
        displayNum.style.fontSize = "60px";
        displayNum.style.fontWeight = "400";
    }
    displayNum.innerHTML = i;
});


addBtn.addEventListener ('click', () => {
    i++;
    if (i >= 0) {
        displayNum.style.fontSize = "60px";
        displayNum.style.color = "#aed6ae";
        displayNum.style.fontWeight = "400";
    }
    displayNum.innerHTML = i;
});