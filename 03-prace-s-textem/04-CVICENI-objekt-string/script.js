console.log('%c CVIČENÍ: Metody objektu String ', 'background:yellowgreen;color:white; font-weight:bold');

/*
Cvičení 1: Alexandr VELIKÝ
Nechte uživatele pomocí `prompt()` zadat jméno. Do konzole vypište:
- jméno napsané velkými písmeny
- jak je zadané jméno dlouhé
- třetí písmeno ve jméně
Pokud uživatel zadá `Alexandr`, program by měl vypsat `ALEXANDR`, `8` a `e`.
*/
//const jmeno =  prompt('Zadej své jméno.');
//console.log(jmeno.toUpperCase());
//console.log(jmeno.toLocaleUpperCase());
//console.log (jmeno.length);
//console.log(jmeno[2])


/*
Cvičení 2: Zvířecí říkanka
Mějte v kódu nadefinovaný textový řetězec s dětskou říkankou (viz níže).
Nechte uživatele pomocí `prompt()` zadat zvíře a do konzole vypište `true` nebo `false` podle toho, zda zvíře v říkance vystupuje nebo ne.
*/
const rikanka = `
	Žirafa je tuze dlouhá,
	do nebe jí hlava čouhá.
	Sedí liška pod dubem,
	má píšťalku a buben.
	Lední medvěd, krásně bílý,
	mívá často dlouhou chvíli.
`
let zvire = prompt('Zadej zvíře.')
console.log(rikanka.includes(zvire));

/*
🦊 Bonus 1: Pozor na to, že některá zvářata mohou být v říkance napsána s velkým písmenem na začátku, ale uživatel může stejné zvíře napsat s malým písmenem na začátku.
 Zajistěte, aby to program napsal správnou odpověď nezávisle na tom, jakými písmeny uživatel zvíře zadá.
Takže i při zadání `'žirafa'` nebo `'LišKA'` program správně vypíše `true`.
*/
console.log(rikanka.toLowerCase().includes(zvire.toLowerCase()));

/*
🦒 Bonus 2: Často se stane, že uživatel při zadávání do vstupního pole omylem napíše mezeru 
na začátek nebo konec textu. 
Zajistěte, aby program tyto mezery nejprve odstranil, 
než bude zjišťovat, zda se zadané zvíře v textu vyskytuje.
Takže i při zadání `' medvěd   '` program správně vypíše `true`.
*/
console.log(rikanka.trim().toLowerCase().includes(zvire.toLowerCase));


/*
Cvičení 3: Lžičky
Ve filmu Pelíšky udělali soudruzi z NDR zásadní chybu (https://www.youtube.com/watch?v=bu5P0SYnRHY).
Mějte proměnnou se slavnou hláškou z filmu a zjistěte, na kterém písmenu začíná ve větě slovo `soudruzi`.
Tip: Nezapomeňte, že v programování se indexy počítají od nuly, ale lidé říkají, že jde o první písmeno.
*/
const text = 'Mě by jenom zajímalo, kde udělali soudruzi z NDR chybu.';
console.log(text.indexOf('soudruzi'));
console.log(`Soudruzi začínají na ${indexOfSoudruzi + 1}. písmenu.`);



/*
Cvičení 4: Neber úplatky
U filmů ještě zůstaneme. Mějte proměnnou se slavnou (https://www.youtube.com/watch?v=DcSWIEEJ7Bc) z filmu Jáchyme, hoď ho do stroje.
Nahraďte všechny `úplatky` v textu za slovo `výplatu` a upravený text vypište do konzole.
*/
const hlaska = 'Neber úplatky, neber úplatky, nebo se z toho zblázníš.'
console.log(hlaska.replaceAll('úplatky', 'výplatu'));
;


/*
Cvičení 5: Žluťoučký kůň
Víte, že ve větě `Příliš žluťoučký kůň úpěl ďábelské ódy` se vyskytují 
všechna česká písmena s diakritikou? 
Mějte proměnnou s touto větou a pomocí metody `slice()` 
z ní do nové proměnné získejte slovo `kůň`. 
Do třetí proměnné pak získejte slovo začínající na třetím písmenu od konce.
*/
const cestina = 'Příliš žluťoučký kůň úpěl ďábelské ódy';
console.log (cestina.slice(17, 20));
const slovo = cestina.slice(-3);

console.log(kun);
console.log(slovo);



/*
Cvičení 6: Skrývání čísla
Nechte uživatele pomocí `prompt()` zadat telefonní číslo. 
Z bezpečnostních důvodů do konzole vypište číslo tak, 
že čitelné jsou pouze poslední tři číslice a 
zbytek předtím je nahrazený hvězdičkami. Neřešme vůbec, zda uživatel zadá číslo s mezerami nebo ne.

Pokud tedy uživatel zadá `603 123 456` do konzole se vypíše `********456`

Chyták: Pozor na to, že uživatel může číslo zadat 
s mezerami nebo bez mezer mezi trojčíslími, 
nebo s nebo bez mezinárodní předvolby `+420` 
na začátku. Nemůžeme se tedy spolehnout na to, 
že zadané číslo má vždy konkrétní počet znaků. 
Musíme vždy odseknout poslední tři znaky z původního čísla 
a doplnit je zepředu hvězdičkami do původní délky zadaného řetězce.
Metoda padStart - musí být nad textovým řetězcem - na začátku to chci vyplnit nějakým znakem 
aby to celé bylo nějak dlouhé.
*/

//
cislo = prompt('Zadej telefonní číslo.');
const skryte_cislo = cislo.slice(-3).padStart(cislo.length, '*'); //řetězení metod
//nejprve vyhodnoti proměnnou cislo , je to jakoby tam bylo '736 675 615' a pak z ní vezme poslední tři znaky na které aplikuje padStart
console.log(cislo);
console.log(skryte_cislo);

// postupné řešení

let cislo = '736 675 615'
const delka = cislo.length;
const posledni = cislo.slice(-3)
const vysledek = posledni.padStart(delka, '*')
console.log(vysledek)







