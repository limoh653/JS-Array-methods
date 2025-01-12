const numbers = [2,3,4,5,6,7];

const greaterThan1 = (number) =>  number > 1;

const isGreaterThan1 = numbers.some(greaterThan1)

console.log(isGreaterThan1)
// true