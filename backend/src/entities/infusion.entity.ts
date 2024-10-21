import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tea } from './tea.entity';

@ObjectType()
@Entity()
export class Infusion {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column({ name: 'c_infusion_number' })
  infusionNumber: number;

  @Field(() => Int)
  @Column({ name: 'c_infusion_time' })
  infusionTime: number;

  @Field(() => Int)
  @Column({ name: 'id_tea' })
  teaId: number;

  @ManyToOne(() => Tea)
  tea: Tea;
}
