const numberArray = [1,2,3,4,5,6];
// find length of an array
// const arrlenght = numberArray.length;
// console.log(arrlenght)

numberArray[6] = 10;
numberArray[7] = 12;

numberArray[8] = 13
console.log(numberArray);
console.log(numberArray.length);
// pu8sh(it add elements to the extreme right of the array)
numberArray.push(14);
console.log(numberArray);
// unshift (it add to the extreme left of the array)
numberArray.unshift(0);
console.log(numberArray);
// pop(it delet from the extrem right of an array
numberArray.pop();
console.log(numberArray);
// shift  (it delets from the extreme left)
numberArray.shift();
console.log(numberArray);
 
// how to find the last elements of an Array

const arrnum = [2,3,6,5,7,9,8];
const arrlength = arrnum.length;
const lastelement = arrnum[arrlength - 1];
console.log(lastelement);

//  when there is no element there inside an arrray and we ask that index value then it will return undefined

// concatenation

const arraynum1 = [1,2,3,4,5,6];
const arraynum2 = ["raju","ranu","sanu"];
console.log(arraynum2.concat(arraynum1));
 
// indexOf

const array1 = [1,2,3,"raju"];
console.log(array1.indexOf("raju"));
// when we fetch index value of something  which is not there inside the class then it will return '-1' always

// incase of fetching a  value which is repeated  then arrray will return the first index of that value

// Sorting
let action = ['sleep','eat','dance','run'];
console.log(action.sort());
let age = [25,23,15,89,65,34];
console.log(age.sort());
// Slice

const arrb = ["friendship",25,36];
console.log(arrb.length);
let c = arrb.slice(0,2);
console.log(c);

let arry = ['h','e'];
arry.name = 'raja';
console.log(arry);
console.log(arry.name);
console.log(arry['name']);
console.log(arry.name.length);

// multidimensional array

let x = [
    ['Jack', 24],
    ['Sara', 23],
    ['Peter', 24]
    ];
    
    // access the first item
    console.log(x[0]); // ["Jack", 24]
    
    // access the first item of the first inner array
    console.log(x[0][0]); // Jack
    
    // access the second item of the third inner array
    console.log(x[2][1]); // 24

    // Adding Element to the Outer Array

    let studentdata = [['jack',24],['raja',29]];
    studentdata.push(['stio',34];
    console.log(studentdata);    


    
