import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Tea } from 'src/entities/tea.entity';
import { TeaService } from './tea.service';
import { CreateTeaDto } from 'src/dto/CreateTeaDto';

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

  // Резолвер для добавления чая
  @Mutation(() => Tea)
  async createTea(
    @Args('createTeaDto') createTeaDto: CreateTeaDto,
  ): Promise<Tea> {
    return this.teaService.createTea(createTeaDto);
  }
}
