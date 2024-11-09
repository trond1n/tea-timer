import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tea } from '../../entities/tea.entity';
import { CreateTeaDto } from 'src/dto/CreateTeaDto';
import { BrewTimeService } from '../brewing-time/brewing-time.service';

@Injectable()
export class TeaService {
  constructor(
    @InjectRepository(Tea)
    private teasRepository: Repository<Tea>,
    private brewTimeService: BrewTimeService, // Сервис для работы с BrewTime
  ) {}

  findAll(): Promise<Tea[]> {
    return this.teasRepository.find();
  }

  findOne(id: number): Promise<Tea> {
    return this.teasRepository.findOne({ where: { id } });
  }

  // Создание чая и добавление проливов, если brewingTime передан
  async createTea(createTeaDto: CreateTeaDto): Promise<Tea> {
    const tea = this.teasRepository.create(createTeaDto);
    const savedTea = await this.teasRepository.save(tea);

    // Проверяем, есть ли brewingTime и добавляем проливы
    if (createTeaDto.brewingTime) {
      for (const [infusionNumber, infusionTime] of Object.entries(
        createTeaDto.brewingTime,
      )) {
        await this.brewTimeService.createBrewTime({
          teaId: savedTea.id,
          infusionNumber: parseInt(infusionNumber),
          infusionTime: infusionTime,
        });
      }
    }

    return savedTea;
  }
}
