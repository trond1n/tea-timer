import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfusionResolver } from './infusion.resolver';
import { InfusionService } from './infusion.service';
import { Infusion } from 'src/entities/infusion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Infusion])],
  providers: [InfusionService, InfusionResolver],
})
export class InfusionModule {}
