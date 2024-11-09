import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrewTime } from '../../entities/brew-time.entity';
import { CreateBrewTimeDto } from 'src/dto/CreateBrewTimeDto';

@Injectable()
export class BrewTimeService {
  constructor(
    @InjectRepository(BrewTime)
    private brewTimeRepository: Repository<BrewTime>,
  ) {}

  // Метод для создания времени заваривания
  async createBrewTime(
    createBrewTimeDto: CreateBrewTimeDto,
  ): Promise<BrewTime> {
    const brewTime = this.brewTimeRepository.create(createBrewTimeDto);
    return this.brewTimeRepository.save(brewTime);
  }
}
