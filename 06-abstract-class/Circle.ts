import {Shape} from './Shape';
export class Circle extends Shape{
    
    constructor(private _radius: number,x:number, y:number){
        super(x,y);
    }
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
    public getInfo(): string {
        return super.getInfo() + ` ,raduis=${this._radius}`;
    }
    calculateArea(): number {
        return Math.PI*Math.pow(this.radius,2);
    }

}