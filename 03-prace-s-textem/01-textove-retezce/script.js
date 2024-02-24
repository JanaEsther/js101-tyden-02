console.log('%c Textové řetězce a template literal ', 'background:black;color:yellow;');

// typy uvozovek
const text1 = "dvojité uvozovky";
const text2 = 'jednoduché uvozovky neboli apostrofy';
const text3 = `zpětné uvozovky neboli backticky`;



// Text v "uvozovkách" uvnitř uvozovek.
// toto nejde - JS by nevěděl, kde text začíná a končí
// const spatne = "Alena řekla "Učím se JavaScript" a odešla.";

// použijeme druhý typ uvozovek na ohraničení řetězce
const dobre1 = 'Alena řekla "Učím se JavaScript" a odešla.';
const dobre2 = "Alena řekla 'Učím se JavaScript' a odešla.";

// použijeme zpětné lomítko pro spefiální znaky
const dobre3 = "Alena řekla \"Učím se JavaScript\" a odešla.";



// Spojování textových řetězců
const jmeno = 'Jana';
const vek = 50;

console.log('Jmenuji se ' + jmeno + ' a je mi ' + vek + ' let.');

const jmeno1 = 'Alena';
const vek1 = 27;

console.log('Jmenuji se ' + jmeno1 + ' a je mi ' + vek1 + ' let.');


// Template literal / template string
const viceRadku = `
  Text klidně může mít více řádků
  a může samozřejmě obsahovat
  "ostatní" typy 'uvozovek',
  což je cool.`;

const jedenRadek = `Ale samozřejmě funguje i na jednom řádku.`;

// interpolace proměnných a výrazů pomocí ${} a ` pravý Alt + ý
console.log(`Jmenuji se ${jmeno} a je mi ${vek} let.`);
console.log(`Jmenuji je ${jmeno1} a je mi ${vek1} let.`);
console.log(`Výsledek výpočtu je ${ Math.round(76 / 13.5) }.`);
console.log(`Výsledek výpočtu je ${ Math.ceil(76 / 13.5) }.`);
console.log(`Výsledek výpočtu je ${ Math.floor(76 / 13.5) }.`);


// Délka textového řetězce
// string.length
const prijmeni = 'Držgrešle';
console.log(prijmeni.length);

const jmeno_a = 'Alexandra';
console.log(jmeno_a.length)




// Přístup k jednotlivým znakům pomocí indexu
// string[index]
console.log( prijmeni[2]);
console.log(jmeno_a[5]);


