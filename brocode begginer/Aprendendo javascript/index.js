
//só aparece no inspecionar/console
console.log('hello');
console.log('i like pizza');

//alertar(fiz de comentário para não atrapalhar)
//window .alert('this is an alert');
//window.alert('I like pizza');

//this is a comment(it doesn't appear on the console)


//variable = a container that stores a value
//behaves as if it were the value it contains

//1. declaration let x;
//2. assignment x=100;

let x = 123;
console.log(x);

let age = 25;
console.log(age);

let price = 10.99;
let gpa = 2.1;
console.log(`you are ${age} years old`);
console.log(`the price is $${price}`);
console.log(`Your gpa is ${gpa}`);

let firstName = "Bro";
let favoriteFood = "pizza"
let email = "Bro@gmail.com"
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`you like ${favoriteFood}`)
console.log(`your email is ${email}`)

//Booleans
let online = true;

console.log(typeof online);
console.log(`Bro is online: ${online}`);

let forSale = false;
console.log(`is this car for sale: ${forSale}`);

//variáveis fora do devmode
let fullName = 'Bro Code'
let student = false;
document.getElementById("p1").textContent = `your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;


//arithmetic operators = operands (values, variables, etc)
//operators (+ - * /)
//ex. 11 = x + 5;
let students = 30;

//students = students + 1; (soma 1)
//students = students - 1; (diminui 1)
//students = students * 2; (multiplica por 2)
//students = students / 2; (divide por 2)
//students = students ** 3; (elevado à 3)
//students = students % 3; (substitui o valor de students pelo resto depois de dividido por 3)
// let extraStudents = students % 3 (recomendado criar outro módulo)
console.log(students);
//console.log(extraStudents);