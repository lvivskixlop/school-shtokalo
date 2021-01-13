"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const client_1 = require("@prisma/client");
const models_1 = require("./models");
const prisma = new client_1.PrismaClient();
let chmistryTeacher = {
    teacherID: 0,
    name: 'Петро',
    age: 21,
    canTeachSubjects: models_1.Subjects.Chemistry,
    yearsOfExperiance: 1,
};
const blankTime = {
    startTime: new Date(0),
    endTime: new Date(1),
};
let blankClassroom = {
    classroomID: 0,
    location: '',
    isOccupied: false,
    whenIsOccupied: blankTime,
};
let blankLesson = {
    lessonID: 0,
    subject: models_1.Subjects.Bioligy,
    teacher: chmistryTeacher,
    when: blankTime,
    location: blankClassroom,
    url: '',
    group: models_1.Groups.KI11,
};
let kabinetChimii = {
    classroomID: 0,
    location: '512 аудиторія на 5-тому поверсі',
    isOccupied: false,
    occupiedBy: blankLesson,
    whenIsOccupied: blankTime,
};
let chemistry = {
    lessonID: 0,
    subject: models_1.Subjects.Chemistry,
    teacher: chmistryTeacher,
    when: {
        startTime: new Date(2021, 1, 14, 10, 20, 0, 0),
        endTime: new Date(2021, 1, 14, 11, 55, 0, 0),
    },
    location: kabinetChimii,
    url: 'https://www.google.wap.dap.pip',
    group: models_1.Groups.KI15,
};
const getAllMathTeachers = async () => {
    const result = await prisma.$queryRaw(`SELECT name FROM teachers WHERE canTeachSubjects = ${models_1.Subjects.Math} AND yearsOfExperiance > 10;`);
    return result;
};
const getTargetMathTeachers = async () => {
    const result = await prisma.$queryRaw(`SELECT teachers.name FROM lesson
        INNER JOIN teachers ON lesson.teacher=teachers.teacherID
        INNER JOIN classroom ON lesson.location=classroom.classroomID
        WHERE lesson.subject = 0
        AND teachers.yearsOfExperiance > 10
        AND classroom.location = '100'
        AND classroom.occupiedBy = lesson.lessonID
        AND lesson.when LIKE '%Thu%' AND lesson.when LIKE 'Start: %8:30%%End:%%14:30%';`);
    return result;
};
console.log(getTargetMathTeachers());
//# sourceMappingURL=main.js.map