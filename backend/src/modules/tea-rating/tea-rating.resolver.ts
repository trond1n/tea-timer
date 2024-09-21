import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { RatingService } from './tea-rating.service';
import { Rating } from 'src/entities/tea-rating.entity';

@Resolver(() => Rating)
export class RatingResolver {
  constructor(private ratingService: RatingService) {}

  @Query(() => [Rating])
  async getRatings(@Args('teaId', { type: () => Int }) teaId: number) {
    return this.ratingService.getRatingsByTeaId(teaId);
  }
}
