import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Tea } from 'src/entities/tea.entity';
import { TeaService } from './tea.service';

@Resolver(() => Tea)
export class TeaResolver {
  constructor(private teaService: TeaService) {}

  @Query(() => [Tea], { description: 'Метод для получения всех чаев' })
  getTeas() {
    return this.teaService.findAll();
  }

  @Query(() => Tea, {
    description: 'Метод для получения одного чая по teaId',
    nullable: true,
  }) // Метод для получения одного чая по teaId
  getTea(@Args('teaId', { type: () => Int }) teaId: number) {
    return this.teaService.findOne(teaId);
  }
}
