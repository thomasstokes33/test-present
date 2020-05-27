'user strict'




let today=new Date()
console.log(today);

let formatDate= today.toDateString()
let selectElement=document.getElementById('date')
selectElement.innerHTML=formatDate

console.log("Here\'s a hidden message");
