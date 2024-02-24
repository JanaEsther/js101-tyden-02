console.log('%c Objekt Math ', 'background:black;color:yellow;');

// Math.PI - konstanta, číslo π
const polomer = 2;
const obvodKruhu = 2 * Math.PI * polomer;
console.log(obvodKruhu);



// Math.abs() - absolutní hodnota, vždy kladná hodnota
console.log( Math.abs(5)  );  // výsledek: 5
console.log(Math.abs(150));
console.log( Math.abs(-5) );  // výsledek: 5
console.log(Math.abs(-14));


// Math.min() a Math.max()
// nejmenší a největší hodnota
const nejmensi = Math.min(7, 13, -6,-12,  37, 1054, 8, 2584,-251);  // výsledek: -251
const nejvetsi = Math.max(7, 13, -6, 37, 1054,120000, 8);  // výsledek: 12000
console.log(nejmensi);
console.log(nejvetsi);


// Math.sqrt() - odmocnina
console.log( Math.sqrt(4) );  // výsledek: 2
console.log(Math.sqrt(25));
console.log (5**2);
console.log (4**2);
console.log(Math.cbrt(8)); // třetí odmocnina


// Math.round() - matematické zaokrouhlení - hodnota do 0.4 dolu od celých 0.5 nahoru, vždy k bližšímu celému čísluí
console.log(Math.round (2.49)),
console.log( Math.round(1.3) );     // výsledek: 1
console.log( Math.round(1.5) );     // výsledek: 2
console.log( Math.round(1.7) );     // výsledek: 2
// záporná čísla
console.log( Math.round(-1.3) );    // výsledek: -1
console.log( Math.round(-1.5) );    // výsledek: -1 !!!
console.log( Math.round(-1.7) );    // výsledek: -2


// Math.floor() - zaokrouhlení dolů 
console.log( Math.floor(1.05) );     // výsledek: 1
console.log( Math.floor(1.95) );     // výsledek: 1
// záporná čísla
console.log( Math.floor(-1.05) );    // výsledek: -2
console.log( Math.floor(-1.95) );    // výsledek: -2


// Math.ceil() - zaokrouhlení nahoru
console.log( Math.ceil(1.05) );     // výsledek: 2
console.log( Math.ceil(1.95) );     // výsledek: 2
// záporná čísla
console.log( Math.ceil(-1.05) );    // výsledek: -1
console.log( Math.ceil(-1.95) );    // výsledek: -1


// Math.trunc() - odříznutí desetinné části
console.log( Math.trunc(1.05) );     // výsledek: 1
console.log( Math.trunc(1.95) );     // výsledek: 1
// záporná čísla
console.log( Math.trunc(-1.05) );    // výsledek: -1
console.log( Math.trunc(-1.95) );    // výsledek: -1
console.log(Math.trunc(2.41)); //výsledek :2;



// Náhodná čísla
// Math.random()//od 0 az 0.9999999, vždy menší než 1
console.log( Math.random() );
const nahodne =  Math.random() ;
console.log(nahodne * 10);
console.log(Math.ceil(nahodne * 10));// 0 - 10
console.log(Math.floor (nahodne * 10));// 0- 9
console.log(Math.floor (nahodne * 10) +1 );// 1- 10
console.log(Math.trunc(nahodne * 10));


// náhodné číslo mezi 0 a 9.999999999999...
console.log( Math.random() * 10 );
console.log( Math.random() * 10 );

// náhodné číslo mezi 50 a 60
console.log( Math.round(50 + Math.random() * 10) );

// náhodné číslo mezi 50 a 59
console.log( Math.floor(50 + Math.random() * 10) );

// hod kostkou od 1 do 6
const hod1 = Math.floor(1 + Math.random() * 6);
console.log(hod1);
// hod kostkou od 1 do 12
const hod2 = Math.floor(1 + Math.random() * 12);
console.log(hod2);


