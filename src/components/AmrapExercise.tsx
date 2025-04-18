import { useState, useEffect } from 'react';
import { formatTime, parseTime, playBeep } from '../utils/timerUtils';
import { AmrapExercise as AmrapExerciseType } from '../types/exercises.ts';

interface AmrapExerciseProps {
  exercise: AmrapExerciseType;
  onComplete?: () => void;
}

const AmrapExercise: React.FC<AmrapExerciseProps> = ({
  exercise,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Parse duration like "6 min"
    return parseTime(exercise.duration);
  });
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Reset timer when exercise changes
  useEffect(() => {
    setTimeLeft(parseTime(exercise.duration));
    setIsActive(false);
    setIsPaused(false);
  }, [exercise]);

  // Timer logic
  useEffect(() => {
    let interval: number | null = null;

    if (isActive && !isPaused) {
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // Time's up
            playBeep(800, 500);
            setIsActive(false);
            if (onComplete) onComplete();
            return 0;
          }

          // Play a beep at certain intervals
          if (prevTime <= 10 && prevTime > 0) {
            // Last 10 seconds countdown
            playBeep(600, 100);
          } else if (prevTime === 30 || prevTime === 60) {
            // 30 seconds and 1 minute remaining
            playBeep(500, 200);
          }

          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, onComplete]);

  const toggleTimer = () => {
    if (!isActive) {
      // Start timer
      setIsActive(true);
      setIsPaused(false);
      playBeep(700, 100);
    } else if (isPaused) {
      // Resume timer
      setIsPaused(false);
      playBeep(700, 100);
    } else {
      // Pause timer
      setIsPaused(true);
      playBeep(400, 100);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(parseTime(exercise.duration));
    playBeep(300, 100);
  };

  return (
    <div className="exercise amrap-exercise">
      <div className="exercise-header">
        <h2 className="exercise-name">{exercise.name}</h2>
        {exercise.description && (
          <p className="exercise-description">{exercise.description}</p>
        )}
      </div>

      <div className="exercise-content">
        <div className="amrap-format">
          <h3>Complete as many rounds as possible in {exercise.duration}:</h3>
          <ul className="amrap-exercises">
            {exercise.format.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="timer-display">
          <div className="time-display">{formatTime(timeLeft)}</div>
        </div>

        <div className="timer-controls">
          <button onClick={toggleTimer} className="timer-button">
            {!isActive ? 'Start' : isPaused ? 'Resume' : 'Pause'}
          </button>
          <button onClick={resetTimer} className="timer-button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmrapExercise;
