import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/Course";
import { Semester } from "../Interfaces/Semester";
import { CodeForm, TitleForm, CreditsForm, DescriptionForm } from "./Modals";

export const LOCAL_STORAGE_CURRENTSEMESTER = "scheduler_currentSemester";
export const LOCAL_STORAGE_SEMESTERLIST = "scheduler_semesterList";

export function ControlPanelButtons({setShowAddModal, setShowRemoveModal, setEditing, 
    clearSemester, hardReset, currentSemester, setCurrentSemester, semesterList, setSemesterList}: 
    {setShowAddModal: (b:boolean)=>void, setShowRemoveModal: (b:boolean)=>void, setEditing: (b:boolean)=>void, 
    clearSemester: VoidFunction, removeSemester: VoidFunction, hardReset: VoidFunction, 
    currentSemester: Semester, setCurrentSemester: (s:Semester)=>void, 
    semesterList: Semester[], setSemesterList: (s:Semester[])=>void}): JSX.Element {

    return <div><div className="CenterText">
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
    <div className="CenterText">
        <SaveData 
            currentSemester={ currentSemester } 
            semesterList={ semesterList }></SaveData>
        <LoadData 
            currentSemester={ currentSemester } setCurrentSemester={ setCurrentSemester } 
            semesterList={ semesterList } setSemesterList={ setSemesterList }></LoadData>
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

export function SaveData({currentSemester, semesterList}: {currentSemester: Semester, semesterList: Semester[]}): JSX.Element {
    
    function hardSave() {
        localStorage.setItem(LOCAL_STORAGE_CURRENTSEMESTER, JSON.stringify(currentSemester));
        localStorage.setItem(LOCAL_STORAGE_SEMESTERLIST, JSON.stringify(semesterList));
    }
    
    return <Button
        variant="outline-success"
        className="m-3" 
        onClick={() => {
            hardSave();
        }}
    >Save Changes</Button>;
}

export function LoadData({currentSemester, setCurrentSemester, semesterList, setSemesterList}: 
    {currentSemester: Semester, setCurrentSemester: (s:Semester)=>void, semesterList: Semester[], setSemesterList: (s:Semester[])=>void}): JSX.Element {
    
    function hardLoad() {
        const scheduler_currentSemester = localStorage.getItem(LOCAL_STORAGE_CURRENTSEMESTER);
        const scheduler_semesterList = localStorage.getItem(LOCAL_STORAGE_SEMESTERLIST);
        
        if (scheduler_currentSemester !== null && scheduler_semesterList !== null) {
            const parsedCurrentSemester = JSON.parse(scheduler_currentSemester);
            const parsedSemesterList = JSON.parse(scheduler_semesterList);
            setCurrentSemester(parsedCurrentSemester);
            setSemesterList(parsedSemesterList);
        }  else {
            const parsedCurrentSemester = JSON.parse(JSON.stringify(currentSemester));
            const parsedSemesterList = JSON.parse(JSON.stringify(semesterList));
            setCurrentSemester(parsedCurrentSemester);
            setSemesterList(parsedSemesterList);
        }
    }
    return <Button
        variant="outline-warning" 
        className="m-3" 
        onClick={() => {
            hardLoad(); 
        }}
    >Load Changes</Button>;
}
