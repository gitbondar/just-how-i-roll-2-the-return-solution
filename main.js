document.querySelector('.d6-roll').onclick = rollD6;
document.querySelector('.double-d6-roll-1').onclick = rollDoubleD6;
document.querySelector('.double-d6-roll-2').onclick = rollDoubleD6;
document.querySelector('.d12-roll').onclick = rollD12;
document.querySelector('.d20-roll').onclick = rollD20;
document.querySelector('.d8-roll').onclick = rollD8;

function rollD6() {
    const roll = getRoll(6);
   
    addImg(roll, '.d6-roll', 'd6');
}

function rollD12() {
    const roll = getRoll(12);
   
    addImg(roll, '.d12-roll', 'numbers');
}

function rollD20() {
    const roll = getRoll(20);
   
    addImg(roll, '.d20-roll', 'numbers');
}

function rollDoubleD6() {
    const roll1 = getRoll(6);
    const roll2 = getRoll(6);
   
    addImg(roll1, '.double-d6-roll-1', 'd6');
    addImg(roll2, '.double-d6-roll-2', 'd6');
}

function rollD8() {
    const roll = getRoll(8);

    addImg(roll, '.d8-roll', 'numbers');
}

function getRoll(max) {
    const randomFloatUnderOne = Math.random();
    const randomFloat = randomFloatUnderOne * max;
    const roll = Math.ceil(randomFloat);

    return roll;
}

function addImg(roll, selector, pictureType) {
    const newSrc = `./images/${pictureType}/${roll}.png`;
    const rollImage = document.querySelector(selector);
    rollImage.src = newSrc;
}