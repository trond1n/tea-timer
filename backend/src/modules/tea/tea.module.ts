import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tea } from '../../entities/tea.entity';
import { TeaService } from './tea.service';
import { TeaResolver } from './tea.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Tea])],
  providers: [TeaService, TeaResolver],
})
export class TeaModule {}
