
import React, { useState } from 'react';
import StatCard from './StatCard';
import WorkoutInput from './WorkoutInput';
import DietPlanDisplay from './DietPlanDisplay';
import Loader from './Loader';
import { generateDietPlan } from '../services/geminiService';
import type { DietPlan } from '../types';

const StepsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M4.5 3.75a.75.75 0 01.75.75v14.25a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75zM19.5 3.75a.75.75 0 01.75.75v14.25a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75zM9 4.5a.75.75 0 00-1.5 0v14.25a.75.75 0 001.5 0V4.5z" clipRule="evenodd" />
        <path d="M11.25 3a.75.75 0 00-1.5 0v1.5h-3V3a.75.75 0 00-1.5 0v1.5a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75z" />
        <path d="M12.75 19.5a.75.75 0 001.5 0v-1.5h3V19.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75z" />
    </svg>
);

const FireIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 12c0 5.39 4.36 9.75 9.75 9.75s9.75-4.36 9.75-9.75c0-1.33.266-2.597.748-3.752a.75.75 0 00-1.498-.254A8.25 8.25 0 0112 12a8.25 8.25 0 01-1.037-4.122.75.75 0 00-1.052-1.071zM12 3a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V3.75A.75.75 0 0112 3z" clipRule="evenodd" />
        <path d="M8.61 4.302a.75.75 0 00-1.06 1.061A6 6 0 017.5 12a6 6 0 01-2.052 4.637.75.75 0 101.06 1.061A4.5 4.5 0 009 12a4.5 4.5 0 00-.39-2.052.75.75 0 00-1.06-1.061z" />
    </svg>
);


const Dashboard: React.FC = () => {
  const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = async (workoutType: string, workoutDuration: number) => {
    setIsLoading(true);
    setError(null);
    setDietPlan(null);

    try {
      const plan = await generateDietPlan(workoutType, workoutDuration);
      setDietPlan(plan);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard 
          title="Steps Today" 
          value="8,750" 
          unit="steps" 
          icon={<StepsIcon className="w-8 h-8 text-blue-500" />} 
        />
        <StatCard 
          title="Calories to Burn" 
          value="500" 
          unit="kcal" 
          icon={<FireIcon className="w-8 h-8 text-orange-500" />} 
        />
      </div>

      <WorkoutInput onGenerate={handleGeneratePlan} isLoading={isLoading} />
      
      {isLoading && <Loader />}
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {dietPlan && !isLoading && <DietPlanDisplay dietPlan={dietPlan} />}
    </div>
  );
};

export default Dashboard;
