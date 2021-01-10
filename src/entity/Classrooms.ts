/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Classroom, Lesson } from '../models';

@Entity()
export class CClassrooms implements Classroom {
    @PrimaryGeneratedColumn()
    classroomID: number;

    @Column()
    location: string;

    @Column()
    isOccupied: boolean;

    @Column()
    whenIsOccupied: Lesson['when'];

    @Column()
    occupiedBy: Lesson;
}