console.log('%c Logické operátory ', 'background:black;color:white; font-size: 20px');


/*
Operátor && - logické AND - a zároveň
Vrátí true, pokud jsou obě strany true
*/

let vek = 15;

// je uživatel starší než 20 a zároveň mladší než 30?
if (vek >= 20 && vek <= 30) {
  console.log('Užívej si mládí');
}


/*
Operátor || - logické OR - nebo
Vrátí true, pokud je alespoň jedna strana true
*/

// je uživatel mladší než 18 nebo starší než 65?

if (vek < 18 || vek > 65) {
  console.log('Nemusíš chodit do práce');
}


/*
Operátor ! - logické NOT - negace
Obrátí logickou hodnotu, z true udělá false a obráceně
*/
const jidlo = 'smažený sýr';

// když je jídlo rajská nebo lívance, tak ty NECHCEME
if ( !(jidlo === 'rajská' || jidlo === 'lívance') ) {
  console.log('Mňam, tohle jídlo sním');
}

// Podmínky testující boolean hodnotu
const maRidicak = true;

// klasická podmínka
if (maRidicak === true) {
  console.log('Může řídit auto');
}

if (maRidicak === true) {
  console.log('Může řídit auto');
}



// můžeme zjednodušit
if (maRidicak) {
  console.log('Může řídit auto');
}

if (!(maRidicak)) {
  console.log('Může řídit auto');
}