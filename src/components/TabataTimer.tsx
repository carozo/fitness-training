/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { formatTime, playBeep } from '../utils/timerUtils';

interface TabataTimerProps {
  workTime: number; // in seconds
  restTime: number; // in seconds
  duration?: number; // in seconds
  onComplete?: () => void;
  currentRound?: number;
  setCurrentRound: React.Dispatch<React.SetStateAction<number>>;
}

const TabataTimer: React.FC<TabataTimerProps> = ({
  workTime,
  restTime,
  onComplete,
  currentRound = 1,
  setCurrentRound,
  duration = 8 * (workTime + restTime),
}) => {
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isWorkPhase, setIsWorkPhase] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const rounds = duration / (workTime + restTime);

  useEffect(() => {
    setTimeLeft(workTime);
    setCurrentRound(1);
    setIsWorkPhase(true);
    setIsActive(false);
    setIsPaused(false);
  }, [workTime, restTime, rounds]);

  const [phaseTransition, setPhaseTransition] = useState(false);

  useEffect(() => {
    if (phaseTransition) {
      if (isWorkPhase) {
        setIsWorkPhase(false);
        setTimeLeft(restTime);
      } else {
        if (currentRound >= rounds) {
          setIsActive(false);
          if (onComplete) onComplete();
          setTimeLeft(0);
        } else {
          setCurrentRound((prev: number) => prev + 1);
          setIsWorkPhase(true);
          setTimeLeft(workTime);
        }
      }
      setPhaseTransition(false);
    }
  }, [
    phaseTransition,
    isWorkPhase,
    currentRound,
    rounds,
    restTime,
    workTime,
    onComplete,
  ]);

  useEffect(() => {
    let interval: number | null = null;
    if (isActive && !isPaused) {
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            playBeep();
            setPhaseTransition(true);
            return prevTime;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const toggleTimer = useCallback(() => {
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
  }, [isActive, isPaused]);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(workTime);
    setCurrentRound(1);
    setIsWorkPhase(true);
    playBeep(300, 100);
  }, [workTime]);

  return (
    <div className="tabata-timer">
      <div
        className={`timer-display ${isWorkPhase ? 'work-phase' : 'rest-phase'}`}
      >
        <div className="phase-indicator">{isWorkPhase ? 'WORK' : 'REST'}</div>
        <div className="time-display">{formatTime(timeLeft)}</div>
        <div className="round-indicator">
          Round {currentRound}/{rounds}
        </div>
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
  );
};

export default TabataTimer;
