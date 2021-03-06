import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/Course";
import { Semester } from "../Interfaces/Semester";
import { CodeForm } from "./Modals/Editor Forms/CodeForm";
import { CreditsForm } from "./Modals/Editor Forms/CreditsForm";
import { DescriptionForm } from "./Modals/Editor Forms/DescriptionForm";
import { TitleForm } from "./Modals/Editor Forms/TitleForm";

export function Editor({course, setEditing, currentSemester, setCurrentSemester}: 
    {course: Course, setEditing: (b:boolean)=>void, currentSemester: Semester, setCurrentSemester: (s:Semester)=>void}): JSX.Element {
    const [newCode, setCode] = useState<string>(course.code);
    const [newTitle, setTitle] = useState<string>(course.title);
    const [newCredits, setCredits] = useState<string>(course.credits);
    const [newDescription, setDescription] = useState<string>(course.description);
    
    // the following function includes guidance from Cameron Thakar (Team 4)
    function updateSemester(): void {
        setCurrentSemester({title: currentSemester.title, courses: currentSemester.courses.map((oldCourse: Course): Course => {
            return course.code === oldCourse.code ? 
                {...oldCourse, code: newCode, title: newTitle, credits: newCredits, description: newDescription} 
                : oldCourse;
        })});
    }

    function resetSemester(): void {
        setCode(course.code);
        setTitle(course.title);
        setCredits(course.credits);
        setDescription(course.description);
    }

    return (
        <div><table className  = "Table-Header">
            <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th><th>Panel</th></tr> 
            <tr><td><CodeForm course={ course } newCode={ newCode } setCode={ setCode }></CodeForm></td>
                <td><TitleForm course={ course } newTitle={ newTitle } setTitle={ setTitle }></TitleForm></td>
                <td><CreditsForm course={ course } newCredits={ newCredits } setCredits={ setCredits }></CreditsForm></td>
                <td><DescriptionForm course={ course } newDescription={ newDescription } setDescription={ setDescription }></DescriptionForm></td>
                <td>
                    <Button 
                        variant="outline-danger" 
                        onClick={()=>{
                            resetSemester();
                            setEditing(false);
                        }} 
                    >Cancel</Button>
                    <Button 
                        variant="success"
                        onClick={()=>{
                            updateSemester();
                            setEditing(false);
                        }}
                    >Done</Button>
                </td></tr></table></div>);
}
