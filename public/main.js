"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getAllMathTeachers(call, callback) {
    const { Subjects } = call.request;
    try {
        const result = await prisma.$queryRaw(`SELECT name FROM teachers WHERE canTeechSubject = ${Subjects.Math}`);
        console.log(result);
        callback(null, result);
    }
    catch (e) {
        callback(e, null);
    }
}
/* const getAllMathTeachers = async () => {
    const result = await prisma.$queryRaw(`SELECT name FROM teachers WHERE canTeechSubject = ${Subjects.Math}`);
    console.log(result);
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
    console.log(result);
    return result;
}; */ 
//# sourceMappingURL=main.js.map