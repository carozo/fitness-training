import { useCallback, useEffect } from 'react';
import { RepBasedExercise as RepBasedExerciseType } from '../types/exercises.ts';

interface RepBasedExerciseProps {
  exercise: RepBasedExerciseType;
  onComplete?: () => void;
  currentSet?: number;
  totalSets?: number;
}

const RepBasedExercise: React.FC<RepBasedExerciseProps> = ({
  exercise,
  onComplete,
  currentSet = 1,
  totalSets = 1,
}) => {
  // Handle keyboard events to complete exercise
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter' && onComplete) {
        onComplete();
      }
    },
    [onComplete]
  );

  // Add and remove event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="exercise rep-based-exercise">
      <div className="exercise-header">
        <h2 className="exercise-name">{exercise.name}</h2>
        {exercise.description && (
          <p className="exercise-description">{exercise.description}</p>
        )}
      </div>

      <div className="exercise-content">
        <div className="rep-indicator">{exercise.reps} reps</div>

        <div className="exercise-instructions">
          {totalSets > 1 && (
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(currentSet / totalSets) * 100}%` }}
              ></div>
            </div>
          )}
          <p>
            Complete {exercise.reps} reps, then press <kbd>Enter</kbd> to
            continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepBasedExercise;
