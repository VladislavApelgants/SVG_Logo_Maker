const fs = require("fs/promises");
const path = require("path");
const { Triangle, Circle, Square } = require("./shapes");
const pathToSaveSvg = path.join(__dirname, "../examples", "logo.svg");

const generateSVG = async (data) => {
  let shape;
  switch (data.shape) {
    case "triangle":
      shape = new Triangle();
      break;
    case "circle":
      shape = new Circle();
      break;
    case "square":
      shape = new Square();
      break;
    default:
      throw new Error("Invalid shape");
  }
  shape.setColor(data.shapeColor);

  const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="120" fill="${
    data.textColor
  }" text-anchor="middle" dominant-baseline="middle" font-size="40">${
    data.text
  }</text>
</svg>
`;

  await fs.writeFile(pathToSaveSvg, svgContent, "utf-8");
  console.log("Generated logo.svg");
};

module.exports = generateSVG;
