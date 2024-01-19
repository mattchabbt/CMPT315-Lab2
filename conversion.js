/* 
conversion.js 
- convert celsius temperature to farenheit
*/

const conversionFactor = 9/5;
const offset = 32;
const input = 10;

function convertToCelsius() {
    // convert celsius num to farenheit
    console.log((input * conversionFactor) + offset);
}

convertToCelsius();