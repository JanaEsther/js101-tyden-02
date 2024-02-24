console.log('%c Výstup do konzole v prohlížeči ', 'background:black;color:yellow;');

// Příprava proměnných
const jmeno = 'Jana';
const prijmeni = 'Obendraufová';
const vek = 50;

// Console.log může mít více parametrů
// Do konzole se vypíšou za sebou a jsou odděleny mezerou
console.log( jmeno, prijmeni);
console.log('Jmenuji se', jmeno, prijmeni, 'a je mi', vek, 'let.');
console.log('Text o psech', 'a kockach');
console.log(jmeno, prijmeni);
console.log('Jmenuji se', jmeno, prijmeni, 'a je mi', vek,'let' );

// Substituční řetězce
// Do textu lze vložit speciální symboly,
// místo kterých se na výstupu doplní hodnoty
// následujicích parametrů.
// Symboly:
// - %s vypíše hodnotu jako textový řetězec
// - %d nebo %i značí celé číslo
// - %f představuje desetinné číslo
// - %o je pro objekty, které pak jdou rozkliknout
//   a dále zkoumat jejich vlastnosti
console.log('Moje jméno je %s %s a je mi %d let.', jmeno, prijmeni, vek);


// Stylování console.logu
// Speciální symbol %c, za který jde dosadit CSS styl
console.log('%c Žlutý text na černém pozadí', 'color:yellow;background:black;');
console.log('Bez stylu, %cČerveně a %cModře', 'color: red;', 'color: blue;');
console.log('%c Zlatý text na červeném pozadí.', 'color: gold; background:red; font-size:100px; font-weight:bold;');
console.log('%c Stříbrný text na fialovém pozadí.', 'color: silver; background:violet; font-size:100px; font-weight:bold;');

// Speciální typy console.logu
// console.error, .info a .warn
console.error('This is an error.');
console.info('This is an information for all visitors of PesFest.');
console.warn('This is a warning to you.');


// console.table - zobrazování dat v tabulce
// pro pole
const jmena = ['Jana', 'Eva', 'Alena'];
console.log(jmena);
console.table(jmena);

// pro objekty
const osoba = {
	jmeno: 'Larissa Alexandrovna',
	prijmeni: 'Kral',
	vek: 39,
	maRidicak: false
};
console.log(osoba);
console.table(osoba);

// pro pole objektů
const zamestnanci = [
	{ jmeno: 'Jana', prijmeni: 'Novotná', vek: 23},
	{ jmeno: 'Alena', prijmeni: 'Dobrovská', vek: 31},
	{ jmeno: 'Eva', prijmeni: 'Vyskočilová', vek: 27},
];
console.log(zamestnanci);
console.table(zamestnanci);

const doggies = [
	{name : 'Maggie',country: 'Switzerland', age: 6 },
	{name: 'Lilly Bug', country: 'USA', age: 9 },
	{name: 'Ella', country: 'Czech republic', age: 5},
	{name: 'Aska', country: 'Hungary', age:4 },
	{name: 'George', country:'Czech republic', age: 1},
	{name: 'Abigail', country:'Czech republic', age: 7}
];

console.table(doggies);

