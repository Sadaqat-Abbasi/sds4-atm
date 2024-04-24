#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000;
let mypin = 1234;

let pinanswer = await inquirer.prompt([
  { name: "pincode", message: "enter your four digit pin...", type: "number" },
]);
if (pinanswer.pincode === mypin) {
  console.log("correct pin code !");
  let operatoranswer = await inquirer.prompt([
    {
      name: "operation",
      message: "select one option....",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (operatoranswer.operation === "withdraw") {
    let amountanswer = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount....",
        type: "number",
      },
    ]);
    mybalance -= amountanswer.amount;
    if (amountanswer.amount > mybalance) {
      console.log("you exeed your account balance limit........");
    };
    console.log(`your remaining account balance is `, mybalance-amountanswer.amount);
  } else if (operatoranswer.operation === "check balance") {
    console.log(`your current account balance is ${mybalance}`);
  }
} else {
  console.log("invalid pin pin code");
}
