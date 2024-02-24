const teplotaVenku = Number(prompt('Jaká je venku na měsíci teplota?'));
const stupne = prompt('Zadali jste teplotu ve stupních Celsia nebo Fahrenheita? Odpovězte C nebo F.');

let teplotaCelsius = teplotaVenku;
if (stupne === 'F') {
	teplotaCelsius = (teplotaVenku - 32) * 0.5556;
}

if (teplotaCelsius >= 20 && teplotaCelsius <= 38) {
	console.log(`Venku je krásných ${teplotaCelsius.toFixed(1)}°C, klidně si vezmi kraťasy a tričko.`);
} else {
	console.log(`Venku je ${teplotaCelsius.toFixed(1)}°C, raději si obleč skafandr.`);
}