import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocusMember } from './locusMember.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocusMember])],
})
export class LocusMemberModule {}
