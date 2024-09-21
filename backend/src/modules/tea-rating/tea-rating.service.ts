import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from 'src/entities/tea-rating.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
  ) {}

  async getRatingsByTeaId(teaId: number): Promise<Rating[]> {
    return this.ratingRepository.find({
      where: { id_tea: teaId },
    });
  }
}
