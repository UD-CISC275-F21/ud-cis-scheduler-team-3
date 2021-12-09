import React from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../Interfaces/Semester";

export const LOCAL_STORAGE_CURRENTSEMESTER = "scheduler_currentSemester";
export const LOCAL_STORAGE_SEMESTERLIST = "scheduler_semesterList";

export function ControlPanel({setShowAddModal, setShowRemoveModal, setEditing, 
    clearSingleSemester, clearAllSemesters, hardReset, currentSemester, setCurrentSemester, semesterList, setSemesterList}: 
    {setShowAddModal: (b:boolean)=>void, setShowRemoveModal: (b:boolean)=>void, setEditing: (b:boolean)=>void, 
    clearSingleSemester: VoidFunction, clearAllSemesters: VoidFunction, removeSemester: VoidFunction, hardReset: VoidFunction, 
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
            aria-label="clear" 
            variant="secondary" 
            className="m-3"
            onClick={()=>{
                clearSingleSemester();
            }}
        >Clear Courses</Button>
        <Button
            aria-label="clear all semesters" 
            variant="secondary" 
            className="m-3"
            onClick={()=>{
                clearAllSemesters();
            }}
        >Clear All Semesters</Button>
    </div>
    <div className="CenterText">
        <SaveData 
            currentSemester={ currentSemester } 
            semesterList={ semesterList }></SaveData>
        <LoadData 
            currentSemester={ currentSemester } setCurrentSemester={ setCurrentSemester } 
            semesterList={ semesterList } setSemesterList={ setSemesterList }></LoadData>
        <Button
            aria-label="reset"
            variant="outline-danger" 
            className="m-3" 
            onClick={() => {
                hardReset();
            }}
        >Reset to Default</Button>
    </div></div>;
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
