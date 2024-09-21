import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from 'src/entities/tea-rating.entity';
import { RatingResolver } from './tea-rating.resolver';
import { RatingService } from './tea-rating.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rating])],
  providers: [RatingService, RatingResolver],
})
export class RatingModule {}
