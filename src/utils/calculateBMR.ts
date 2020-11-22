import { Gender } from "@/@types/gender";

const genderConsumption = {
  [Gender.MALE]: 5,
  [Gender.FEMALE]: -161,
  [Gender.DIVERS]: 0
};

type CalculateBMROptions = {
  weight: number;
  height: number;
  age: number;
  gender: Gender;
};

export function calculateBMR(options: CalculateBMROptions) {
  const { weight, height, gender, age } = options;

  return 10 * weight + 6.25 * height - 5 * age + genderConsumption[gender];
}
