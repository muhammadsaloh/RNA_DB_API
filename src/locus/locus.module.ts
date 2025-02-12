import 'reflect-metadata';

import { Module } from '@nestjs/common';
import { LocusController } from './locus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locus } from './locus.entity';
import { LocusMemberModule } from '../locusMember/locusMember.module';
import { LocusService } from './locus.service';

@Module({
  imports: [TypeOrmModule.forFeature([Locus]), LocusMemberModule],
  controllers: [LocusController],
  providers: [LocusService],
})
export class LocusModule {}
