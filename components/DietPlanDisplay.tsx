
import React from 'react';
import type { DietPlan, Meal } from '../types';

const MealCard: React.FC<{ title: string; meal: Meal }> = ({ title, meal }) => (
  <div className="bg-brand-light/40 p-5 rounded-lg border border-brand-primary/20 flex flex-col h-full">
    <h3 className="text-lg font-bold text-brand-secondary">{title}</h3>
    <p className="text-xl font-semibold text-text-primary mt-1">{meal.name}</p>
    <p className="text-text-secondary mt-2 flex-grow">{meal.description}</p>
    <p className="mt-4 text-right font-bold text-brand-primary text-lg">{meal.calories} kcal</p>
  </div>
);


interface DietPlanDisplayProps {
  dietPlan: DietPlan;
}

const DietPlanDisplay: React.FC<DietPlanDisplayProps> = ({ dietPlan }) => {
  return (
    <div className="bg-base-100 p-6 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-text-primary mb-1">Your Personalized Diet Plan</h2>
      <p className="text-text-secondary mb-6">Here's a recovery-focused meal plan based on your recent workout.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MealCard title="Breakfast" meal={dietPlan.breakfast} />
        <MealCard title="Lunch" meal={dietPlan.lunch} />
        <MealCard title="Dinner" meal={dietPlan.dinner} />
        <MealCard title="Snack" meal={dietPlan.snack} />
      </div>
    </div>
  );
};

export default DietPlanDisplay;
