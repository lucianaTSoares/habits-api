import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Day } from './day.entity';

@Entity()
export class Habit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 20 })
  text: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deleted_at: Date;

  @ManyToMany(() => Day)
  @JoinTable({
    name: 'habits_days',
    joinColumn: {
      name: 'habit_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'day_id',
      referencedColumnName: 'id',
    },
  })
  completed_days: Day[];
}
