import React, { useState } from "react";
import "../css/Semester.css";
import { OpenEditing, CloseEditing } from "./EditorControlPanel";
import { TitleForm, DescriptionForm } from "./EditorForms";

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
    const [newTitle, setTitle] = useState<string>("Enter new title.");
    const [newDescription, setDescription] = useState<string>("Enter new description.");

    return <table className  = "Table-Header">
        <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th><th></th></tr>
        { currentSemester.courses.map((course: Course) => {
            return editing ? 
                <tr key={course.code}>
                    <td>{course.code}</td>
                    <td><TitleForm
                        newTitle={ newTitle } 
                        setTitle={ setTitle } 
                    ></TitleForm></td>
                    <td>{course.credits}</td>
                    <td><DescriptionForm
                        newDescription={ newDescription } 
                        setDescription={ setDescription }
                    ></DescriptionForm></td>
                    <td><CloseEditing 
                        course={ course } 
                        setEditing={ setEditing } 
                        newTitle={ newTitle } 
                        setTitle={ setTitle } 
                        newDescription={ newDescription } 
                        setDescription={ setDescription }
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