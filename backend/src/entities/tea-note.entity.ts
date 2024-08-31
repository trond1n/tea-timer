import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tea } from './tea.entity';
import { User } from './user.entity';

@Entity()
export class TeaNote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tea)
  tea: Tea;

  @ManyToOne(() => User)
  user: User;

  @Column()
  note: string;
}
