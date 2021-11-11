import "../css/Semester.css";
import React, { useState } from "react";
import { OpenEditing, CloseEditing } from "./EditorControlPanel";

export interface Course {
    code: string;
    title: string;
    credits: string;
    description: string;
}

export interface Semester {
    courses: Course[];
    title: string;
}
 
export function SemesterTable({currentSemester, setCurrentSemester}: {currentSemester: Semester, setCurrentSemester: (s:Semester)=>void}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    return !editing ? 
        <table className  = "Table-Header">
            <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th><th>Panel</th></tr> 
            { currentSemester.courses.map((course: Course) => {
                return <tr key={course.code}>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.credits}</td>
                    <td>{course.description}</td>
                    <OpenEditing course={ course } editing={ editing } setEditing={ setEditing }></OpenEditing>
                </tr>;
            })}
        </table>
        :
        <div>
            { currentSemester.courses.map((course: Course) => {
                return <CloseEditing 
                    key={ course.code }
                    course={ course } 
                    setEditing={ setEditing } 
                    currentSemester={ currentSemester }
                    setCurrentSemester={ setCurrentSemester }
                ></CloseEditing>;
            })}
        </div>;
}
