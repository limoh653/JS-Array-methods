const numbers = [2,3,4,5,6,7];

const evens = (number) =>  number % 2 === 0;

const newNumbers = numbers.filter(evens)

console.log(newNumbers)
// output 2,4,6