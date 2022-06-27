var firstName; // undefined
firstName = 'John';
console.log(firstName); // John

var lastName = 'Doe';
lastName = 'Smith';
console.log(lastName); // Smith

var secondName = 'Jane';
var secondName = 'Doe';
console.log(secondName); // Doe

// Let
let firstName2 = 'John';
firstName2 = 'Jane';

// let firstName2 = 'John'; // Cannot redeclare block-scoped variable

const animal = 'dog';
// animal = 'cat'; // Cannot reassign constant variable
console.log(animal);