console.log('%c Podmínky ', 'background:black;color:yellow;');

/*
Základní syntaxe podmínky:

if (podmínka) {
  tento kód se provede, je-li podmínka splněna
}
*/

let vek = 16;

if (vek >= 18) {
  console.log('Můžeš do sekce pro dospělé');
}


// větev else se provede, pokud podmínka neplatí
if (vek >= 18) {
  console.log('Můžeš do sekce pro dospělé');
} else {
  console.log('Nemáš přístup, ještě nejsi dospělý');
}


// podmínky s více větvemi else if
vek = prompt('Zadej věk osoby');
let kategorie = '';

if (vek >= 65) {
  kategorie = 'senior';
} else if (vek >= 18) {
  kategorie = 'dospělý';
} else if (vek >= 13) {
  kategorie = 'teenager';
} else if (vek >= 3) {
  kategorie = 'dítě';
} else {
  kategorie = 'mimino';
}

console.log(kategorie);



// vnořené podmínky
věk = 50;
if (vek >= 65) {
  console.log('Jsi v důchodu a už máš pohodu');
} else {
  const letDoDuchodu = 65 - vek;
  if (letDoDuchodu > 30) {
    console.log('Ještě máš čas, na důchod nemysli');
  } else if (letDoDuchodu > 15) {
    console.log('Raději už začni na důchod šetřit');
  } else {
    console.log('Čas na paniku! Důchod je za rohem.');
  }
}
