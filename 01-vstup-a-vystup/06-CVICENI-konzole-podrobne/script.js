console.log('%c CVIČENÍ: Konzole ', 'background:black;color:yellow;');

// Cvičení 1:
// Vytvořte proměnnou `jmeno` a nastavte její hodnotu na vaše jméno.
// Použijte `console.log()` a vypište text "Jmenuji se [jméno]".
const jmeno = 'Jana';
console.log('Jmenuji se', jmeno, '.');


// Cvičení 2:
// Vytvořte proměnnou `vek` a nastavte její hodnotu na jakékoliv číslo.
// Použijte `console.error()` k výpisu "To je špatně. Můj věk není [vek] let.".
const vek = 150;
console.error('To je špatně. Toto není můj věk.');


// Cvičení 3:
// Vytvořte proměnnou `mesto` a nastavte její hodnotu na název města.
// Použijte `console.info()` k výpisu "Bydlím v [město]".
  const mesto = 'Praze';
  console.info('Bydlím v ', mesto,'.');


// Cvičení 4:
// Použijte `console.warn()` k výpisu varování "Pozor na chodce!".
console.warn('Pozor na chodce!');


// Cvičení 5:
// Vytvořte pole s názvem `ovocneKoktejly`, které obsahuje názvy tří ovocných koktejlů.
// Použijte `console.table()` k výpisu pole do konzole.

const ovocneKoktejly = [
{name: 'Pacific Blue'},
{name:'Sex on the Beach'},
{name:'Pussy Foot'},
{name: 'Sour Patch Kids'},
{name: 'Hershey'}

]
console.table(ovocneKoktejly);


// Cvičení 6:
// Vytvořte objekt s názvem `auto`, který obsahuje vlastnosti:
// `znacka`, `model` a `rokVyroby`.
// Použijte `console.table()` k výpisu objektu do konzole.

const auto =  {
 značka:'Jaguar',
 barva: 'zelena',
 rokVýroby: 1926,
 model:'XJ',
 cena: 45000000,
 zemePuvodu: 'UK'
}
console.log(auto)

// Cvičení 7:
// Vytvořte pole s názvem `zvirata`, které obsahuje názvy pěti různých zvířat.
// Použijte `console.table()` k výpisu pole na konzoli a pak použijte `console.info()` k výpisu textu "Celkový počet zvířat je [počet zvířat]".

const zvirata = ['kocka', 'pes', 'morče','králík', 'zajíc','koza', 'ovce'];

console.table(zvirata);
console.info('Celkový počet zvířat je', zvirata.length);





// Cvičení 8:
// Pomocí `console.log()` vypište do konzole text “Dnes je krásný den” a pomocí substitučního symbolu `%c` výstup nastylujte tak, aby text byl velikostí písma 20px a byl modou barvou na žlutém pozadí.

console.log('%cDnes je krásný den.','color: blue; background:yellow; font-size:20px; font-weight:bold;');