import { User } from './user';

export interface Bwit {
  id: number;
  body: string;
  created_at: string;
  author: User;
  likes: number;
  comments: number;
  picture?: string;
}
