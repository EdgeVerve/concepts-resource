// JavaScript Document

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);    

    for (i=0;i<data.Persons.length;i++){
        console.log(data.Persons[i].firstName);
    }

    var dataString = "";
    for (i=0;i<data.Persons.length;i++){
        var counter = i + 1;
        dataString += "Person "+counter+" is:";
        dataString += data.Persons[i].firstName+" ";
        dataString += "...and the Degrees are :" + data.degrees[i].UG + " " + data.degrees[i].PG;
        dataString += "</br>";
    }
    document.getElementById('pdata').innerHTML = dataString;

    }
}

xhr.send();
