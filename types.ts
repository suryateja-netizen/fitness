
export interface Meal {
  name: string;
  description: string;
  calories: number;
}

export interface DietPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snack: Meal;
}
