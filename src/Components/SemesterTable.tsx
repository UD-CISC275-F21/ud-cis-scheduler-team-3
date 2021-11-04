import React from "react";
import "../css/Semester.css";

export interface Course {
    code: string;
    title: string;
    credits: number;
    description: string;
}

export interface Semester {
    courses: Course[];
    title: string;
}
 
export function SemesterTable({currentSemester}: {currentSemester: Semester}): JSX.Element {
    
    return <table className  = "Table-Header">
        <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th></tr>
        { currentSemester.courses.map((course: Course) => {
            console.log("LOOK AT THESE:", course.code); 
            return <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.credits}</td>
                <td>{course.description}</td>
            </tr>;
        })}
    </table>;
}