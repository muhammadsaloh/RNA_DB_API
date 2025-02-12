import { ApiProperty } from '@nestjs/swagger';
import { LocusMemberDto } from '../locusMember/locusMember.dto';

export class GetLocusQueryParamsDto {
  @ApiProperty({ required: false })
  public readonly id?: number;

  @ApiProperty({ required: false })
  public readonly assemblyId?: string;

  @ApiProperty({ required: false })
  public readonly regionId?: number;

  @ApiProperty({ required: false })
  public readonly membershipStatus?: string;

  @ApiProperty({ required: false })
  public readonly sideloading?: 1 | 0;

  @ApiProperty({ required: false })
  public readonly page?: number;

  @ApiProperty({ required: false })
  public readonly perPage?: number;
}

export class LocusDto {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  assemblyId: string;

  @ApiProperty()
  locusName: string;

  @ApiProperty()
  publicLocusName: string;

  @ApiProperty()
  chromosome: string;

  @ApiProperty()
  strand: string;

  @ApiProperty()
  locusStart: number;

  @ApiProperty()
  locusStop: number;

  @ApiProperty()
  memberCount: number;

  @ApiProperty({ type: LocusMemberDto })
  members: LocusMemberDto[];
}
