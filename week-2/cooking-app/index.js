/**
 * Author:
 * Date:
 * File Name: index.js
 * Description: Demonstrates the recipe module.
 */
const recipes = require("./recipes");

console.log(recipes.createRecipe(["eggs", "milk", "flour"]));
console.log(recipes.setTimer(15));
console.log(recipes.quit());
