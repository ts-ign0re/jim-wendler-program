import { roundToFive } from './round-to-five';

export type ProgramScheme = Array<{
  load: number[];
  reps: string[];
}>;
export type Program = { weight: number };
export type ProgramSchedule = Program[][];

export function defaultProgram(maxWeight: number, programScheme: ProgramScheme) {
  if (!Array.isArray(programScheme)) {
    throw new Error('programScheme must be an array');
  }

  if (!maxWeight) {
    throw new Error('maxWeight must be a number');
  }

  return programScheme.map((currentLoad, pp) => {
    return currentLoad.load.map((loadInPercent, ii) => {
      return { weight: roundToFive(Math.round(maxWeight * loadInPercent)), reps: programScheme[pp].reps[ii] };
    });
  });
}
