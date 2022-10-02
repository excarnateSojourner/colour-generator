/*
Created on 2017 January 14.
Last modified on 2021-05-17.

This is the JavaScript behind the Random Colour Generator page. It is responsible for generating the random numbers, and inserting them into the page in different forms.
*/

// Generates a random colour and updates the page with it.
function generate() {
	// generate random values for red, green, and blue
	let rgb = Array(3).fill(undefined).map(() => Math.floor(Math.random() * 255));

	displayRgb(rgb);
}

// Takes the current colour, makes it brighter, and updates the page with the new, brighter colour.
function brighter() {

	let brighterRgb = readRgb().map(val => Math.ceil(val + (255 - val) * 0.2));

	displayRgb(brighterRgb);
}

// Takes the current colour, makes it darker, and updates the page with the new, darker colour.
function darker() {

	// Decrease all values, making sure not to subceed the min
	let darkerRgb = readRgb().map(val => Math.floor(val * 0.8));

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
