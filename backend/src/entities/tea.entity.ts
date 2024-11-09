import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Tea {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'c_name', nullable: true })
  cName: string;

  @Field()
  @Column({ name: 'id_type', nullable: true })
  idType: string;

  @Field({ defaultValue: 10 })
  @Column({ name: 'min_brew_time', type: 'int', default: 10, nullable: false })
  minBrewTime: number;

  @Field({ nullable: true })
  @Column({ name: 'max_brew_time', type: 'int', nullable: true })
  maxBrewTime: number | null;

  @Field({ nullable: true })
  @Column({ name: 'с_brewing_temperature', type: 'int', nullable: true })
  brewingTemperature: number | null;

  @Field({ nullable: true })
  @Column({ name: 'numbers_of_brews', type: 'int', nullable: true })
  numbersOfBrews: number | null;

  @Field()
  @Column({ name: 'c_description', nullable: true })
  description: string;
}
