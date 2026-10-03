"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(_radius, x, y) {
        super(x, y);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + ` ,raduis=${this._radius}`;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
exports.Circle = Circle;
