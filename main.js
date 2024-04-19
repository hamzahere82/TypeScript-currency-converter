#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to 'CodeWithHamza' - Currency Converter\n "));
// Define The list of currencies and thier exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.94
    //Add More currencies and thier exchange rates
};
// prompt the user to select currencies to conver from add to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert:"
    }
]);
// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// fprmula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// <<===========================================>>
// Display the converted amount to the user
console.log(`The converted amount = ${chalk.green.bold(converted_amount.toFixed(2))}`);
