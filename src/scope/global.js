// variables

var a; // declaration
var b = 1; // declaration and assignment
b = 2; // reassignment
var a = 1; // redeclaration

// Global scope
var fruit = 'Apple'; // global scope

function bestFruit() {
  console.log(fruit); // Apple
}

bestFruit();


function countries() {
    country = 'USA'; // assignment, implicit global scope
    console.log(country); // USA
}

countries();
console.log(country); // USA