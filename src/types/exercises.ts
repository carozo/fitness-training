export interface BaseExercise {
  name: string;
  type: 'timed' | 'sets' | 'tabata' | 'amrap';
  description?: string;
}

export interface TimedExercise extends BaseExercise {
  type: 'timed';
  time: string;
  sets?: number;
}

export interface RepBasedExercise extends BaseExercise {
  type: 'sets';
  sets: number;
  reps: number;
}

export interface TabataExercise extends BaseExercise {
  type: 'tabata';
  duration: string;
  format?: string[];
}

export interface AmrapExercise extends BaseExercise {
  type: 'amrap';
  duration: string;
  format: string[];
}

export type Exercise =
  | TimedExercise
  | RepBasedExercise
  | TabataExercise
  | AmrapExercise;

export interface WorkoutSection {
  warmUp: Exercise[];
  strength: Exercise[];
  core: Exercise[];
  cardio: Exercise[];
}

export interface WeeklyWorkoutPlan {
  Monday: WorkoutSection;
  Tuesday: WorkoutSection;
  Wednesday: WorkoutSection;
  Thursday: WorkoutSection;
  Friday: WorkoutSection;
  Saturday: WorkoutSection;
  Sunday?: WorkoutSection;
}

export type Days = keyof WeeklyWorkoutPlan;

export type RepBasedExerciseType = RepBasedExercise;
export type TimedExerciseType = TimedExercise;
export type TabataExerciseType = TabataExercise;
export type AmrapExerciseType = AmrapExercise;

export type WorkoutCategory = {
  warmUp: Exercise[];
  strength: Exercise[];
  core: Exercise[];
  cardio: Exercise[];
};
