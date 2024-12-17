// // // variable declar and value assign
// // // data type
// // // string data typer
// // const userName = "Sithi"; 
// // const motherName = "Shila";
// // const dateOfBirth = "7January"
// // let userVillage = "Shankarpasa";
// // let userEmail = "shrabontisikder508@gmail.com";
// // let season = "Winter";
// // let time = "2pm";

// // // number data type
// // const sscPassingYear = 2015 ;
// // const userNid = 8167178225 ;
// // let temperature = 28 ;

// // let firstNumber = 300;
// // let secondNumber = 200;
// // let thirdNumber = 100;
// // let fourthNumber = 5;
// // let sum = firstNumber + secondNumber;
// // console.log(sum);

// // let substraction = firstNumber - secondNumber;
// // console.log(substraction);

// // let multiplication = firstNumber * fourthNumber;
// // console.log(multiplication);

// // let division = secondNumber / fourthNumber;
// // console.log(division);

// //  let product1Price = 3000;
// //  let product2Price = 4000;
// //  let product3Price = 5000;

// // let totalProductPrice = product1Price + product2Price + product3Price;
// // const discountTaka = totalProductPrice / 10;
// // console.log(discountTaka);


// let age = [ 24, 21, 18, 19, 20];
// console.log(age);

// normal function
// function sum(a, b){
//     let total = a + b;
//     return total;
// };
// let a = 5;
// let b = 7;
// let total = sum(a, b);

// function sum(a, b){

//     return a * b;
// };
// let a = 5;
// let b = 7;
// let total = sum(a, b);
// console.log(total);


// function gold(ana){
//     return 64 + ' ' + 'ana' + ' ' + '=' + ' ' + ana/16 + ' ' + 'vori'; 
// }
// let output = gold(64);
// console.log(output);


// function gold(ana){
//     let vori = ana/16;
//     return `64 ana = ${vori} vori`;
// }
// let output = gold(64);
// console.log(output);

// 

// anonymous function
// let sum = function(num1, num2){
//     return num1 + num2;
// }
// console.log(sum(10, 20));

// arrow function
// let sum = (num1, num2) => num1 + num2;
// console.log(sum(10, 20));

// let sum = (num1, num2) => {
//      let total = num1 + num2;
//      return total * total;
// };    
// console.log(sum(10, 20));


// higher order function
// function sum (num1, num2, add){
//      return add (num1, num2)
// };
// let add = (number1, number2) => number1 + number2;
// console.log(sum(30, 20, add))

// IFFE
(function (name){
     console.log(name)
})("alif")
