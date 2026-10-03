"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(4, 5);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 4, 6);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(3, 4, 6, 8);
console.log(myRectangle.getInfo());
let shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for (let shape of shapes) {
    console.log(shape.getInfo());
}
