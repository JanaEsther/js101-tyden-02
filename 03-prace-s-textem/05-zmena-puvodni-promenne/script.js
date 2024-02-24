console.log('%c Změna původní proměnné ', 'background:black;color:yellow;');

/*
Pozor na to, že toLowerCase() a další podobné metody, nemění původní proměnnou. Metoda vždy vrátí nový textový řetězec, ale obsah původního zůstane stále stejný.
*/

const text1 = 'sMíŠenÝ TExT';
text1.toLowerCase();
console.log(text1);
console.log(text1.toLowerCase())

// výsledek je stále: sMíŠenÝ TExT



const text2 = 'Skákal pes přes oves';
text2.replace('pes', 'kočka');
console.log(text2);
// výsledek je stále: Skákal pes přes oves
console.log(text2.replace('pes', 'kočka'));
console.log(text2.replace('Skákal pes', 'Skákala kočka'));                 


// pokud chceme proměnnou změnit,
// musíme do ní novou hodnotu přiřadit
let text = 'sMíŠenÝ TExT';
text = text.toLowerCase();
console.log(text);
// výsledek: smíšený text



// Existují metody, které původní proměnnou mutují,
// ale ne u textových řetězců
// např. u pole
const jmena = ['Daniela', 'Zuzana', 'Alena'];
jmena.sort();
console.log(jmena);
console.log(jmena[2]);
