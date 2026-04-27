/**
 * Author: Maxine
 * Date: 2026-04-26
 * File Name: pie.js
 * Description: Module for checking whether a pie can be baked with required ingredients.
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentialIngredients = ["flour", "sugar", "butter"];
  const normalizedIngredients = ingredients.map((ingredient) => ingredient.toLowerCase());

  const missingIngredients = essentialIngredients.filter(
    (ingredient) => !normalizedIngredients.includes(ingredient)
  );

  if (missingIngredients.length > 0) {
    console.warn(
      `Cannot bake ${pieType} pie. Missing ingredient(s): ${missingIngredients.join(", ")}.`
    );
    process.exit(1);
  }

  return `${pieType} pie was successfully baked.`;
}

module.exports = { bakePie };
