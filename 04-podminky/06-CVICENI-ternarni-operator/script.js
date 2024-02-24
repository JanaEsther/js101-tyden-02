console.log('%c CVIČENÍ: Ternární operátor ', 'background:gold;color:red;');

/*
Cvičení 1: Sudé nebo liché číslo
Nechte uživatele zadat libovolné číslo.
Použijte ternární operátor a interpolaci textových řetězců a do konzole
vypište text v tomto formátu: “Číslo `7` je `liché` číslo.”25

*/

const cislo = Number(prompt('Zadej číslo\n'));
console.log(`Číslo ${cislo} je ${cislo % 2 === 0 ? 'sudé' : 'liché'} číslo.`);


/*
Cvičení 2: Denní doba
Nechte uživatele zadat, kolik je hodin (jen celé číslo mezi 0-23).
Jedná-li se o hodiny 0-11, budeme je považovat za “ráno a dopoledne”.
12-23 budeme brát jako “odpoledne a večer”.
Použijte ternární operátor a interpolaci textových řetězců
a do konzole napište text ve formátu: “Je `7` hodin, přejeme krásné `ráno a dopoledne;
*/

const time = prompt('Zadej, kolik je hodin jako celé číslo(0 - 23):\n') 
console.log(`Je ${time} hodin, přejeme krásné ${ time >= 0 && time <=11 ? 'ráno a dopoledne':'odpoledne a večer'}`) 



/*
Cvičení 3: Síla hesla
Nechte uživatele zadat heslo. Do konzole vypište text ve formátu “Máte `silné` heslo.”
Heslo je silné, pokud má délku 8 a více znaků.
*/

const heslo = prompt('Zadej heslo:\n')
console.log(`Máte ${heslo.length >= 8 ? 'silné': 'slabé'} heslo.`)



/*
Cvičení 4: Oblíbená barva
Nechte uživatele zadat barvu. Použijte ternární operátor
a do konzoly vypište “Tuhle barvu mám taky rád”, pokud se
jedná o zelenou nebo modrou. Pro jakoukoliv jinou barvu napište “To není moje oblíbená barva”.
*/
barva = prompt('Zadej svou oblíbenou barvu:\n')
console.log(barva == 'modrá'|| barva == 'zelená' ? 'Tuhle barvu mám taky rád': 'To není moje oblíbená barva.');






/*
Cvičení 5: Mezinárodní předvolba
Nechte uživatele zadat telefonní číslo včetně mezinárodní předvolby
(např. +420 123 456 789). Použijte ternární operátor a do konzoly vypište
“Jé, ty jsi taky čechoslovák”, pokud číslo začíná na +420 nebo +421.
Jinak raději použijte mezinárodní pozdrav “Hello. How are you.”
*/


