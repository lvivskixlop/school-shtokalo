"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const db_1 = require("./db");
const models_1 = require("./models");
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
console.log(`Start: ${blankTime.startTime.toDateString()}  End: ${blankTime.endTime.toDateString()}`);
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
db_1.addClassroom(kabinetChimii);
db_1.addTeacher(chmistryTeacher);
db_1.addLesson(chemistry);
//# sourceMappingURL=main.js.map