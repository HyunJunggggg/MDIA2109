console.log('Hello ! This is my 🍉');

// let catName= 'kitten';

// if (catName === 'apple') {
//   window.alert('yeah! Hello kitten ? ');
// } else {
//   window.alert ("Who are you?");
// }


// document.querySelector('html').addEventListener('click',() =>{
//   alert("Ouch !!!🐱");
// });

let $headerElement = document.querySelector('h1'); 
let $subheader = document.createElement('h2');
// querySelecor -> target one thing 
// if var has $ <- this mean, it just reference document. 

$subheader.append('Hi this is a new thing');
console.log($subheader);

// querySelectorAll - shows array , so it should target 

$headerElement.append($subheader);

let $button = document.querySelector('js__button');
let $heading = document.querySelector('js__header--title');

function setUserName() {
  const userName = prompt("Please enter your name");

  if(!userName) {
    setUserName(); {
      else
    }
  }
  localStorage.setItem("name",userName);

  $heading.textContent = `Welcome to ${userName}'s page`;
}

$button.addEventListener("click", () => {
  setUserName();
})