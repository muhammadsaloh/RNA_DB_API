import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locus } from './locus.entity';
import { Repository } from 'typeorm';
import { GetLocusQueryParamsDto } from './locus.dto';
import { UserRole } from '../user/user.enum';
import { REGION_IDS_FOR_LIMITED_USERS } from '../common/constants';
import { In } from 'typeorm';

@Injectable()
export class LocusService {
  constructor(
    @InjectRepository(Locus)
    private readonly locusRepository: Repository<Locus>,
  ) {}

  public async getLocus(
    params: GetLocusQueryParamsDto,
    role: UserRole,
  ): Promise<Locus[]> {
    const take = params.perPage || 1000;
    const skip = ((params.page || 1) - 1) * take;

    const sideloading = Number(params.sideloading) === 1;
    const filterByRegion =
      role === UserRole.Limited
        ? In(
            REGION_IDS_FOR_LIMITED_USERS.filter((id) =>
              params.regionId ? params.regionId === id : true,
            ),
          )
        : params.regionId;

    return this.locusRepository.find({
      take,
      skip,
      relations: sideloading ? ['members'] : [],
      where: {
        id: params.id,
        assemblyId: params.assemblyId,
        members: {
          regionId: filterByRegion,
          membershipStatus: params.membershipStatus,
        },
      },
    });
  }
}
