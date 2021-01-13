"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readClassroom = exports.readLesson = exports.readTeacher = exports.updateClassroom = exports.updateLesson = exports.updateTeacher = exports.deleteClassroom = exports.deleteLesson = exports.deleteTeacher = exports.addClassroom = exports.addLesson = exports.addTeacher = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function addTeacher(teacher) {
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
    }
    else {
        throw Error('Missing parameter teacher');
    }
}
exports.addTeacher = addTeacher;
addTeacher()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
async function addLesson(lesson) {
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
                when: `Start: ${lesson.when.startTime.toString()} End: ${lesson.when.endTime.toString()}`,
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
}
exports.addLesson = addLesson;
addLesson()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
async function addClassroom(classroom) {
    if (classroom && classroom.occupiedBy !== undefined) {
        const classroomDB = await prisma.classroom.create({
            data: {
                classroomID: classroom.classroomID,
                location: classroom.location,
                isOccupied: +!!classroom.isOccupied,
                lesson_classroom_whenIsOccupiedTolesson: {
                    create: {
                        lessonID: classroom.occupiedBy.lessonID,
                        when: classroom.occupiedBy.when.startTime.toString() + classroom.occupiedBy.when.endTime.toString(),
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
}
exports.addClassroom = addClassroom;
addClassroom()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
async function deleteTeacher(teacher) {
    const teacherDB = await prisma.teachers.delete({
        where: {
            teacherID: teacher.teacherID,
        },
    });
}
exports.deleteTeacher = deleteTeacher;
async function deleteLesson(lesson) {
    const lessonDB = await prisma.lesson.delete({
        where: {
            lessonID: lesson.lessonID,
        },
    });
}
exports.deleteLesson = deleteLesson;
async function deleteClassroom(classroom) {
    const classroomDB = await prisma.classroom.delete({
        where: {
            classroomID: classroom.classroomID,
        },
    });
}
exports.deleteClassroom = deleteClassroom;
async function updateTeacher(teacher) {
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
exports.updateTeacher = updateTeacher;
async function updateLesson(lesson) {
    const lessonDB = await prisma.lesson.update({
        where: {
            lessonID: lesson.lessonID,
        },
        data: {
            subject: lesson.subject,
            teachers: {
                update: {
                    teacherID: lesson.teacher.teacherID,
                    name: lesson.teacher.name,
                },
            },
            when: `Start: ${lesson.when.startTime.toString()} End: ${lesson.when.endTime.toString()}`,
            classroom_classroomTolesson_location: {
                update: {
                    classroomID: lesson.location.classroomID,
                    location: lesson.location.location,
                },
            },
            url: lesson.url,
            group: lesson.group,
        },
    });
}
exports.updateLesson = updateLesson;
async function updateClassroom(classroom) {
    if (classroom.whenIsOccupied && classroom.occupiedBy !== undefined) {
        const classroomDB = await prisma.classroom.update({
            where: {
                classroomID: classroom.classroomID,
            },
            data: {
                location: classroom.location,
                isOccupied: +!!classroom.isOccupied,
                lesson_classroom_whenIsOccupiedTolesson: {
                    update: {
                        lessonID: classroom.occupiedBy.lessonID,
                        when: `Start: ${classroom.whenIsOccupied.startTime.toString()} End: ${classroom.whenIsOccupied.endTime.toString()}`,
                    },
                },
                lesson_classroom_occupiedByTolesson: {
                    update: {
                        lessonID: classroom.occupiedBy.lessonID,
                        subject: classroom.occupiedBy.subject,
                    },
                },
            },
        });
    }
    else {
        throw new Error('Missing parameter occupiedBy and whenIsOccupied');
    }
}
exports.updateClassroom = updateClassroom;
async function readTeacher(teacher) {
    const teacherDB = await prisma.teachers.findMany({
        where: {
            name: teacher.name,
        },
    });
    return teacherDB;
}
exports.readTeacher = readTeacher;
async function readLesson(lesson) {
    const lessonDB = await prisma.lesson.findMany({
        where: {
            subject: lesson.subject,
        },
    });
    return lessonDB;
}
exports.readLesson = readLesson;
async function readClassroom(classroom) {
    const classroomDB = await prisma.classroom.findMany({
        where: {
            location: classroom.location,
        },
    });
    return classroomDB;
}
exports.readClassroom = readClassroom;
//# sourceMappingURL=db.js.map