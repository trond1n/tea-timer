import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tea } from './tea.entity'; // Импорт сущности Tea

@Entity('brew_time')
export class BrewTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tea_id', type: 'int', nullable: true })
  teaId: number;

  @Column({ name: 'optimal_brew_time', type: 'int', nullable: true })
  optimalBrewTime: number;

  @Column({ name: 'infusion_number', type: 'int', nullable: true })
  infusionNumber: number;

  @Column({ name: 'infusion_time', type: 'int', nullable: true })
  infusionTime: number;

  @ManyToOne(() => Tea) // Связь с сущностью Tea
  @JoinColumn({ name: 'tea_id' }) // Указываем внешний ключ
  tea: Tea;
}
