import { Resolver, Query } from '@nestjs/graphql';
import { Tea } from 'src/entities/tea.entity';
import { TeaService } from './tea.service';

@Resolver(() => Tea)
export class TeaResolver {
  constructor(private teaService: TeaService) {}

  @Query(() => [Tea])
  teas() {
    return this.teaService.findAll();
  }

  // добавьте другие запросы и мутации
}
