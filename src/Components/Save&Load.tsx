import React from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../Interfaces/Semester";

export const LOCAL_STORAGE_CURRENTSEMESTER = "scheduler_currentSemester";
export const LOCAL_STORAGE_SEMESTERLIST = "scheduler_semesterList";

export function SaveData({currentSemester, semesterList}: {currentSemester: Semester, semesterList: Semester[]}): JSX.Element {
    
    function hardSave() {
        localStorage.setItem(LOCAL_STORAGE_CURRENTSEMESTER, JSON.stringify(currentSemester));
        localStorage.setItem(LOCAL_STORAGE_SEMESTERLIST, JSON.stringify(semesterList));
    }
    
    return <Button
        variant="secondary" 
        className="me-3" 
        onClick={() => {
            hardSave();
        }}
    >Save Changes</Button>;
}

export function LoadData({setCurrentSemester, setSemesterList}: {setCurrentSemester: (s:Semester)=>void, setSemesterList: (s:Semester[])=>void}): JSX.Element {
    
    function hardLoad() {
        const scheduler_currentSemester = localStorage.getItem(LOCAL_STORAGE_CURRENTSEMESTER);
        const scheduler_semesterList = localStorage.getItem(LOCAL_STORAGE_SEMESTERLIST);
        
        if (scheduler_currentSemester !== null && scheduler_semesterList !== null) {
            const parsedCurrentSemester = JSON.parse(scheduler_currentSemester);
            const parsedSemesterList = JSON.parse(scheduler_semesterList);
            setCurrentSemester(parsedCurrentSemester);
            setSemesterList(parsedSemesterList);
        }  else {
            const parsedCurrentSemester = JSON.parse("[]");
            const parsedSemesterList = JSON.parse("[]");
            setCurrentSemester(parsedCurrentSemester);
            setSemesterList(parsedSemesterList);
        }
    }
    return <Button
        variant="secondary" 
        className="me-3" 
        onClick={() => {
            hardLoad(); 
        }}
    >Load Changes</Button>;
}