"use strict";
exports.__esModule = true;
var CricketCoach_1 = require("./CricketCoach");
var BaseballCoach_1 = require("./BaseballCoach");
var theCricketCoach = new CricketCoach_1.CricketCoach();
var theBaseballCoach = new BaseballCoach_1.BaseballCoach();
console.log(theCricketCoach.getDailyWorkout());
console.log(theBaseballCoach.getDailyWorkout());
