console.log('%c CVIČENÍ: Logické operátory ', 'background:black;color:yellow;');

/*
Cvičení 1: Přístup do knihovny
Mějte dvě proměnné. V jedné bude uloženo, zda má uživatel členskou kartičku do knihovny. 
Ve druhé bude uloženo, zda je knihovna právě otevřená nebo ne. Obě proměnné mohou být typu boolean.

Má-li uživatel kartičku a knihovna je zrovna otevřená, napište do konzole “Přístup povolen”. 
Jinak napište “Přístup nepovolen”.

Bonus: Pod “Přístup nepovolen” napište i důvod, proč uživatel do knihovny nemůže. 
Není členem nebo knihovna není otevřená?
*/

let MaKarticku = true;
let OtevrenaKnihovna = true;
OtevrenaKnihovna = false;

if(MaKarticku && OtevrenaKnihovna) {
    console.log('Přístup povolen.');
} else  {
    console.log('Přístup nepovolen');
   
} 
//Bonus

if (!(MaKarticku)) {
    console.log('Přístup nepovolen, nejsi členem.')
}

if(!(OtevrenaKnihovna)) {
    console.log(('Pristup nepovolen, knihovna je zavřená.'));
}


/*
Cvičení 2: Ovoce 🍉
Moje oblíbené ovoce je jahoda, meloun nebo hruška. 
Nechte uživatele pomocí `prompt()` zadat, jaké ovoce mi nabízí (např. “borůvky”). 
Do konzole vypište, zda si dnes zamlsám nebo ne (tj. zjistěte,  zda zadané ovoce je jahoda, meloun nebo hruška).
*/

let OblibeneOvoce = prompt('Jaké nabízíš ovoce?');
if(OblibeneOvoce === 'jahoda'|| OblibeneOvoce === 'meloun' || OblibeneOvoce === 'hruška'){
    console.log('Dnes si zamlsám.');
} 


/*
Cvičení 3: Velikost trička
Nechte uživatele zadat velikost trička (zadá jednu z velikostí XS, S, M, L, XL). 
Do konzole vypište, zda je tričko skladem nebo ho musíme objednat. 
Bohužel nemáme skladem velikosti S a M.
*/

const velikostTrika = prompt('Zadej svou velikost - XS, S, M, L, XL.');
if (velikostTrika.toUpperCase() === 'XS'  || velikostTrika.toUpperCase() === 'L' || velikostTrika.toUpperCase() === 'XL'){
    console.log(`Velikost ${velikostTrika.toUpperCase()} bohužel nemáme skladem.`);
} else {
    console.log('Triko ihned posíláme.');
}



/*
Cvičení 4: Přestupný rok
Napište program, který zjistí, zda se jedná o přestupný rok. 
Přestupný rok je dělitelný číslem `4`. 
Roky dělitelné číslem `100` jsou ale přestupné jen tehdy, 
pokud jsou zároveň dělitelné číslem `400`.
*/

 const  rok = prompt('Zadej rok:\n');
 if (rok % 4 === 0 || rok % 100 === 0 && rok % 400 === 0) {
    console.log('Přestupný rok.');
 
 }else {
    console.log('Nepřestupný rok.');
 }


/*
Cvičení 5: Víkend
Nechte uživatele zadat den v týdnu (zadá např. “úterý”). 
Napište program, který do konzole vypíše, zda se jedná o pracovní den nebo víkend.
*/

const denVTydnu = prompt('Zadej den v týdnu:\n');
if(denVTydnu === 'sobota' ||denVTydnu === 'neděle'){
    console.log('Víkend.');
}else{
    console.log('Pracovní den.');
}


/*
Cvičení 6: Roční období
Nechte uživatele zadat číslo měsíce 1-12. 
Do konzole vypište, o jaké roční období se jedná (jaro, léto, podzim, zima).
*/

let mesic = Number(prompt('Zadej číslo měsíce\n'));

if (mesic >= 3 && mesic <= 5) {
	console.log('jaro');
} else if (mesic >= 6 && mesic <= 8) {
	console.log('léto');
} else if (mesic >= 9 && mesic <= 11) {
	console.log('podzim');
} else if (mesic === 12 || mesic === 1 || mesic === 2) {
	console.log('zima');
} else {
	console.log('nezadávej nesmysly, ale číslo měsíce od 1 do 12');
}


/*
Cvičení 7: Login
Nechte uživatele zadat přihlašovací jméno a heslo. 
Jde-li o uživatele `mysicka47` s heslem `90210`, 
napíšeme do konzole “Přihlášení proběhlo úspěšně”, jinak napíšeme “Špatné jméno nebo heslo”.
*/
let userName = 'mysicka47';
let password = 90210;

let userName1 = prompt('Zadej přihlašovací jméno:\n');
let password1 = prompt('Zadej heslo:\n');

if (userName == userName1 && password == password1){
    console.log('Přihlášení proběhlo úspěšně')
} else {
    console.log('Špatné jméno nebo heslo')
}


/*
Cvičení 8: Pobyt na měsíci 🌖
Představte si, že žijete na Měsíci. 
Teploty se tam běžně pohybují od -173°C do +127°C. 
Než vylezete z domu, zeptejte se uživatele pomocí `prompt()`, 
jaká je venku teplota. Do konzole vypište, zda je venku teplota vhodná na kraťasy a 
tričko s krátkým rukávem, tj. teplota mezi 20°C a 38°C.
*/

const teplota = prompt('Jaká je venku teplota?\n');
if (teplota >= 20 && teplota <= 38) {
    console.log(`Teplota venku je ${teplota}°C, akorát na kraťasy a na tričko.`);
} else{
    console.log(`Teplota venku je  ${teplota}°C, obleč si něco jiného.`);
}



/*
Cvičení 9: Hipster kavárna
Provozujete malou kavárnu. Nechte uživatele zadat 2 hodnoty:
- jakou chce kávu (např. espresso, capucino, flat white, latte)
- jak velkou ji chce (mala, stredni, velka)

Jsme kávoví snobové, takže podáváme pouze malé espresso nebo střední capucino. 
Pokud si uživatel vyžádal jednu z těchto dvou variant, vypište do konzole 
“Objednávka přijata”, jinak napište “Tuto kombinaci nepodáváme”.
*/

const druhKavy = prompt('Jakou chceš kávu?(espresso, capucino, flat white, latte)\n');
const velikostSalku = prompt('Jak velkou? (malá, střední, velká)\n');

if (druhKavy == 'espresso'&& velikostSalku == 'malá' 
|| (druhKavy == 'capucino'&& velikostSalku == 'střední')){
    console.log('Objednávka přijata.')
} else('Tuto kombinaci nepodáváme.')




/*
Cvičení 10: Výběr z bankomatu
V programu máte dvě proměnné. V jedné je, kolik peněz má uživatel na účtu. 
V druhé je, kolik peněz má bankomat k dispozici. Nechte uživatele zadat, kolik peněz si chce vybrat.

Má-li dostatek peněz na účtu a bankomat má celou částku k dispozici, napište do konzole “Výběr v pořádku proveden”.

V opačném případě napište “Chyba při výběru”. Při chybě napište, 
zda je důvodem nedostatek peněz na účtu nebo v bankomatu. 
Je-li málo peněz v bankomatu, napište i kolik maximálně může bankomat vydat.
*/

const CastkaNaUctu = 8500;
const CastkaVBankomatu  = 6000;
const Vyber = Number(prompt('Kolik chceš vybrat peněz?\n'));

 if (Vyber <= CastkaNaUctu && Vyber <= CastkaVBankomatu){
    console.log(` Výběr částky ${Vyber} v pořádku proveden.`)
 }else {
     if (Vyber > CastkaNaUctu ){
    console.log('Chyba při výběru.Máš nedostatek finačních prostředků na účtu.')
    } else if (Vyber > CastkaVBankomatu ){
    console.log(`Chyba při výběru.Je nedostatek bankovek v bankomatu. Maximální částka pro výběr je ${CastkaVBankomatu} Kč.`)
 }
}




/*
Cvičení 11: Pobyt na měsící pro mezinárodní klienty 🚀
Vycházejte ze stejného předpokladu, jako ve cvičení 8. 
Tentokrát ale máte na měsíci hotel a přijde za vámi host a ptá se 
“Venku je 64 stupňů. Mám si vzít kraťasy nebo raději skafandr?” 
Bohužel jsou mezi hosty i američani, a vy nevíte, zda vám host 
teplotu říká jako normální člověk ve stupních Celsia, nebo po americku ve stupních Fahrenheita.

Napište program, který se pomocí `prompt()` zeptá:
- kolik je venku stupňů
- zda host říká teplotu ve stupních Celsia nebo Fahrenheita (zadá `C` nebo `F`)

Pokud host odpoví, že teplotu říká ve stupních Fahrenheita, 
musíte ji nejprve převést na stupně Celsia. Vzorec pro převod je `celsius = (fahrenheit - 32) * 0.5556`

Pohybuje-li se teplota mezi 20°C a 38°C, doporučíte kraťasy a tričko 🩳, jinak skafandr 👩‍🚀.
*/

let teplota1 = prompt('Jaká je venku teplota?\n');
const stupne = prompt('Pro stupně Celsia zadej C a pro stupně Fahrenheita zadej F.\n')
if (stupne == 'F') {
    teplota1 =  (teplota1 - 32) * 0.5556}
    if (teplota1 >= 20 && teplota1 <= 38) {
    console.log(`Teplota venku je ${teplota1.toFixed(0)}°C, akorát na kraťasy a na tričko.`);
    } else{
    console.log(`Teplota venku je  ${teplota1.toFixed(0)}°C, obleč si scafandr.`);
}




/*to Fixed - metoda objektu Number, která formátuje číslo pomocí pevného počtu desetinných míst. Tato metoda vrací řetězec, který reprezentuje 
dané číslo s přesně zadaným počtem číslic za desetinnou čárkou. number.toFixed(x)
x je volitelný parametr, který určuje počet desetinných míst. Výchozí hodnota je 0 (žádná desetinná místa).
 */
