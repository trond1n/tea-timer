import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/entities/tea-note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async getNotesByTeaId(teaId: number): Promise<Note[]> {
    return this.noteRepository.find({
      where: { id_tea: teaId },
    });
  }
}
