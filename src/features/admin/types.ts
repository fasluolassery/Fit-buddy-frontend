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
