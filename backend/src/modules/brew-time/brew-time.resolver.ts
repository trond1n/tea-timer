import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Infusion } from 'src/entities/brew-time.entity';
import { InfusionService } from './brew-time.service';

@Resolver(() => Infusion)
export class InfusionResolver {
  constructor(private infusionService: InfusionService) {}

  @Query(() => [Infusion])
  async getInfusions(@Args('teaId', { type: () => Int }) teaId: number) {
    return this.infusionService.getInfusionsByTeaId(teaId);
  }
}
