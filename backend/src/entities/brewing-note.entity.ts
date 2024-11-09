import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('brewing_note')
export class BrewingNote {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  brewing_id: number;

  @Field(() => Int)
  @Column()
  user_id: number;

  @Field({ nullable: true })
  @Column('text', { nullable: true })
  note: string;
}

@InputType()
export class CreateBrewNoteInput {
  @Field()
  brewingId: number;

  @Field()
  userId: number;

  @Field()
  note: string;
}
