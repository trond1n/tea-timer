import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tea } from '../../entities/tea.entity';

@Injectable()
export class TeaService {
  constructor(
    @InjectRepository(Tea)
    private teasRepository: Repository<Tea>,
  ) {}

  findAll(): Promise<Tea[]> {
    return this.teasRepository.find();
  }

  // добавьте методы для создания, обновления и удаления чая
}
