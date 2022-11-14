// And operator

let firstname = 'raja';
let age = 19;
// if (firstname[0] === "r") {
//     console.log('you are king')
// }


//  if(age > 33) {
//     console.log('you are adult')
//  }
if(firstname[0] === "r" && age > 20){
    console.log( "you are king and adult")
}else{
    console.log("you are a child");
}

// OR operator

let lastname = 'raja';
let cage = 33;

// if (firstname[0] === "r") {
//     console.log('you are king')
// }


//  if(age > 33) {
//     console.log('you are adult')
//  }

if(lastname[0] === "r" || cage > 20){
    console.log( "you are king and adult")
}else{
    console.log("you are a child");
}