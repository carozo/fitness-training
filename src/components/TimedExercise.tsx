import { useState, useEffect } from 'react';
import { formatTime, parseTime, playBeep } from '../utils/timerUtils';
import { TimedExercise as TimedExerciseType } from '../types/exercises.ts';

interface TimedExerciseProps {
  exercise: TimedExerciseType;
  onComplete?: () => void;
  onSetComplete?: () => void;
  currentSet?: number;
  totalSets?: number;
  autoStart?: boolean;
}

const TimedExercise: React.FC<TimedExerciseProps> = ({
  exercise,
  onComplete,
  onSetComplete,
  currentSet: initialSet = 1,
  totalSets: propTotalSets,
  autoStart = false,
}) => {
  console.log(autoStart);
  const [timeLeft, setTimeLeft] = useState(() => parseTime(exercise.time));
  const [currentSet, setCurrentSet] = useState(initialSet);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [prepTime, setPrepTime] = useState(5);

  useEffect(() => {
    if (autoStart || currentSet > 1) {
      setIsPreparing(true);
      playBeep(700, 100);
    }
  }, [autoStart, exercise, currentSet]);

  const totalSets = propTotalSets || exercise.sets || 1;

  useEffect(() => {
    setTimeLeft(parseTime(exercise.time));
    setCurrentSet(1);
    setIsPaused(false);
    setPrepTime(5);
  }, [exercise]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isActive && !isPreparing) {
        setIsPreparing(true);
        playBeep(700, 100);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, isPreparing]);

  useEffect(() => {
    let interval: number | null = null;

    if (isPreparing) {
      interval = window.setInterval(() => {
        setPrepTime((prev) => {
          if (prev <= 1) {
            clearInterval(interval!);
            setIsPreparing(false);
            setIsActive(true);
            playBeep(700, 100);
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (isActive && !isPaused) {
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            playBeep();

            if (currentSet < totalSets) {
              setIsActive(false);
              if (onSetComplete) onSetComplete();
              return 0;
            } else {
              setIsActive(false);
              if (onComplete) onComplete();
              return 0;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isActive,
    isPaused,
    isPreparing,
    currentSet,
    totalSets,
    exercise.time,
    onComplete,
  ]);

  const toggleTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setIsPaused(false);
      playBeep(700, 100);
    } else if (isPaused) {
      setIsPaused(false);
      playBeep(700, 100);
    } else {
      setIsPaused(true);
      playBeep(400, 100);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(parseTime(exercise.time));
    setCurrentSet(1);
    playBeep(300, 100);
  };

  return (
    <div className="exercise timed-exercise">
      <div className="exercise-header">
        <h2 className="exercise-name">{exercise.name}</h2>
        {exercise.description && (
          <p className="exercise-description">{exercise.description}</p>
        )}
      </div>

      <div className="exercise-content">
        <div className={`timer-display ${isPreparing ? 'preparing' : ''}`}>
          <div className="time-display">
            {isPreparing ? prepTime : formatTime(timeLeft)}
          </div>
          {totalSets > 1 && (
            <div className="set-indicator">
              Set {currentSet}/{totalSets}
            </div>
          )}
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

export default TimedExercise;
