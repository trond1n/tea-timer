import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewTime } from '../../entities/brew-time.entity';
import { BrewTimeResolver } from './brewing-time.resolver';
import { BrewTimeService } from './brewing-time.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrewTime])],
  providers: [BrewTimeService, BrewTimeResolver],
})
export class BrewTimeModule {}
