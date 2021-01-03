enum Subjects {
    Math,
    EnglishLanguage,
    UkrainianLanguage,
    Physics,
    Bioligy,
    Chemistry,
    PE,
    Informatics
}

enum Groups {
    KI11,
    KI12,
    KI13,
    KI14,
    KI15,
    KI16,
    KI17
}

enum Day {
    Monday,
    Tuesday,
    Wensday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

type Time = {
    hour:number;
    minute:number;
}

type StartEndTime = {
    startTime: Time;
    endTime: Time;
}

interface Teacher {
    name: string;
    age: number;
    teacherID: number;
    canTeachSubjects: Subjects;
    yearsOfExperiance: number;
}

interface Lesson {
    subject: Subjects;
    teacher: Teacher;
    when: StartEndTime;
    location: Classroom;
    url: string;
    group: Groups;
}

interface Classroom {
    classroomID: number;
    location: string;
    isOccupied: boolean;
    whenIsOccupied: Lesson['when'];
    occupiedBy: Lesson;
}