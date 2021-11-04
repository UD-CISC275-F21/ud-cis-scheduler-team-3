import React from "react";
import "../css/Semester.css";

export interface Course {
    code: string;
    title: string;
    credits: number;
    description: string;
}

export function SpringTable(): JSX.Element {
    const courses: Course[] = [{code: "CISC 181", title: "Introdction to Computer Science II", credits: 3, description: "PREREQ: Grade of C- or better in CISC108 or CISC106. COREQ: MATH221, MATH241, or a higher level math course or math placement."},
        {code: "CISC 210", title: "Introduction to Systems Programming", credits: 3, description: "PREREQ: A grade of C- or better in CISC106 or CISC108. COREQ: MATH221 or MATH241 or a higher level math course or math placement."},
        {code: "MATH 242", title: "Analytic Geometry & Calculus B", credits: 4, description: "PREREQ: MATH232 or MATH241. RESTRICTIONS: Students who received credit in MATH243 are not eligible to take this course without permission."},
        {code: "", title: "Laboratory Science I", credits: 4, description: "Required of all students. Any science with a lab"},
        {code: "", title: "Breath Requirement Elective 2", credits: 3, description: "Required of all students."}];

    
    return <table className  = "Table-Header">
        <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th></tr>
        { courses.map((course: Course) => {
            return <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.credits}</td>
                <td>{course.description}</td>
            </tr>;
        })}
    </table>;
}

