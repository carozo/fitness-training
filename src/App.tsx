import { useState } from 'react';
import './App.css';
import WorkoutDisplay from './components/WorkoutDisplay';
import { weeklyWorkoutPlan } from './data/exercises';
import { Days } from './types/exercises';

const DaysArray: Days[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const App = () => {
  const [selectedDay, setSelectedDay] = useState<Days | null>(null);

  const handleDaySelect = (day: Days) => {
    setSelectedDay(day);
  };

  return (
    <div className="app">
      {!selectedDay && <h1>SUPER BELU GYM</h1>}
      <div className={selectedDay ? 'selected-day-days-menu' : 'days-menu'}>
        {DaysArray.map((day) => (
          <button
            key={day}
            className={
              selectedDay
                ? `selected-day-button ${selectedDay === day ? 'active' : ''}`
                : `day-button ${selectedDay === day ? 'active' : ''}`
            }
            onClick={() => handleDaySelect(day)}
          >
            {day.toLocaleUpperCase()}
          </button>
        ))}
      </div>

      {selectedDay && weeklyWorkoutPlan[selectedDay] && (
        <div className="workout-container">
          <WorkoutDisplay workout={weeklyWorkoutPlan[selectedDay]} />
        </div>
      )}
    </div>
  );
};

export default App;
