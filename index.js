#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
let answerpin = await inquirer.prompt([
    { name: "pincode", message: "enter your four digit pin...", type: "number" },
]);
if (answerpin.pincode === mypin) {
    console.log("correct pin code !");
    let answeroperator = await inquirer.prompt([
        {
            name: "operation",
            message: "select one option....",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (answeroperator.operation === "withdraw") {
        let answeramount = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount....",
                type: "number",
            },
        ]);
        if (answeramount.amount > mybalance) {
            console.log("you exeed your account balance limit");
        }
        console.log(`your remaining account balance is `, (mybalance -= answeramount.amount));
    }
    else if (answeroperator.operation === "check balance") {
        console.log(`your current account balance is `, mybalance);
    }
}
else {
    console.log("invalid pin pin code");
}
