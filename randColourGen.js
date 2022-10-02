/*
	Random Colour Generator
	rcg.js
	Written by Garet Robertson
	https://goo.gl/ACzHsN
	garetethan@gmail.com
	
	Created on 2017 January 14.
	Last modified on 2017 January 14.
	
	This is the JavaScript behind the Random Colour Generator page. It is responsible for generating the random numbers, and inserting them into the page in different forms.
*/

// Generates a random colour and updates the page with it.
function generate() {
	// generate random values for red, green, and blue
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	
	// colour square on page
	var square = document.getElementById("colourSquare").style.fill = "rgb(" + red + "," + green + "," + blue + ")";
	
	// display RGB values to user
	document.getElementById("rgbValues").innerHTML = red + ", " + green + ", " + blue;
	
	// convert to hex values and display to user
	var redHex = red.toString(16).toUpperCase();
	var greenHex = green.toString(16).toUpperCase();
	var blueHex = blue.toString(16).toUpperCase();
	document.getElementById("hexValues").innerHTML = redHex + greenHex + blueHex;
	
}

// Takes the current colour, makes it brighter, and updates the page with the new, brighter colour.
function brighter() {
	
	// get current colour of square
	var colourString = document.getElementById("colourSquare").style.fill;
	// I would have combined this with the line above, but it has to reference the HTML element in two different places.
	var colourValues = colourString.substring(4, colourString.length - 1).split(", ");
	
	// convert all values to ints and increase all values, making sure not to exceed max
	for (var i = 0; i < colourValues.length; i++) {
		colourValues[i] = parseInt(colourValues[i]);
		// if not to close to max
		if (colourValues[i] < 255 / 1.2) {
			colourValues[i] = Math.ceil(colourValues[i] * 1.2);
		}
		else {
			colourValues[i] = 255;
		}
	}
	
	// pull out new values
	var red = colourValues[0];
	var green = colourValues[1];
	var blue = colourValues[2];
	
	// colour square on page
	document.getElementById("colourSquare").style.fill = "rgb(" + red + "," + green + "," + blue + ")";
	
	// display RGB values to user
	document.getElementById("rgbValues").innerHTML = red + ", " + green + ", " + blue;
	
	// convert to hex values and display to user
	var redHex = red.toString(16).toUpperCase();
	var greenHex = green.toString(16).toUpperCase();
	var blueHex = blue.toString(16).toUpperCase();
	document.getElementById("hexValues").innerHTML = redHex + greenHex + blueHex;
}

// Takes the current colour, makes it darker, and updates the page with the new, darker colour.
function darker() {
	
	// get current colour of square
	var colourString = document.getElementById("colourSquare").style.fill;
	// I would have combined this with the line above, but it has to reference the HTML element in two different places.
	var colourValues = colourString.substring(4, colourString.length - 1).split(", ");
	
	// convert all values to ints and increase all values, making sure not to exceed max
	for (var i = 0; i < colourValues.length; i++) {
		colourValues[i] = parseInt(colourValues[i]);
		// if not to close to max
		if (colourValues[i] > 1) {
			colourValues[i] = Math.floor(colourValues[i] / 1.2);
		}
		else {
			colourValues[i] = 0;
		}
	}
	
	// pull out new values
	var red = colourValues[0];
	var green = colourValues[1];
	var blue = colourValues[2];
	
	// colour square on page
	document.getElementById("colourSquare").style.fill = "rgb(" + red + "," + green + "," + blue + ")";
	
	// display RGB values to user
	document.getElementById("rgbValues").innerHTML = red + ", " + green + ", " + blue;
	
	// convert to hex values and display to user
	var redHex = red.toString(16).toUpperCase();
	var greenHex = green.toString(16).toUpperCase();
	var blueHex = blue.toString(16).toUpperCase();
	document.getElementById("hexValues").innerHTML = redHex + greenHex + blueHex;
}