import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('day')
export class Day {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamptz', { unique: true })
  date: Date;
}
