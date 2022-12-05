let i = 0;
while(i <=4){
    console.log(i);
    i++;
}
console.log('helo');

// program to display numbers
let e = 1;
const n = 5;

// do...while loop from 1 to 5
do {
    console.log(e);
    e++;
} while(e <= n);

// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);