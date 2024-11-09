import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewNoteService } from './brewing-note.service';
import { BrewingNote } from 'src/entities/brewing-note.entity';
import { BrewNoteResolver } from './brewing-note.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BrewingNote])],
  providers: [BrewNoteService, BrewNoteResolver],
})
export class BrewNoteModule {}
