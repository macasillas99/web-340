'use strict';

const planetDistancesFromSun = {
  Mercury: 0.4,
  Venus: 0.7,
  Earth: 1.0,
  Mars: 1.5,
  Jupiter: 5.2,
  Saturn: 9.6,
  Uranus: 19.2,
  Neptune: 30.0,
};

function calculateDistance(planet1, planet2) {
  if (!(planet1 in planetDistancesFromSun) || !(planet2 in planetDistancesFromSun)) {
    throw new Error('Invalid planet name provided.');
  }

  return Math.abs(planetDistancesFromSun[planet1] - planetDistancesFromSun[planet2]);
}

module.exports = calculateDistance;
