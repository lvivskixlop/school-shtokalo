"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const client_1 = require("@prisma/client");
const models_1 = require("./models");
const prisma = new client_1.PrismaClient();
/* const getAllMathTeachers = async () => {
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

const ukrTeacher: Teacher = {
    teacherID: 0,
    name: 'Галина',
    age: 28,
    yearsOfExperiance: 4,
    canTeachSubjects: Subjects.UkrainianLanguage,
}; */
async function main() {
    const teacherDB = await prisma.teachers.create({
        data: {
            teacherID: 0,
            name: 'Галина',
            age: 28,
            yearsOfExperiance: 4,
            canTeachSubjects: models_1.Subjects.UkrainianLanguage.toString(),
        },
    });
    console.log('Data has been written');
}
main()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=main.js.map