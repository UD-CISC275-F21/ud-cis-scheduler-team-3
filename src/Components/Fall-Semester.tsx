import React from "react";
import "../css/Semester.css";

export interface Course {
    code: string;
    title: string;
    credits: number;
    description: string;
}
 
export function FallTable(): JSX.Element {
    const courses: Course[] = [{code: "CISC 108", title: "Introdction to Computer Science I", credits: 3, description: "COREQ: MATH 115, MATH 117, or higher math course or math placement."},
        {code: "EGGG 101", title: "Introduction to Engineering (FYE)", credits: 2, description: "First Year Experience"},
        {code: "MATH 241", title: "Analytic Geometry & Calculus A", credits: 4, description: " MATH 117 or acceptable score on the Math Placement Exam in accordance with current standards determined by the Department of Mathematical Sciences. RESTRICTIONS: Students who received credit in MATH 242 or MATH 243 are not eligible to take this course without permission."},
        {code: "ENGL 110", title: "Seminar in Composition", credits: 3, description: "Required of all students. Should be taken first year on campus"},
        {code: "", title: "Breath Requirement Elective 1", credits: 3, description: "Required of all students."}];
    
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