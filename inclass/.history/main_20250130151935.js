console.log('Hello ! This is my 🍉');

// let catName= 'kitten';

// if (catName === 'apple') {
//   window.alert('yeah! Hello kitten ? ');
// } else {
//   window.alert ("Who are you?");
// }

let $title = document.querySelector('h1'); 
// querySelectorAll - shows array  
// querySelecot
// if var has $ <- this mean, it just reference document. 
console.log($title);

$title.append(',Hi this is a new thing');

let $headerElement = document.querySelectorAll('h1'); 
$headerElement[0].append(',Hi this is a new thing');