// JavaScript Document

var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json' , true);
xhr.responseType='text';



xhr.onload = function(){
    if(xhr.status===200){
    var data = JSON.parse(xhr.responseText);
    console.log(data);  
    }
}

xhr.send();