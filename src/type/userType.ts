export interface DecodedToken {
  userId: string;
  username: string;
  nickname: string;
  role: string;
  exp: number;
  iat?: number;
}

export interface UserData extends DecodedToken {
  token: string;
}

export interface UserState {
  user: UserData | null;
  decodedToken: DecodedToken | null;
  loading: boolean;
  error: string | null;
}

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