/*
Created on 2017-01-14.
Last modified on 2022-10-02.
*/

const BRIGHTENING_FACTOR = 1.2;

// Generates a random colour and updates the page with it.
function generate() {
	// generate random values for red, green, and blue
	let rgb = Array(3).fill(undefined).map(() => Math.floor(Math.random() * 255));

	displayRgb(rgb);
}

// Takes the current colour, makes it brighter, and updates the page with the new, brighter colour.
function brighter() {

	let brighterRgb = readRgb().map(val => Math.min(Math.ceil(val * BRIGHTENING_FACTOR), 255));

	displayRgb(brighterRgb);
}

// Takes the current colour, makes it darker, and updates the page with the new, darker colour.
function darker() {

	// Decrease all values, making sure not to subceed the min
	let darkerRgb = readRgb().map(val => Math.floor(val / BRIGHTENING_FACTOR));

	displayRgb(darkerRgb);
}

function readRgb () {
	// get current colour of square
	let rgbString = document.querySelector('#colourSquare').style.fill;
	// I would have combined this with the line above, but it has to reference the string in two different places.
	return rgbString.substring(4, rgbString.length - 1).split(', ').map(val => parseInt(val));
}

function displayRgb (rgb) {
	// colour square on page
	let square = document.querySelector('#colourSquare').style.fill = `rgb(${rgb.join(',')})`;

	// display RGB values to user
	document.querySelector('#rgbValues').innerText = rgb.join(', ');

	// convert to hex values and display to user
	let rgbHex = rgb.map(val => val.toString(16).toUpperCase());
	document.querySelector('#hexValues').innerText = `0x${rgbHex.join('')}`;
}
