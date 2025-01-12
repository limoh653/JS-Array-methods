const numbers = [2,3,4,5,6,7];

const greaterThan1 = (number) =>  number > 4;

const isGreaterThan1 = numbers.every(greaterThan1)

console.log(isGreaterThan1)
// false