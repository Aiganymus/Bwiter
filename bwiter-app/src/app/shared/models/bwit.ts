import { User } from './user';

export interface Bwit {
  id?: number;
  body: string;
  created_at?: string;
  author?: User;
  bwit_likes?: [];
  bwit_comments?: [];
  picture?: string;
}
