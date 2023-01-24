// A for loop is usually used when the number of iterations is known. For example



// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1 ; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

const arr = [12,13,47,45,78];
for(i = 0;i<=arr.length;i++){
    console.log(arr[i])
};

// program to display numbers from 1 to 5
const k = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= k; i++) {
    console.log(i);     // printing the value of i
}


let sum = 0;
const j = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= j; i++) {
    sum += i;   // sum = sum + i
}

console.log('sum =', sum,'.');

// for loops in arrays

let fruits = ["mango","apple","grapes","oranges","banana"];
console.log(fruits[0]);
console.log(fruits[fruits.length-3]);
for(let i=0; i < fruits.length-1; i++){
    console.log(fruits[i].toUpperCase());
}

//  form a new arrays using above array

let veg = ['onion','patato','kobi','gajar'];

let veg2 = [];
for(let i=0; i < veg.length; i++){
    veg2.push(veg[i].toUpperCase());
}
console.log(veg2);
