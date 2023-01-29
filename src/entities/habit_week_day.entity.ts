import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('habit_week_day')
export class HabitWeekDay {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  habit_id: string;

  @Column('integer', { unique: true })
  week_day: number;
}
