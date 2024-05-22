const { Triangle, Circle, Square } = require("./shapes");

describe("Shape rendering", () => {
  test("Triangle renders correctly", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150,20 280,180 20,180" fill="blue" />'
    );
  });

  test("Circle renders correctly", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });

  test("Square renders correctly", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="green" />'
    );
  });
});
