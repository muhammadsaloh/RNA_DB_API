import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './auth.dto';
import { USERS } from '../user/user.mock';
import { ErrorCode } from '../common/enums/error-code.enum';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  public async login(data: LoginDto): Promise<string> {
    const user = USERS.find(
      ({ username }) => username === data.username.toLowerCase(),
    );
    if (!user) throw new NotFoundException(ErrorCode.UserNotFound);

    if (user.password !== data.password)
      throw new UnauthorizedException(ErrorCode.InvalidCredentials);

    return this.jwtService.signAsync(data, {
      secret: process.env.JWT_SECRET,
    });
  }
}
