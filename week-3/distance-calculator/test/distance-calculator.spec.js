'use strict';

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.5);
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testVenusToJupiter() {
  try {
    assert.strictEqual(calculateDistance('Venus', 'Jupiter'), 4.5);
    console.log('Passed testVenusToJupiter');
    return true;
  } catch (error) {
    console.error(`Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

function testNeptuneToNeptune() {
  try {
    assert.strictEqual(calculateDistance('Neptune', 'Neptune'), 0);
    console.log('Passed testNeptuneToNeptune');
    return true;
  } catch (error) {
    console.error(`Failed testNeptuneToNeptune: ${error.message}`);
    return false;
  }
}

const results = [
  testEarthToMars(),
  testVenusToJupiter(),
  testNeptuneToNeptune(),
];

const passedCount = results.filter(Boolean).length;
console.log(`\n${passedCount}/${results.length} tests passed.`);
