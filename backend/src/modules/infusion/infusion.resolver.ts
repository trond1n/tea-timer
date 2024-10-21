import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { InfusionService } from './infusion.service';
import { Infusion } from 'src/entities/infusion.entity';

@Resolver(() => Infusion)
export class InfusionResolver {
  constructor(private infusionService: InfusionService) {}

  @Query(() => [Infusion])
  async getInfusions(@Args('teaId', { type: () => Int }) teaId: number) {
    return this.infusionService.getInfusionsByTeaId(teaId);
  }
}
