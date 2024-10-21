import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Infusion } from 'src/entities/infusion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InfusionService {
  constructor(
    @InjectRepository(Infusion)
    private infusionRepository: Repository<Infusion>,
  ) {}

  async getInfusionsByTeaId(teaId: number): Promise<Infusion[]> {
    return this.infusionRepository.find({
      where: { teaId: teaId },
    });
  }
}
