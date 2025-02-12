import { Test, TestingModule } from '@nestjs/testing';
import { LocusService } from './locus.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locus } from './locus.entity';
import { GetLocusQueryParamsDto } from './locus.dto';
import { UserRole } from '../user/user.enum';
import { generateMockLocus } from './locus.mock';

describe('LocusService', () => {
  let service: LocusService;
  let locusRepository: Repository<Locus>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocusService,
        {
          provide: getRepositoryToken(Locus),
          useClass: Repository, // Mock Repository class
        },
      ],
    }).compile();

    service = module.get<LocusService>(LocusService);
    locusRepository = module.get<Repository<Locus>>(getRepositoryToken(Locus));
  });

  it('should return locus list', async () => {
    // Mock data
    const params: GetLocusQueryParamsDto = {
      sideloading: 1,
    };
    const role: UserRole = UserRole.Admin; // Mock role

    // Mock the find method of the locusRepository
    const mockLocus = generateMockLocus() as any as Locus[];
    jest.spyOn(locusRepository, 'find').mockResolvedValue(mockLocus);

    // Call the service method
    const result = await service.getLocus(params, role);

    // Assertions
    expect(result).toEqual(mockLocus);
    expect(locusRepository.find).toHaveBeenCalledWith({
      take: params.perPage || 1000,
      skip: ((params.page || 1) - 1) * (params.perPage || 1000),
      relations: ['members'],
      where: {
        id: params.id,
        assemblyId: params.assemblyId,
        members: {
          regionId: params.regionId,
          membershipStatus: params.membershipStatus,
        },
      },
    });
  });
});
