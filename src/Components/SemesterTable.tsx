import React, { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import "../css/Semester.css";
// import { ControlPanel } from "./ControlPanel";

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
    const [editing, setEditing] = useState<boolean>(false);

    return <table className  = "Table-Header">
        <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th><th></th></tr>
        { currentSemester.courses.map((course: Course) => {
            console.log("LOOK AT THESE:", course.code); 
            return <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.credits}</td>
                <td>{course.description}</td>
                <td><ToggleButton 
                    variant="secondary" 
                    id={ `toggle-editing-${ course.code }` }
                    checked={ editing } 
                    value="1" 
                    onChange={ (event)=>setEditing(event?.currentTarget.checked) } 
                >Edit</ToggleButton></td>
            </tr>;
        })}
    </table>;
}