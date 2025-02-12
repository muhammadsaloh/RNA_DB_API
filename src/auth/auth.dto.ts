import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  public readonly username: string;

  @ApiProperty()
  public readonly password: string;
}
