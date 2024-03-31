#! usr/bin/env node

// SHABANG

import inquirer from "inquirer";

// 1) Computer will generate a random number.

// 2) User input for guessing a number.

// 3) Compare computer generated and user input number and the Showing Result.

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([{

    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a Number Betweem 1-6:",

}]);

if(answer.userGuessedNumber === randomNumber) {

    console.log("Congratulatios! You Guessed a Right Number.");

}else{

    console.log("OHH! You Guessed a Wrong Number. Better Luck Next Time.");
}

// (The End) ;
// Khatam Shudh Mangal Budh