import {CricketCoach} from "./CricketCoach";
import { BaseballCoach } from './BaseballCoach';
let theCricketCoach=new CricketCoach();
let theBaseballCoach=new BaseballCoach();

console.log(theCricketCoach.getDailyWorkout());
console.log(theBaseballCoach.getDailyWorkout());