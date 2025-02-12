import { LocusDto } from './locus.dto';
import { LocusMemberDto } from '../locusMember/locusMember.dto';
import { faker } from '@faker-js/faker';

export const generateMockLocus = (): LocusDto[] => {
  const locusList: LocusDto[] = [];

  const generateMockLocusItem = (): LocusDto => {
    const members: LocusMemberDto[] = [];

    for (let i = 0; i < faker.number.int({ min: 1, max: 5 }); i++) {
      const member: LocusMemberDto = {
        id: faker.number.bigInt(),
        locusId: faker.number.bigInt(),
        ursTaxId: faker.string.alphanumeric(10),
        regionId: faker.number.bigInt(),
        membershipStatus: faker.string.sample(),
      };
      members.push(member);
    }

    return {
      id: faker.number.bigInt(),
      assemblyId: faker.string.alphanumeric(10),
      locusName: faker.lorem.word(),
      publicLocusName: faker.lorem.word(),
      chromosome: faker.lorem.word(),
      strand: faker.string.numeric(),
      locusStart: faker.number.int(),
      locusStop: faker.number.int(),
      memberCount: members.length,
      members: members,
    };
  };

  for (let i = 0; i < faker.number.int({ min: 1, max: 10 }); i++) {
    locusList.push(generateMockLocusItem());
  }

  return locusList;
};
