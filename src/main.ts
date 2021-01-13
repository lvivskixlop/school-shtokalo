/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { PrismaClient } from '@prisma/client';
import { addTeacher } from './db';
import { Subjects, Teacher } from './models';

const prisma = new PrismaClient();

const getAllMathTeachers = async () => {
    const result = await prisma.$queryRaw(`SELECT name FROM teachers WHERE canTeechSubject = ${Subjects.Math}`);
    return result;
};

const getTargetMathTeachers = async () => {
    const result = await prisma.$queryRaw(
        `SELECT teachers.name FROM lesson
        INNER JOIN teachers ON lesson.teacher=teachers.teacherID
        INNER JOIN classroom ON lesson.location=classroom.classroomID
        WHERE lesson.subject = 0
        AND teachers.yearsOfExperiance > 10
        AND classroom.location = '100'
        AND classroom.occupiedBy = lesson.lessonID
        AND lesson.when LIKE '%Thu%' AND lesson.when LIKE 'Start: %8:30%%End:%%14:30%';`,
    );
    return result;
};

console.log(getTargetMathTeachers()
    .catch((e) => { throw e; })
    .finally(async () => { await prisma.$disconnect(); }));