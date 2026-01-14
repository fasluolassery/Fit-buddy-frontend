export const ROLES = {
  USER: "user",
  TRAINER: "trainer",
  ADMIN: "admin",
} as const;

export type UserRole = (typeof ROLES)[keyof typeof ROLES];
