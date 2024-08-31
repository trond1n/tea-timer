import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tea } from './tea.entity';
import { User } from './user.entity';

@Entity()
export class TeaRating {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tea)
  tea: Tea;

  @ManyToOne(() => User)
  user: User;

  @Column()
  rating: number;
}
