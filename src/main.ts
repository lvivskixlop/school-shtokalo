/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { addClassroom, addLesson, addTeacher } from './db';
import {
    Subjects,
    Teacher,
    Classroom,
    Groups,
    Lesson,
    StartEndTime,
  } from './models';

let chmistryTeacher: Teacher = {
    teacherID: 0,
    name: 'Петро',
    age: 21,
    canTeachSubjects: Subjects.Chemistry,
    yearsOfExperiance: 1,
};

const blankTime: StartEndTime = {
    startTime: new Date(0),
    endTime: new Date(1),
};

console.log(`Start: ${blankTime.startTime.toDateString()}  End: ${blankTime.endTime.toDateString()}`);

let blankClassroom: Classroom = {
    classroomID: 0,
    location: '',
    isOccupied: false,
    whenIsOccupied: blankTime,
};

let blankLesson: Lesson = {
    lessonID: 0,
    subject: Subjects.Bioligy,
    teacher: chmistryTeacher,
    when: blankTime,
    location: blankClassroom,
    url: '',
    group: Groups.KI11,
};

let kabinetChimii: Classroom = {
    classroomID: 0,
    location: '512 аудиторія на 5-тому поверсі',
    isOccupied: false,
    occupiedBy: blankLesson,
    whenIsOccupied: blankTime,
};

let chemistry: Lesson = {
    lessonID: 0,
    subject: Subjects.Chemistry,
    teacher: chmistryTeacher,
    when: {
        startTime: new Date(2021, 1, 14, 10, 20, 0, 0),
        endTime: new Date(2021, 1, 14, 11, 55, 0, 0),
    },
    location: kabinetChimii,
    url: 'https://www.google.wap.dap.pip',
    group: Groups.KI15,
};

addClassroom(kabinetChimii);
addTeacher(chmistryTeacher);
addLesson(chemistry);