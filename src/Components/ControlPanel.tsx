import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/Course";
import { Semester } from "../Interfaces/Semester";
import { CodeForm, TitleForm, CreditsForm, DescriptionForm } from "./Modals&Forms";
import { SaveData, LoadData } from "./Save&Load";

export function ControlPanelButtons({setShowAddModal, setShowRemoveModal, setEditing, 
    clearSemester, hardReset, currentSemester, setCurrentSemester, semesterList, setSemesterList}: 
    {setShowAddModal: (b:boolean)=>void, setShowRemoveModal: (b:boolean)=>void, setEditing: (b:boolean)=>void, 
    clearSemester: VoidFunction, removeSemester: VoidFunction, hardReset: VoidFunction, 
    currentSemester: Semester, setCurrentSemester: (s:Semester)=>void, 
    semesterList: Semester[], setSemesterList: (s:Semester[])=>void}): JSX.Element {

    return <div><div>
        <Button
            variant="secondary"
            className="m-3"
            onClick={()=>{
                setShowAddModal(true);
            }}
        >Add Course</Button>
        <Button
            variant="secondary"
            className="m-3"
            onClick={()=>{
                setShowRemoveModal(true);
            }}
        >Remove Course</Button>
        <Button 
            variant="secondary" 
            className="m-3"
            onClick={()=>{
                setEditing(true);
            }}
        >Edit Course</Button>
        <Button 
            variant="secondary" 
            className="m-3"
            onClick={()=>{
                clearSemester();
            }}
        >Clear Courses</Button>
    </div>
    <div>
        <SaveData currentSemester={ currentSemester } semesterList={ semesterList }></SaveData>
        <LoadData setCurrentSemester={ setCurrentSemester } setSemesterList={ setSemesterList }></LoadData>
        <Button
            variant="outline-danger" 
            className="m-3" 
            onClick={() => {
                hardReset();
            }}
        >Reset to Default</Button>
    </div></div>;
}


export function CloseEditing({course, setEditing, currentSemester, setCurrentSemester}: 
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


