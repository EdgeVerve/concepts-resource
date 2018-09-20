// JavaScript Document
var person = '{ "name":"kevin" ,"degree":"BE" , "age" : "35" }';
var personObject = JSON.parse(person);

console.log(personObject);

document.getElementById('single').innerHTML = "Name: " + personObject.name + "</br>" + " Degree: "+ personObject.degree+ "</br>"  + "Age: "+personObject.age;






