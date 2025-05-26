export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}