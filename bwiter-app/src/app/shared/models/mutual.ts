import { User } from './user';

export interface Mutual {
  id?: number;
  followed: User;
  following: User;
}
