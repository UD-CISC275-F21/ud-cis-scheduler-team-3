import React, { useState } from "react";
import { Button, ToggleButton } from "react-bootstrap";
import { Course as CourseIF } from "./SemesterTable";
import COURSES from "../Assets/Courses.json";

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

export function CloseEditing({course, setEditing, newTitle, setTitle, newDescription, setDescription}: 
    {course: CourseIF, setEditing: (b:boolean)=>void, newTitle: string, setTitle:(newTitle:string)=>void, 
    newDescription: string, setDescription:(newDescription:string)=>void}): JSX.Element {
    
    const [semester, setSemester] = useState<CourseIF[]>(COURSES);
    
    function updateSemester(): void {
        setSemester(semester.map((oldCourse: CourseIF): CourseIF => {
            return course.code === oldCourse.code ? 
                {...oldCourse, title:newTitle, description: newDescription} :
                oldCourse;
        }));
    }

    function resetSemester(): void {
        setTitle(course.title);
        setDescription(course.description);
    }

    return (
        <div>
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
        </div>);

}