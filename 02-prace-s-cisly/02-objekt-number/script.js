console.log('%c Metody objektu Number ', 'background:black;color:yellow;');

// nastavení hodnoty
const cislo = 10527.34;


// toString()
// převod čísla na text
const text = cislo.toString();
const text2 = String(cislo);
console.log( text,  typeof text  );
console.log( text2, typeof text2 );



// toLocaleString()
// převod čísla na text dle lokálních zvyklostí
console.log( cislo.toLocaleString('ar-eg') ); // výsledek: ١٠٬٥٢٧٫٣٤

console.log( cislo.toLocaleString('en') ); // angličtina: 10,527.34
console.log( cislo.toLocaleString('de') ); // nemčina:    10.527,34
console.log( cislo.toLocaleString('cs') ); // čeština:    10 527,34
console.log( cislo.toLocaleString('fr') );
console.log( cislo.toLocaleString('he') );
console.log( cislo.toLocaleString('ar-eg') );

console.log( cislo.toLocaleString('en') );    // obecně: angličtina
console.log( cislo.toLocaleString('en-us') ); // americká angličtina
console.log( cislo.toLocaleString('en-gb') ); // britská angličtina
console.log( cislo.toLocaleString('en-ca') ); // kanadská angličtina


// toFixed()
// zaokrouhlené číslo po počet des. míst převedené na text
const jineCislo = 13.4176;
console.log( jineCislo.toFixed(1) );  // výsledek: 13.4
console.log( jineCislo.toFixed(2) );  // výsledek: 13.42
console.log( jineCislo.toFixed(3) );  // výsledek: 13.418
console.log( jineCislo.toFixed(4) );  // výsledek: 13.418



// isNaN()
// test na hodnotu NaN (not a number)
const cislo1 = 3 * 'abc';  // výsledek: NaN
const cislo2 = Number('papoušek');  // výsledek: NaN

// toto nefunguje
//výsledek je false, i když cislo1 je NaN
console.log( cislo1 === NaN );

// musíme takto
// výsledek je správně true
console.log( Number.isNaN(cislo1) );
console.log( Number.isNaN(cislo2) );
