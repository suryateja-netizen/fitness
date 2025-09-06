
import { GoogleGenAI, Type } from "@google/genai";
import type { DietPlan } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const dietPlanSchema = {
  type: Type.OBJECT,
  properties: {
    breakfast: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING, description: "Name of the breakfast meal." },
        description: { type: Type.STRING, description: "Brief description of the breakfast." },
        calories: { type: Type.INTEGER, description: "Estimated calories for breakfast." },
      },
      required: ["name", "description", "calories"],
    },
    lunch: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING, description: "Name of the lunch meal." },
        description: { type: Type.STRING, description: "Brief description of the lunch." },
        calories: { type: Type.INTEGER, description: "Estimated calories for lunch." },
      },
      required: ["name", "description", "calories"],
    },
    dinner: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING, description: "Name of the dinner meal." },
        description: { type: Type.STRING, description: "Brief description of the dinner." },
        calories: { type: Type.INTEGER, description: "Estimated calories for dinner." },
      },
      required: ["name", "description", "calories"],
    },
    snack: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING, description: "Name of the snack." },
        description: { type: Type.STRING, description: "Brief description of the snack." },
        calories: { type: Type.INTEGER, description: "Estimated calories for the snack." },
      },
       required: ["name", "description", "calories"],
    },
  },
  required: ["breakfast", "lunch", "dinner", "snack"],
};

export const generateDietPlan = async (workoutType: string, workoutDuration: number): Promise<DietPlan> => {
  const prompt = `
    Based on a ${workoutDuration}-minute session of ${workoutType}, generate a suitable one-day diet plan.
    The plan should include breakfast, lunch, dinner, and a healthy snack.
    Focus on meals that aid in muscle recovery and energy replenishment.
    For each meal, provide a name, a brief description, and an estimated calorie count.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: dietPlanSchema,
      },
    });
    
    const jsonText = response.text.trim();
    const dietPlan = JSON.parse(jsonText);
    return dietPlan as DietPlan;

  } catch (error) {
    console.error("Error generating diet plan:", error);
    throw new Error("Failed to generate diet plan. Please check your API key and try again.");
  }
};
