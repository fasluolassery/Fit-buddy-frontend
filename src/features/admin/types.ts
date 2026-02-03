export type AdminUser = {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  isBlocked: boolean;
  isVerified: boolean;
  planActive: boolean;
  createdAt: string;
};

export type AdminTrainer = {
  _id: string;
  name: string;
  email: string;
  profilePhoto?: string | null;

  trainerApprovalStatus: "pending" | "approved" | "rejected";
  isVerified: boolean;
  isBlocked: boolean;

  rating: number;
  experienceYears: string;
  createdAt: string;
};
