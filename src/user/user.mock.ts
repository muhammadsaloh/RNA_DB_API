import { UserRole } from './user.enum';
import { UserDto } from './user.dto';

export const USERS: UserDto[] = [
  {
    id: 1,
    role: UserRole.Admin,
    username: 'admin',
    password: 'password',
  },
  {
    id: 2,
    role: UserRole.Normal,
    username: 'normal',
    password: 'password',
  },
  {
    id: 3,
    role: UserRole.Limited,
    username: 'limited',
    password: 'password',
  },
];
