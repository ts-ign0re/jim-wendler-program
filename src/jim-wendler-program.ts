import { defaultProgram } from './default-program';
import { roundToFive } from './round-to-five';

// Read this first https://www.t-nation.com/workouts/5-3-1-how-to-build-pure-strength/
const week1 = { load: [0.65, 0.75, 0.85], reps: ['5', '5', '5+'] };
const week2 = { load: [0.7, 0.8, 0.9], reps: ['3', '3', '3+'] };
const week3 = { load: [0.75, 0.85, 0.95], reps: ['5', '3', '1+'] };
const week4 = { load: [0.4, 0.5, 0.6], reps: ['5', '5', '5+'] };

const JimWendlerProgramLoad = [week1, week2, week3, week4];

const use90PercentAsDefaultMaxWeight = (maxWeight: number) => roundToFive(Math.round(maxWeight * 0.9));

export const JimWendlerProgram = (maxWeight: number) => defaultProgram(use90PercentAsDefaultMaxWeight(maxWeight), JimWendlerProgramLoad);