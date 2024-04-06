#! /usr/bin/env node
import inquirer from "inquirer";
// const currency:any = {
//   USD: 1, //base currency
//   EUR: 0.91,
//   GBP: 0.76,
//   INR: 74.57,
//   PKR: 280,
// };
// let user_answer = await inquirer.prompt([
//   {
//     name: "from",
//     message: "Enter from currency",
//     type: "list",
//     choices: ["USD", "EUR", "GBP", "INR", "PKR"],
//   },
//   {
//     name: "to",
//     message: "Enter to currency",
//     type: "list",
//     choices: ["USD", "EUR", "GBP", "INR", "PKR"],
//   },
//   {
//     name: "amount",
//     message: "Enter the amount of from currency",
//     type: "number"
//   }
// ]);
// let fromCurrency=currency[user_answer.from];
// let toCurrency=currency[user_answer.to];
// let amount=user_answer.amount;
// let baseAmount=amount/fromCurrency;
// let convertedAmount=baseAmount*toCurrency;
// // console.log(fromCurrency);
// // console.log(toCurrency);
// // console.log(amount);
// // console.log(baseAmount);
// console.log(convertedAmount);
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    }, {
        name: "amount",
        message: "Enter the amount of the to currency",
        type: "number"
    }
]);
let fromCurrency = currency[user_answer.from];
let toCurrency = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromCurrency;
let convertedAmount = baseAmount * toCurrency;
console.log(convertedAmount);
