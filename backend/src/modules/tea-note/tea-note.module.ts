import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/entities/tea-note.entity';
import { NoteResolver } from './tea-note.resolver';
import { NoteService } from './tea-note.service';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  providers: [NoteService, NoteResolver],
})
export class NoteModule {}
