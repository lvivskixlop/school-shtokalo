/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Prisma, PrismaClient } from '@prisma/client';
import { Subjects, Teacher, Classroom, Groups } from './models';

const prisma = new PrismaClient();

async function addTeacher(n?:string, a?:number, y?:number, c?:Subjects) {
    const teacher = await prisma.teachers.create({
        data: {
            name: n,
            age: a,
            yearsOfExperiance: y,
            canTeachSubjects: c.toString(),
        },
    });
}

addTeacher()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  async function addLesson(s?: Subjects, t?: Teacher, w?: string, l?: Classroom, u?: string, g?:Groups) {
    const lesson = await prisma.lesson.create({
        data: {
            subject: s,
            


        },
    });
}

addLesson()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });