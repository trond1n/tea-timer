// src/entities/tea.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Infusion } from './brew-time.entity';

@ObjectType()
@Entity()
export class Tea {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  type: string;

  @OneToMany(() => Infusion, (infusion) => infusion.tea)
  infusions: Infusion[];
}
