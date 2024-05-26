const inquirer = require("inquirer");

const generateSVG = require("./lib/generateSVG");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: function (value) {
      if (value.length > 3) {
        return "Please enter up to three characters.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (color keyword or hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (color keyword or hexadecimal number):",
  },
];

const creatingSvgFile = async (questions) => {
  try {
    const answers = await inquirer.prompt(questions);
    generateSVG(answers);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

creatingSvgFile(questions);
