export enum Subjects {
    Math,
    EnglishLanguage,
    UkrainianLanguage,
    Physics,
    Bioligy,
    Chemistry,
    PE,
    Informatics
}

export enum Groups {
    KI11,
    KI12,
    KI13,
    KI14,
    KI15,
    KI16,
    KI17
}

export type StartEndTime = {
    startTime: Date;
    endTime: Date;
}

export interface Teacher {
    teacherID: number;
    name: string;
    age: number;
    canTeachSubjects: Subjects;
    yearsOfExperiance: number;
}

export interface Lesson {
    lessonID: number;
    subject: Subjects;
    teacher: Teacher;
    when: StartEndTime;
    location: Classroom;
    url: string;
    group: Groups;
}

export interface Classroom {
    classroomID: number;
    location: string;
    isOccupied: boolean;
    whenIsOccupied?: Lesson['when'];
    occupiedBy?: Lesson;
}