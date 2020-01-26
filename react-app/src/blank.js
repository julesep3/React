/*
let name = 'Julian';
console.log("Hello " + name);
let firstName = "Julian";
let lastName = "Shen";

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Primitives / Value Types
let name = 'John'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

// Objects
let person = {
	name: "Ben",
	age: 30
};
// Dot Notation
person.name = "Fred";
// Bracket Notation
let selection = 'name';
person[selection] = "Jerry";
console.log(person);

// Arrays
let selectedColors = ['red', 'blue', 'gray'];
// array length and object type are dynamic
selectedColors[3] = 2930;
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length);
*/
// Functions
function greet(name) {
	console.log("Hello " + name);
}
const name = "Julian"
greet(name);

function square(number) {
	return number * number;
}
let number = square(5);
console.log(number);