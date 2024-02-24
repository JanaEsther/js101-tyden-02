console.log('%c CVIČENÍ: Objekt Number ','background:blue;color:white; font-size:20px; font-weight: bold; ');

/*
Cvičení 1: Jde o číslo?
Nechte uživatele zadat libovolný text pomocí `prompt()` a do konzole vypište, zda je zadaná hodnota číslo nebo ne. Převeďte zadanou hodnotu na číslo a pak použijte funkci `isNaN()` objektu `Number`.
*/
const cislo1 = Number(prompt('Zadej číslo'));
console.log('Jde o číslo?', !Number.isNaN(cislo1));

/*
Cvičení 2: Výpis na 2 desetinná místa
Nechte uživatele pomocí `prompt()` zadat číslo, může být i desetinné. Neřešme situaci, kdy je uživatel záškodník a zadá špatnou hodnotu, ale předpokládejme, že vždy spořádaně zadá něco, co jde na číslo převést.
Převeďte zadanou hodnotu na číslo a do konzole vypište toto číslo zaokrouhlené na dvě desetinná místa.
*/
const cislo2 = Number(prompt('Zadej číslo'));
console.log( cislo2.toFixed(2) );


/*
Cvičení 3: Různé zápisy čísel
Nechte uživatele pomocí `prompt()` zadat číslo, může být i desetinné. Vypište do konzole číslo tak, jak se čísla zobrazují ve Francii, Itálii a Austrálii.*/
const cislo3 = Number(prompt('Zadej číslo'));
console.log( cislo3.toLocaleString('fr') );
console.log( cislo3.toLocaleString('it') );
console.log( cislo3.toLocaleString('en-au') );



/*BONUS s chytákem: vypiš číslo jako ve Francii, Itálii a Austrálii zaokrouhlené na dvě desetinná místa.
*/
const zaokrouhleneCislo = Number(cislo3.toFixed(2));
console.log('Francie   ', zaokrouhleneCislo.toLocaleString('fr'));
console.log('Itálie    ', zaokrouhleneCislo.toLocaleString('it'));
console.log('Austrálie ', zaokrouhleneCislo.toLocaleString('en-au'));
