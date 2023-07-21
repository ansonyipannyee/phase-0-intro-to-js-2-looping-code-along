// Code your solutions in this file
let names = [];

function writeCards(names, event = "surprise") {
    let i = 0;
    let testArr = [];
    while (i < names.length) {
        let nameString = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        testArr.push(nameString);
        i++;
    }
    return testArr;
}
console.log(writeCards([`Guadalupe`, `Ollie`, `Aki`]));

function countDown (number) {
    while (number >= 0) {
        console.log(number--);
    }
}
console.log(countDown(10))