import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Infusion } from 'src/entities/brew-time.entity';
import { InfusionResolver } from './brew-time.resolver';
import { InfusionService } from './brew-time.service';

@Module({
  imports: [TypeOrmModule.forFeature([Infusion])],
  providers: [InfusionService, InfusionResolver],
})
export class InfusionModule {}
