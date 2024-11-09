import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { BrewNoteService } from './brewing-note.service';
import {
  BrewingNote,
  CreateBrewNoteInput,
} from 'src/entities/brewing-note.entity';

@Resolver(() => BrewingNote)
export class BrewNoteResolver {
  constructor(private brewNoteService: BrewNoteService) {}

  @Query(() => [BrewingNote])
  async getBrewNotes(@Args('brewId', { type: () => Int }) brewId: number) {
    return this.brewNoteService.getBrewNotesById(brewId);
  }

  // Резолвер для добавления заметки
  @Mutation(() => BrewingNote)
  async addBrewNote(
    @Args('createBrewNoteInput') createBrewNoteInput: CreateBrewNoteInput,
  ): Promise<BrewingNote> {
    const { brewingId, userId, note } = createBrewNoteInput;
    return this.brewNoteService.addBrewNote(brewingId, userId, note);
  }
}
