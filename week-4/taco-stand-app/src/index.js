"use strict";
const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});
tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});
tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.');

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const value = args.join(" ");

  switch (command) {
    case "serve":
      tacoStand.serveCustomer(value);
      break;
    case "prepare":
      tacoStand.prepareTaco(value);
      break;
    case "rush":
      tacoStand.handleRush(value);
      break;
    default:
      console.log("Invalid command");
  }
});
