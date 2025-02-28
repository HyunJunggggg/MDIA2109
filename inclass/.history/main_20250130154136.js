console.log('Hello ! This is my 🍉');

// let catName= 'kitten';

// if (catName === 'apple') {
//   window.alert('yeah! Hello kitten ? ');
// } else {
//   window.alert ("Who are you?");
// }

let $headerElement = document.querySelectorAll('h1'); 
let $subheader = document.createElement('h2');
// querySelecor -> target one thing 
// if var has $ <- this mean, it just reference document. 

$subheader.append(',Hi this is a new thing');
console.log($subheader);

$headerElement[0].append(',Hi this is a new thing');
// querySelectorAll - shows array , so it should target 

$headerElement[0].append($subheader);