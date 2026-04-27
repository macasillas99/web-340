/**
 * Author: Maxine
 * Date: 2026-04-26
 * File Name: pie.spec.js
 * Description: Unit tests for the bakePie function.
 */

"use strict";

const { bakePie } = require("../src/pie");

describe("bakePie", () => {
  let exitSpy;
  let warnSpy;

  beforeEach(() => {
    exitSpy = jest.spyOn(process, "exit").mockImplementation(() => {
      throw new Error("process.exit called");
    });
    warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    exitSpy.mockRestore();
    warnSpy.mockRestore();
  });

  test("returns a success message when all essential ingredients are included", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples", "cinnamon"]);

    expect(result).toBe("apple pie was successfully baked.");
    expect(console.warn).not.toHaveBeenCalled();
    expect(process.exit).not.toHaveBeenCalled();
  });

  test("logs a warning and exits when flour is missing", () => {
    expect(() => bakePie("cherry", ["sugar", "butter", "cherries"])).toThrow(
      "process.exit called"
    );

    expect(console.warn).toHaveBeenCalledWith(
      "Cannot bake cherry pie. Missing ingredient(s): flour."
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  test("logs all missing essential ingredients before exiting", () => {
    expect(() => bakePie("blueberry", ["butter", "blueberries"])).toThrow(
      "process.exit called"
    );

    expect(console.warn).toHaveBeenCalledWith(
      "Cannot bake blueberry pie. Missing ingredient(s): flour, sugar."
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});
