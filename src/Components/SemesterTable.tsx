import React, { useState } from "react";
import "../css/Semester.css";
import { OpenEditing, CloseEditing } from "./EditorControlPanel";

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
 
export function SemesterTable({currentSemester, setCurrentSemester}: {currentSemester: Semester, setCurrentSemester: (s:Semester)=>void}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    
    return <table className  = "Table-Header">
        <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th><th></th></tr>
        { currentSemester.courses.map((course: Course) => {
            return editing ? 
                <tr key={course.code}>
                    <td>{course.code}</td>
                    <td><CloseEditing 
                        course={ course } 
                        setEditing={ setEditing } 
                        currentSemester={ currentSemester }
                        setCurrentSemester={ setCurrentSemester }
                    ></CloseEditing></td>
                </tr> 
                : 
                <tr key={course.code}>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.credits}</td>
                    <td>{course.description}</td>
                    <td><OpenEditing course={ course } editing={ editing } setEditing={ setEditing }></OpenEditing></td>
                </tr>;
        })}
    </table>;
}