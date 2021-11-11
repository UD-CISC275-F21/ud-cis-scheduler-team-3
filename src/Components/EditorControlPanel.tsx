import React, { useState } from "react";
import { Button, ToggleButton } from "react-bootstrap";
import { Course as CourseIF, Semester } from "./SemesterTable";
import { TitleForm, DescriptionForm } from "./Modals&Forms";

export function OpenEditing({course, editing, setEditing}: {course: CourseIF, editing:boolean, setEditing: (b:boolean)=>void}): JSX.Element {
    return (
        <div>
            <ToggleButton 
                variant="secondary" 
                id={ `toggle-editing-${ course.code }` }
                checked={ editing } 
                value="1" 
                onClick={()=>{
                    setEditing(true);
                }}
            >Edit</ToggleButton>
        </div>);
}

export function CloseEditing({course, setEditing, currentSemester, setCurrentSemester}: 
    {course: CourseIF, setEditing: (b:boolean)=>void, currentSemester: Semester, setCurrentSemester: (s:Semester)=>void}): JSX.Element {
    
    const [newTitle, setTitle] = useState<string>(course.title);
    const [newDescription, setDescription] = useState<string>(course.description);
    
    // the following function includes guidance from Cameron Thakar (Team 4)
    function updateSemester(): void {
        setCurrentSemester({title: currentSemester.title, courses: currentSemester.courses.map((oldCourse: CourseIF): CourseIF => {
            return course.code === oldCourse.code ? 
                {...oldCourse, title: newTitle, description: newDescription} : oldCourse;
        })});
    }

    function resetSemester(): void {
        setTitle(course.title);
        setDescription(course.description);
    }

    return (
        <div><table className  = "Table-Header">
            <tr><th>Course</th><th>Title</th><th>Credits</th><th>Description</th><th>Panel</th></tr> 
            <tr><td>{ course.code }</td>
                <td><TitleForm newTitle={ newTitle } setTitle={ setTitle }></TitleForm></td>
                <td>{ course.credits }</td>
                <td><DescriptionForm newDescription={ newDescription } setDescription={ setDescription }></DescriptionForm></td>
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