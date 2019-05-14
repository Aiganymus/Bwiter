import { User } from './user';
import { Bwit } from './bwit';

export interface Comment {
  id?: number;
  body: string;
  created_at?: string;
  author?: User;
  bwit?: Bwit;
}
