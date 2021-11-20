import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Course } from "../Interfaces/Course";
import { Semester } from "../Interfaces/Semester";
import { ControlPanelButtons } from "./ControlPanel";
import { AddCourseModal, AddSemesterModal, RemoveCourseModal, RemoveSemesterModal } from "./Modals&Forms";
import { CourseSchedulerMessage } from "./WebsiteText";
import { defaultSemesters } from "./Semesters/DefaultSemesters";
import { SemesterTable } from "./Semesters/SemesterTable";
//import PopUp from "./Components/PopUpInstructions";

export function CourseScheduler(): JSX.Element {
    const [semesterList, setSemesterList] = useState(defaultSemesters);
    const [currentSemester, setCurrentSemester] = useState<Semester>(semesterList[0]);
    const [editing, setEditing] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
    const [showAddSemesterModal, setShowAddSemesterModal] = useState<boolean>(false);

    /*
    const [isOpen, setIsOpen] = useState(false);
    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };
    */

    function hardReset() {
        setSemesterList(defaultSemesters);
        setCurrentSemester({title: defaultSemesters[0].title, courses: defaultSemesters[0].courses});
    }


    function removeSemester() {
        const newSemesterList = semesterList.filter(sem => sem !== currentSemester);
        setSemesterList(newSemesterList);
        setCurrentSemester(newSemesterList[0]);
    }

    function addSemester(newSemester: string) {
        setSemesterList([...semesterList, {title: newSemester, courses: []}]);
    }


    function clearSemester() {
        setCurrentSemester({title: currentSemester.title, courses: currentSemester.courses.filter(COURSES => !COURSES.code)});
    }

    function addCourse(newCourse: Course): void {
        setCurrentSemester({title: currentSemester.title, courses: [...currentSemester.courses, newCourse]});
    }

    function removeCourse(removeCode: string): void {
        setCurrentSemester({title: currentSemester.title, courses: currentSemester.courses.filter(course => course.code != removeCode)});
    }
    
    return <div>
        <CourseSchedulerMessage></CourseSchedulerMessage>
        <div className="CenterText">
            <DropdownButton id="dropdown-basic-button" title="Semesters" className="m-3">
                {semesterList.map(semi => {
                    return (
                        <Dropdown.Item onClick={() => setCurrentSemester(semi)} key={semi.title}>{semi.title}</Dropdown.Item>
                    );
                })}
            </DropdownButton></div>
        <div className="CenterText">
            <AddSemesterModal 
                addSemester={addSemester} showAddSemesterModal={showAddSemesterModal} setShowAddSemesterModal={setShowAddSemesterModal}/>
            <RemoveSemesterModal 
                removeSemester={removeSemester}/></div>
        <SemesterTable 
            editing={editing} setEditing={setEditing} 
            currentSemester={currentSemester} setCurrentSemester={setCurrentSemester}></SemesterTable>
        <ControlPanelButtons 
            setShowAddModal={ setShowAddModal } setShowRemoveModal={ setShowRemoveModal } 
            setEditing={ setEditing } clearSemester={ clearSemester } 
            removeSemester={ removeSemester } 
            hardReset={ hardReset }
            currentSemester={ currentSemester } setCurrentSemester={ setCurrentSemester }
            semesterList={ semesterList } setSemesterList={ setSemesterList }></ControlPanelButtons>
        <AddCourseModal 
            showAddModal={ showAddModal } setShowAddModal={ setShowAddModal } 
            addCourse={ addCourse }></AddCourseModal>
        <RemoveCourseModal 
            showRemoveModal={ showRemoveModal } setShowRemoveModal={ setShowRemoveModal } 
            removeCourse={ removeCourse } 
            currentSemester= { currentSemester }></RemoveCourseModal>

    </div>;
}