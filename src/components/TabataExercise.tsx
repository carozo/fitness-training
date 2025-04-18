import { useState, useEffect } from 'react';
import TabataTimer from './TabataTimer';
import { parseTabataFormat } from '../utils/timerUtils';
import { TabataExercise as TabataExerciseType } from '../types/exercises.ts';

interface TabataExerciseProps {
  exercise: TabataExerciseType;
  onComplete?: () => void;
}

const TabataExercise: React.FC<TabataExerciseProps> = ({
  exercise,
  onComplete,
}) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [{ workTime, restTime }, setTimings] = useState(() =>
    parseTabataFormat(exercise.duration)
  );

  useEffect(() => {
    setTimings(parseTabataFormat(exercise.duration));
  }, [exercise.duration]);

  return (
    <div className="exercise tabata-exercise">
      <div className="exercise-header">
        <h2 className="exercise-name">
          {exercise.format?.[currentRound % exercise.format.length] || 'Tabata'}
        </h2>
        {exercise.name && (
          <p className="exercise-description">{exercise.name}</p>
        )}
      </div>

      <div className="exercise-content">
        <TabataTimer
          workTime={workTime}
          restTime={restTime}
          currentRound={currentRound}
          setCurrentRound={setCurrentRound}
          onComplete={onComplete}
          duration={parseInt(exercise.duration.split(' ')[0]) * 60}
        />

        {exercise.format && (
          <div className="exercise-format">
            <h3>Format:</h3>
            <ul>
              {exercise.format.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabataExercise;
