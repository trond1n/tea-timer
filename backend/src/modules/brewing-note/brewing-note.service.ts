import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrewingNote } from 'src/entities/brewing-note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrewNoteService {
  constructor(
    @InjectRepository(BrewingNote)
    private brewNoteRepository: Repository<BrewingNote>,
  ) {}

  async getBrewNotesById(brewId: number): Promise<BrewingNote[]> {
    return this.brewNoteRepository.find({
      where: { brewing_id: brewId },
    });
  }
  // Метод для добавления новой заметки
  async addBrewNote(
    brewingId: number,
    userId: number,
    note: string,
  ): Promise<BrewingNote> {
    const newBrewNote = this.brewNoteRepository.create({
      brewing_id: brewingId,
      user_id: userId,
      note,
    });

    return this.brewNoteRepository.save(newBrewNote);
  }
}
