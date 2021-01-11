"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClassroom = exports.addLesson = exports.addTeacher = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addTeacher(teacher) {
    return __awaiter(this, void 0, void 0, function* () {
        if (teacher !== undefined) {
            const teacherDB = yield prisma.teachers.create({
                data: {
                    teacherID: teacher.teacherID,
                    name: teacher.name,
                    age: teacher.age,
                    yearsOfExperiance: teacher.yearsOfExperiance,
                    canTeachSubjects: teacher.canTeachSubjects.toString(),
                },
            });
            console.log('Data has been written');
        }
        else {
            throw Error('Missing parameter teacher');
        }
    });
}
exports.addTeacher = addTeacher;
addTeacher()
    .catch((e) => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
function addLesson(lesson) {
    return __awaiter(this, void 0, void 0, function* () {
        if (lesson !== undefined) {
            const lessonDB = yield prisma.lesson.create({
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
        }
        else {
            throw new Error('Missing parameter lesson');
        }
    });
}
exports.addLesson = addLesson;
addLesson()
    .catch((e) => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
function addClassroom(classroom) {
    return __awaiter(this, void 0, void 0, function* () {
        if (classroom && classroom.occupiedBy !== undefined) {
            const classroomDB = yield prisma.classroom.create({
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
        }
        else {
            throw new Error('Missing parameter whenIsOccupied');
        }
    });
}
exports.addClassroom = addClassroom;
addClassroom()
    .catch((e) => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=db.js.map