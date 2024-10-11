export interface User {
  user: {
    userId: string | null;
    password: string | null;
    nickname: string | null;
    role: string | null;
  };
  loading: boolean;
  error: unknown | string;
}