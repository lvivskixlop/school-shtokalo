/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Subjects, Teacher } from '../models';

@Entity()
export class CTeachers implements Teacher {
    @PrimaryGeneratedColumn()
    teacherID!: number;

    @Column()
    name!: string;

    @Column()
    age!: number;

    @Column()
    yearsOfExperiance!: number;

    @Column()
    canTeachSubjects!: Subjects;

    /* constructor(
        t: number,
        n: string,
        a: number,
        y: number,
        c: Subjects,
    ) {
        this.name = n;
        this.age = a;
        this.teacherID = t;
        this.yearsOfExperiance = y;
        this.canTeachSubjects = c;
    } */
}
