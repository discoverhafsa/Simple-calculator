import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Entre First Number", type: "number", name: "firstNumber" },
  { message: "Entre Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);


//conditional statement
if (answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "multiplication"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "division"){
    console.log(answer.firstNumber + answer.secondNumber);
} else{
    console.log("please select correct operator");
}