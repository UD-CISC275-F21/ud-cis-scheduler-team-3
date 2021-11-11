import { Semester } from "../../Interfaces/Semester";
import COURSES from "../../Assets/Courses.json";

export const defaultSemesters: Semester[] = [{
    courses: [COURSES[0], COURSES[1], COURSES[2], COURSES[3], COURSES[4]],
    title: "Freshman Fall Semester"
},
{
    courses: [COURSES[5], COURSES[6], COURSES[7], COURSES[8], COURSES[9]],
    title: "Freshman Spring Semester"
},
{
    courses: [COURSES[10], COURSES[11], COURSES[12], COURSES[13], COURSES[14]],
    title: "Sophmore Fall Semester"
},
{
    courses: [COURSES[15], COURSES[16], COURSES[17], COURSES[18], COURSES[19]],
    title: "Sophmore Spring Semester"
},
{
    courses: [COURSES[20], COURSES[21], COURSES[22], COURSES[23], COURSES[24]],
    title: "Junior Fall Semester"
},
{
    courses: [COURSES[25], COURSES[26], COURSES[27], COURSES[28], COURSES[29]],
    title: "Junior Spring Semester"
},
{
    courses: [COURSES[30], COURSES[31], COURSES[32], COURSES[33], COURSES[34]],
    title: "Senior Fall Semester"
},
{
    courses: [COURSES[35], COURSES[36], COURSES[37], COURSES[38], COURSES[39]],
    title: "Senior Spring Semester"
},
];