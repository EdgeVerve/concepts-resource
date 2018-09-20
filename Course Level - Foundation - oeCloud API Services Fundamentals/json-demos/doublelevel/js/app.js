// JavaScript Document
var person = '{ "name":"kevin" ,"degree":"BE" , "age" : "35" }';
var personObject = JSON.parse(person);

console.log(personObject);

document.getElementById('single').innerHTML = "Name: " + personObject.name + "</br>" + " Degree: "+ personObject.degree+ "</br>"  + "Age: "+personObject.age;

var personSecond = '{ "Mary": {"age":"25","degree":"BE"}, "Jack":{ "age":"32","degree":"MS"} }'
var personSecondObject = JSON.parse(personSecond);
console.log(personSecondObject);
document.getElementById('double').innerHTML = "Mary Details: "+ "</br>" + "Age: "+ 
                                              personSecondObject.Mary.age + "</br>" + 
                                              " Degree: "+ personSecondObject.Mary.degree + "</br></br>"+
                                              "Jack Details: "+ "</br>" + "Age: "+ 
                                              personSecondObject.Jack.age + "</br>" + 
                                              " Degree: "+ personSecondObject.Jack.degree;



