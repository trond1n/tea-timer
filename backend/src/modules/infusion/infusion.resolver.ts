import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { InfusionService } from './infusion.service';
import { Infusion } from 'src/entities/infusion.entity';

@Resolver(() => Infusion)
export class InfusionResolver {
  constructor(private infusionService: InfusionService) {}

  @Query(() => [Infusion])
  async getInfusions(@Args('teaId', { type: () => Int }) teaId: number) {
    return this.infusionService.getInfusionsByTeaId(teaId);
  }

  @Mutation(() => Infusion)
  async createInfusion(
    @Args('teaId', { type: () => Int }) teaId: number,
    @Args('infusionNumber', { type: () => Int }) infusionNumber: number,
    @Args('infusionTime', { type: () => Int }) infusionTime: number,
  ): Promise<Infusion> {
    return this.infusionService.createInfusion(
      teaId,
      infusionNumber,
      infusionTime,
    );
  }
}
