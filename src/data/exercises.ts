import { WeeklyWorkoutPlan } from '../types/exercises';

export const weeklyWorkoutPlan: WeeklyWorkoutPlan = {
  Monday: {
    warmUp: [
      { name: 'Jumping Jacks', type: 'timed', time: '1 min' },
      { name: 'Glute Bridges', type: 'timed', time: '1 min' },
      { name: "World's Greatest Stretch", type: 'timed', time: '30s per side' },
      { name: 'Bodyweight Squats', type: 'timed', time: '1 min' },
    ],
    strength: [
      { name: 'Bulgarian Split Squats (8kg)', type: 'sets', sets: 3, reps: 10 },
      { name: 'Glute Bridges with Weight', type: 'sets', sets: 3, reps: 10 },
      { name: 'Romanian Deadlifts (8kg)', type: 'sets', sets: 3, reps: 10 },
      { name: 'Weighted Hip Thrusts', type: 'sets', sets: 3, reps: 10 },
    ],
    core: [
      { name: 'Deadbugs', type: 'sets', sets: 3, reps: 15 },
      { name: 'Hollow Hold', type: 'timed', sets: 3, time: '30s' },
      { name: 'Flutter Kicks', type: 'timed', sets: 3, time: '30s' },
    ],
    cardio: [
      { name: 'In/Out', type: 'tabata', duration: '20s work / 10s rest' },
      { name: 'Plank', type: 'tabata', duration: '20s work / 10s rest' },
      {
        name: 'Jumping Squats',
        type: 'tabata',
        duration: '20s work / 10s rest',
      },
      {
        name: 'Overhead Reverse Lunges',
        type: 'tabata',
        duration: '20s work / 10s rest',
      },
      {
        name: 'Air Bike Crunches',
        type: 'tabata',
        duration: '20s work / 10s rest',
      },
      {
        name: 'Push-Up to Plank',
        type: 'tabata',
        duration: '20s work / 10s rest',
      },
      { name: 'High Knees', type: 'tabata', duration: '20s work / 10s rest' },
      {
        name: 'Wall Sit Punches',
        type: 'tabata',
        duration: '20s work / 10s rest',
      },
    ],
  },
  Tuesday: {
    warmUp: [
      { name: 'Arm Circles', type: 'timed', time: '1 min' },
      { name: 'Inchworms', type: 'sets', sets: 1, reps: 5 },
      { name: 'Wall Slides', type: 'timed', time: '1 min' },
      {
        name: 'Shoulder Rolls + Band Pull-Aparts',
        type: 'timed',
        time: '1 min',
      },
      { name: 'Push-up to Down Dog', type: 'sets', sets: 1, reps: 5 },
    ],
    strength: [
      { name: 'Bench Press (30lbs)', type: 'sets', sets: 3, reps: 12 },
      { name: 'Dumbbell Rows (8kg)', type: 'sets', sets: 3, reps: 12 },
      { name: 'Lateral Raises (3kg)', type: 'sets', sets: 3, reps: 15 },
      { name: 'Reverse Flys (3kg)', type: 'sets', sets: 3, reps: 15 },
      { name: 'Upright Row (8kg)', type: 'sets', sets: 3, reps: 12 },
    ],
    core: [
      { name: 'Plank Shoulder Taps', type: 'sets', sets: 3, reps: 20 },
      { name: 'Seated Leg Lifts', type: 'sets', sets: 3, reps: 15 },
      { name: 'Side Plank Dips', type: 'sets', sets: 3, reps: 10 },
    ],
    cardio: [
      {
        name: 'Shoulder Taps (In/Out)',
        type: 'tabata',
        duration: '20s/10s alt',
      },
      { name: 'High Knees', type: 'tabata', duration: '20s/10s alt' },
    ],
  },
  Wednesday: {
    warmUp: [
      { name: 'Cat-Cow + Thread the Needle', type: 'timed', time: '1 min' },
      { name: 'Glute Bridges', type: 'timed', time: '1 min' },
      { name: 'Air Squats', type: 'timed', time: '1 min' },
      { name: 'Arm Reaches Overhead', type: 'timed', time: '1 min' },
      { name: 'Light Stationary Bike', type: 'timed', time: '2 min' },
    ],
    strength: [
      { name: 'Goblet Squats (16kg)', type: 'sets', sets: 3, reps: 10 },
      { name: 'Dumbbell Bent Over Rows', type: 'sets', sets: 3, reps: 10 },
      { name: 'Single-leg Deadlift (8kg)', type: 'sets', sets: 3, reps: 10 },
      { name: 'Overhead Carry (8kg)', type: 'sets', sets: 3, reps: 10 },
    ],
    core: [
      { name: 'Vacuum Breaths', type: 'timed', sets: 3, time: '30s' },
      { name: 'Side Plank', type: 'timed', sets: 2, time: '20s each' },
      { name: 'Lying Leg Raises', type: 'sets', sets: 3, reps: 15 },
    ],
    cardio: [
      { name: 'Bike Sprint', type: 'tabata', duration: '20s/10s' },
      { name: 'Low Plank + Reach', type: 'tabata', duration: '20s/10s' },
      { name: 'Jump Squats', type: 'tabata', duration: '20s/10s' },
      { name: 'Shoulder Taps', type: 'tabata', duration: '20s/10s' },
      { name: 'Bent-over Rows', type: 'tabata', duration: '20s/10s' },
      { name: 'Squat to Calf Raise', type: 'tabata', duration: '20s/10s' },
      { name: 'Glute Bridge March', type: 'tabata', duration: '20s/10s' },
      { name: 'In/Out Plank', type: 'tabata', duration: '20s/10s' },
    ],
  },
  Thursday: {
    warmUp: [
      { name: 'Monster Walks', type: 'timed', time: '1 min' },
      { name: 'Donkey Kicks', type: 'timed', time: '1 min' },
      { name: 'Glute Bridges', type: 'timed', time: '1 min' },
      { name: 'Jumping Jacks', type: 'timed', time: '1 min' },
    ],
    strength: [
      { name: 'Weighted Hip Thrusts', type: 'sets', sets: 3, reps: 15 },
      { name: 'Dumbbell RDL (8kg)', type: 'sets', sets: 3, reps: 10 },
      { name: 'Dumbbell Arnold Press (3kg)', type: 'sets', sets: 3, reps: 12 },
      { name: 'Lateral Raises (3kg)', type: 'sets', sets: 3, reps: 12 },
    ],
    core: [
      { name: 'Bird Dogs', type: 'sets', sets: 3, reps: 10 },
      { name: 'Crunches', type: 'sets', sets: 3, reps: 10 },
      { name: 'Deadbugs', type: 'sets', sets: 3, reps: 15 },
    ],
    cardio: [
      {
        name: 'AMRAP',
        type: 'amrap',
        duration: '6 min',
        format: ['10 Jump Squats', '30s Isometric Pulse Sit-Up', '10 Push-Ups'],
      },
    ],
  },
  Friday: {
    warmUp: [
      { name: 'Light Stationary Bike', type: 'timed', time: '1 min' },
      { name: 'Arm and Leg Swings', type: 'timed', time: '30s' },
      { name: 'Shoulder Mobility Drill', type: 'timed', time: '20s' },
      { name: 'Glute Bridges', type: 'sets', reps: 10, sets: 1 },
      { name: 'Walkouts', type: 'sets', reps: 5, sets: 1 },
    ],
    strength: [
      { name: 'Bench Press (30lbs)', type: 'sets', sets: 3, reps: 10 },
      { name: 'DB Thrusters (8kg)', type: 'sets', sets: 3, reps: 10 },
      { name: 'Front Raises (3kg)', type: 'sets', sets: 3, reps: 12 },
      { name: 'Squat to Overhead Press', type: 'sets', sets: 3, reps: 10 },
    ],
    core: [
      {
        name: 'Hollow Body Flutter Kicks',
        type: 'timed',
        sets: 3,
        time: '3s',
      },
      { name: 'Plank with Reach', type: 'timed', sets: 3, time: '3s' },
      { name: 'V-Sit Hold', type: 'timed', sets: 3, time: '2s' },
    ],
    cardio: [
      {
        name: 'Tabata',
        type: 'tabata',
        duration: '8 min',
        format: ['20s DB Snatch / 10s rest', '20s Bike Sprint / 10s rest'],
      },
    ],
  },
  Saturday: {
    warmUp: [
      { name: 'Jump rope (invisible if needed)', type: 'timed', time: '1 min' },
      { name: 'Glute bridges + pulses', type: 'timed', time: '1 min' },
      { name: 'Hip circles', type: 'timed', time: '1 min' },
      { name: 'Squat + calf raise', type: 'timed', time: '1 min' },
      { name: 'Reverse lunges', type: 'timed', time: '1 min' },
    ],
    strength: [
      {
        name: 'Weighted Hip Thrusts (8kg)',
        type: 'sets',
        sets: 3,
        reps: 12,
      },
      {
        name: 'Goblet Squats (8kg)',
        type: 'sets',
        sets: 3,
        reps: 10,
      },
      {
        name: 'Hamstring Curls with Sliders/Towels',
        type: 'sets',
        sets: 3,
        reps: 10,
      },
      { name: 'Single Leg Glute Bridges', type: 'sets', sets: 3, reps: 10 },
      { name: 'Sumo Squats', type: 'sets', sets: 3, reps: 10 },
    ],
    core: [
      { name: 'Leg Raises', type: 'sets', sets: 3, reps: 15 },
      { name: 'Reverse Crunch', type: 'sets', sets: 3, reps: 15 },
      {
        name: 'Plank with reach',
        type: 'sets',
        sets: 2,
        reps: 10,
      },
    ],
    cardio: [
      {
        name: 'Lower Body + Core Circuit',
        type: 'amrap',
        duration: '6 min',
        format: ['10 squats', '10 reverse lunges', '20 glute bridge marches'],
      },
    ],
  },
};
