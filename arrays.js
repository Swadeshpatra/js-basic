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


