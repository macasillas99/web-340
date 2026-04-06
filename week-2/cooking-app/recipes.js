/**
 * Author:
 * Date:
 * File Name: recipes.js
 * Description: Exports recipe utility functions using CommonJS.
 */
function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes`;
}
function quit() {
  return "Program exited";
}
module.exports = { createRecipe, setTimer, quit };
