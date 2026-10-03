"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 4, 6);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(3, 4, 6, 8);
console.log(myRectangle.getInfo());
//Array of shape 
let shapes = [];
shapes.push(myCircle);
shapes.push(myRectangle);
for (let tempShape of shapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
}
