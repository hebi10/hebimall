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
  loading: boolean;
  error: string | null;
}
