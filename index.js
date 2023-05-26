const inquirer = require("inquirer");
const fs = require("fs");
const Svg = require("./lib/svg.js");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const svg = new Svg();

const questions = [
  {
    type: "input",
    message: "Enter text up to 3 characters",
    name: "text",
  },
  {
    type: "input",
    message: "Enter a text color",
    name: "textColor",
  },
  {
    type: "list",
    message: "Choose a shape",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
  },
  {
    type: "input",
    message: "Enter a shape background color",
    name: "shapeColor",
  },
];

function run(data) {
  svg.setText(data.text, data.textColor);
  let userShape;

  if (data.shape === "Circle") {
    userShape = new Circle();
  } else if (data.shape === "Triangle") {
    userShape = new Triangle();
  } else if (data.shape === "Square") {
    userShape = new Square();
  }
  userShape.setColor(data.shapeColor);
  svg.setShape(userShape);
  svg.render();
  fs.writeFile("logo.svg", svg.render(), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function init() {
  inquirer.prompt(questions).then((data) => run(data));
}

init();