/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Prisma, PrismaClient } from '@prisma/client';
import {
  Subjects,
  Teacher,
  Classroom,
  Groups,
  Lesson,
} from './models';

const prisma = new PrismaClient();

async function addTeacher(teacher?: Teacher) {
  if (teacher !== undefined) {
  const teacherDB = await prisma.teachers.create({
        data: {
            teacherID: teacher.teacherID,
            name: teacher.name,
            age: teacher.age,
            yearsOfExperiance: teacher.yearsOfExperiance,
            canTeachSubjects: teacher.canTeachSubjects.toString(),
        },
    });
  console.log('Data has been written');
  } else {
    throw Error('Missing parameter teacher');
  }
}

addTeacher()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function addLesson(lesson?: Lesson) {
  if (lesson !== undefined) {
  const lessonDB = await prisma.lesson.create({
        data: {
          lessonID: lesson.lessonID,
          subject: lesson.subject,
          teachers: {
            create: {
              teacherID: lesson.teacher.teacherID,
              name: lesson.teacher.name,
            },
          },
          when: `Start: ${lesson.when.startTime.toDateString()} End: ${lesson.when.endTime.toDateString()}`,
          classroom_classroomTolesson_location: {
            create: {
              classroomID: lesson.location.classroomID,
              location: lesson.location.location,
            },
          },
          url: lesson.url,
          group: lesson.group,
        },
    });
  console.log('Data has been written');
  } else {
    throw new Error('Missing parameter lesson');
  }
}

addLesson()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function addClassroom(classroom?: Classroom) {
  if (classroom && classroom.occupiedBy !== undefined) {
  const classroomDB = await prisma.classroom.create({
        data: {
            classroomID: classroom.classroomID,
            location: classroom.location,
            isOccupied: +!!classroom.isOccupied,
            lesson_classroom_whenIsOccupiedTolesson: {
              create: {
                lessonID: classroom.occupiedBy.lessonID,
                when: classroom.occupiedBy.when.startTime.toDateString() + classroom.occupiedBy.when.endTime.toDateString(),
              },
            },
            lesson_classroom_occupiedByTolesson: {
              create: {
                lessonID: classroom.occupiedBy.lessonID,
                subject: classroom.occupiedBy.subject,
              },
            },
        },
    });
  console.log('Data has been written');
  } else {
    throw new Error('Missing parameter whenIsOccupied');
  }
}

addClassroom()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function removeTeacher(teacher: Teacher) {
  const teacherDB = await prisma.teachers.delete({
    where: {
      teacherID: teacher.teacherID,
    },
  });
}

async function removeLesson(lesson: Lesson) {
  const lessonDB = await prisma.lesson.delete({
    where: {
      lessonID: lesson.lessonID,
    },
  });
}

async function removeClassroom(classroom: Classroom) {
  const classroomDB = await prisma.classroom.delete({
    where: {
      classroomID: classroom.classroomID,
    },
  });
}

async function updateTeacher(teacher:Teacher) {
  const teacherDB = await prisma.teachers.update({
    where: {
      teacherID: teacher.teacherID,
    },
    data: {
      name: teacher.name,
      age: teacher.age,
      canTeachSubjects: teacher.canTeachSubjects.toString(),
      yearsOfExperiance: teacher.yearsOfExperiance,
    },
  });
}

async function updateLesson(lesson:Lesson) {
  const lessonDB = await prisma.lesson.update({
    where: {
      lessonID: lesson.lessonID,
    },
    data: {
      subject: lesson.subject.toString(),
    },
  });
}

export {
  addTeacher,
  addLesson,
  addClassroom,
  removeTeacher,
  removeLesson,
  removeClassroom,
};