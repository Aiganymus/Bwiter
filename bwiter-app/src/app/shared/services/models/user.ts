export interface User {
  id: number;
  username: string;
  password?: string;
  nickname: string;
  avatar: string;
  status?: string;
  joined_at?: string;
}
