import { ApiProperty } from '@nestjs/swagger';

export class LocusMemberDto {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  locusId: bigint;

  @ApiProperty()
  ursTaxId: string;

  @ApiProperty()
  regionId: bigint;

  @ApiProperty()
  membershipStatus: string;
}
