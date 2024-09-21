import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Infusion {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  c_infusion_number: number;

  @Field()
  @Column()
  c_infusion_time: number;

  @Field()
  @Column()
  id_tea: number;
}
