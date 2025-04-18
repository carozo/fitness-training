import { useEffect, useState } from 'react';
import './Exercise.css';
import TabataExercise from './TabataExercise';
import RepBasedExercise from './RepBasedExercise';
import TimedExercise from './TimedExercise';
import AmrapExercise from './AmrapExercise';
import { Exercise, WorkoutCategory } from '../types/exercises.ts';

interface WorkoutDisplayProps {
  workout: WorkoutCategory;
}

const WorkoutDisplay: React.FC<WorkoutDisplayProps> = ({ workout }) => {
  const [activeCategory, setActiveCategory] =
    useState<keyof WorkoutCategory>('warmUp');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [totalSets, setTotalSets] = useState(() => {
    const firstExercise = workout[activeCategory]?.[0];
    if ('sets' in firstExercise) {
      return firstExercise.sets ?? 1;
    } else {
      return 1;
    }
  });

  console.log(activeCategory);

  const exercises = workout[activeCategory] || [];
  const currentExercise = exercises[currentExerciseIndex];

  useEffect(() => {
    const firstExercise = workout[activeCategory]?.[0];
    if ('sets' in firstExercise) {
      setTotalSets(firstExercise.sets || 1);
    } else {
      setTotalSets(1);
    }
  }, [activeCategory, workout]);

  const handleExerciseComplete = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      if (currentSet < totalSets) {
        setCurrentSet(currentSet + 1);
        setCurrentExerciseIndex(0);
      } else {
        const categories: (keyof WorkoutCategory)[] = [
          'warmUp',
          'strength',
          'core',
          'cardio',
        ];
        const currentCategoryIndex = categories.indexOf(activeCategory);

        if (currentCategoryIndex < categories.length - 1) {
          const nextCategory = categories[currentCategoryIndex + 1];
          setActiveCategory(nextCategory);
          setCurrentExerciseIndex(0);
          setCurrentSet(1);
        } else {
          alert('Workout complete! Great job!');
        }
      }
    }
  };

  const renderExercise = (exercise: Exercise) => {
    switch (exercise.type) {
      case 'tabata':
        return (
          <TabataExercise
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        );
      case 'sets':
        return (
          <RepBasedExercise
            exercise={exercise}
            onComplete={handleExerciseComplete}
            currentSet={currentSet}
            totalSets={totalSets}
          />
        );
      case 'timed':
        return (
          <TimedExercise
            exercise={exercise}
            onComplete={handleExerciseComplete}
            onSetComplete={handleExerciseComplete}
            currentSet={currentSet}
            totalSets={totalSets}
            autoStart={currentExerciseIndex > 0 || currentSet > 1}
          />
        );
      case 'amrap':
        return (
          <AmrapExercise
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        );
      default:
        return <div>Unknown exercise type</div>;
    }
  };

  const categories: { key: keyof WorkoutCategory; label: string }[] = [
    { key: 'warmUp', label: 'Warm Up' },
    { key: 'strength', label: 'Strength' },
    { key: 'core', label: 'Core' },
    { key: 'cardio', label: 'Cardio' },
  ];

  return (
    <div className="workout-display">
      <div className="workout-header"></div>
      <div className="category-navigation">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`category-button ${
              activeCategory === category.key ? 'active' : ''
            }`}
            onClick={() => {
              setActiveCategory(category.key);
              setCurrentExerciseIndex(0);
            }}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="exercise-progress">
        <div className="category-label">{activeCategory}</div>
        <div className="exercise-counter">
          Exercise {currentExerciseIndex + 1} of {exercises.length}
        </div>
        <div className="set-counter">
          Set {currentSet} of {totalSets}
        </div>
      </div>

      <div className="current-exercise">
        {currentExercise ? (
          renderExercise(currentExercise)
        ) : (
          <div className="no-exercises">No exercises in this category</div>
        )}
        <button className="skip-button" onClick={handleExerciseComplete}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default WorkoutDisplay;
