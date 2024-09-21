import { Resolver, Query, Args } from '@nestjs/graphql';
import { Infusion } from 'src/entities/brew-time.entity';
import { InfusionService } from './brew-time.service';

@Resolver(() => Infusion)
export class InfusionResolver {
  constructor(private infusionService: InfusionService) {}

  @Query(() => [Infusion])
  async getInfusions(@Args('teaId') teaId: number): Promise<Infusion[]> {
    return this.infusionService.getInfusionsByTeaId(teaId);
  }
}
