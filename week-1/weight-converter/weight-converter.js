/**
 * Author: Maxine Casillas
 * Date: 3/29/2026
 * File Name: weight-converster.js
 * Description: Assignment 1.2
*/

"use strict";

// TODO: Implement the weight conversion logic here

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node weight-converter.js <pounds>');
  process.exit(1);
}
const pounds = args[0];
if (isNaN(pounds)) {
  console.error('Input must be a number.');
  process.exit(1);
}
const kilograms = pounds * 0.453592;
console.log(kilograms.toFixed(2));