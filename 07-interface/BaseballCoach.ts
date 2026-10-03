import {Coach} from './Coach';
export class BaseballCoach implements Coach{
    getDailyWorkout(): string {
        return "Getting workout details from Baseball Coach!!";
    }

}