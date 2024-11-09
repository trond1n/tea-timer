import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { BrewTime } from '../../entities/brew-time.entity';
import { CreateBrewTimeDto } from 'src/dto/CreateBrewTimeDto';
import { BrewTimeService } from './brewing-time.service';

@Resolver(() => BrewTime)
export class BrewTimeResolver {
  constructor(private readonly brewTimeService: BrewTimeService) {}

  @Mutation(() => BrewTime)
  async createBrewTime(
    @Args('createBrewTimeDto') createBrewTimeDto: CreateBrewTimeDto,
  ): Promise<BrewTime> {
    return this.brewTimeService.createBrewTime(createBrewTimeDto);
  }
}
