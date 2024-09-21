import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tea } from './tea.entity';

@Entity()
export class Infusion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  infusionNumber: number;

  @Column()
  infusionTime: number;

  @ManyToOne(() => Tea, (tea) => tea.infusions)
  tea: Tea;
}
