import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@ObjectType() // Декоратор для GraphQL
@Entity() // Декоратор для TypeORM
export class User {
  @Field() // Поле доступное через GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Column() // Это поле не нужно в GraphQL схеме, т.к. пароль должен оставаться приватным
  passwordHash: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;
}
