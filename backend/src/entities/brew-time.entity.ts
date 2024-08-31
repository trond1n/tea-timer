import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tea } from './tea.entity';

@Entity()
export class BrewTime {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tea)
  tea: Tea;

  @Column()
  optimalBrewTime: number;

  @Column()
  infusionNumber: number;

  @Column()
  infusionTime: number;
}
