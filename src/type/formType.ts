export interface LoginFormData{ 
  userId: string; 
  password: string;
}

export interface LoginCredentials {
  userId: string;
  password: string;
}

export interface WriteBoardData{ 
  title: string; 
  content: string;
  authorId: string | null;
}

export interface PostData{ 
  title: string; 
  content: string;
  authorId: string | null;
}

