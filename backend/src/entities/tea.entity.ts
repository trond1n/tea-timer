// src/entities/tea.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Tea {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field() // Убедитесь, что это поле определено
  @Column()
  type: string; // Если вы хотите иметь это поле в GraphQL типе
}
