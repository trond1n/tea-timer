import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Note } from 'src/entities/tea-note.entity';
import { NoteService } from './tea-note.service';

@Resolver(() => Note)
export class NoteResolver {
  constructor(private noteService: NoteService) {}

  @Query(() => [Note])
  async getNotes(@Args('teaId', { type: () => Int }) teaId: number) {
    return this.noteService.getNotesByTeaId(teaId);
  }
}
