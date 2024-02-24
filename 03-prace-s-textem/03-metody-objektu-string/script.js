console.log('%c Metody objektu String ', 'background:black;color:yellow;');

//METODA PŘEVOD
// převod na velká nebo malá písmena
const text1 ='různě VELKÁ písmENA';
console.log( text1.toLowerCase() );
console.log( text1.toUpperCase() );

const velkymiPismeny = text1.toLowerCase()
console.log(velkymiPismeny)


//METODA HLEDÁNÍ
// existuje řetězec v textu?
const text2 = 'Skákal pes přes oves';
console.log( text2.includes('pes', 10) );  // 10 - index od kterého se má začít hledat
console.log( text2.includes('pes') );   // výsledek: true
console.log( text2.includes('kočka') ); // výsledek: false
console.log(text2. includes('přes'));
console.log(text2.includes ('oves'));


// začíná/končí text na daný řetězec
const text3 = 'Jeníček a Mařenka jsou původní lovci čarodějnic';

console.log( text3.startsWith('Jeníček') );
console.log( text3.startsWith('Pepík') );

console.log( text3.endsWith('dějnic') );
console.log( text3.endsWith('Nic') );

const text_a = 'My si představíme jen několik těch nejčastěji používaných.';
console.log( text_a.startsWith('My'));



// nalezení pozice řetězce uvnitř textu
const text4 = 'Mámo, táto, v komoře je myš.';
console.log( text4.indexOf('táto') );
console.log( text4.indexOf('babi') );
console.log (text4.indexOf('myš'));

//METODA HLEDÁNÍ BEZ OHLEDU NA VELIKOST PÍSMEN
// hledání bez ohledu na velikost písmen
const text5 = 'Na veLIkoSti čAstO záLEží';
const hledat = 'často';
const hledat_a = 'záLEží';

console.log( text5.includes(hledat) );
console.log(text5.includes(hledat_a))

// pro účely hledání převedeme oba texty na malá písmena
console.log( text5.toLowerCase().includes( hledat.toLowerCase() ) );
console.log(text5.toLowerCase().includes(hledat_a.toLowerCase() ) );


//METODA NAHRAZOVÁNÍ TEXTU
// nahrazování textu - nemění původní hodnotu, výsledkem je nový textový řetězec
const text6 = 'Líný pes je pes, který nikdy neštěká.';

console.log( text6.replace('pes', 'krokodýl') );
console.log( text6.replaceAll('pes', 'krokodýl') );
console.log( text6.replace('nikdy', 'vůbec') );
console.log( text6.replace('neštěká', 'nemluví'));

//METODA SLICE
// základní syntaxe pro vyhledání
// získání části textu - metoda slice
const text7 = 'Běží liška k táboru';

// od šestého písmene až do konce
console.log( text7.slice(5) );
console.log(text7.slice(0, 4) );

// od šestého písmene (včetně) do jedenáctého písmene (nevčetně)
console.log( text7.slice(5, 10) ); // 10 tam nebude

// od šestého písmene od konce (včetně) až do konce
console.log( text7.slice(-6) );
console.log(text7.slice(-4) );

// od šestého písmene od konce (včetně) až do prvního písmene od konce (nevčetně)
console.log( text7.slice(-6, -1) ); // -1 tam nebude


//METODA TRIM
// text s mezerami na začátku i na konci
const text8 = '      pokusný text       ';

// trim() odřízne mezery na začátku i na konci
console.log( text8.trim() );

// trimStart() odřízne mezery jen na začátku
// trimEnd() odřízne mezery jen na konci
console.log( text8.trimStart() );
console.log( text8.trimEnd() );


