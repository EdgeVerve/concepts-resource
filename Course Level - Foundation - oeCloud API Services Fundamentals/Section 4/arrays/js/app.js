// JavaScript Document

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        
        //Array operations

        // print all elements individually

        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);

        // print the firstName of the 3rd element

        console.log(data[2].firstName);


    }
}

xhr.send();
