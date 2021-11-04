import React from "react";
import "../css/Semester.css";
import { ControlPanel } from "./ControlPanel";

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
 
export function SemesterTable({currentSemester, showEditModal}: {currentSemester: Semester, showEditModal: (b:boolean)=>void}): JSX.Element {
    
    return <table className  = "Table-Header">
        <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th><th></th></tr>
        { currentSemester.courses.map((course: Course) => {
            console.log("LOOK AT THESE:", course.code); 
            return <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.credits}</td>
                <td>{course.description}</td>
                <td><ControlPanel showEditModal= { showEditModal }></ControlPanel></td>
            </tr>;
        })}
    </table>;
}