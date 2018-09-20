// JavaScript Document
var person = '{"name":"john", "age":"60" }';

var personObject = JSON.parse(person);

console.log(personObject);


var personString = JSON.stringify(personObject);

console.log(personString);

var personObject = JSON.parse(personString);
console.log(personObject);

