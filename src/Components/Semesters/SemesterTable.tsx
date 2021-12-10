import "../../css/Semester.css";
import React from "react";
import { Semester } from "../../Interfaces/Semester";
import { Course } from "../../Interfaces/Course";
import { Editor } from "../Editor";

export function SemesterTable({editing, setEditing, currentSemester, setCurrentSemester}: 
    {editing: boolean, setEditing: (b:boolean)=>void,currentSemester: Semester, setCurrentSemester: (s:Semester)=>void}): JSX.Element {
    
    return !editing ? 
        <table className  = "Table-Header">
            <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th></tr> 
            { currentSemester.courses.map((course: Course) => {
                return <tr key={course.code}>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.credits}</td>
                    <td>{course.description}</td>
                </tr>;
            })}
        </table>
        :
        <div>
            { currentSemester.courses.map((course: Course) => {
                return <Editor 
                    key={ course.code }
                    course={ course } 
                    setEditing={ setEditing } 
                    currentSemester={ currentSemester }
                    setCurrentSemester={ setCurrentSemester }
                ></Editor>;
            })}
        </div>;
}
