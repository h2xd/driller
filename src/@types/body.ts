export enum MuscleGroup {
  BIZEPS = "bizeps",
  TRIZEPS = "trizeps"
}

export const BodyGroup = {
  ARMS: [MuscleGroup.BIZEPS, MuscleGroup.TRIZEPS]
} as const;
