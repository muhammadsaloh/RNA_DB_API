import 'reflect-metadata';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LocusModule } from './locus/locus.module';
import { Locus } from './locus/locus.entity';
import { LocusMember } from './locusMember/locusMember.entity';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? Number(process.env.DBS_PORT) : 5432,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: [Locus, LocusMember],
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
    LocusModule,
    AuthModule,
  ],
})
export class AppModule {}
