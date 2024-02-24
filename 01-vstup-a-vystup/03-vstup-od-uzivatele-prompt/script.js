console.log('%c Vstup od uživatele pomocí prompt ', 'background:black;color:yellow;');

// prompt() zobrazí vyskakovací okno,
// kam jde zadat hodnota
const jmeno = prompt('What is your name?');
const age = prompt('How old are you?');
console.log('You are', age,'years old');


// pole pro zadávání může mít
// předvyplněnou výchozí hodnotu
const jmeno2 = prompt("What is your name?", "Harry Potter");


// pozor při zadávání čísla, hodnota se vrátí jako text
// potřebujeme převézt na číslo
const vek = Number(prompt('How old are you?'));

let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}
alert()
alert(message)
window.alert("Hello world!");
alert("Hello world!");



// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"

const aNumber = Number(window.prompt("Type a number", ""));
