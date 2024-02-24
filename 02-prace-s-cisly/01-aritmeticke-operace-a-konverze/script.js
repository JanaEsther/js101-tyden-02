console.log('%c Aritmetické operace a konverze hodnot ', 'background:black;color:yellow;');

// Aritmetické operátory
// + pro sčítání
// - pro odečítání
// * pro násobení
// / pro dělení
// % pro zbytek po celočíselném dělení
// ** pro mocninu
console.log( '5 + 3 je',  5 + 3  );
console.log( '7 - 4 je',  7 - 4  );
console.log( '3 * 2 je',  3 * 2  );
console.log( '10 / 4 je', 10 / 4 );
console.log( '8 % 3 je',  8 % 3  );
console.log( '2 ** 3 je', 2 ** 3 );


// Přednost operátorů - jako v matematice
// Můžeme ovlivnit použitím závorek
console.log( '4 + 3 * 2 je',   4 + 3 * 2   );
console.log( '(4 + 3) * 2 je', (4 + 3) * 2 );


// Konverze textu na čísla
// celá čísla pomocí parseInt()
console.log( parseInt('123') );       // výsledek: 123
console.log(parseInt('1235647'));
console.log( parseInt('123abc') );    // výsledek: 123
console.log( parseInt('abc123') );    // výsledek: NaN
console.log( parseInt('1.23') );      // výsledek: 1
console.log( parseInt('abc') );       // výsledek: NaN

// desetinná čísla pomocí parseFloat()
console.log( parseFloat('123') );     // výsledek: 123
console.log( parseFloat('12.3abc') ); // výsledek: 12.3
console.log( parseFloat('abc12.3') ); // výsledek: NaN
console.log( parseFloat('1.23') );    // výsledek: 1.23
console.log( parseFloat('1,23') );    // výsledek: 1
console.log( parseFloat('abc') );     // výsledek: NaN

// čísla pomocí Number()
console.log( Number('123') );         // výsledek: 123
console.log( Number('1.23') );        // výsledek: 1.23
console.log( Number('1,23') );        // výsledek: NaN
console.log( Number('123abc') );      // výsledek: NaN
console.log( Number('abc123') );      // výsledek: NaN
console.log( Number('abc') );         // výsledek: NaN


