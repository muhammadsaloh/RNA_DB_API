import { UserRole } from './user.enum';

export class UserDto {
  public readonly id: number;
  public readonly role: UserRole;
  public readonly username: string;
  public readonly password: string;
}
