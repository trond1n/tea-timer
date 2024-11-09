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

  async createInfusion(
    teaId: number,
    infusionNumber: number,
    infusionTime: number,
  ): Promise<Infusion> {
    const newInfusion = this.infusionRepository.create({
      teaId,
      infusionNumber,
      infusionTime,
    });
    return this.infusionRepository.save(newInfusion);
  }
}
