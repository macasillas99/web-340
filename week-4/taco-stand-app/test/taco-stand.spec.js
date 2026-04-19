"use strict";
const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

function testServeCustomer() {
  try {
    const tacoStand = new TacoStandEmitter();
    let called = false;

    tacoStand.on("serve", (customer) => {
      called = true;
      assert.strictEqual(customer, "John");
    });

    tacoStand.serveCustomer("John");
    assert.ok(called);

    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco() {
  try {
    const tacoStand = new TacoStandEmitter();
    let called = false;

    tacoStand.on("prepare", (taco) => {
      called = true;
      assert.strictEqual(taco, "beef");
    });

    tacoStand.prepareTaco("beef");
    assert.ok(called);

    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

function testHandleRush() {
  try {
    const tacoStand = new TacoStandEmitter();
    let called = false;

    tacoStand.on("rush", (rush) => {
      called = true;
      assert.strictEqual(rush, "lunch");
    });

    tacoStand.handleRush("lunch");
    assert.ok(called);

    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();
