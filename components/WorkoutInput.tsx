
import React, { useState } from 'react';
import { WORKOUT_OPTIONS } from '../constants';

interface WorkoutInputProps {
  onGenerate: (workoutType: string, workoutDuration: number) => void;
  isLoading: boolean;
}

const WorkoutInput: React.FC<WorkoutInputProps> = ({ onGenerate, isLoading }) => {
  const [workoutType, setWorkoutType] = useState(WORKOUT_OPTIONS[0]);
  const [workoutDuration, setWorkoutDuration] = useState(30);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (workoutDuration > 0) {
      onGenerate(workoutType, workoutDuration);
    }
  };

  return (
    <div className="bg-base-100 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-text-primary mb-4">Generate Your Diet Plan</h2>
      <p className="text-text-secondary mb-6">Log your workout to get a personalized, AI-generated meal plan for today.</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label htmlFor="workoutType" className="block text-sm font-medium text-text-secondary mb-1">Workout Type</label>
          <select
            id="workoutType"
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
            className="w-full px-3 py-2 border border-base-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
          >
            {WORKOUT_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="workoutDuration" className="block text-sm font-medium text-text-secondary mb-1">Duration (minutes)</label>
          <input
            id="workoutDuration"
            type="number"
            value={workoutDuration}
            onChange={(e) => setWorkoutDuration(parseInt(e.target.value, 10))}
            min="1"
            className="w-full px-3 py-2 border border-base-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-md hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Plan'}
        </button>
      </form>
    </div>
  );
};

export default WorkoutInput;
