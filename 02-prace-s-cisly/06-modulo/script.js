console.log('%c Modulo - zbytek po dělení ', 'background:black;color:yellow;');

// operátor %
// Říká se mu modulo, zbytek po dělení
console.log( 7 % 3 );
console.log( 23 % 5 );


// Test na sudé / liché číslo
console.log( 6 % 2 );  // výsledek: 0 → číslo je sudé
console.log( 7 % 2 );  // výsledek: 1 → číslo je liché


// Konverze vteřin na hodiny, minuty, vteřiny
const celkemVterin = 8374;
const hodiny1 = Math.floor(celkemVterin / 3600);
console.log(hodiny1);


const minuty2 = Math.floor((celkemVterin % 3600)/60);

const vteriny2 = celkemVterin % 60;

console.log(hodiny1, minuty2, vteriny2);

// spočítáme, kolik hodin se vejde do celkového počtu vteřin
// chceme celé hodiny, takže výsledek dělení zaokrouhlíme dolů
const hodiny = Math.floor(celkemVterin / 3600);
// zbytek po vydělení hodinami představuje zbylý celkový počet vteřin
// který vydělíme 60 a po zaokrouhlení dolů dostaneme celé minuty
const minuty = Math.floor((celkemVterin % 3600) / 60);
// vteřiny získáme jako zbytek po dělení celkových vteřin číslem 60
// tím získáme vteřiny, které se nevešly do žádné celé minuty
const vteriny = celkemVterin % 60;

console.log('%d hodin %d minut %d vteřin', hodiny, minuty, vteriny);
