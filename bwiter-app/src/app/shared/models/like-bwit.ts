import { User } from './user';
import { Bwit } from './bwit';

export interface LikeBwit {
  id: number;
  user: User;
  bwit: Bwit;
}
