/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Subjects, Lesson, Teacher, StartEndTime, Classroom, Groups } from '../models';

@Entity()
export class CLessons implements Lesson {
    @PrimaryGeneratedColumn()
    lessonID: number;

    @Column()
    subject: Subjects;

    @Column()
    teacher: Teacher;

    @Column()
    when: StartEndTime;

    @Column()
    location?: Classroom['location'];

    @Column()
    url: string;

    @Column()
    group: Groups;
}