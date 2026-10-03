import {Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';

let myShape=new Shape(4,5);
console.log(myShape.getInfo());

let myCircle= new Circle(5,4,6);
console.log(myCircle.getInfo());

let myRectangle=new Rectangle(3,4,6,8);
console.log(myRectangle.getInfo());

//Array of shape 
let shapes: Shape[]=[]
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for(let tempShape of shapes){
    console.log(tempShape.getInfo());
}
